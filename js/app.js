/* Xahau Box page. Static: no server, no analytics. Reads the public ledger, builds unsigned transactions. */
(() => {
'use strict';
const C = window.BOX_CONFIG, L = window.BoxLib, I = window.BOX_I18N;
const $ = id => document.getElementById(id);
const Z64 = '0'.repeat(64);
const KEY = 'xbox.v1';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
const LANGS = ['en', 'es', 'fr', 'ru', 'de', 'zh', 'ja'];
function browserLang() { for (const l of (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''])) { const c = String(l).slice(0, 2).toLowerCase(); if (LANGS.includes(c)) return c; } return 'en'; }
const S = Object.assign({ net: C.DEFAULT_NETWORK, lang: browserLang(), account: null, history: [], pending: null, back: null, parked: {} }, load());
if (!S.parked || typeof S.parked !== 'object') S.parked = {};
if (!C.NETWORKS[S.net]) S.net = C.DEFAULT_NETWORK;
const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ net: S.net, lang: S.lang, account: S.account, history: S.history.slice(-200), pending: S.pending, back: S.back || null, parked: S.parked })); } catch {} };
if (!LANGS.includes(S.lang)) S.lang = 'en';
/* Box links saved on this device (localStorage, never sent anywhere). Written BEFORE the signature is requested,
   so a reload, a new tab or a lost Xaman return can always show the link/QR again. Key: network:hook:VC. */
const VKEY = 'xbox.links.v1';
const vaultAll = () => { try { const v = JSON.parse(localStorage.getItem(VKEY)); return v && typeof v === 'object' ? v : {}; } catch { return {}; } };
const vid = b => b.net + ':' + b.h + ':' + b.vc;
function vaultPut(b) { const v = vaultAll(); v[vid(b)] = Object.assign({}, v[vid(b)] || {}, b); try { localStorage.setItem(VKEY, JSON.stringify(v)); return true; } catch { return false; } }
function vaultGet(net, hk, vc) { return vaultAll()[net + ':' + hk + ':' + vc] || null; }
function vaultDrop(ids) { if (!ids.length) return; const v = vaultAll(); ids.forEach(i => delete v[i]); try { localStorage.setItem(VKEY, JSON.stringify(v)); } catch {} }
// links made by the older page version only lived in S.pending: keep them
if (S.pending && S.pending.op === 'pack' && S.pending.box && S.pending.box.vc) vaultPut(S.pending.box);
if (S.pending && S.pending.op === 'remit' && S.pending.back && S.pending.back.box) vaultPut(S.pending.back.box);
const t = k => (I[S.lang] && I[S.lang][k]) || I.en[k] || k;
const NET = () => C.NETWORKS[S.net];
const short = a => a ? a.slice(0, 6) + '…' + a.slice(-4) : '';
const hexStr = s => Array.from(new TextEncoder().encode(s), b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
const hexToText = h => { try { return new TextDecoder('utf-8', { fatal: true }).decode(L.hex.fromHex(h)); } catch { return null; } };
const printable = s => s != null && /^[\x20-\x7E\u00A0-\uFFFF\n\r\t]*$/.test(s);
const dropsToXah = d => { d = BigInt(d); const i = d / 1000000n, f = (d % 1000000n).toString().padStart(6, '0').replace(/0+$/, ''); return i.toString() + (f ? '.' + f : ''); };
const xahToDrops = s => { s = String(s || '').trim().replace(',', '.'); if (s === '') return 0n; if (!/^\d{1,11}(\.\d{1,6})?$/.test(s)) return null; const [i, f = ''] = s.split('.'); return BigInt(i) * 1000000n + BigInt((f + '000000').slice(0, 6)); };
const isZero = h => !h || /^0*$/.test(h);
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ---------- tiny DOM helper (text only, never innerHTML with ledger data) ---------- */
function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v; else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) if (c != null && c !== false) e.append(c instanceof Node ? c : document.createTextNode(String(c)));
  return e;
}
const row = (k, v, cls) => h('div', { class: 'row' }, h('span', null, k), h('b', { class: cls || null }, v));
function toast(msg) { const e = $('toast'); e.textContent = msg; e.classList.remove('hide'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.add('hide'), 2600); }
async function copy(text) { try { await navigator.clipboard.writeText(text); toast(t('copied')); } catch { const ta = h('textarea', null, text); document.body.append(ta); ta.select(); try { document.execCommand('copy'); toast(t('copied')); } catch { toast(t('copyFailed')); } ta.remove(); } }
const errSet = (id, msg) => { $(id).textContent = msg || ''; };

/* ---------- ledger (read-only JSON-RPC) ---------- */
async function rpc(method, params) {
  const r = await fetch(NET().rpc, { method: 'POST', headers: { 'content-type': 'text/plain' }, body: JSON.stringify({ method, params: [params || {}] }) });
  if (!r.ok) throw new Error('RPC ' + r.status);
  const j = await r.json(); return j.result || {};
}
async function accountInfo(a) { const r = await rpc('account_info', { account: a, ledger_index: 'validated' }); return r.account_data || null; }
async function accountObjects(a, type) {
  let out = [], marker;
  for (let i = 0; i < 20; i++) { const r = await rpc('account_objects', Object.assign({ account: a, ledger_index: 'validated', limit: 400 }, type ? { type } : {}, marker ? { marker } : {})); out = out.concat(r.account_objects || []); marker = r.marker; if (!marker) break; }
  return out;
}
async function nsEntries(a) {
  let out = [], marker;
  for (let i = 0; i < 20; i++) { const r = await rpc('account_namespace', Object.assign({ account: a, namespace_id: C.HOOK_NAMESPACE, ledger_index: 'validated' }, marker ? { marker } : {})); out = out.concat(r.namespace_entries || []); marker = r.marker; if (!marker) break; }
  return out;
}
async function hookState(a, key) { const r = await rpc('ledger_entry', { hook_state: { account: a, key, namespace_id: C.HOOK_NAMESPACE }, ledger_index: 'validated' }); return r.node ? r.node.HookStateData : null; }
async function uriToken(id) { const r = await rpc('ledger_entry', { uri_token: id, ledger_index: 'validated' }); return r.node || null; }
async function currentLedger() { const r = await rpc('ledger_current', {}); return r.ledger_current_index; }
async function reserves() { const r = await rpc('server_info', {}); const v = (r.info && r.info.validated_ledger) || {}; return { base: BigInt(Math.round((v.reserve_base_xrp || 1) * 1e6)), inc: BigInt(Math.round((v.reserve_inc_xrp || 0.2) * 1e6)) }; }
/* Box creator from the ledger: the box entry's PreviousTxnID must be the tx that CREATED this exact HookState key
   (CreatedNode HookState, same key) on the hook account; its signer is the creator. Otherwise: unknown (null). */
async function boxCreator(hk, key) {
  try {
    const K = String(key).toUpperCase();
    const r = await rpc('ledger_entry', { hook_state: { account: hk, key, namespace_id: C.HOOK_NAMESPACE }, ledger_index: 'validated' });
    let id = r.node && r.node.PreviousTxnID;
    for (let i = 0; id && i < 6; i++) { // follow this box entry's own history back to the tx that created it
      const tx = await getTx(id); if (!tx || !tx.validated) return null;
      const m = tx.meta || tx.metaData || {}; let next = null;
      for (const n of m.AffectedNodes || []) {
        const c = n.CreatedNode, md = n.ModifiedNode;
        if (c && c.LedgerEntryType === 'HookState' && String((c.NewFields || {}).HookStateKey || '').toUpperCase() === K)
          return m.TransactionResult === 'tesSUCCESS' && L.isAddress(tx.Account) ? tx.Account : null;
        if (md && md.LedgerEntryType === 'HookState' && String((md.FinalFields || {}).HookStateKey || '').toUpperCase() === K) next = md.PreviousTxnID;
      }
      id = next;
    }
  } catch {}
  return null;
}
const explorerAcc = a => NET().explorerTx.replace(/\/tx\/$/, '/account/') + a;
function creatorRow(a) {
  return h('div', { class: 'creator' }, h('div', { class: 'row' }, h('span', null, t('boxBy')),
    h('span', { class: 'crv' }, h('b', { class: 'mono' }, a.slice(0, 7) + '…' + a.slice(-5)),
      h('button', { class: 'mwb', type: 'button', title: t('copy'), 'aria-label': t('copy'), onclick: () => copy(a) }, mwCopyIco()))),
    h('p', { class: 'sm' }, t('boxByNote')));
}
const gcWarn = () => h('div', { class: 'card gcwarn' }, '⚠ ' + t('gcWarn'));
async function getTx(hash) { return rpc('tx', { transaction: hash }); }
function hookAnswers(tx) { const m = tx.meta || tx.metaData || {}; return (m.HookExecutions || []).map(x => hexToText((x.HookExecution || {}).HookReturnString || '') || '').filter(Boolean); }

const parseBox = d => d && d.length === 170 ? { tid: d.slice(0, 64), amt: d.slice(64, 80), exp: d.slice(80, 88), status: parseInt(d.slice(88, 90), 16), nonce: parseInt(d.slice(162, 170), 16) } : null;
const fill = (b, n) => b.repeat(n);
const K_META = fill('11', 32), K_AUD = fill('33', 32), K_OCK = fill('44', 32), K_NCK = fill('66', 32);

/* ---------- encrypted gift code (password variant; page only, the hook is not involved) ----------
   A code from another site (e.g. a gift card) is locked with a password in this browser and stored as the URI of a
   new URIToken: "tgsc1:" + base64url(salt[16] | iv[12] | AES-GCM ciphertext + tag[16]).
   Key = PBKDF2-SHA256(password, salt, 600 000 rounds) -> AES-256-GCM, additional data "tgsc1".
   The password is never stored, never put in a link/QR and never sent anywhere. Anyone with the token data AND the
   password can read the code: the password is the only protection. */
const GC = { PFX: 'tgsc1:', ITER: 600000, SALT: 16, IV: 12, TAG: 16, URI_MAX: 256, MIN_PW: 12 };
GC.MAX = Math.floor((GC.URI_MAX - GC.PFX.length) * 3 / 4) - GC.SALT - GC.IV - GC.TAG; // 143 bytes of UTF-8
const GC_AAD = new TextEncoder().encode('tgsc1');
const u8b64u = u => { let s = ''; for (const x of u) s += String.fromCharCode(x); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const b64uU8 = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), c => c.charCodeAt(0));
const gcNorm = s => String(s == null ? '' : s).normalize('NFC');
const gcPwNorm = s => gcNorm(s).trim();
const gcBytes = s => new TextEncoder().encode(gcNorm(s)).length;
const gcIs = text => typeof text === 'string' && text.startsWith(GC.PFX) && /^[A-Za-z0-9_-]+$/.test(text.slice(GC.PFX.length));
const gcTok = tok => gcIs(hexToText((tok && tok.URI) || ''));
async function gcKey(pw, salt) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(gcPwNorm(pw)), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: GC.ITER }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
async function gcEncrypt(code, pw) {
  const pt = new TextEncoder().encode(gcNorm(code));
  if (!pt.length || pt.length > GC.MAX) throw new Error('size');
  if (gcPwNorm(pw).length < GC.MIN_PW) throw new Error('password');
  const salt = crypto.getRandomValues(new Uint8Array(GC.SALT)), iv = crypto.getRandomValues(new Uint8Array(GC.IV));
  const key = await gcKey(pw, salt);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: GC_AAD }, key, pt));
  const raw = new Uint8Array(GC.SALT + GC.IV + ct.length); raw.set(salt); raw.set(iv, GC.SALT); raw.set(ct, GC.SALT + GC.IV);
  const uri = GC.PFX + u8b64u(raw);
  // self-check before anything is minted: it must fit and it must unlock again
  const back = new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv, additionalData: GC_AAD }, key, ct));
  if (back !== gcNorm(code) || new TextEncoder().encode(uri).length > GC.URI_MAX) throw new Error('selfcheck');
  return uri;
}
async function gcDecrypt(uriText, pw) {
  if (!gcIs(uriText)) throw new Error('format');
  const raw = b64uU8(uriText.slice(GC.PFX.length));
  if (raw.length < GC.SALT + GC.IV + GC.TAG + 1) throw new Error('format');
  const key = await gcKey(pw, raw.slice(0, GC.SALT));
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: raw.slice(GC.SALT, GC.SALT + GC.IV), additionalData: GC_AAD }, key, raw.slice(GC.SALT + GC.IV));
  return new TextDecoder('utf-8', { fatal: true }).decode(pt);
}
// 20 random characters (100 bits) in groups of 4, no look-alike characters (l/1, o/0)
function gcGenPw() {
  const A = 'abcdefghijkmnpqrstuvwxyz23456789', r = crypto.getRandomValues(new Uint8Array(20));
  return Array.from(r, x => A[x & 31]).join('').match(/.{4}/g).join('-');
}
/* "Show code": asks for the password, unlocks here, shows the code with Copy. Password field is cleared right after. */
function gcReveal(uriText) {
  const wrap = h('div', { class: 'gcrev', onclick: e => e.stopPropagation() });
  const btn = h('button', { class: 'btn y gcshow', type: 'button' }, '🔑 ' + t('gcShow'));
  const pw = h('input', { class: 'inp', type: 'password', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: t('gcPwEnter') });
  const go = h('button', { class: 'btn w', type: 'button' }, t('gcDecrypt'));
  const err = h('p', { class: 'err-line' });
  const form = h('div', { class: 'gcin hide' }, pw, go, err, h('p', { class: 'sm' }, t('gcLocal')));
  const out = h('div', { class: 'gcout hide' });
  btn.onclick = () => { form.classList.toggle('hide'); if (!form.classList.contains('hide')) pw.focus(); };
  const run = async () => {
    err.textContent = ''; if (!pw.value) { err.textContent = t('gcPwNeed'); return; }
    go.disabled = true; go.textContent = t('gcWorking');
    try {
      const code = await gcDecrypt(uriText, pw.value);
      pw.value = ''; form.classList.add('hide'); btn.classList.add('hide'); out.textContent = '';
      out.append(h('div', { class: 'lbl' }, t('giftCode')), h('div', { class: 'gccode mono' }, code),
        h('div', { class: 'btn2' }, h('button', { class: 'btn w', type: 'button', onclick: () => copy(code) }, t('copy')),
          h('button', { class: 'btn o', type: 'button', onclick: () => { out.textContent = ''; out.classList.add('hide'); btn.classList.remove('hide'); } }, t('gcHide'))));
      out.classList.remove('hide');
    } catch { err.textContent = t('gcWrong'); }
    finally { go.disabled = false; go.textContent = t('gcDecrypt'); }
  };
  go.onclick = run; pw.onkeydown = e => { if (e.key === 'Enter') run(); };
  wrap.append(gcWarn(), btn, form, out);
  return wrap;
}

/* ---------- tokens: shown the way Xahau Cards, Xahau Vault and the explorer show them ----------
   Name + attributes: the token's own on-ledger metadata (Remarks "schema" + "meta.N", std xahau-nft-remark/v1).
   Picture: only from the project that issued the token, nothing else is ever requested:
     Xahau Cards   -> https://xahaucards.com/card/<id>.webp (the "image" in its metadata, strictly checked)
     Odin's Eyes   -> the WebP stored in the token itself (Remarks img.N), shown only if its sha256 matches the schema
     Xahmoeba      -> https://api.xahmoeba.com (their public API: name + picture), testnet species only
     our key token -> img/key.jpg from this page
     anything else -> ◆ and the name, no network request. */
const ISS = { CARDS: 'rCardMi9ZsS5dBMrtZtaDeZchvW64W38c', RAVEN: 'rodinGM9xiKq7rDDnLPyieREkqGJ6zKyb', MOEBA: 'rMmx5nHzoVJAoMTFWkgCCMrZryTaD682tr' };
const CARD_IMG = /^https:\/\/xahaucards\.com\/card\/[A-Za-z0-9-]+\.webp$/;
const MOEBA_API = 'https://api.xahmoeba.com/v1/moebas/';
const viewCache = new Map();
const clean = (v, n) => { if (typeof v !== 'string' || !printable(v) || !v.trim()) return null; const x = v.trim().replace(/[\n\r\t]+/g, ' '), m = n || 80; return x.length > m ? x.slice(0, m - 1).trimEnd() + '…' : x; };
function remarkMap(tok) {
  const m = new Map();
  for (const x of tok.Remarks || []) { const r = x.Remark || {}; const name = hexToText(r.RemarkName || ''); if (name) m.set(name, { hex: r.RemarkValue || '', text: hexToText(r.RemarkValue || ''), immutable: !!((r.Flags || 0) & 1) }); }
  return m;
}
function remarkMeta(rm) {
  try {
    const sc = rm.get('schema'); if (!sc || !sc.text) return null;
    const schema = JSON.parse(sc.text); if (!schema || schema.std !== 'xahau-nft-remark/v1') return null;
    const parts = schema.meta && schema.meta.parts; if (!Number.isInteger(parts) || parts < 1 || parts > 64) return { schema, meta: null };
    let hx = ''; for (let i = 0; i < parts; i++) { const r = rm.get('meta.' + i); if (!r) return { schema, meta: null }; hx += r.hex; }
    const txt = hexToText(hx); const meta = txt ? JSON.parse(txt) : null;
    return { schema, meta: meta && typeof meta === 'object' ? meta : null };
  } catch { return null; }
}
const attrFull = a => Array.isArray(a) ? a.filter(x => x && x.trait_type != null && x.value != null).map(x => [clean(String(x.trait_type), 80) || '?', clean(typeof x.value === 'object' ? JSON.stringify(x.value) : String(x.value), 400) || '…']) : [];
const attrList = a => Array.isArray(a) ? a.filter(x => x && clean(String(x.trait_type ?? ''), 40) && x.value != null).map(x => clean(String(x.trait_type), 40) + ': ' + (clean(String(x.value), 60) || '…')) : [];
async function onChainWebp(tok, rm, schema) {
  const s = schema && schema.img; const sc = rm.get('schema');
  if (!sc || !sc.immutable || !s || s.mime !== 'image/webp' || !Number.isInteger(s.parts) || s.parts < 1 || s.parts > 64 || !/^[0-9A-Fa-f]{64}$/.test(s.sha256 || '')) return null;
  let hx = ''; for (let i = 0; i < s.parts; i++) { const r = rm.get('img.' + i); if (!r || !/^[0-9A-Fa-f]*$/.test(r.hex)) return null; hx += r.hex; }
  const bytes = L.hex.fromHex(hx);
  if (bytes.length < 16 || hexToText(L.hex.toHex(bytes.slice(0, 4))) !== 'RIFF' || hexToText(L.hex.toHex(bytes.slice(8, 12))) !== 'WEBP') return null;
  const dg = L.hex.toHex(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))).toUpperCase();
  if (dg !== s.sha256.toUpperCase()) return null;
  return URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
}
// polite to their API: at most 2 requests at a time, and only for cards that are on screen
const moebaQ = { n: 0, q: [] };
function moebaSlot() { return new Promise(r => { if (moebaQ.n < 2) { moebaQ.n++; r(); } else moebaQ.q.push(r); }); }
function moebaDone() { const nx = moebaQ.q.shift(); if (nx) nx(); else moebaQ.n--; }
async function moebaApi(id) {
  await moebaSlot(); try { return await moebaFetch(id); } finally { moebaDone(); }
}
async function moebaFetch(id) {
  const ac = new AbortController(); const tm = setTimeout(() => ac.abort(), 6000);
  try {
    const r = await fetch(MOEBA_API + id + '/metadata.json', { signal: ac.signal, credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'force-cache' });
    if (!r.ok) return null; const j = await r.json(); return j && typeof j === 'object' ? j : null;
  } catch { return null; } finally { clearTimeout(tm); }
}
function keyTokenId(tok) { const u = hexToText(tok.URI || ''); const km = u && /\/img\/key\.jpg\?k=([0-9a-f]{16})$/.exec(u); return km ? km[1] : null; }
function uriLabel(tok) { const u = hexToText(tok.URI || ''); if (gcIs(u)) return '🔒 ' + t('gcCard'); return u && printable(u) ? u : (tok.URI || '').slice(0, 16) + '…'; }
function tokenView(tok) {
  const ck = S.net + ':' + tok.index;
  if (viewCache.has(ck)) return viewCache.get(ck);
  const p = (async () => {
    const id = String(tok.index || '').toUpperCase(); const rm = remarkMap(tok); const rmeta = remarkMeta(rm); const meta = rmeta && rmeta.meta;
    const v = { name: null, img: null, attrs: [], desc: null, remarks: [] };
    const k = keyTokenId(tok);
    if (k) { v.name = t('tokenKind') + ' · ' + k.slice(0, 6); v.img = 'img/key.jpg?v=3'; return v; }
    if (meta) { v.name = clean(meta.name); v.desc = clean(meta.desc || meta.description, 160); v.descFull = clean(meta.desc || meta.description, 2000); v.attrs = attrList(meta.attributes); v.full = attrFull(meta.attributes); }
    else v.remarks = [...rm].filter(([, r]) => clean(r.text, 80)).slice(0, 4).map(([n, r]) => (clean(n, 30) + ': ' + clean(r.text, 80)));
    if (tok.Issuer === ISS.CARDS && meta && typeof meta.image === 'string' && CARD_IMG.test(meta.image)) v.img = meta.image;
    else if (tok.Issuer === ISS.RAVEN && rmeta) v.img = await onChainWebp(tok, rm, rmeta.schema).catch(() => null);
    else if (tok.Issuer === ISS.MOEBA && S.net === 'testnet' && /^[0-9A-F]{64}$/.test(id)) {
      const j = await moebaApi(id);
      if (!j) setTimeout(() => viewCache.delete(ck), 30000); // try again later, e.g. after a rate limit
      if (j) { v.name = clean(j.name) || v.name; v.desc = clean(j.description, 160); v.descFull = clean(j.description, 2000); v.attrs = attrList(j.attributes); v.full = attrFull(j.attributes); v.remarks = []; v.img = MOEBA_API + id + '.png?size=400'; }
    }
    if (!v.name) v.name = uriLabel(tok);
    if (!v.full) v.full = meta ? [] : [...rm].filter(([, r]) => clean(r.text, 400)).map(([n, r]) => [clean(n, 60), clean(r.text, 400)]);
    return v;
  })();
  viewCache.set(ck, p); return p;
}
function tokenCard(tok, opts) {
  const o = opts || {};
  const gc = gcTok(tok);
  const img = h('div', { class: 'timg' }, h('span', null, gc ? '🎁' : '◆'));
  const title = h('b', null, uriLabel(tok)); const extra = h('div', { class: 'rem' });
  const card = h('div', { class: 'tok' + (gc ? ' gc' : '') + (o.big ? ' big' : '') + (o.disabled ? ' dis' : '') + (o.selected ? ' sel' : ''), role: o.onclick ? 'button' : null, tabindex: o.onclick && !o.disabled ? '0' : null, onclick: o.disabled ? null : o.onclick },
    img,
    h('div', { class: 'tinfo' },
      title, newIds.has(tok.index) ? h('span', { class: 'new' }, t('newTag')) : null,
      h('span', { class: 'sm mono' }, short(tok.index)),
      extra,
      o.disabled ? h('span', { class: 'why' }, o.disabled) : null));
  if (!gc) card.append(h('button', { type: 'button', class: 'tinfo-btn', title: t('tokInfo'), 'aria-label': t('tokInfo'), onclick: e => { e.stopPropagation(); e.preventDefault(); tokenDetails(tok); } }, 'ⓘ'));
  if (gc) {
    extra.append(h('span', null, t('gcCardSub')));
    if (o.big && !o.reveal) extra.append(h('span', { class: 'desc' }, t('gcAfterOpen')));
    if (o.reveal) card.append(gcReveal(hexToText(tok.URI)));
    return card;
  }
  const io = window.IntersectionObserver ? new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); fillCard(); } }, { rootMargin: '400px' }) : null;
  if (io) io.observe(card); else fillCard();
  function fillCard() { tokenView(tok).then(v => {
    title.textContent = v.name;
    const lines = (v.attrs.length ? v.attrs : v.remarks).slice(0, o.big ? 12 : 3);
    if (o.big && v.desc) extra.append(h('span', { class: 'desc' }, v.desc));
    lines.forEach(x => extra.append(h('span', null, x)));
    if (!v.img) return;
    const im = h('img', { alt: v.name, referrerpolicy: 'no-referrer', decoding: 'async' }); im.onload = () => { img.textContent = ''; img.append(im); img.classList.add('has'); }; im.src = v.img;
  }); }
  return card;
}

const tokExplorer = id => (S.net === 'testnet' ? 'https://test.xahauexplorer.com/nft/' : 'https://xahauexplorer.com/nft/') + id;
const winBase = () => S.net === 'testnet' ? 'https://testnet.xahauwin.com/' : 'https://xahauwin.com/';
const exA = (href, label, ico) => h('a', { class: 'btn o exbtn', href, target: '_blank', rel: 'noopener noreferrer' }, h('img', { class: 'exico', src: ico, alt: '' }), h('span', null, label));
const exBtns = (a, b) => h('div', { class: 'exbtns' }, exA(a, 'Xahau Explorer', 'img/pj-xahauexplorer.png'), exA(b, 'XahauWin', 'img/pj-xahauwin.png'));
const exTok = id => exBtns(tokExplorer(id), winBase() + 'nft/' + id);
const exTx = id => exBtns(NET().explorerTx + id, winBase() + 'tx/' + id);
function tokenDetails(tok) {
  const id = String(tok.index || '').toUpperCase();
  const close = () => { ov.remove(); document.removeEventListener('keydown', esc); };
  const esc = e => { if (e.key === 'Escape') close(); };
  const pic = h('div', { class: 'tdimg' }, h('span', null, '◆'));
  const name = h('h3', null, uriLabel(tok)); const body = h('div', { class: 'tdbody' });
  const kv = (k, v, cp, link) => h('div', { class: 'tdrow' }, h('span', null, k), h('b', { class: 'mono' }, v), cp ? h('button', { type: 'button', class: 'tdcp', onclick: () => copy(cp) }, '⧉') : null);
  const uri = hexToText(tok.URI || '');
  const sheet = h('div', { class: 'tdsheet', role: 'dialog', 'aria-modal': 'true', onclick: e => e.stopPropagation() },
    h('button', { type: 'button', class: 'tdx', 'aria-label': t('tokClose'), onclick: close }, '✕'),
    pic, name, body,
    h('div', { class: 'tdmeta' },
      kv(t('tokId'), id, id, tokExplorer(id)),
      kv(t('tokIssuer'), short(tok.Issuer || ''), tok.Issuer || null, tok.Issuer ? explorerAcc(tok.Issuer) : null),
      kv('URI', uri && printable(uri) ? uri : (tok.URI || '—'), null, null)),
    exTok(id));
  const ov = h('div', { class: 'tdov', onclick: close }, sheet);
  document.body.append(ov); document.addEventListener('keydown', esc);
  tokenView(tok).then(v => {
    name.textContent = v.name;
    if (v.descFull) body.append(h('p', { class: 'tddesc' }, v.descFull));
    if (v.full && v.full.length) body.append(h('div', { class: 'tdattrs' }, v.full.map(([k, x]) => h('div', { class: 'tdattr' }, h('span', null, k), h('b', null, x)))));
    else body.append(h('p', { class: 'sm' }, t('tokNoProps')));
    if (v.img) { const im = h('img', { alt: v.name, referrerpolicy: 'no-referrer', decoding: 'async' }); im.onload = () => { pic.textContent = ''; pic.append(im); pic.classList.add('has'); }; im.src = v.img; }
  });
}

/* ---------- transactions (same shapes as the manual v14 tests) ---------- */
const P = o => Object.entries(o).map(([k, v]) => ({ HookParameter: { HookParameterName: hexStr(k), HookParameterValue: v } }));
const base = (type, account) => ({ TransactionType: type, Account: account, NetworkID: NET().networkId });
const auditTx = hk => Object.assign(base('Invoke', hk), { HookParameters: P({ CMD: hexStr('AUDIT') }) });
function packTx(hk, b) { const p = { CMD: hexStr('PACK'), VC: b.vc }; if (b.ktid) { p.MODE = '01'; p.KTID = b.ktid; } p.TID = b.tid || Z64; p.AMT = b.amt; if (b.exp && b.exp !== '00000000') p.EXP = b.exp; return Object.assign(base('Invoke', hk), { HookParameters: P(p) }); }
const withDest = (tx, opener, hk) => (opener === hk ? tx : Object.assign(tx, { Destination: hk }));
const claimKeyTx = (opener, hk, pk, sig) => Object.assign(withDest(base('Invoke', opener), opener, hk), { HookParameters: P({ CMD: hexStr('CLAIM'), PK: pk, SIG: sig }) });
const claimTokTx = (opener, hk, vc) => Object.assign(withDest(base('Invoke', opener), opener, hk), { HookParameters: P({ CMD: hexStr('CLAIM'), VC: vc }) });
const openTx = (hk, vc) => Object.assign(base('Invoke', hk), { HookParameters: P({ CMD: hexStr('OPEN'), VC: vc }) });
const remitTx = (from, to, id) => Object.assign(base('Remit', from), { Destination: to, URITokenIDs: [id] });

/* ---------- QR format: "tgs1:" + base64url(JSON) ---------- */
const b64u = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64u = s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4))));
const makeQr = o => 'tgs1:' + b64u(JSON.stringify(o));
function parseQr(text) {
  const m = String(text || '').match(/tgs1:([A-Za-z0-9_-]+)/); if (!m) return null;
  let o; try { o = JSON.parse(unb64u(m[1])); } catch { return null; }
  if (!o || o.v !== 14 || !L.isAddress(o.h)) return null;
  if (o.b) { try { o.pub = L.pubFromPriv(o.b); o.vc = L.vcFromPub(o.pub); o.kind = 'bearer'; } catch { return null; } }
  else if (o.p && o.s && L.isAddress(o.a)) { if (!/^[0-9A-F]{66}$/i.test(o.p)) return null; o.vc = L.vcFromPub(o.p); o.kind = 'named'; }
  else if (/^[0-9A-F]{64}$/i.test(o.c || '')) { o.vc = o.c.toUpperCase(); o.kind = 'token'; }
  else return null;
  o.raw = 'tgs1:' + m[1]; return o;
}
const appUrl = () => C.APP_URL || (location.origin + location.pathname);
const qrLink = q => appUrl() + '#' + q;

/* ---------- screens ---------- */
const SCREENS = ['home', 'account', 'create', 'sign', 'done', 'open', 'opened', 'sent', 'settings', 'mybx'];
let current = 'home', afterAccount = null;
/* Back: the in-page "Back" button and the phone's / browser's Back do the same thing (goBack).
   History holds at most one extra entry above "#home" ({xb:1}): leaving home adds it, moving between
   screens only replaces it, and the phone's Back pops it -> popstate -> goBack(), which adds it again
   unless the step before is home. So Back on home leaves the page as usual. Nothing is cleared:
   typed values stay in the form, box links (xbox.links.v1) and the unfinished box stay in localStorage. */
let accountFrom = 'home', doneFrom = 'home', popQuiet = false;
const armed = () => !!(history.state && history.state.xb);
/* A box being made / just made / opened belongs to the wallet that signs it. Switching wallets (or signing out) must never
   leave the previous wallet's box, link or QR on screen: its unfinished step is parked under its own address and comes
   back only when that wallet is active again. */
const OWN_SCREENS = ['create', 'sign', 'done', 'sent', 'opened'];
let screenOwner = null;
function pOwner(p) { if (!p) return null; if (p.op === 'pack') return p.box && p.box.h || null; if (p.op === 'open') return p.h || null; return p.tx && p.tx.Account || null; }
function acctSwap() {
  const me = S.account ? S.account.address : null, p = S.pending, o = pOwner(p);
  if (p && o && o !== me) { S.parked[o] = p; S.pending = null; }
  if (!S.pending && me && S.parked[me]) { S.pending = S.parked[me]; delete S.parked[me]; }
  save();
  if (OWN_SCREENS.includes(current) && screenOwner && screenOwner !== me) { doneLink = ''; screenOwner = null; createFor = null; show('home'); }
}
function show(name) {
  if (current && current !== name) { const o = $('s-' + current); if (o) o.querySelectorAll('details[open]').forEach(d => { d.open = false; }); }
  if (name === 'account' && current !== 'account') accountFrom = current;
  if (OWN_SCREENS.includes(name)) screenOwner = S.account ? S.account.address : null;
  current = name;
  for (const s of SCREENS) $('s-' + s).classList.toggle('on', s === name);
  $('backBar').classList.toggle('hide', name === 'home');
  $('sfCols').classList.toggle('hide', name !== 'home'); if ($('donBox')) { $('donBox').classList.toggle('hide', name !== 'home'); if (name === 'home') donPaint(); }
  if (name === 'home') setTimeout(() => loadStats(), 0);
  if (name === 'home') setTimeout(inboxBadge, 0);
  window.scrollTo(0, 0);
  try {
    if (name === 'home') {
      if (armed()) { popQuiet = true; history.back(); } // drop the extra entry: the one below is "#home"
      else if (location.hash !== '#home') history.replaceState(null, '', '#home');
    } else if (armed()) { if (location.hash !== '#' + name) history.replaceState({ xb: 1 }, '', '#' + name); }
    else { history.replaceState(null, '', '#home'); history.pushState({ xb: 1 }, '', '#' + name); }
  } catch { if (location.hash !== '#' + name) history.replaceState(null, '', '#' + name); }
}
/* where Back goes from each screen (home when there is no step before) */
function goBack() {
  const p = S.pending;
  switch (current) {
    case 'account': {
      const to = accountFrom; afterAccount = null; S.back = null; save();
      if (to === 'sign' && p) return enterSign();
      if (to === 'open') return show(to);
      if (to === 'settings') return enterSettings();
      if ((to === 'create' || to === 'boxes' || to === 'codes' || to === 'inbox' || to === 'mybx') && S.account) return route(to);
      return show('home');
    }
    case 'sign':
      if (p && p.st && p.st.main && ['signed', 'ok'].includes(p.st.main.st)) { if (p.st.main.st === 'ok') { stepAdvance(p); return; } return enterSign(); }
      if (p && (p.op === 'mint' || p.op === 'gmint')) { resumeMint(true).then(ok => { if (!ok) enterCreate(); }); return; }
      if (p && p.op === 'pack' && p.shown) return finishPack();
      if (p && p.op === 'pack') { const who = p.box.h; return acct && acct.address === who ? show('create') : enterCreate(); }
      if (p && p.op === 'claim' && p.from === 'inbox') { S.pending = null; save(); return enterInbox(); }
      if (p && p.op === 'claim') return $('boxView').childElementCount ? show('open') : enterOpen();
      if (p && p.op === 'open') return enterBoxes();
      if (p && p.op === 'remit' && p.back && p.back.box) { uriToken(p.tx.URITokenIDs[0]).catch(() => null).then(tok => { if (tok && tok.Owner === p.tx.Destination) p.back.box.sentTo = p.tx.Destination; S.pending = p.back; save(); finishPack(); }); return; }
      if (p && p.op === 'remit' && p.from === 'boxes') { S.pending = null; save(); return enterBoxes(); }
      if (p && p.op === 'remit' && p.from === 'inbox') { S.pending = null; save(); return enterInbox(); }
      return show('home');
    case 'done': return doneFrom === 'boxes' ? enterBoxes() : show('home');
    case 'sent': return sentFrom === 'inbox' ? enterInbox() : enterBoxes();
    case 'create': { const st = wSteps(), i = st.indexOf(wStep); if (i > 0) { wShow(st[i - 1]); window.scrollTo(0, 0); return; } return show('home'); }
    default: return show('home');
  }
}
window.addEventListener('popstate', e => {
  if (e.state && e.state.xb) return; // browser Forward: the hashchange handler shows that screen
  if (popQuiet) { popQuiet = false; return; }
  if (current !== 'home') goBack();
});
function applyLang() {
  setTimeout(() => { try { if (current === 'home') donPaint(); } catch {} }, 0);
  document.documentElement.lang = S.lang;
  document.querySelectorAll('[data-t]').forEach(e => { e.textContent = t(e.dataset.t); });
  document.querySelectorAll('[data-tp]').forEach(e => { e.placeholder = t(e.dataset.tp); });
  $('netBtn').title = t('netSwitch');
  document.querySelectorAll('#langList [data-lang]').forEach(b => { const on = b.dataset.lang === S.lang; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
  if (!C.XAMAN_API_KEY) $('xamanNote').textContent = t('xamanOff');
  if ($('ledgerDot')) renderLive(false);
  renderAcct();
}
function applyNet() { $('netBtn').textContent = NET().label + ' ⇄'; $('netBtn').classList.toggle('main', S.net === 'mainnet'); }
/* Header: signed out -> "Sign in with Xaman"; signed in -> short address + "Sign out". */
function renderAcct() {
  const tx = $('acctText'), b = $('acctBtn'); tx.textContent = '';
  if (!S.account) {
    tx.textContent = ''; $('acctVia').textContent = '';
    b.textContent = t('signInShort'); b.className = 'chip acctbtn in';
    $('setOutTx').textContent = ''; $('setOutBtn').textContent = t('signInShort'); $('setOutBtn').className = 'btn y';
  } else {
    tx.append(h('b', { class: 'mono' }, short(S.account.address)));
    $('acctVia').textContent = (S.account.via === 'xaman' ? 'Xaman' : t('addrOnlyTag')) + ' · ';
    b.textContent = ''; b.className = 'chip acctbtn hide';
    $('setOutTx').textContent = short(S.account.address) + ' · ' + (S.account.via === 'xaman' ? 'Xaman' : t('addrOnlyTag')) + ' · ' + NET().label; $('setOutBtn').textContent = t('signOut'); $('setOutBtn').className = 'btn w';
  }
  if (current === 'settings' && $('acc-codes').open && codesFor !== (S.account ? S.account.address + S.net : null)) codesLoad();
  if (current === 'home') setTimeout(inboxBadge, 0);
  if ($('acc-hook') && $('acc-hook').open) hkUi();
}
function needAccount(next, back) { if (S.account) return true; afterAccount = next; S.back = back || null; save(); show('account'); return false; }

/* ---------- Xaman (PKCE, browser only) ---------- */
let xp = null, xstate = null;
/* ---------- connected wallets (this device only) ----------
   xbox.wallets.v1: [{address, via}] (public addresses). xbox.wsess.v1: per address, a copy of the Xaman SDK's own
   browser session (XummPkceJwt / XummSdkJwt), the same data the SDK already keeps here. Switching to a Xaman wallet
   puts its own session back and reloads, so the SDK restores that wallet; signing is always gated on the Xaman
   account === the signer. No saved / expired session -> one-tap Xaman sign-in. Nothing is sent anywhere. */
const MWK = 'xbox.wallets.v1', MWS = 'xbox.wsess.v1';
let mwExpired = null, mwQuiet = false;
const xRet = /[?&](authorization_code|access_token|error_description)=/.test(location.search); // this load is the return from Xaman
const MWR = 'xbox.mwrestore';
function mwRestore(a, msg) { const se = mwSessAll()[a]; if (!se || !se.pkce) return false; try { sessionStorage.setItem(MWR, a); if (msg) sessionStorage.setItem('xbox.mwerr', msg); localStorage.setItem('XummPkceJwt', se.pkce); if (se.sdk) localStorage.setItem('XummSdkJwt', se.sdk); } catch { return false; } S.account = { address: a, via: 'xaman' }; save(); try { history.replaceState(history.state, "", location.pathname + location.hash); } catch {} location.reload(); return true; }
const mwList = () => { try { const v = JSON.parse(localStorage.getItem(MWK)); return Array.isArray(v) ? v.filter(w => w && L.isAddress(w.address)) : []; } catch { return []; } };
const mwSave = l => { try { localStorage.setItem(MWK, JSON.stringify(l)); } catch {} };
const mwSessAll = () => { try { return JSON.parse(localStorage.getItem(MWS)) || {}; } catch { return {}; } };
function mwSessDrop(a) { const m = mwSessAll(); if (m[a]) { delete m[a]; try { localStorage.setItem(MWS, JSON.stringify(m)); } catch {} } }
function mwAddW(address, via) { const l = mwList(), w = l.find(x => x.address === address); if (w) { if (via === 'xaman') w.via = 'xaman'; } else l.push({ address, via }); mwSave(l); }
function mwSnap(a) {
  try {
    const j = JSON.parse(localStorage.getItem('XummPkceJwt') || '{}'); if (!j.me || j.me.account !== a) return;
    const m = mwSessAll(); m[a] = { pkce: localStorage.getItem('XummPkceJwt'), sdk: localStorage.getItem('XummSdkJwt') }; localStorage.setItem(MWS, JSON.stringify(m));
  } catch {}
  mwAddW(a, 'xaman');
}
function mwClearXaman() { xstate = null; if (xp) { mwQuiet = true; try { xp.logout(); } catch {} setTimeout(() => { mwQuiet = false; }, 1500); } for (const st of [localStorage, sessionStorage]) for (const k of XAMAN_KEYS) try { st.removeItem(k); } catch {} }
const mwColor = a => { let n = 0; for (const c of a) n = (n * 31 + c.charCodeAt(0)) >>> 0; return 'hsl(' + (n % 360) + ',55%,45%)'; };
function mwCopyIco() {
  const NS = 'http://www.w3.org/2000/svg', sv = document.createElementNS(NS, 'svg');
  for (const [k, v] of Object.entries({ viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })) sv.setAttribute(k, v);
  const r = document.createElementNS(NS, 'rect'); for (const [k, v] of Object.entries({ x: '9', y: '9', width: '12', height: '12', rx: '2' })) r.setAttribute(k, v);
  const p = document.createElementNS(NS, 'path'); p.setAttribute('d', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1');
  sv.append(r, p); return sv;
}
function mwShow() { $('mw').classList.remove('hide'); mwRender(); }
function mwHide() { $('mw').classList.add('hide'); }
function mwRender() {
  const list = $('mwList'), l = mwList(), cur = S.account && S.account.address; list.textContent = ''; errSet('mwErr');
  if (S.account && !l.some(w => w.address === cur)) { mwAddW(cur, S.account.via); return mwRender(); }
  $('mwNote').textContent = l.length ? '' : t('mwEmpty');
  const sess = mwSessAll(), xme = xstate && xstate.me && xstate.me.account;
  for (const w of l) {
    const on = w.address === cur, bal = h('span', null, '…');
    const warn = w.address === mwExpired ? h('div', { class: 'mwwarn' }, t('xamanRelogin')) : (w.via === 'xaman' && !on && !sess[w.address] ? h('div', { class: 'mwwarn' }, t('mwNeedSign')) : null);
    list.append(h('div', { class: 'mwr' + (on ? ' on' : '') },
      (() => { const e = h('div', { class: 'mwav' }, w.address.slice(1, 2).toUpperCase()); e.style.background = mwColor(w.address); return e; })(),
      h('div', { class: 'mwi' }, h('div', { class: 'mwa' }, w.address.slice(0, 7) + '…' + w.address.slice(-5)),
        h('div', { class: 'mwm' }, bal, h('span', { class: 'mwtag' + (w.via === 'xaman' ? '' : ' v') }, w.via === 'xaman' ? 'Xaman' : t('mwView')), on && w.via === 'xaman' && xme !== w.address ? h('span', { class: 'mwwarn' }, t('mwNoSess')) : null), warn),
      h('button', { class: 'mwb', type: 'button', title: t('mwCopy'), 'aria-label': t('mwCopy'), onclick: () => copy(w.address) }, mwCopyIco()),
      h('button', { class: 'mwb ck' + (on ? ' on' : ''), type: 'button', title: t('mwMake'), 'aria-label': t('mwMake'), 'aria-pressed': String(on), onclick: () => mwUse(w) }, '✓'),
      h('button', { class: 'mwb', type: 'button', title: t('mwOut'), 'aria-label': t('mwOut'), onclick: () => mwOut(w.address) }, '⏻')));
    accountInfo(w.address).then(d => { bal.textContent = d ? (Number(dropsToXah(d.Balance)).toLocaleString(S.lang, { maximumFractionDigits: 2 }) + ' XAH') : '—'; }).catch(() => { bal.textContent = '—'; });
  }
}
function mwActivate(w) {
  if (w.via !== 'xaman') { mwClearXaman(); acct = null; setAccount(w.address, w.via); mbRefresh(); return mwRender(); }
  const se = mwSessAll()[w.address];
  if (se && se.pkce) { mwClearXaman(); if (mwRestore(w.address)) return; }
  mwSignIn(w.address);
}
function mwUse(w) { if (S.account && S.account.address === w.address && (w.via !== 'xaman' || (xstate && xstate.me && xstate.me.account === w.address))) return mwHide(); mwActivate(w); }
function mwSignIn(want) {
  if (!xp) { mwHide(); return signIn(null); }
  if (xstate && xstate.me) mwSnap(xstate.me.account);
  mwClearXaman(); acct = null; mwExpired = null;
  if (want) toast(t('mwSignFor') + ' ' + short(want));
  xp.authorize().catch(e => xamanErrShow('mwErr', e));
}
function mwOut(a) {
  const l = mwList().filter(w => w.address !== a); mwSave(l); mwSessDrop(a); if (mwExpired === a) mwExpired = null;
  if (S.account && S.account.address === a) {
    signOut(true);
    const next = l.find(w => w.via !== 'xaman' || mwSessAll()[w.address]);
    if (next) return mwActivate(next);
  }
  mwRender(); toast(t('mwRemoved'));
}
$('mwClose').onclick = mwHide;
$('mw').addEventListener('click', e => { if (e.target === $('mw')) mwHide(); });
$('mwAdd').onclick = () => mwSignIn(null);
$('acctText').onclick = () => mwShow();
$('setWallets').onclick = () => mwShow();
document.addEventListener('keydown', e => { if (e.key === 'Escape') mwHide(); });
function mwCarriedErr() { let m = null; try { m = sessionStorage.getItem('xbox.mwerr'); sessionStorage.removeItem('xbox.mwerr'); } catch {} if (m) setTimeout(() => { mwShow(); xamanErrShow('mwErr', new Error(m)); }, 300); }
function initXaman() {
  if (!C.XAMAN_API_KEY || !window.XummPkce) { $('xamanBtn').classList.add('dis'); return; }
  xp = new window.XummPkce(C.XAMAN_API_KEY, { redirectUrl: location.origin + location.pathname, rememberJwt: true });
  // 'success' / 'retrieved' also fire in a NEW tab opened by the return from Xaman (Android): the SDK reads the
  // ?authorization_code from the address and finishes the sign-in there (its PKCE verifier lives in localStorage).
  const on = async () => {
    try {
      const st = await xp.state(); const a = st && st.me && st.me.account; if (!a || signingOut) return;
      xstate = st; mwSnap(a); mwExpired = null; try { sessionStorage.removeItem(MWR); } catch {}
      if (S.account && S.account.address === a && S.account.via === 'xaman') { renderAcct(); if (current === 'sign') enterSign(); return; }
      setAccount(a, 'xaman'); toast(t('signedIn'));
    } catch {}
  };
  xp.on('success', on); xp.on('retrieved', on); xp.on('error', e => {
    // a failed sign-in (also the return tab): show it, and bring the previous wallet back if we have its session
    const prev = S.account && S.account.via === 'xaman' && !xstate ? S.account.address : null;
    if (prev && sessionStorage.getItem(MWR) !== prev && mwRestore(prev, String(e && e.message || e || ''))) return;
    xamanErrShow('acctErr', e); if (mwList().length) { mwShow(); xamanErrShow('mwErr', e); }
  });
  // the SDK found no valid Xaman session (none saved, or it expired): do not keep showing a Xaman account
  // No valid Xaman session on this load. Never drop other wallets. If the active wallet has a saved session copy
  // that was not just tried, put it back once (reload); if it was just tried, it expired: forget that copy only.
  xp.on('loggedout', () => {
    if (mwQuiet || xRet || xstate || !S.account || S.account.via !== 'xaman') return;
    const a = S.account.address, tried = sessionStorage.getItem(MWR) === a;
    if (!tried && mwRestore(a)) return;
    try { sessionStorage.removeItem(MWR); } catch {}
    mwSessDrop(a); mwExpired = a; S.account = null; save(); renderAcct(); if (current === 'sign') enterSign(); mwShow();
  });
}
function signIn(back) {
  errSet('acctErr');
  if (!xp) { afterAccount = back ? () => route(back) : null; S.back = back || null; save(); return show('account'); }
  if (back) { S.back = back; save(); if (!afterAccount) afterAccount = () => route(back); }
  xp.authorize().catch(e => xamanErrShow('acctErr', e));
}
/* Sign out: ends the Xaman session and forgets the account on this device.
   Box links / QR keys (xbox.links.v1), box history and an unfinished box are NOT touched. */
/* only the session. pkce_code_verifier / pkce_state are NOT removed: the SDK keeps them in memory too, and the tab Xaman
   returns to reads them from storage; removing them made the return fail with "Invalid State" (v20261028m). */
const XAMAN_KEYS = ['XummPkceJwt', 'XummSdkJwt'];
let signingOut = false;
function signOut(keepList) {
  signingOut = true;
  if (!keepList) { mwSave([]); try { localStorage.removeItem(MWS); } catch {} }
  xstate = null; acct = null; afterAccount = null; S.account = null; S.back = null; gcReset(); sel.gift = null; sel.key = null; acctSwap();
  if (xp) try { xp.logout(); } catch {}
  for (const st of [localStorage, sessionStorage]) for (const k of XAMAN_KEYS) try { st.removeItem(k); } catch {}
  save(); renderAcct();
  if (['create', 'sign', 'account'].includes(current)) show('home');
  mbRefresh();
  if (!keepList) toast(t('signedOut'));
  setTimeout(() => { signingOut = false; }, 0);
}
// Another tab of this browser signed in or out (e.g. the tab Xaman returned to): follow it here.
window.addEventListener('storage', e => {
  if (e.key !== 'XummPkceJwt' && e.key !== KEY) return;
  if (e.key === 'XummPkceJwt' && e.newValue && !xstate) return location.reload();
  if (e.key === 'XummPkceJwt' && !e.newValue && xstate) { xstate = null; }
  const a = load().account || null;
  if (JSON.stringify(a) !== JSON.stringify(S.account)) { S.account = a; if (!a) xstate = null; acct = null; S.pending = load().pending || null; S.parked = load().parked || {}; acctSwap(); renderAcct(); if (!a && ['create', 'sign'].includes(current)) show('home'); mbRefresh(); }
});
/* Xaman SDK failures: the SDK hides network / non-JSON failures behind a generic text, and an expired sign-in comes
   back as "Error code 401". Both get a plain "sign in again" message with a button; other Xaman errors keep their own text. */
function xamanErrInfo(e) {
  const m = String(e && e.message || e || '');
  const relogin = /Unexpected response (from|for) XUMM/i.test(m) || /Error code (401|403)\b/.test(m) || /\b(jwt|unauthori[sz]ed|expired)\b/i.test(m);
  return { relogin, msg: relogin ? t('xamanRelogin') : m };
}
function xamanErrShow(id, e) {
  try { console.error('[Xaman]', e && e.stack || e); } catch {}
  const inf = xamanErrInfo(e), el = $(id); if (!el) return;
  el.textContent = inf.msg;
  if (inf.relogin) {
    const back = current === 'sign' ? 'sign' : null;
    el.append(h('div', { class: 'xrelog' }, h('button', { class: 'btn y', type: 'button', onclick: () => { afterAccount = back ? () => enterSign() : null; if (back) { S.back = back; save(); } mwSignIn(S.account && S.account.address); } }, t('xamanReloginBtn'))));
  }
}
async function xamanSign(tx, box, onCreated) {
  const sdk = xstate.sdk;
  let sub;
  try { sub = await sdk.payload.createAndSubscribe({ txjson: tx }, ev => { if (typeof ev.data.signed !== 'undefined') return ev.data; }); }
  catch (e) { e.xaman = true; throw e; }
  if (!sub || !sub.created) { const e = new Error('Unexpected response from XUMM API [POST:payload]'); e.xaman = true; throw e; }
  if (onCreated) try { onCreated(sub.created); } catch {}
  box.textContent = '';
  box.append(h('p', { class: 'sub' }, t('xamanWait')), h('a', { class: 'btn w', href: sub.created.next.always, target: '_blank', rel: 'noopener noreferrer' }, t('xamanOpen')));
  if (sub.created.refs && sub.created.refs.qr_png) box.append(h('img', { class: 'xqr', src: sub.created.refs.qr_png, alt: '' }));
  const r = await sub.resolved;
  if (!r || !r.signed) throw new Error(t('rejected'));
  return r.txid;
}
async function waitTx(hash) {
  for (let i = 0; i < 20; i++) { try { const r = await getTx(hash); if (r.validated) return r; } catch {} await sleep(2000); }
  return null;
}

/* ---------- account ---------- */
let acct = null; // cached ledger view of the connected account
async function setAccount(address, via) {
  const back = S.back; S.account = { address, via }; S.back = null; acctSwap(); mwAddW(address, via); renderAcct(); if (!$('mw').classList.contains('hide')) mwRender();
  const next = afterAccount; afterAccount = null;
  if (next) next(); else if (back) route(back); else if (current === 'account') show('home');
}
$('addrGo').onclick = async () => {
  const a = $('addrInput').value.trim(); errSet('acctErr');
  if (!L.isAddress(a)) return errSet('acctErr', t('needAccount'));
  try { if (!(await accountInfo(a))) return errSet('acctErr', t('notFoundAcct')); } catch (e) { return errSet('acctErr', e.message); }
  setAccount(a, 'json');
};
$('xamanBtn').onclick = () => { if (xp) signIn(S.back); };
$('acctBtn').onclick = () => { if (S.account) return signOut(); signIn(['home', 'account', 'done', 'opened', 'settings'].includes(current) ? null : current); };

async function loadAccountView(a) {
  const [info, objs, ns, res, cur] = await Promise.all([accountInfo(a), accountObjects(a), nsEntries(a).catch(() => []), reserves(), currentLedger()]);
  if (!info) throw new Error(t('notFoundAcct'));
  const st = new Map(ns.map(e => [e.HookStateKey, e.HookStateData]));
  const boxes = [], keyOf = new Set(), locked = new Set();
  for (const [k, d] of st) {
    if (d.length === 170) { const b = parseBox(d); b.key = k; const m = st.get(L.modeKey(k)); if (m && m.length === 66 && m.startsWith('01')) { b.ktid = m.slice(2); keyOf.add(b.ktid); } if (!isZero(b.tid)) locked.add(b.tid); boxes.push(b); }
    if (d === '01' && k.length === 64) locked.add(k);
  }
  const meta = st.get(K_META), aud = st.get(K_AUD), ock = st.get(K_OCK);
  const held = meta ? BigInt('0x' + meta.slice(0, 16)) : 0n, locks = meta ? BigInt('0x' + meta.slice(16, 32)) : 0n;
  const oc = BigInt(info.OwnerCount || 0), scale = BigInt(info.HookStateScale || 1), hsc = BigInt(info.HookStateCount || 0), tic = BigInt(info.TicketCount || 0);
  const ex = locks + hsc * scale + tic; const F = oc > ex ? oc - ex : 0n;
  return {
    address: a, info, cur, res, boxes, keyOf, locked, held, ock: ock ? BigInt('0x' + ock) : 0n, F, nck: st.has(K_NCK),
    aud: aud && aud.length === 82 ? { done: aud.slice(32, 34) !== '00', count: BigInt('0x' + aud.slice(16, 32)) } : null,
    hook: (info.HookNamespaces || []).includes(C.HOOK_NAMESPACE) ? objs.some(o => o.LedgerEntryType === 'Hook') : await hookNsInstalled(objs),
    hasHook: objs.some(o => o.LedgerEntryType === 'Hook'),
    tokens: objs.filter(o => o.LedgerEntryType === 'URIToken' && o.Owner === a),
    balance: BigInt(info.Balance)
  };
}
// A fresh install has no hook state yet, so HookNamespaces is empty: read the namespace from the Hook entry or its definition.
async function hookNsInstalled(objs) {
  const ho = objs.find(o => o.LedgerEntryType === 'Hook'); if (!ho) return false;
  for (const e of ho.Hooks || []) {
    const k = e.Hook || {}; let ns = k.HookNamespace;
    if (!ns && k.HookHash) { try { const r = await rpc('ledger_entry', { hook_definition: k.HookHash, ledger_index: 'validated' }); ns = r.node && r.node.HookNamespace; } catch (x) {} }
    if (ns && ns.toUpperCase() === C.HOOK_NAMESPACE.toUpperCase()) return true;
  }
  return false;
}
function needsAudit(v, hasTok) { let F = v.F; if (hasTok && F) F -= 1n; if (F <= 1n) return false; return !(v.aud && v.aud.done && F <= v.aud.count); }
function freeToLock(v, hasTok, hasKey) {
  const rv = v.res.base + BigInt(v.info.OwnerCount || 0) * v.res.inc;
  const extra = 1n + (hasTok ? 1n : 0n) + (hasKey ? 1n : 0n) + (v.nck ? 0n : 1n);
  const f = v.balance - (v.held + v.ock + 100000n + 2000n + rv + extra * v.res.inc + 1000000n);
  const m = f - 1000000n; // safety margin: the hook keeps 0.1 XAH more per box and refuses near the limit (testnet: free-0.2 refused, free-1 accepted)
  return m > 0n ? m : 0n;
}

/* ---------- live ledger counter (read-only polling, paused when the tab is hidden) ---------- */
const LIVE = { cur: 0, net: null, avg: 0, avgAt: 0, timer: null, busy: false };
const avgSec = () => LIVE.avg || C.LEDGER_FALLBACK_SECONDS || 3.5;
const curLedger = fallback => Math.max(LIVE.net === S.net ? LIVE.cur : 0, fallback || 0);
async function measureAvg() {
  try {
    const a = await rpc('ledger', { ledger_index: 'validated' }); const la = a.ledger; const n = 100;
    const b = await rpc('ledger', { ledger_index: Number(la.ledger_index) - n }); const lb = b.ledger;
    const v = (Number(la.close_time) - Number(lb.close_time)) / n;
    if (v > 0.5 && v < 30) { const was = LIVE.avg; LIVE.avg = v; if (was !== v && $('s-create') && $('s-create').classList.contains('on') && acct) updateSummary(); }
  } catch {}
  LIVE.avgAt = Date.now();
}
function fmtLeft(sec) {
  const m = Math.max(0, Math.round(sec / 60)), mm = m % 60;
  if (m >= 1440) { const ht = Math.round(sec / 3600), d = Math.floor(ht / 24); return d + ' ' + t('uD') + ' ' + (ht % 24) + ' ' + t('uH'); }
  const hh = Math.floor(m / 60);
  if (hh) return hh + ' ' + t('uH') + ' ' + mm + ' ' + t('uM');
  return (mm || 1) + ' ' + t('uM');
}
function renderLive(changed) {
  const cur = curLedger();
  document.querySelectorAll('.lcur').forEach(e => { e.textContent = cur ? String(cur) : '…'; if (changed) { e.classList.remove('tick'); void e.offsetWidth; e.classList.add('tick'); } });
  document.querySelectorAll('[data-exp]').forEach(e => {
    const exp = Number(e.dataset.exp), c = curLedger(Number(e.dataset.cur || 0));
    if (!exp || !c) { e.textContent = exp ? '…' : t('limitNone'); return; }
    const gone = c > exp; e.classList.toggle('bad', gone); e.classList.toggle('yel', !gone);
    e.textContent = gone ? t('expiredState') + ' (' + (c - exp) + ' ' + t('ledgersAgo') + ')' : '≈ ' + fmtLeft((exp - c) * avgSec()) + ' · ' + (exp - c) + ' ' + t('ledgersLeft');
    const card = e.closest('.card'); if (card) card.classList.toggle('expired', gone);
  });
  document.querySelectorAll('[data-stexp]').forEach(e => {
    const c = curLedger(); if (!c) return; const gone = c > Number(e.dataset.stexp);
    e.textContent = gone ? t('stExpired') : e.dataset.stok; e.classList.toggle('bad', gone);
    if (e.dataset.stcls) e.classList.toggle(e.dataset.stcls, !gone);
  });
  $('ledgerDot').classList.toggle('on', !!cur);
  if (changed) { const d = $('ledgerDot'); d.classList.remove('beat'); void d.offsetWidth; d.classList.add('beat'); }
  $('ledgerAvg').textContent = LIVE.avg ? '≈ ' + LIVE.avg.toFixed(1) + ' ' + t('secPerLedger') : '';
}
function stRow(b, expN, cls) {
  const r = row(t('status'), b.status === 0 ? t('stClosed') : t('stClaiming'), cls);
  if (expN && b.status === 0) { const v = r.lastChild; v.dataset.stexp = String(expN); v.dataset.stok = t('stClosed'); v.dataset.stcls = cls || ''; }
  return r;
}
async function pollLedger() {
  if (document.hidden || LIVE.busy) return;
  LIVE.busy = true;
  try {
    if (LIVE.net !== S.net) { LIVE.net = S.net; LIVE.cur = 0; LIVE.avg = 0; LIVE.avgAt = 0; renderLive(false); }
    const net = S.net; const r = await rpc('ledger_current', {});
    const n = Number(r.ledger_current_index);
    if (net === S.net && n && n !== LIVE.cur) { LIVE.cur = n; renderLive(true); }
    if (Date.now() - LIVE.avgAt > 600000) { await measureAvg(); renderLive(false); }
  } catch {} finally { LIVE.busy = false; }
}
function startLive() {
  clearInterval(LIVE.timer); LIVE.timer = setInterval(pollLedger, C.LEDGER_POLL_MS || 4000); pollLedger();
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) { pollLedger(); resumePack(); resumeClaim(); resumeMint(); resumeRemit(); resumeOpen(); stepPoll(); } });
const liveRow = () => row(t('ledgerNow'), h('span', { class: 'lcur' }, curLedger() ? String(curLedger()) : '…'));
const leftRow = (exp, cur) => row(t('timeLeft'), h('span', { 'data-exp': String(exp || 0), 'data-cur': String(cur || 0) }, '…'));

/* ---------- CREATE ---------- */
const sel = { gift: null, key: null, fresh: null }; // key: only the key minted for this build (fresh)
let createFor = null;
async function enterCreate(preset) {
  if (!needAccount(() => enterCreate(preset), 'create')) return;
  show('create'); errSet('createErr');
  const hc = $('hookCard'); hc.textContent = ''; hc.append(h('div', { class: 'spin sm' })); $('giftTokens').textContent = ''; $('keyTokens').textContent = '';
  try { acct = await loadAccountView(S.account.address); } catch (e) { hc.textContent = e.message; return; }
  hc.textContent = '';
  hc.append(h('div', { class: acct.hook ? 'ok' : 'bad' }, (acct.hook ? '✓ ' : '⚠ ') + t(acct.hook ? 'hookYes' : 'hookNo')),
    row(t('balance'), dropsToXah(acct.balance) + ' XAH'), row(t('available'), '≈ ' + dropsToXah(freeToLock(acct, false, false)) + ' XAH', 'yel'));
  $('packBtn').disabled = !acct.hook;
  // coming back to this screen (Back, language) keeps the form; a new account/network or a finished mint starts fresh
  const formFor = S.net + ':' + acct.address;
  if (preset || createFor !== formFor) { sel.gift = null; sel.key = null; sel.fresh = null; gcReset(); wStep = 1; }
  else {
    const ok = id => id && acct.tokens.some(x => x.index === id) && !tokenReason(acct.tokens.find(x => x.index === id)); if (!ok(sel.gift)) sel.gift = null; if (!ok(sel.key) || sel.key !== sel.fresh) { sel.key = null; sel.fresh = null; }
    $('gcToggle').textContent = t($('gcForm').classList.contains('hide') ? 'gcAdd' : 'gcCancel'); gcInfo();
  }
  createFor = formFor;
  if (preset) {
    $('amtInput').value = preset.amt || ''; $('expSel').value = String(preset.expDays || 0);
    document.querySelector('input[name=kind][value=token]').checked = true;
    if (preset.gift && acct.tokens.some(x => x.index === preset.gift)) sel.gift = preset.gift;
    if (preset.key && acct.tokens.some(x => x.index === preset.key)) { sel.key = preset.key; sel.fresh = preset.key; newIds.add(preset.key); }
    if (preset.giftNew && sel.gift) newIds.add(sel.gift);
    syncKindUi();
  }
  if (preset && preset.key && sel.key) wStep = 5;
  renderTokens(); updateSummary(); wShow();
  if (preset && preset.giftNew && sel.gift) { toast(t('gcMinted')); const el = document.querySelector('#giftTokens .tok.sel'); if (el) el.scrollIntoView({ block: 'center' }); }
  else if (preset && sel.key) { toast(t('minted')); const el = document.querySelector('#keyTokens .tok.sel'); if (el) el.scrollIntoView({ block: 'center' }); }
}
/* a key token made by this page: issued by this account, URI = <page>/img/key.jpg?k=<hex> */
const isKeyTok = tok => !!tok && tok.Issuer === (acct && acct.address) && /\/img\/key\.jpg\?k=[0-9a-f]{8,64}$/.test(hexToText(tok.URI || ''));
const freeKeys = () => acct.tokens.filter(x => isKeyTok(x) && !tokenReason(x));
const giftIsGc = () => { const g = sel.gift && acct && acct.tokens.find(x => x.index === sel.gift); return !!(g && gcTok(g)); };
/* a gift code goes only into a key-token box; in key-token mode a free key token is picked by default */
function keyDefaults() {
  if (!acct) return;
  if (giftIsGc()) document.querySelector('input[name=kind][value=token]').checked = true;
}
function tokenReason(tok) {
  if ((tok.Flags || 0) & 1) return t('burnable');
  if (tok.Amount !== undefined) return t('onSale');
  if (acct.locked.has(tok.index)) return t('inBox');
  if (acct.keyOf.has(tok.index)) return t('keyOfBox');
  return null;
}
function renderTokens() {
  keyDefaults(); syncKindUi(true);
  const g = $('giftTokens'), k = $('keyTokens'); g.textContent = ''; k.textContent = '';
  // content: every URIToken this account owns (any issuer), except key tokens made by this page (own or received ones)
  const keys = acct.tokens.filter(isKeyTok), all = acct.tokens.filter(x => !isKeyTok(x) && !keyTokenId(x));
  const why0 = tok => tokenReason(tok) || (sel.key === tok.index ? t('keyIsGift') : null);
  const inside = all.filter(x => !why0(x)).concat(all.filter(x => why0(x))); // pickable first, greyed (with the reason) after
  const okN = all.filter(x => !why0(x)).length;
  if (!all.length) g.append(h('p', { class: 'sm yel' }, t('noTokens')));
  else if (!okN) g.append(h('p', { class: 'sm yel' }, t('noFreeTokens')));
  else g.append(h('p', { class: 'sm' }, t('tokPick').replace('{n}', okN)));
  const free = freeKeys().some(x => x.index !== sel.gift);
  if (!free) k.append(h('p', { class: 'sm yel' }, t('noKeyYet')));
  $('mintKeyBtn').className = 'btn ' + (free ? 'o' : 'y');
  for (const tok of inside) {
    const why = why0(tok);
    const c = tokenCard(tok, { disabled: why, selected: sel.gift === tok.index, onclick: () => { sel.gift = sel.gift === tok.index ? null : tok.index; if (sel.key === sel.gift) sel.key = null; renderTokens(); updateSummary(); } });
    if (gcTok(tok)) c.querySelector('.tinfo').insertBefore(h('span', { class: 'gctag' }, t('gcTag')), c.querySelector('.tinfo').children[1]);
    g.append(c);
  }
  for (const tok of keys) {
    const why = tokenReason(tok);
    k.append(tokenCard(tok, { disabled: why || (sel.gift === tok.index ? t('keyIsGift') : null), selected: sel.key === tok.index, onclick: () => {} }));
  }
}
const kind = () => { const top = document.querySelector('input[name=kind]:checked').value; return top === 'token' ? 'token' : document.querySelector('input[name=linkFor]:checked').value; };
function syncKindUi(quiet) {
  if (acct && giftIsGc() && kind() !== 'token') { document.querySelector('input[name=kind][value=token]').checked = true; if (!quiet) toast(t('gcNeedsKey')); }
  const k = kind(); keyNote(); $('linkWrap').classList.toggle('hide', k === 'token'); $('namedWrap').classList.toggle('hide', k !== 'named'); $('keyWrap').classList.toggle('hide', k !== 'token'); updateSummary(); wProgress(); }
/* key-token mode: say whether a key made earlier is waiting for a box (it goes into this one) or a new key is made when the box is built */
function keyNote() {
  const e = $('keyWaitNote'); if (!e) return;
  if (!acct || kind() !== 'token') { e.classList.add('hide'); return; }
  e.textContent = t('keyNewHint'); e.classList.remove('hide');
}
/* create wizard: one step at a time (1 what, 2 how, 3 key - key-token mode only, 4 time limit, 5 check and sign) */
let wStep = 1;
const wSteps = () => [1, 2, 4, 5]; // key step removed: a key token is made only together with its box
function wProgress() {
  const st = wSteps(); if (!st.includes(wStep)) wStep = st.find(x => x > wStep) || 5;
  const i = st.indexOf(wStep);
  document.querySelectorAll('#s-create .wstep').forEach(e => e.classList.toggle('on', Number(e.dataset.step) === wStep));
  $('wStepTxt').textContent = t('wStepOf').replace('{n}', i + 1).replace('{m}', st.length);
  $('wBar').style.width = Math.round((i + 1) / st.length * 100) + '%';
  $('wNext').classList.toggle('hide', wStep === 5); $('packBtn').classList.toggle('hide', wStep !== 5);
  if (wStep === 5) sumMore();
}
function wShow(n) { if (n) wStep = n; errSet('createErr'); wProgress(); }
function wCheck(n) {
  if (!acct) return t('notYet');
  if (n === 1) {
    if (!acct.hook) return t('hookNo');
    const amt = xahToDrops($('amtInput').value); if (amt === null) return t('amtBad');
    if (!amt && !sel.gift) return t('needSomething');
    if (amt > freeToLock(acct, !!sel.gift, kind() === 'token')) return t('notEnough');
  }
  if (n === 2) {
    if (giftIsGc() && kind() !== 'token') return t('gcNeedsKey');
    if (kind() === 'named' && !L.isAddress($('namedAddr').value.trim())) return t('needNamed');
  }
  return null;
}
function sumMore() {
  const m = $('sumMore'); m.textContent = ''; const k = kind();
  const g = sel.gift && acct.tokens.find(x => x.index === sel.gift);
  if (g) m.append(row('URIToken', (gcTok(g) ? t('gcTag') + ' · ' : '') + short(g.index)));
  m.append(row(t('kind'), k === 'token' ? t('kToken') : k === 'named' ? t('kNamed') + ' ' + short($('namedAddr').value.trim()) : t('kBearer')));
  if (k === 'token') m.append(row(t('sumKey'), sel.key && sel.key === sel.fresh ? t('keyMadeSum') + ' ' + short(sel.key) : t('keyNewSum'), 'yel'), h('p', { class: 'sm' }, t('keyNewHint')));
  m.append(row(t('timeLimit'), $('expSel').selectedOptions[0].textContent), row('Network', NET().label));
}
$('wNext').onclick = () => { const e = wCheck(wStep); if (e) return errSet('createErr', e); const st = wSteps(); wShow(st[st.indexOf(wStep) + 1] || 5); window.scrollTo(0, 0); };
$('wPrev').onclick = () => { const st = wSteps(), i = st.indexOf(wStep); if (i <= 0) return goBack(); wShow(st[i - 1]); window.scrollTo(0, 0); };
document.querySelectorAll('input[name=linkFor]').forEach(r => r.onchange = () => { document.querySelector('input[name=kind][value=link]').checked = true; syncKindUi(); });
document.querySelectorAll('input[name=kind]').forEach(r => r.onchange = () => syncKindUi());
$('amtInput').oninput = updateSummary; $('expSel').onchange = updateSummary;
function expLedger() { const d = Number($('expSel').value); if (!d || !acct) return 0; return curLedger(acct.cur) + Math.ceil(d * 86400 / avgSec()); }
function updateSummary() {
  if (!acct) return;
  const d = xahToDrops($('amtInput').value);
  $('amtNote').textContent = d === null ? t('amtBad') : '≈ ' + t('available').toLowerCase() + ': ' + dropsToXah(freeToLock(acct, !!sel.gift, kind() === 'token')) + ' XAH';
  const parts = []; if (d) parts.push(dropsToXah(d) + ' XAH'); if (sel.gift) { const gt0 = acct.tokens.find(x => x.index === sel.gift); parts.push(gt0 && gcTok(gt0) ? '🔒 ' + t('gcTokName') : '1 URIToken'); }
  const gt = sel.gift && acct.tokens.find(x => x.index === sel.gift);
  $('gcModeHint').classList.toggle('hide', !(gt && gcTok(gt)));
  $('sumText').textContent = parts.join(' + ') || '—';
  const e = expLedger(), box = $('expNote'); box.textContent = '';
  if (e) box.append(liveRow()); box.append(row(t('ledgerExp'), e ? String(e) : t('limitNone')));
  if (e) box.append(leftRow(e, acct.cur), row(t('approx'), new Date(Date.now() + Number($('expSel').value) * 86400000).toLocaleDateString(S.lang)));
  else box.append(h('div', { class: 'card warn' }, '⚠️ ' + t(kind() === 'token' ? 'noLimitWarnKey' : 'noLimitWarn')));
  renderLive(false);
}
/* key token mint: Flags 0 (not burnable: v14 rejects burnable keys), unique URI pointing at the page's own key image */
const newIds = new Set();
function canMint(v) {
  const rv = v.res.base + BigInt(v.info.OwnerCount || 0) * v.res.inc;
  const need = rv + v.res.inc + 100000n + (v.held ? v.held + v.ock + 1000000n : 0n);
  return v.balance >= need;
}
function keyUri() {
  const n = new Uint8Array(8); crypto.getRandomValues(n);
  return new URL('img/key.jpg', appUrl()).href + '?k=' + L.hex.toHex(n).toLowerCase();
}
function mintTx(account, uriText) { return { TransactionType: 'URITokenMint', Account: account, NetworkID: NET().networkId, Flags: 0, URI: L.hex.toHex(new TextEncoder().encode(uriText)) }; }
$('mintKeyBtn').onclick = () => {
  errSet('createErr');
  return; // a key is made only by «Build box», together with its box
  if (!acct) return;
  if (!acct.hook) return errSet('createErr', t('hookNo'));
  if (!canMint(acct)) return errSet('createErr', t('mintNoFunds'));
  const tx = mintTx(acct.address, keyUri());
  const tid = L.uriTokenId(acct.address, tx.URI);
  S.pending = { op: 'mint', tx, tid, form: { amt: $('amtInput').value, gift: sel.gift, expDays: Number($('expSel').value) } }; save();
  enterSign();
};
/* gift-code token: the code is locked here, then minted on this account (Flags 0: only the holder can burn it) */
function gcReset() { $('gcForm').classList.add('hide'); $('gcToggle').textContent = t('gcAdd'); $('gcCode').value = ''; $('gcPw').value = ''; $('gcSaved').checked = false; gcInfo(); }
function gcInfo() {
  const n = gcBytes($('gcCode').value), left = GC.MAX - n, e = $('gcLeft');
  e.textContent = left < 0 ? t('gcTooLong') + ' (' + n + ' / ' + GC.MAX + ')' : t('gcLeft').replace('{n}', left).replace('{m}', GC.MAX);
  e.classList.toggle('bad', left < 0);
  const pw = gcPwNorm($('gcPw').value); $('gcPwNote').textContent = pw && pw.length < GC.MIN_PW ? t('gcPwShort') : '';
  $('gcPwNote').classList.toggle('bad', !!pw && pw.length < GC.MIN_PW);
}
$('gcToggle').onclick = () => { const open = $('gcForm').classList.contains('hide'); if (!open) return gcReset(); $('gcForm').classList.remove('hide'); $('gcToggle').textContent = t('gcCancel'); gcInfo(); };
$('gcCode').oninput = gcInfo; $('gcPw').oninput = () => { $('gcSaved').checked = false; gcInfo(); };
$('gcGen').onclick = () => { $('gcPw').value = gcGenPw(); $('gcSaved').checked = false; gcInfo(); };
$('gcCopyPw').onclick = () => { if ($('gcPw').value) copy($('gcPw').value); };
$('gcMint').onclick = async () => {
  errSet('createErr');
  if (!acct) return;
  const code = $('gcCode').value, pw = $('gcPw').value, n = gcBytes(code);
  if (!code.trim()) return errSet('createErr', t('gcNeedCode'));
  if (n > GC.MAX) return errSet('createErr', t('gcTooLong'));
  if (gcPwNorm(pw).length < GC.MIN_PW) return errSet('createErr', t('gcPwShort'));
  if (!$('gcSaved').checked) return errSet('createErr', t('gcNeedSaved'));
  if (!acct.hook) return errSet('createErr', t('hookNo'));
  if (!canMint(acct)) return errSet('createErr', t('mintNoFunds'));
  const b = $('gcMint'); b.disabled = true; b.textContent = t('gcWorking');
  let uri;
  try { uri = await gcEncrypt(code, pw); } catch { return errSet('createErr', t('gcEncErr')); } finally { b.disabled = false; b.textContent = t('gcMint'); }
  const tx = mintTx(acct.address, uri);
  const tid = L.uriTokenId(acct.address, tx.URI);
  // only the locked payload is kept for the sign screen; the code and the password are wiped from the page
  gcReset();
  S.pending = { op: 'gmint', tx, tid, form: { amt: $('amtInput').value, key: sel.key, expDays: Number($('expSel').value) } }; save();
  enterSign();
};
let packBusy = false;
$('packBtn').onclick = async () => {
  if (packBusy) return; errSet('createErr');
  const auto = !!(justMinted && justMinted === sel.key);
  packBusy = true; $('packBtn').disabled = true;
  try { acct = await loadAccountView(S.account.address); } catch (e) { packBusy = false; $('packBtn').disabled = !(acct && acct.hook); return errSet('createErr', e.message); }
  packBusy = false; $('packBtn').disabled = !acct.hook;
  if (!acct.hook) return errSet('createErr', t('hookNo'));
  if (sel.gift && !acct.tokens.some(x => x.index === sel.gift && !tokenReason(x))) { sel.gift = null; renderTokens(); updateSummary(); return errSet('createErr', t('needSomething')); }
  const amt = xahToDrops($('amtInput').value); const k = kind();
  if (amt === null) return errSet('createErr', t('amtBad'));
  if (!amt && !sel.gift) return errSet('createErr', t('needSomething'));
  if (amt > freeToLock(acct, !!sel.gift, k === 'token')) return errSet('createErr', t('notEnough'));
  let named = null;
  if (k === 'named') { named = $('namedAddr').value.trim(); if (!L.isAddress(named)) return errSet('createErr', t('needNamed')); }
  if (giftIsGc() && k !== 'token') return errSet('createErr', t('gcNeedsKey'));
  // key-token box: always a brand-new key, minted right now (signature 1), then the box (signature 2)
  if (k === 'token' && !(sel.key && sel.key === sel.fresh)) {
    sel.key = null; sel.fresh = null;
    if (!canMint(acct)) return errSet('createErr', t('mintNoFunds'));
    const tx = mintTx(acct.address, keyUri()); const tid = L.uriTokenId(acct.address, tx.URI);
    S.pending = { op: 'mint', tx, tid, auto: true, audit: needsAudit(acct, !!sel.gift), what: boxWhat(amt, !!sel.gift), form: { amt: $('amtInput').value, gift: sel.gift, expDays: Number($('expSel').value) } }; save();
    return enterSign();
  }
  if (k === 'token') {
    // the key must be on the ledger right now: ours, not burnable, not on sale, not in a box, not the key of any box
    const id = sel.key, tok = await uriToken(id).catch(() => null), mine = acct.tokens.find(x => x.index === id);
    const bad = !tok || tok.Owner !== acct.address || ((tok.Flags || 0) & 1) || tok.Amount !== undefined || !mine || !isKeyTok(mine) || id === sel.gift || acct.locked.has(id) || acct.keyOf.has(id) || S.history.some(x => x.ktid === id);
    if (bad) { sel.key = null; sel.fresh = null; updateSummary(); return errSet('createErr', t('keyNotFree')); }
  }
  const exp = expLedger();
  const b = { kind: k, h: acct.address, net: S.net, tid: sel.gift || Z64, amt: L.hex.u64(amt), exp: exp ? L.hex.u32(exp) : '00000000', named, created: Date.now() };
  if (k === 'token') { b.vc = L.randomVC(); b.ktid = sel.key; } else { const key = L.newBoxKey(); b.vc = key.vc; b.pub = key.pub; b.priv = key.priv; }
  if (!vaultPut(b)) return errSet('createErr', t('storageOff'));
  S.pending = { op: 'pack', box: b, audit: needsAudit(acct, !!sel.gift), afterMint: auto || (k === 'token' && sel.key === sel.fresh) }; save();
  enterSign();
};
/* what goes into the box, in words: "5 XAH + token" */
const shortL = a => a.slice(0, 6) + '…' + a.slice(-4);
function boxWhat(amt, tok) { const p = []; if (amt) p.push(dropsToXah(amt) + ' XAH'); if (tok) p.push(t('sigTok')); return p.join(' + '); }
const sigHead = (n, m) => m > 1 ? t('sigOf').replace('{n}', n).replace('{m}', m) : t('sigOne');
function signLabels(p) {
  const L2 = (n, m, body) => sigHead(n, m) + ': ' + body;
  if (p.op === 'mint') { const m = (p.auto ? 2 : 1) + (p.audit ? 1 : 0); return [L2(1, m, t('sigMint'))]; }
  if (p.op === 'gmint') return [L2(1, 1, t('sigGmint'))];
  if (p.op === 'pack') {
    const b = p.box, n0 = p.afterMint ? 2 : 1, m = n0 + (p.audit ? 1 : 0), out = [];
    if (p.audit) out.push(L2(n0, m, t('sigAudit')));
    const what = boxWhat(BigInt('0x' + b.amt), !isZero(b.tid));
    const body = b.kind === 'token' ? t('sigPackKey') : b.kind === 'named' ? t('sigPackNamed').replace('{a}', short(b.named)) : t('sigPackLink');
    out.push(L2(m, m, body.replace('{what}', what))); return out;
  }
  if (p.op === 'claim') { const p2 = []; if (p.amt && BigInt('0x' + p.amt)) p2.push(dropsToXah(BigInt('0x' + p.amt)) + ' XAH'); if (p.tid && !isZero(p.tid)) p2.push(t('sigTok')); return [L2(1, 1, t('sigClaim').replace('{what}', p2.join(' + ') || '—'))]; }
  if (p.op === 'open') return [L2(1, 1, t('sigOpen'))];
  if (p.op === 'remit') return [L2(1, 1, t('sigRemit').replace('{a}', short(p.tx.Destination)))];
  return [t('stepOnly')];
}

/* ---------- SIGN (shared by PACK / CLAIM / OPEN / REMIT) ---------- */
function signTxs() {
  const p = S.pending; if (!p) return [];
  const lb = signLabels(p);
  if (p.op === 'pack') { const out = []; if (p.audit) out.push({ label: lb[0], tx: auditTx(p.box.h) }); out.push({ label: lb[lb.length - 1], tx: packTx(p.box.h, p.box), main: true }); return out; }
  return [{ label: lb[0], tx: p.tx, main: true }];
}
function jsonBlock(item) {
  const txt = JSON.stringify(item.tx, null, 2);
  return h('div', { class: 'card' }, h('div', { class: 'lbl' }, item.label), h('pre', { class: 'json' }, txt), h('button', { class: 'btn w', type: 'button', onclick: () => copy(txt) }, t('copy')));
}
function enterSign() {
  const p = S.pending; if (!p) return show('home');
  if (p.op === 'pack' && p.shown) return finishPack(); // a built box is never offered for signing again
  show('sign'); errSet('signErr');
  const titles = { pack: 'packTitle', claim: 'claimTitle', open: 'openTitle', remit: 'remitTitle', mint: 'mintTitle', gmint: 'gcMintTitle' };
  $('signTitle').textContent = t(titles[p.op]);
  const signer = p.op === 'pack' ? p.box.h : p.tx.Account;
  const xme0 = xstate && xstate.me && xstate.me.account;
  $('signSub').textContent = xp && xme0 === signer ? t('signsAcct') + ' ' + shortL(signer) + ' · ' + NET().label : t('signHere') + ' ' + short(signer) + ' · ' + NET().label + ' (NetworkID ' + NET().networkId + ').' + (p.op === 'pack' && p.audit ? ' ' + t('auditFirst') : '');
  const body = $('signBody'); body.textContent = '';
  if (p.op === 'mint' && p.auto) body.append(h('div', { class: 'card stepnote' }, t('mintStep1')));
  if (p.op === 'pack' && p.afterMint) body.append(h('div', { class: 'card stepok' }, '✓ ' + t('keyMadeOk')));
  const items = signTxs();
  const xme = xstate && xstate.me && xstate.me.account;
  if (xp && !xme) {
    body.append(h('div', { class: 'card xin' }, h('p', { class: 'sm' }, t('signInToSign')), h('button', { class: 'btn y', type: 'button', onclick: () => { afterAccount = () => enterSign(); signIn('sign'); } }, t('signIn'))));
  } else if (xme && xme !== signer) body.append(h('div', { class: 'card warn' }, t('otherAcct') + ' ' + short(signer) + '.'));
  $('checkBtn').classList.toggle('hide', !!(xme && xme === signer));
  if (xme && xme === signer) {
    p.st = p.st || {};
    let blocked = false;
    for (const it of items) {
      const key = it.main ? 'main' : 'audit', st = p.st[key] || {};
      const card = h('div', { class: 'card' }, h('div', { class: 'lbl' }, (st.st === 'ok' ? '✓ ' : '') + it.label)); body.append(card);
      if (st.st === 'ok') { card.classList.add('stepok'); card.append(h('p', { class: 'sm' }, t('stDone')), exTx(st.txid)); continue; }
      if (blocked) { card.append(h('p', { class: 'sm yel' }, t('stAuditFirst'))); continue; }
      blocked = true; // a later step waits until this one is done
      if (st.st === 'signed') { card.append(h('p', { class: 'sub yel' }, t('stWaitNet')), exTx(st.txid)); continue; }
      if (st.st === 'open') {
        card.append(h('p', { class: 'sub yel' }, t('stOpenX')));
        if (st.next) card.append(h('a', { class: 'btn w', href: st.next, target: '_blank', rel: 'noopener noreferrer' }, t('xamanOpen')));
        card.append(h('button', { class: 'btn o', type: 'button', onclick: async ev => { ev.target.disabled = true; try { if (xstate && xstate.sdk && st.uuid) await xstate.sdk.payload.cancel(st.uuid); } catch {} if (p.st[key] === st) { delete p.st[key]; save(); } if (liveStep === p) liveStep = null; enterSign(); } }, t('stCancel')));
        continue;
      }
      if (st.st === 'fail') card.append(h('p', { class: 'err-line' }, t('stFail').replace('{r}', st.res || '?')));
      const out = h('div', { class: 'xout' });
      card.append(h('button', { class: 'btn y', type: 'button', onclick: async ev => {
        if (p.st[key] && p.st[key].st === 'open') return; ev.target.disabled = true; errSet('signErr');
        const ns = p.st[key] = { st: 'open' }; save(); liveStep = p; liveKey = key; out.textContent = t('xamanMaking');
        try {
          const id = await xamanSign(it.tx, out, c => { ns.uuid = c.uuid; ns.next = c.next && c.next.always; save(); setTimeout(stepPoll, 3000); });
          if (ns.st === 'open') { ns.st = 'signed'; ns.txid = id; if (it.main && p.op === 'pack') p.box.tx = id; save(); }
        } catch (e) { if (p.st[key] === ns) delete p.st[key]; save(); if (liveStep === p && liveKey === key) liveStep = null; if (S.pending === p && current === 'sign') enterSign(); if (e && e.xaman) xamanErrShow('signErr', e); else errSet('signErr', e.message); return; }
        if (liveStep === p && liveKey === key) liveStep = null; if (S.pending === p && current === 'sign') enterSign();
      } }, t('xamanSign')), out);
    }
    setTimeout(stepPoll, 0);
  } else items.forEach(it => body.append(jsonBlock(it)));
  if (!(xme && xme === signer)) {
  const hashIn = h('input', { class: 'inp', placeholder: 'Hash', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
  const hashOut = h('div');
  body.append(h('div', { class: 'card' }, h('div', { class: 'lbl' }, t('checkHash')), hashIn, h('button', { class: 'btn o', type: 'button', onclick: async () => {
    const v = hashIn.value.trim(); if (!/^[0-9A-Fa-f]{64}$/.test(v)) return;
    hashOut.textContent = t('waiting'); const r = await getTx(v).catch(() => null); hashOut.textContent = ''; hashOut.append(txResult(v, r && r.validated ? r : null));
  } }, t('checkHashBtn')), hashOut));
  }
}
function txResult(id, r) {
  const d = h('div', { class: 'txres' });
  if (!r) { d.append(h('p', { class: 'sm' }, t('notYet'))); return d; }
  const res = (r.meta || {}).TransactionResult; const ans = hookAnswers(r);
  d.append(row(t('txHash'), short(id)), row('Result', res, res === 'tesSUCCESS' ? 'ok' : 'bad'));
  if (ans.length) d.append(row(t('hookSays'), ans.join(' · ')));
  d.append(exTx(id));
  return d;
}
$('checkBtn').onclick = () => checkPending().catch(e => errSet('signErr', e.message));
$('signBack').onclick = () => goBack();
/* signed steps: wait for the network, never offer the same signature again */
let liveStep = null, liveKey = null, stepPolling = false;
async function stepPoll() {
  const p = S.pending; if (stepPolling || !p || !p.st) return;
  stepPolling = true;
  try {
    for (let round = 0; round < 60 && S.pending === p; round++) {
      let changed = false, waiting = false;
      for (const key of ['audit', 'main']) {
        const st = p.st[key]; if (!st) continue;
        if (st.st === 'open' && st.uuid && xstate && xstate.sdk) {
          const r = await xstate.sdk.payload.get(st.uuid).catch(() => null);
          if (r && r.meta && r.meta.signed && r.response && r.response.txid) { st.st = 'signed'; st.txid = r.response.txid; if (key === 'main' && p.op === 'pack') p.box.tx = st.txid; changed = true; }
          else if (r && r.meta && (r.meta.resolved || r.meta.expired || r.meta.cancelled)) { delete p.st[key]; changed = true; }
          else waiting = true;
        }
        if (st.st === 'signed') {
          const r = await getTx(st.txid).catch(() => null);
          if (r && r.validated) { const res = (r.meta || {}).TransactionResult; if (res === 'tesSUCCESS') st.st = 'ok'; else { st.st = 'fail'; st.res = res; } changed = true; }
          else waiting = true;
        }
      }
      if (changed) { save(); if (S.pending === p && current === 'sign') enterSign(); }
      if (p.st.main && p.st.main.st === 'ok') { await stepAdvance(p); break; }
      if (!waiting) break;
      await sleep(2500);
    }
  } finally { stepPolling = false; }
}
/* the main transaction is in: go on to the next step / result (the ledger may lag a few seconds) */
async function stepAdvance(p) {
  for (let i = 0; i < 8 && S.pending === p; i++) {
    try { await checkPending(); } catch {}
    if (S.pending !== p || current !== 'sign') return;
    await sleep(2500);
  }
}
async function checkPending() {
  const p = S.pending; if (!p) return; errSet('signErr');
  if (p.op === 'pack') {
    const d = await hookState(p.box.h, L.boxKey(p.box.vc)); const b = parseBox(d);
    if (!b) return errSet('signErr', t('notYet'));
    p.box.nonce = b.nonce; p.shown = true; save(); return finishPack();
  }
  if (p.op === 'claim') {
    let b = parseBox(await hookState(p.h, L.boxKey(p.vc)));
    for (let i = 0; i < 6 && b && b.status === 0; i++) { await sleep(2000); if (S.pending !== p) return; b = parseBox(await hookState(p.h, L.boxKey(p.vc))); } // the ledger may lag a few seconds
    if (b && b.status === 0) return errSet('signErr', t('notYet'));
    if (b && b.status === 2) { errSet('signErr', t('stClaiming')); await sleep(4000); return checkPending(); }
    return finishClaim();
  }
  if (p.op === 'open') {
    const d = await hookState(p.h, L.boxKey(p.vc)); if (d) return errSet('signErr', t('notYet'));
    S.pending = null; save(); stDirty(); toast('✓'); return enterBoxes();
  }
  if (p.op === 'mint') {
    const tok = await uriToken(p.tid).catch(() => null);
    if (!tok || tok.Owner !== p.tx.Account) return errSet('signErr', t('notYet'));
    const form = p.form; S.pending = null; save(); stDirty();
    await enterCreate(Object.assign({}, form, { key: p.tid })); return autoPack(p);
  }
  if (p.op === 'gmint') {
    const tok = await uriToken(p.tid).catch(() => null);
    if (!tok || tok.Owner !== p.tx.Account) return errSet('signErr', t('notYet'));
    const form = p.form; S.pending = null; save(); stDirty();
    return enterCreate(Object.assign({}, form, { gift: p.tid, giftNew: true }));
  }
  if (p.op === 'remit') {
    const tok = await uriToken(p.tx.URITokenIDs[0]); if (!tok || tok.Owner !== p.tx.Destination) return errSet('signErr', t('notYet'));
    const back = p.back; if (back && back.box) back.box.sentTo = p.tx.Destination; if (acct && acct.tokens) acct.tokens = acct.tokens.filter(x => x.index !== p.tx.URITokenIDs[0]); if (sel.key === p.tx.URITokenIDs[0]) { sel.key = null; sel.fresh = null; } S.pending = back || null; save(); return showSent(p);
  }
}

/* After Xaman: the tab may be reloaded, a new tab may open, or the live answer may never arrive.
   If the box being packed is already on the ledger, show its link/QR right away. */
let resuming = false;
/* back from Xaman (reload, new tab or tab switch) while opening a box: if the ledger already shows it opened, show that right away */
let resumingC = false;
/* back from Xaman after minting a key/gift token: if the token is already on the ledger, go on to the next step with it selected */
let resumingM = false;
/* the key was made by «Build box»: go on to packing with it (second signature) */
let justMinted = null;
function autoPack(p) { if (p.auto && current === 'create' && sel.key === p.tid && kind() === 'token') { justMinted = p.tid; try { $('packBtn').onclick(); } finally { justMinted = null; } } }
async function resumeRemit() {
  const p = S.pending; if (resumingM || !p || p.op !== 'remit' || current !== 'sign') return false;
  resumingM = true;
  try { const tok = await uriToken(p.tx.URITokenIDs[0]).catch(() => null); if (tok && tok.Owner === p.tx.Destination && S.pending === p) { await checkPending(); return true; } return false; }
  catch { return false; } finally { resumingM = false; }
}
async function resumeMint(any) {
  const p = S.pending; if (resumingM || !p || (p.op !== 'mint' && p.op !== 'gmint')) return false;
  if (!any && !['sign', 'create'].includes(current)) return false;
  resumingM = true;
  try {
    const tok = await uriToken(p.tid).catch(() => null);
    if (!tok || tok.Owner !== p.tx.Account || S.pending !== p) return false;
    const form = p.form; S.pending = null; save(); stDirty();
    await enterCreate(Object.assign({}, form, p.op === 'mint' ? { key: p.tid } : { gift: p.tid, giftNew: true }));
    if (p.op === 'mint') autoPack(p);
    return true;
  } catch { return false; } finally { resumingM = false; }
}
let resumingO = false;
async function resumeOpen() {
  const p = S.pending; if (resumingO || !p || p.op !== 'open' || current !== 'sign') return;
  resumingO = true;
  try { const d = await hookState(p.h, L.boxKey(p.vc)); if (!d && S.pending === p) await checkPending(); } catch {} finally { resumingO = false; }
}
async function resumeClaim() {
  const p = S.pending; if (resumingC || !p || p.op !== 'claim' || current !== 'sign') return;
  resumingC = true;
  try { const b = parseBox(await hookState(p.h, L.boxKey(p.vc))); if (S.pending === p && current === 'sign' && (!b || b.status !== 0)) await checkPending(); }
  catch {} finally { resumingC = false; }
}
async function resumePack() {
  const p = S.pending; if (resuming || !p || p.op !== 'pack' || p.shown || p.box.net !== S.net || ['done', 'open', 'opened'].includes(current)) return;
  resuming = true;
  try { const b = parseBox(await hookState(p.box.h, L.boxKey(p.box.vc))); if (b && S.pending === p && !['done', 'open', 'opened'].includes(current)) { p.box.nonce = b.nonce; p.shown = true; save(); toast(t('boxRestored')); await finishPack(); } }
  catch {} finally { resuming = false; }
}

/* ---------- DONE: QR picture ---------- */
let doneLink = '';
async function finishPack(only) {
  stDirty();
  const b = only || S.pending.box;
  let q;
  if (b.kind === 'bearer') q = { v: 14, h: b.h, b: b.priv };
  else if (b.kind === 'named') {
    if (!b.sig) { const msg = L.claimMessage({ opener: b.named, vc: b.vc, hook: b.h, networkId: C.NETWORKS[b.net].networkId, exp: b.exp, tid: b.tid, amt: b.amt, nonce: b.nonce }); b.sig = L.signClaim(b.priv, msg); }
    q = { v: 14, h: b.h, a: b.named, p: b.pub, s: b.sig };
  } else q = { v: 14, h: b.h, c: b.vc };
  q.n = C.NETWORKS[b.net].networkId;
  if (!S.history.find(x => x.vc === b.vc)) S.history.push({ vc: b.vc, h: b.h, net: b.net, kind: b.kind, created: b.created, ktid: b.ktid || null });
  vaultPut(b);
  if (only) S.pending = { op: 'pack', box: b, audit: false, shown: true };
  save();
  doneLink = qrLink(makeQr(q));
  doneFrom = only ? 'boxes' : 'home';
  if (!only) { createFor = null; wStep = 1; sel.gift = null; sel.key = null; sel.fresh = null; $('amtInput').value = ''; if (acct && b.ktid) { acct.keyOf.add(b.ktid); acct.tokens = acct.tokens.filter(x => x.index !== b.ktid || !b.sentTo); } $('expSel').value = '0'; } // box made: next "Create" starts from step 1
  show('done');
  const kb = b.kind === 'token';
  $('boxImgWrap').classList.toggle('hide', kb); $('linkFoot').classList.toggle('hide', kb); $('keyPart').classList.toggle('hide', !kb);
  document.querySelector('#s-done .donehead').classList.toggle('kd', kb);
  { const hh = document.querySelector('#s-done .donehead h2'); hh.dataset.t = kb ? 'kdBoxT' : 'boxReady'; hh.textContent = t(hh.dataset.t); }
  if (!kb) await drawBox(doneLink);
  $('bearerWarn').classList.toggle('hide', b.kind !== 'bearer');
  $('handKey').classList.toggle('hide', b.kind !== 'token' || !!b.sentTo);
  const gtok = !isZero(b.tid) && acct && acct.tokens ? acct.tokens.find(x => x.index === b.tid) : null;
  $('gcPwRemind').classList.toggle('hide', !(gtok && gcTok(gtok)));
  $('doneNext').textContent = t(b.kind === 'token' ? 'doneNextKey' : 'doneNextLink'); $('doneNext').classList.toggle('hide', b.kind === 'token');
  const info = $('doneInfo'); info.textContent = '';
  if (b.sentTo) info.append(h('div', { class: 'ok' }, '✓ ' + t('keySentTo') + ' ' + short(b.sentTo)));
  const parts = []; if (BigInt('0x' + b.amt)) parts.push(dropsToXah(BigInt('0x' + b.amt)) + ' XAH'); if (!isZero(b.tid)) parts.push(gtok && gcTok(gtok) ? '🔒 ' + t('gcTokName') : '1 URIToken');
  const cRow = row(t('contents'), parts.join(' + '), 'yel'); info.append(cRow); if (!isZero(b.tid)) info.append(row(t('tokNum'), short(b.tid))); info.append(row(t('kind'), t(b.kind + 'Kind')));
  if (!isZero(b.tid) && !gtok) uriToken(b.tid).then(n => { if (n && gcTok(n) && cRow.isConnected) { cRow.querySelector('b').textContent = parts.join(' + ').replace('1 URIToken', '🔒 ' + t('gcTokName')); $('gcPwRemind').classList.remove('hide'); } }).catch(() => {});
  if (b.kind === 'named') info.append(row(t('signedFor'), short(b.named)));
  if (b.kind === 'token') { info.append(h('p', { class: 'sm' }, t('kdStays').replace('{a}', shortL(b.h)))); const ki = $('keyInfo'); ki.textContent = ''; ki.append(row(t('kdKeyNo'), short(b.ktid), 'yel')); }
  info.append(row(t('expires'), b.exp !== '00000000' ? t('expAt') + ' ' + parseInt(b.exp, 16) : t('limitNone')), row(t('boxNumber'), short(b.vc)), row('Network', C.NETWORKS[b.net].label));
  if (b.kind === 'token' && b.tx && /^[0-9A-F]{64}$/i.test(b.tx)) info.append(exTx(b.tx.toUpperCase()));
}
function loadImg(src) { return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; }); }
async function drawBox(link) {
  const cv = $('boxCanvas'), ctx = cv.getContext('2d');
  const bg = await loadImg('img/box.jpg?v=2'); cv.width = bg.width; cv.height = bg.height; ctx.drawImage(bg, 0, 0);
  const qr = await loadImg(await L.qrDataURL(link, { margin: 1, width: 600, errorCorrectionLevel: 'H' }));
  const ico = await loadImg('img/icon-512.png?v=3').catch(() => null);
  // White rounded card, bottom-right (keeps the X mark visible), "OPEN BOX" under the QR.
  const size = 300, pad = 14, x = cv.width - size - 64, y = cv.height - size - 60;
  const cx = x - pad, cy = y - pad - 10, cw = size + 2 * pad, ch = size + 2 * pad + 44;
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.roundRect(cx, cy, cw, ch, 22); ctx.fill();
  ctx.imageSmoothingEnabled = false; ctx.drawImage(qr, cx + pad, cy + pad, size, size);
  if (ico) { const s = Math.round(size * 0.22), ix = cx + pad + (size - s) / 2, iy = cy + pad + (size - s) / 2; ctx.fillStyle = '#fff'; ctx.fillRect(ix, iy, s, s); ctx.imageSmoothingEnabled = true; ctx.drawImage(ico, ix + 4, iy + 4, s - 8, s - 8); }
  ctx.fillStyle = '#101C4A'; ctx.font = 'bold 26px "DejaVu Sans",Arial,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('OPEN BOX', cx + cw / 2, cy + size + pad + 6);
}
function canvasBlob() { return new Promise(r => $('boxCanvas').toBlob(r, 'image/jpeg', 0.92)); }
$('dlBtn').onclick = async () => { const b = await canvasBlob(); const a = h('a', { href: URL.createObjectURL(b), download: 'xahau-box.jpg' }); document.body.append(a); a.click(); a.remove(); };
$('shareBtn').onclick = async () => {
  const b = await canvasBlob(); const f = new File([b], 'xahau-box.jpg', { type: 'image/jpeg' });
  if (navigator.canShare && navigator.canShare({ files: [f] })) { try { await navigator.share({ files: [f], title: 'Xahau Box' }); } catch {} } else copy(doneLink);
};
$('copyLinkBtn').onclick = () => copy(doneLink);
$('shareLinkBtn').onclick = async () => { if (navigator.share) { try { await navigator.share({ url: doneLink, title: 'Xahau Box' }); } catch {} } else copy(doneLink); };
$('handBtn').onclick = () => {
  const to = $('handAddr').value.trim(); const out = $('handOut'); out.textContent = '';
  if (!L.isAddress(to)) { out.append(h('p', { class: 'err-line' }, t('needAccount'))); return; }
  const back = S.pending; S.pending = { op: 'remit', tx: remitTx(back.box.h, to, back.box.ktid), back }; save();
  out.append(h('p', { class: 'sm' }, t('remitHint'))); enterSign();
};
$('doneFinish').onclick = () => { S.pending = null; save(); createFor = null; show('home'); };

/* ---------- OPEN (recipient) ---------- */
let openQ = null, openBox = null;
function enterOpen(text) {
  show('open'); errSet('openErr'); $('boxView').textContent = '';
  if (text) { $('qrInput').value = text.includes('tgs1:') ? text.slice(text.indexOf('tgs1:')) : text; showBox(); }
}
$('qrGo').onclick = () => showBox();
$('qrPaste').onclick = async () => {
  errSet('openErr');
  let txt = ''; try { txt = await navigator.clipboard.readText(); } catch {}
  if (!txt) { $('qrInput').focus(); return errSet('openErr', t('pasteManual')); }
  $('qrInput').value = txt.trim(); showBox();
};
async function showBox() {
  errSet('openErr'); const v = $('boxView'); v.textContent = '';
  const q = parseQr($('qrInput').value); if (!q) return errSet('openErr', t('badQr'));
  if (q.n) { const nk = Object.keys(C.NETWORKS).find(k => C.NETWORKS[k].networkId === q.n); if (nk && nk !== S.net) { S.net = nk; save(); applyNet(); renderAcct(); toast(t('netSwitched') + ': ' + NET().label); } }
  openQ = q; v.append(h('div', { class: 'spin sm' }));
  let b, ktid = null, holder = null, tok = null, cur, by = null;
  try {
    const bk = L.boxKey(q.vc);
    [b, cur] = [parseBox(await hookState(q.h, bk)), await currentLedger()];
    if (b) { const m = await hookState(q.h, L.modeKey(bk)); if (m && m.startsWith('01')) { ktid = m.slice(2); const kt = await uriToken(ktid); holder = kt ? kt.Owner : null; } if (!isZero(b.tid)) tok = await uriToken(b.tid); by = await boxCreator(q.h, bk); }
  } catch (e) { v.textContent = ''; return errSet('openErr', e.message); }
  openBox = b ? Object.assign(b, { ktid, holder, tok, cur }) : null;
  v.textContent = '';
  const card = h('div', { class: 'card' });
  const rest = h('div', { class: 'giftrest' }, h('div', { class: 'hero sm' }, h('img', { src: 'img/hero2.jpg', alt: '' })), card);
  v.append(rest);
  if (b && b.status === 0) {
    const a0 = BigInt('0x' + b.amt), gp = []; if (a0) gp.push(dropsToXah(a0) + ' XAH'); if (tok) gp.push(gcTok(tok) ? t('gcTag') : '1 URIToken');
    const gc = h('div', { class: 'giftcard' },
      h('div', { class: 'gicon' }, window.BOX_ICON ? window.BOX_ICON('gift', 'gbig') : '🎁'),
      h('div', { class: 'gtitle' }, t('giftTitle')),
      L.isAddress(q.h) ? h('div', { class: 'gfrom' }, t('giftFrom') + ' ' + short(q.h)) : null,
      by ? h('div', { class: 'gfrom' }, t('boxBy') + ': ' + by.slice(0, 7) + '…' + by.slice(-5) + ' · ' + t('boxByNote')) : null,
      tok && gcTok(tok) ? gcWarn() : null,
      gp.length ? h('div', { class: 'ginside' }, t('giftInside') + ': ' + gp.join(' + ')) : null,
      h('button', { class: 'btn navy', type: 'button', onclick: () => { gc.remove(); rest.classList.remove('hide'); } }, t('giftSee')));
    rest.classList.add('hide'); v.prepend(gc);
  }
  if (!b) { card.append(row(t('status'), t('stGone'), 'bad'), row(t('boxNumber'), short(q.vc))); return; }
  const amt = BigInt('0x' + b.amt), parts = []; if (amt) parts.push(dropsToXah(amt) + ' XAH'); if (tok) parts.push(gcTok(tok) ? '🔒 ' + t('gcTokName') : '1 URIToken');
  card.append(row(t('contents'), parts.join(' + '), 'yel'));
  if (by) card.append(creatorRow(by));
  if (tok && gcTok(tok)) card.append(gcWarn());
  if (tok) card.append(tokenCard(tok, { big: true }));
  const ekind = ktid ? 'token' : q.kind;
  card.append(row(t('kind'), t(ekind + 'Kind')));
  if (q.kind === 'named') card.append(row(t('signedFor'), short(q.a)));
  { const xm = xstate && xstate.me && xstate.me.account; if (q.kind === 'named' && xm && xm !== q.a) card.append(h('div', { class: 'card warn' }, t('namedOnly').replace('{a}', short(q.a)))); }
  if (ktid) card.append(row(t('keyHolder'), short(holder || '?')));
  const expN = parseInt(b.exp, 16);
  if (expN) card.append(liveRow()); card.append(row(t('ledgerExp'), expN ? String(expN) : t('limitNone')));
  if (expN) card.append(leftRow(expN, cur));
  card.append(stRow(b, expN, b.status === 0 ? 'ok' : 'yel'), row(t('boxNumber'), short(q.vc)));
  renderLive(false);
  // opener
  const opener = h('input', { class: 'inp', id: 'openerAddr', placeholder: 'r...', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
  const xme0 = xstate && xstate.me && xstate.me.account;
  opener.value = xme0 || (S.account ? S.account.address : '') || (q.kind === 'named' ? q.a : '');
  const msg = h('p', { class: 'err-line' });
  rest.append(h('div', { class: 'card' }, h('div', { class: 'lbl' }, t('youOpen')), opener, msg,
    h('button', { class: 'btn y', type: 'button', disabled: b.status !== 0 || null, onclick: () => buildClaim(opener.value.trim(), msg) }, '🎁 ' + t('openNow'))));
}
function buildClaim(who, msg) {
  msg.textContent = '';
  const q = openQ, b = openBox;
  if (!L.isAddress(who)) return (msg.textContent = t('needOpener'));
  const expN = parseInt(b.exp, 16); if (expN && curLedger(b.cur) > expN) return (msg.textContent = t('expired'));
  let tx;
  if (b.ktid) { if (b.holder !== who) return (msg.textContent = t('notHolder')); tx = claimTokTx(who, q.h, q.vc); }
  else if (q.kind === 'named') { if (q.a !== who) return (msg.textContent = t('namedOnly').replace('{a}', short(q.a))); tx = claimKeyTx(who, q.h, q.p.toUpperCase(), q.s.toUpperCase()); }
  else if (q.kind === 'bearer') { const m = L.claimMessage({ opener: who, vc: q.vc, hook: q.h, networkId: NET().networkId, exp: b.exp, tid: b.tid, amt: b.amt, nonce: b.nonce }); tx = claimKeyTx(who, q.h, q.pub, L.signClaim(q.b, m)); }
  else return (msg.textContent = t('notHolder'));
  const xmeB = xstate && xstate.me && xstate.me.account;
  if (!xmeB && (!S.account || S.account.address !== who)) { S.account = { address: who, via: 'json' }; renderAcct(); }
  S.pending = { op: 'claim', tx, h: q.h, vc: q.vc, k: q.k || null, t: q.t || null, amt: b.amt, tid: b.tid, from: q.from || null }; save();
  enterSign();
}
async function finishClaim() {
  stDirty();
  const p = S.pending; show('opened');
  const info = $('openedInfo'); info.textContent = '';
  const amt = BigInt('0x' + p.amt); if (amt) info.append(row(t('received'), dropsToXah(amt) + ' XAH', 'yel'));
  if (!isZero(p.tid)) { const tok = await uriToken(p.tid).catch(() => null); if (tok) info.append(tokenCard(tok, { big: true, reveal: true })); if (tok && p.k) { const code = await giftCode(tok.URI, p.k); if (code) info.append(row(t('giftCode'), code, 'yel')); }
    if (tok && gcTok(tok)) info.append(h('div', { class: 'card warn' }, h('p', null, t('gcGotHint')), h('button', { class: 'btn y', type: 'button', onclick: () => enterCodes() }, t('myCodes')), h('p', { class: 'sm' }, t('askPwEg')), h('a', { class: 'btn o', href: C.EVERGRAM_URL, target: '_blank', rel: 'noopener noreferrer' }, h('img', { class: 'evi', src: 'img/evergram-logo.png', alt: '' }), 'Evergram'))); }
  S.pending = null; save();
}
// Optional gift code: token URI "tgsE1:" + base64url(1 | iv12 | tag16 | ciphertext), AES-256-GCM key "k" from the QR.
async function giftCode(uriHex, kHex) {
  try {
    const u = hexToText(uriHex); if (!u || !u.startsWith('tgsE1:')) return null;
    const raw = Uint8Array.from(unb64u(u.slice(6)), c => c.charCodeAt(0));
    if (raw[0] !== 1) return null;
    const iv = raw.slice(1, 13), tag = raw.slice(13, 29), ct = raw.slice(29);
    const key = await crypto.subtle.importKey('raw', L.hex.fromHex(kHex), 'AES-GCM', false, ['decrypt']);
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, new Uint8Array([...ct, ...tag]));
    return new TextDecoder().decode(pt);
  } catch { return null; }
}
$('openedHome').onclick = () => show('home');
/* key token handed over: its own result screen, like after packing or opening */
let sentFrom = 'boxes';
function showSent(p) {
  const back = p.back, to = p.tx.Destination, nonce = back && back.box ? back.box.nonce : p.nonce;
  sentFrom = p.from === 'inbox' ? 'inbox' : 'boxes';
  show('sent');
  const info = $('sentInfo'); info.textContent = '';
  info.append(row(t('sentTo'), short(to), 'yel'), row(t('sentKeyNo'), short(p.tx.URITokenIDs[0])));
  if (nonce !== undefined && nonce !== null) info.append(row(t('sentBox'), '#' + nonce));
  if (back && back.box && back.box.vc) info.append(row(t('boxNumber'), short(back.box.vc)));
  if (p.tx.Account) info.append(row('Network', C.NETWORKS[S.net].label));
  window.scrollTo(0, 0);
}
$('sentBoxes').onclick = () => enterBoxes();
$('sentHome').onclick = () => show('home');

/* QR scanning: camera (getUserMedia) or a photo; decoded locally with jsQR */
let scanStream = null;
async function scanFrameLoop(video) {
  const cv = document.createElement('canvas'), ctx = cv.getContext('2d', { willReadFrequently: true });
  while (scanStream) {
    if (video.readyState >= 2) { cv.width = video.videoWidth; cv.height = video.videoHeight; ctx.drawImage(video, 0, 0); const r = L.decodeQR(ctx.getImageData(0, 0, cv.width, cv.height)); if (r) { stopScan(); $('qrInput').value = r; return showBox(); } }
    await sleep(250);
  }
}
function stopScan() { if (scanStream) scanStream.getTracks().forEach(x => x.stop()); scanStream = null; $('scanBox').classList.add('hide'); }
$('scanBtn').onclick = async () => {
  try { scanStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }); } catch (e) { return errSet('openErr', e.message); }
  const v = $('scanVideo'); v.srcObject = scanStream; $('scanBox').classList.remove('hide'); await v.play(); scanFrameLoop(v);
};
$('scanStop').onclick = stopScan;
$('qrFile').onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  const img = await loadImg(URL.createObjectURL(f)); const cv = document.createElement('canvas'); const sc = Math.min(1, 1600 / Math.max(img.width, img.height));
  cv.width = img.width * sc; cv.height = img.height * sc; const ctx = cv.getContext('2d'); ctx.drawImage(img, 0, 0, cv.width, cv.height);
  const r = L.decodeQR(ctx.getImageData(0, 0, cv.width, cv.height)); if (!r) return errSet('openErr', t('badQr')); $('qrInput').value = r; showBox();
};

/* "Check in explorer": this box's own transactions only (PACK / CLAIM / key hand-over), never the hook install */
function exBlock(list) {
  list = list.filter(x => x && /^[0-9A-F]{64}$/i.test(x[1] || ''));
  if (!list.length) return null;
  return h('div', { class: 'exbox' }, h('div', { class: 'lbl' }, t('exCheck')),
    list.map(([k, hs]) => h('div', { class: 'exitem' }, h('div', { class: 'sm exk' }, t(k)), exTx(hs.toUpperCase()))));
}
/* ---------- MY BOXES (creator) ---------- */
const boxOpen = new Set();
function boxCard(b, kn, lk, pk, ks) {
  const amt = BigInt('0x' + b.amt), expN = parseInt(b.exp, 16), hasTok = !isZero(b.tid);
  const gone = expN && acct.cur && acct.cur > expN && b.status === 0;
  const st = h('span', { class: 'bst' + (b.status === 0 ? (gone ? ' bad' : ' ok') : ' yel') }, b.status === 0 ? (gone ? t('stExpired') : t('stClosed')) : t('stClaiming'));
  if (expN && b.status === 0) { st.dataset.stexp = String(expN); st.dataset.stok = t('stClosed'); st.dataset.stcls = 'ok'; }
  const sumTxt = h('span', { class: 'bsum' }, [amt ? dropsToXah(amt) + ' XAH' : null, hasTok ? '1 URIToken' : null].filter(Boolean).join(' + ') || t('bxEmpty'));
  const head = h('button', { class: 'bhead', type: 'button', 'aria-expanded': 'false' },
    h('span', { class: 'bn' }, '#' + b.nonce),
    h('span', { class: 'bbadge' + (b.ktid ? ' key' : '') }, b.ktid ? '🔑 ' + t('tokenKind') : '🔗 ' + t('kLink')),
    h('span', { class: 'bchev', 'aria-hidden': 'true' }, '▾'),
    h('span', { class: 'bmeta' }, st, sumTxt));
  const inside = h('div', { class: 'binside' }, h('div', { class: 'lbl' }, t('bxInside')));
  if (amt) inside.append(row('XAH', dropsToXah(amt) + ' XAH', 'yel'));
  if (hasTok) {
    const tr = row('URIToken', short(b.tid)); inside.append(tr);
    const slot = h('div'); inside.append(slot);
    uriToken(b.tid).then(tok => {
      if (!tok) return;
      if (gcTok(tok)) { tr.lastChild.textContent = t('gcTag') + ' · ' + short(b.tid); sumTxt.textContent = [amt ? dropsToXah(amt) + ' XAH' : null, t('gcTag')].filter(Boolean).join(' + '); }
      slot.append(tokenCard(tok));
    }).catch(() => {});
  }
  if (!amt && !hasTok) inside.append(h('p', { class: 'sm' }, t('bxEmpty')));
  const body = h('div', { class: 'bbody hide' }, inside,
    row(t('kind'), b.ktid ? t('tokenKind') : t('kLink')),
    stRow(b, expN), row(t('ledgerExp'), expN ? String(expN) : t('limitNone')), expN ? leftRow(expN, acct.cur) : null,
    row(t('bxNo'), '#' + b.nonce), row(t('boxNumber'), kn ? short(kn.vc) : t('vcUnknown')),
    b.ktid ? row(t('bxKeyTok'), short(b.ktid)) : null);
  if (lk && !b.ktid) body.append(h('button', { class: 'btn y', type: 'button', onclick: () => { lk.nonce = b.nonce; finishPack(lk); } }, t('showLink')));
  if (b.ktid && ks) {
    const x = ks.x || {}, ok = ks.st === 'sent';
    const kb = h('div', { class: 'card ' + (ks.st === 'gone' ? 'warn' : 'ok') + ' kxfer' },
      h('div', { class: 'row' }, h('b', { class: ks.st === 'sent' ? 'ok' : ks.st === 'gone' ? 'bad' : 'yel' }, ks.st === 'sent' ? '✅ ' + t('kxSent') : ks.st === 'offer' ? '⏳ ' + t('kxOffer') : '⚠️ ' + t('mbKeyGone'))),
      row(t('kxMode'), x.mode === 'offer' || ks.st === 'offer' ? t('kxModeOffer') : t('kxModeRemit')),
      ks.to ? row(t('kxTo'), ks.to.slice(0, 6) + '…') : null,
      x.date ? row(t('mbWhen'), new Date(x.date).toLocaleString(S.lang)) : null,
      h('p', { class: 'sm' }, ks.st === 'sent' ? t('kxSentNote') : ks.st === 'offer' ? t('kxOfferNote') : ''),
      exBlock([['kxTx', x.hash]]));
    body.append(kb);
    if (ok) head.querySelector('.bst').textContent = t('kxSentShort');
  } else if (b.ktid) body.append(keyHandCard(b.ktid, 'boxes', b.nonce));
  if (kn) {
    const keyGone = !!(b.ktid && ks && ks.st === 'gone'), expGone = !!(expN && curLedger(acct.cur) > expN);
    if (expGone || keyGone) body.append(h('button', { class: 'btn o', type: 'button', onclick: () => startOpen(kn.vc) }, t('takeBack')));
    else body.append(h('p', { class: 'sm' }, t(expN ? 'takeBackWait' : 'takeBackNever')));
  }
  { const ex = exBlock([['exPack', pk && pk.hash]]); body.append(ex || h('p', { class: 'sm' }, t('exNone'))); }
  const c = h('div', { class: 'card bcard' }, head, body);
  const set = on => { body.classList.toggle('hide', !on); c.classList.toggle('open', on); head.setAttribute('aria-expanded', String(on)); };
  head.onclick = () => { const on = !boxOpen.has(b.nonce); if (on) boxOpen.add(b.nonce); else boxOpen.delete(b.nonce); set(on); };
  set(boxOpen.has(b.nonce));
  return c;
}
/* ---------- BOXES FOR ME (key tokens this account holds -> the box on the issuer's hook) ----------
   Only key-token boxes can be found this way (link/QR boxes are known only to whoever has the link).
   The box record comes from the issuer's hook state; the box number (VC) needed for CLAIM is public in
   the issuer's PACK transaction, and only the current key holder can use it. */
const inboxCache = { at: 0, id: '', p: null };
async function findInbox(force) {
  const me = S.account && S.account.address; if (!me) return [];
  const id = S.net + ':' + me;
  if (!force && inboxCache.id === id && inboxCache.p && Date.now() - inboxCache.at < 60000) return inboxCache.p;
  inboxCache.id = id; inboxCache.at = Date.now();
  inboxCache.p = (async () => {
    const [objs, cur] = await Promise.all([accountObjects(me, 'uri_token'), currentLedger()]);
    const keys = objs.filter(o => o.LedgerEntryType === 'URIToken' && o.Owner === me && o.Issuer !== me && keyTokenId(o));
    const byIss = new Map(); for (const k of keys) { if (!byIss.has(k.Issuer)) byIss.set(k.Issuer, []); byIss.get(k.Issuer).push(k); }
    const out = [];
    for (const [iss, ks] of byIss) {
      let st = new Map(); try { st = new Map((await nsEntries(iss)).map(e => [e.HookStateKey, e.HookStateData])); } catch {}
      const want = new Map(ks.map(k => [k.index.toUpperCase(), k]));
      const found = new Set();
      for (const [k, d] of st) {
        if (d.length !== 170) continue; const m = st.get(L.modeKey(k));
        if (!m || m.length !== 66 || !m.startsWith('01')) continue; const kt = m.slice(2).toUpperCase();
        if (!want.has(kt)) continue; const b = parseBox(d); if (!b) continue;
        found.add(kt); out.push(Object.assign(b, { key: k, h: iss, ktid: kt, keyTok: want.get(kt), cur }));
      }
      for (const [kt, k] of want) if (!found.has(kt)) out.push({ gone: true, h: iss, ktid: kt, keyTok: k, cur });
    }
    return out.sort((a, c) => (a.gone ? 1 : 0) - (c.gone ? 1 : 0) || (c.nonce || 0) - (a.nonce || 0));
  })().catch(e => { inboxCache.at = 0; throw e; });
  return inboxCache.p;
}
const inboxOpenable = b => !b.gone && b.status === 0 && !(parseInt(b.exp, 16) && curLedger(b.cur) > parseInt(b.exp, 16));
async function inboxBadge() {
  const btn = $('goInbox'), n = $('inboxN');
  if (!S.account) { btn.classList.add('hide'); return; }
  btn.classList.remove('hide'); n.textContent = '';
  try { const l = await findInbox(); const c = l.filter(inboxOpenable).length; n.textContent = c ? String(c) : ''; n.classList.toggle('hide', !c); } catch { n.classList.add('hide'); }
}
/* the box number (VC) from the issuer's own PACK for this key token; checked against the box's state key */
async function packVc(iss, ktid, bk) {
  const nm = x => hexToText(x || '');
  let marker;
  for (let i = 0; i < 10; i++) {
    const r = await rpc('account_tx', Object.assign({ account: iss, ledger_index_min: -1, ledger_index_max: -1, limit: 200, forward: false }, marker ? { marker } : {}));
    for (const e of r.transactions || []) {
      const tx = e.tx || e.tx_json || {}; if (tx.TransactionType !== 'Invoke' || tx.Account !== iss || !tx.HookParameters) continue;
      if (e.meta && e.meta.TransactionResult !== 'tesSUCCESS') continue;
      const ps = {}; for (const x of tx.HookParameters) ps[nm(x.HookParameter.HookParameterName)] = String(x.HookParameter.HookParameterValue || '').toUpperCase();
      if (ps.CMD !== '5041434B' || ps.KTID !== ktid || !/^[0-9A-F]{64}$/.test(ps.VC || '')) continue;
      if (L.boxKey(ps.VC).toUpperCase() === bk.toUpperCase()) return ps.VC;
    }
    marker = r.marker; if (!marker) break;
  }
  return null;
}
function inboxCard(b) {
  const me = S.account.address;
  const c = h('div', { class: 'card' + (inboxOpenable(b) ? ' inbox' : '') });
  if (b.gone) {
    c.append(row(t('tokenKind'), short(b.ktid)), row(t('inboxFrom'), short(b.h)), row(t('status'), t('stGone'), 'bad'), h('p', { class: 'sm' }, t('inboxGone')));
    return c;
  }
  const amt = BigInt('0x' + b.amt), hasTok = !isZero(b.tid), expN = parseInt(b.exp, 16);
  const sum = h('b', { class: 'yel' }, [amt ? dropsToXah(amt) + ' XAH' : null, hasTok ? '1 URIToken' : null].filter(Boolean).join(' + ') || t('bxEmpty'));
  c.append(h('div', { class: 'row' }, h('span', { class: 'ibn' }, '🎁 #' + b.nonce), sum), row(t('inboxFrom'), short(b.h)), stRow(b, expN, b.status === 0 ? 'ok' : 'yel'));
  const ins = h('div', { class: 'binside' }, h('div', { class: 'lbl' }, t('bxInside')));
  if (amt) ins.append(row('XAH', dropsToXah(amt) + ' XAH', 'yel'));
  let tok = null;
  if (hasTok) {
    const tr = row('URIToken', short(b.tid)), slot = h('div'); ins.append(tr, slot);
    uriToken(b.tid).then(x => { tok = x; if (!x) return; if (gcTok(x)) { tr.lastChild.textContent = t('gcTag') + ' · ' + short(b.tid); sum.textContent = [amt ? dropsToXah(amt) + ' XAH' : null, t('gcTag')].filter(Boolean).join(' + '); slot.append(h('p', { class: 'sm' }, t('inboxGcNote'))); } slot.append(tokenCard(x)); }).catch(() => {});
  }
  c.append(ins, row(t('ledgerExp'), expN ? String(expN) : t('limitNone')));
  if (expN) c.append(leftRow(expN, b.cur));
  c.append(row(t('bxKeyTok'), short(b.ktid)));
  { const fr = row(t('kFromWho'), short(b.h)); c.append(fr); keyMoves(me).then(m => { const x = m.inn.get(String(b.ktid).toUpperCase()); if (x) fr.lastChild.textContent = short(x.from); }).catch(() => {}); }
  const msg = h('p', { class: 'err-line' });
  const go = h('button', { class: 'btn y big', type: 'button', disabled: inboxOpenable(b) ? null : true, onclick: async () => {
    msg.textContent = ''; go.disabled = true;
    try {
      const [kt, vc] = await Promise.all([uriToken(b.ktid), packVc(b.h, b.ktid, b.key)]);
      if (!kt || kt.Owner !== me) { go.disabled = false; return (msg.textContent = t('notHolder')); }
      if (!vc) { go.disabled = false; return (msg.textContent = t('inboxNoVc')); }
      if (!tok && hasTok) tok = await uriToken(b.tid).catch(() => null);
      openQ = { h: b.h, vc, kind: 'token', from: 'inbox' };
      openBox = Object.assign({}, b, { holder: kt.Owner, tok, cur: await currentLedger() });
      go.disabled = false; buildClaim(me, msg);
    } catch (e) { go.disabled = false; msg.textContent = e.message; }
  } }, '🎁 ' + t('inboxOpen'));
  c.append(msg, go);
  if (inboxOpenable(b)) c.append(keyHandCard(b.ktid, 'inbox', b.nonce)); // the holder can pass the key on from the page
  if (!inboxOpenable(b)) c.append(h('p', { class: 'sm' }, b.status === 0 ? t('expired') : t('stClaiming')));
  return c;
}
/* gift codes this account holds (moved out of My boxes): open a code with its password */
async function enterCodes() {
  if (!needAccount(enterCodes, 'codes')) return;
  enterSettings('codes'); codesLoad();
}
let codesSeq = 0, codesFor = null;
async function codesLoad() {
  const seq = ++codesSeq, list = $('codesList'); errSet('codesErr'); list.textContent = ''; codesFor = null;
  if (!S.account) return list.append(h('p', { class: 'sub' }, t('gcSignIn')), h('button', { class: 'btn y', type: 'button', onclick: () => enterCodes() }, t('signInShort')));
  const me = S.account.address; codesFor = me + S.net;
  list.append(h('div', { class: 'spin sm' }));
  let v; try { v = await loadAccountView(me); } catch (e) { if (seq !== codesSeq) return; list.textContent = ''; codesFor = null; return errSet('codesErr', e.message); }
  if (seq !== codesSeq) return; acct = v; list.textContent = '';
  const gcs = v.tokens.filter(gcTok);
  if (!gcs.length) return list.append(h('p', { class: 'sub' }, t('gcNone')));
  list.append(h('div', { class: 'card gcmine' }, gcs.map(tok => tokenCard(tok, { big: true, reveal: true }))));
}
$('acc-codes').addEventListener('toggle', () => { if ($('acc-codes').open && current === 'settings' && codesFor !== (S.account ? S.account.address + S.net : null)) codesLoad(); });
/* hand a box's key token to someone later, from the boxes list (a plain Remit, the hook does not take part) */
function keyHandCard(ktid, from = 'boxes', nonce) {
  const inp = h('input', { class: 'inp', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: t('recipientPh') });
  const out = h('div');
  const go = h('button', { class: 'btn w', type: 'button', onclick: async () => {
    out.textContent = ''; const to = inp.value.trim(), me = S.account && S.account.address;
    if (!L.isAddress(to)) return out.append(h('p', { class: 'err-line' }, t('needAccount')));
    if (to === me) return out.append(h('p', { class: 'err-line' }, t('keySelf')));
    go.disabled = true; out.append(h('p', { class: 'sm' }, t('keyChecking')));
    let tok;
    try { tok = await uriToken(ktid); } catch (e) { out.textContent = ''; go.disabled = false; return out.append(h('p', { class: 'err-line' }, e.message)); }
    out.textContent = ''; go.disabled = false;
    if (!tok) return out.append(h('p', { class: 'err-line' }, t('keyGone')));
    if (tok.Owner !== me) return out.append(h('p', { class: 'err-line' }, t('keyNotYours') + ' ' + short(tok.Owner)));
    S.pending = { op: 'remit', tx: remitTx(me, to, ktid), from, nonce }; save();
    enterSign();
  } }, t('buildRemit'));
  const wrap = h('div', { class: 'hide' }, h('div', { class: 'lbl' }, t('handKey')), inp, go, out);
  const open = h('button', { class: 'btn o', type: 'button', onclick: () => { wrap.classList.remove('hide'); open.classList.add('hide'); inp.focus(); } }, t('transferKey'));
  return h('div', {}, open, wrap);
}
function startOpen(vc) { S.pending = { op: 'open', tx: openTx(S.account.address, vc), h: S.account.address, vc }; save(); enterSign(); }
$('vcOpenBtn').onclick = () => { const v = $('vcInput').value.trim().toUpperCase(); if (!/^[0-9A-F]{64}$/.test(v)) return errSet('boxesErr', t('vcBad')); startOpen(v); };

/* ---------- MY BOXES (Settings and info -> 📦 My boxes): Built / Received / Sent ----------
   Built    = box records that are still locked in this account's hook state (same list as before).
   Received = boxes this account can open with a key token it holds (hook state of the key issuer),
              plus boxes this account already opened (its own successful CLAIM transactions).
   Sent     = boxes this account built that went to someone else: key token now held by another address,
              "for one address" boxes (known only from this device's records), and boxes another address
              opened (successful CLAIM transactions sent to this account's hook).
   An unopened "for anyone" link box stays in Built only: the page cannot know whether the link was sent. */
const HX = { PACK: '5041434B', CLAIM: '434C41494D', OPEN: '4F50454E' };

/* ---------- home: box statistics from the hook accounts' public history (read-only, cached) ---------- */
const STK = 'xbox.stats.v1', ST_TTL = 60 * 1000;
/* a box/token tx signed through the page succeeded: drop the cached numbers and count again shortly */
function stDirty() { try { localStorage.removeItem(STK); } catch {} clearTimeout(stDirty.t); stDirty.t = setTimeout(() => loadStats(true), 2500); }
let stBusy = '';
function stPaint(d) {
  const box = $('statsBox'); if (!box) return;
  const nf = v => v == null ? '—' : Number(v).toLocaleString(S.lang);
  box.classList.toggle('load', !d);
  $('stTotal').textContent = d ? nf(d.total) : '…';
  $('stOpen').replaceChildren(d ? h('span', null, nf(d.opened) + ' ', h('small', null, t('stOpenOf').replace('{m}', nf(d.total)))) : '…');
  const pct = d && d.total ? Math.round(d.opened * 100 / d.total) : 0;
  $('stBar').style.width = (d && d.total != null ? pct : 0) + '%';
  $('stPct').textContent = d && d.total != null ? t('stPct').replace('{p}', pct) : '';
  $('stXah').textContent = d ? (d.xah == null ? '—' : Number(dropsToXah(d.xah)).toLocaleString(S.lang, { maximumFractionDigits: 6 })) : '…';
  $('stTok').textContent = d ? nf(d.tok) : '…';
  $('stKey').textContent = d ? nf(d.key) : '…';
  $('stGc').textContent = d ? nf(d.gc) : '…';
}
async function stScan(hk) {
  const r0 = { total: 0, opened: 0, xah: 0n, tok: 0, key: 0, gc: 0 };
  const GCP = hexStr(GC.PFX), KEYRE = /\/img\/key\.jpg\?k=[0-9a-f]{16}$/;
  let marker;
  for (let i = 0; i < 50; i++) {
    const r = await rpc('account_tx', Object.assign({ account: hk, ledger_index_min: -1, ledger_index_max: -1, limit: 400, forward: false }, marker ? { marker } : {}));
    if (!r.transactions) throw new Error('no tx');
    for (const e of r.transactions) {
      const tx = e.tx || e.tx_json || {}, meta = e.meta || e.metaData || {};
      if (meta.TransactionResult !== 'tesSUCCESS') continue;
      if (tx.TransactionType === 'URITokenMint' && tx.Account === hk && tx.URI) {
        const u = String(tx.URI).toUpperCase();
        if (u.startsWith(GCP)) r0.gc++;                       // gift-code token: prefix only, never decoded
        else { const s = hexToText(u); if (s && KEYRE.test(s)) r0.key++; }
        continue;
      }
      if (tx.TransactionType !== 'Invoke' || !tx.HookParameters) continue;
      const ps = {}; for (const x of tx.HookParameters) ps[hexToText(x.HookParameter.HookParameterName || '')] = String(x.HookParameter.HookParameterValue || '').toUpperCase();
      if (ps.CMD === HX.PACK && tx.Account === hk) {
        r0.total++;
        if (/^[0-9A-F]{16}$/.test(ps.AMT || '')) r0.xah += BigInt('0x' + ps.AMT);
        if (ps.TID && !isZero(ps.TID)) r0.tok++;
      } else if (ps.CMD === HX.CLAIM && (tx.Destination || tx.Account) === hk) r0.opened++;
    }
    marker = r.marker; if (!marker) break;
  }
  return r0;
}
/* How many accounts carry the box hook network-wide: the HookDefinition's ReferenceCount. The hash is read at run time
   from the known install account's own Hook entry (never written in the page). Listing the other installers is not
   possible from a static page (it would need a full ledger scan), so only the known accounts are counted. Cached 1 h. */
const SRK = 'xbox.statsref.v2', SR_TTL = 60 * 60 * 1000;
async function stRefCount(hooks) {
  const id = S.net + ':' + hooks[0];
  try { const c = JSON.parse(localStorage.getItem(SRK)); if (c && c.id === id && Date.now() - c.at < SR_TTL) return c.n; } catch {}
  const objs = await accountObjects(hooks[0], 'hook');
  let n = null;
  for (const o of objs) for (const x of o.Hooks || []) {
    const hh = x.Hook && x.Hook.HookHash; if (!hh || n != null) continue;
    const r = await rpc('ledger_entry', { hook_definition: hh, ledger_index: 'validated' });
    const d = r.node; if (d && d.ReferenceCount != null) { const v = parseInt(String(d.ReferenceCount), 16); n = Number.isFinite(v) && v > 0 ? v : null; }
  }
  try { localStorage.setItem(SRK, JSON.stringify({ id, at: Date.now(), n })); } catch {}
  return n;
}
/* Every account that ever installed the box hook: each install/uninstall rewrites the HookDefinition, and its
   PreviousTxnID chain links those SetHook transactions one after another. Walk it back from the newest (read-only,
   from the network node only) and keep what was found, so later visits only walk the new links. Cached 1 h. */
const SIK = 'xbox.statsinst.v1', SI_TTL = 60 * 60 * 1000;
async function stInstallers(hooks) {
  const id = S.net + ':' + hooks[0];
  let c = null; try { c = JSON.parse(localStorage.getItem(SIK)); } catch {}
  if (!c || c.id !== id) c = { id, at: 0, head: null, accts: [] };
  const objs = await accountObjects(hooks[0], 'hook');
  let hh = null; for (const o of objs) for (const x of o.Hooks || []) if (!hh && x.Hook && x.Hook.HookHash) hh = x.Hook.HookHash;
  if (!hh) return c.accts;
  const r = await rpc('ledger_entry', { hook_definition: hh, ledger_index: 'validated' });
  const d = r.node; if (!d || !d.index) return c.accts;
  if (d.PreviousTxnID && d.PreviousTxnID === c.head) return c.accts;   // nothing new since last visit (2 cheap reads)
  const set = new Set(c.accts); let tx = d.PreviousTxnID, bad = false; const head = tx;
  for (let i = 0; tx && tx !== c.head && i < 3000; i++) {
    let e; try { e = await rpc('tx', { transaction: tx }); } catch { bad = true; break; }
    if (!e || !e.meta) break;                                    // the node keeps no older history (testnet)
    if (e.TransactionType === 'SetHook' && L.isAddress(e.Account)) set.add(e.Account);
    let prev = null;
    for (const n of e.meta.AffectedNodes || []) { const v = n.ModifiedNode || n.CreatedNode || n.DeletedNode; if (v && v.LedgerIndex === d.index && n.ModifiedNode) prev = v.PreviousTxnID || null; }
    tx = prev;
  }
  c = { id, at: bad ? 0 : Date.now(), head: bad ? c.head : head, accts: [...set] };
  try { localStorage.setItem(SIK, JSON.stringify(c)); } catch {}
  return c.accts;
}
async function stScanAll(list) {
  const out = []; let i = 0;
  const work = async () => { while (i < list.length) { const a = list[i++]; out.push(await stScan(a)); } };
  await Promise.all([work(), work(), work(), work()]);
  return out;
}
function stNote(k, n) {
  const e = $('stHooks'); if (!e) return;
  e.textContent = n && n > k ? t('stHooksPart').replace('{k}', k).replace('{n}', n) : t('stHooksAll').replace('{k}', k);
}
async function loadStats(force) {
  const box = $('statsBox'); if (!box) return;
  const base = ((C.STATS_HOOKS || {})[S.net]) || [];
  if (!base.length) { box.classList.add('hide'); return; }
  let hooks = base;
  try { const found = await stInstallers(base); hooks = [...new Set(base.concat(found))].sort(); } catch {}
  box.classList.remove('hide');
  stNote(hooks.length, null); stRefCount(hooks).then(n => stNote(hooks.length, n)).catch(() => {});
  const id = S.net + ':' + hooks.join(',');
  let c = null; try { c = JSON.parse(localStorage.getItem(STK)) || null; } catch {}
  const fresh = c && c.id === id && Date.now() - c.at < ST_TTL;
  if (c && c.id === id) stPaint(Object.assign({}, c.d, { xah: c.d.xah == null ? null : BigInt(c.d.xah) })); else stPaint(null);
  if ((fresh && !force) || stBusy === id) return;
  stBusy = id; const rb = $('stRefresh'); if (rb) rb.disabled = true;
  try {
    const all = await stScanAll(hooks);
    const d = all.reduce((a, b) => ({ total: a.total + b.total, opened: a.opened + b.opened, xah: a.xah + b.xah, tok: a.tok + b.tok, key: a.key + b.key, gc: a.gc + b.gc }));
    if (S.net + ':' + hooks.join(',') !== id) return;
    try { localStorage.setItem(STK, JSON.stringify({ id, at: Date.now(), d: Object.assign({}, d, { xah: d.xah.toString() }) })); } catch {}
    stPaint(d);
  } catch {
    if (!(c && c.id === id)) stPaint({ total: null, opened: null, xah: null, tok: null, key: null, gc: null });
  } finally { if (stBusy === id) stBusy = ''; const rb = $('stRefresh'); if (rb) rb.disabled = false; }
}
const histCache = { id: '', at: 0, p: null };
async function boxHistory(me, force) {
  const id = S.net + ':' + me;
  if (!force && histCache.id === id && histCache.p && Date.now() - histCache.at < 60000) return histCache.p;
  histCache.id = id; histCache.at = Date.now();
  histCache.p = (async () => {
    const recs = []; let marker, more = false, n = 0;
    for (let i = 0; i < 5; i++) {
      const r = await rpc('account_tx', Object.assign({ account: me, ledger_index_min: -1, ledger_index_max: -1, limit: 200, forward: false }, marker ? { marker } : {}));
      for (const e of r.transactions || []) {
        n++;
        const tx = e.tx || e.tx_json || {}, meta = e.meta || e.metaData || {};
        if (tx.TransactionType !== 'Invoke' || !tx.HookParameters || meta.TransactionResult !== 'tesSUCCESS') continue;
        const ps = {}; for (const x of tx.HookParameters) ps[hexToText(x.HookParameter.HookParameterName || '')] = String(x.HookParameter.HookParameterValue || '').toUpperCase();
        const cmd = Object.keys(HX).find(k => HX[k] === ps.CMD); if (!cmd) continue;
        let vc = /^[0-9A-F]{64}$/.test(ps.VC || '') ? ps.VC : null;
        if (!vc && cmd === 'CLAIM' && /^[0-9A-F]{66}$/.test(ps.PK || '')) { try { vc = L.vcFromPub(ps.PK).toUpperCase(); } catch {} }
        if (!vc) continue;
        const bk = L.boxKey(vc).toUpperCase(); let b = null;
        for (const nd of meta.AffectedNodes || []) {
          const v = nd.CreatedNode || nd.ModifiedNode || nd.DeletedNode; if (!v || v.LedgerEntryType !== 'HookState') continue;
          const f = v.NewFields || v.FinalFields || {}; if (String(f.HookStateKey || '').toUpperCase() !== bk) continue;
          b = parseBox(f.HookStateData || (v.PreviousFields || {}).HookStateData);
        }
        recs.push({ cmd, vc, bk, b, from: tx.Account, hk: cmd === 'CLAIM' ? (tx.Destination || tx.Account) : tx.Account, link: cmd === 'CLAIM' ? !!ps.PK : null, ktid: ps.KTID || null,
          date: tx.date ? (tx.date + 946684800) * 1000 : 0, hash: tx.hash || e.hash || '' });
      }
      marker = r.marker; if (!marker) break; if (i === 4) more = true;
    }
    return { recs, more, n };
  })().catch(e => { histCache.at = 0; throw e; });
  return histCache.p;
}
let mbTab = 'built', mbSeq = 0, mbData = null, mbBusy = false;
let mbOnly = false;
function enterMyBoxes(tab, only = false) {
  if (tab) mbTab = tab; mbOnly = only;
  if (!needAccount(() => enterMyBoxes(tab, only), only ? 'inbox' : 'mybx')) return;
  show('mybx'); mbLoad();
}
const enterBoxes = () => enterMyBoxes('built');
const enterInbox = () => enterMyBoxes('recv', true);
function mbRefresh() { if (current === 'mybx') mbLoad(); }
/* how each key token left this account: its own Remit / sell offer in the public history (read-only) */
async function keyXfers(me, ids) {
  const want = new Set(ids.map(x => String(x).toUpperCase())), out = new Map();
  if (!want.size) return out;
  let marker;
  for (let i = 0; i < 5 && out.size < want.size; i++) {
    const r = await rpc('account_tx', Object.assign({ account: me, ledger_index_min: -1, ledger_index_max: -1, limit: 200, forward: false }, marker ? { marker } : {}));
    for (const e of r.transactions || []) {
      const tx = e.tx || e.tx_json || {}, meta = e.meta || e.metaData || {};
      if (meta.TransactionResult !== 'tesSUCCESS' || tx.Account !== me) continue;
      const d = { to: tx.Destination || null, hash: tx.hash || e.hash || '', date: tx.date ? (tx.date + 946684800) * 1000 : 0 };
      let list = [];
      if (tx.TransactionType === 'Remit') { list = tx.URITokenIDs || []; d.mode = 'remit'; }
      else if (tx.TransactionType === 'URITokenCreateSellOffer') { list = [tx.URITokenID]; d.mode = 'offer'; }
      for (const id of list) { const k = String(id || '').toUpperCase(); if (want.has(k) && !out.has(k)) out.set(k, d); }
    }
    marker = r.marker; if (!marker) break;
  }
  return out;
}
/* key tokens this account received and then passed on (its own Remit of someone else's key token): shown under "Sent" */
/* this account's Remits of URITokens: out = sent by it (id -> to), in = received by it (id -> from); cached for a minute */
const kmCache = { id: '', at: 0, p: null };
function keyMoves(me) {
  if (kmCache.id === S.net + ':' + me && kmCache.p && Date.now() - kmCache.at < 60000) return kmCache.p;
  kmCache.id = S.net + ':' + me; kmCache.at = Date.now();
  kmCache.p = (async () => {
    const out = new Map(), inn = new Map(); let marker;
    for (let i = 0; i < 3; i++) {
      const r = await rpc('account_tx', Object.assign({ account: me, ledger_index_min: -1, ledger_index_max: -1, limit: 200, forward: false }, marker ? { marker } : {}));
      for (const e of r.transactions || []) {
        const tx = e.tx || e.tx_json || {}, meta = e.meta || e.metaData || {};
        if (tx.TransactionType !== 'Remit' || meta.TransactionResult !== 'tesSUCCESS') continue;
        const d = tx.date ? (tx.date + 946684800) * 1000 : 0;
        for (const id of tx.URITokenIDs || []) {
          const k = String(id).toUpperCase();
          if (tx.Account === me && !out.has(k)) out.set(k, { to: tx.Destination, date: d });
          if (tx.Destination === me && tx.Account !== me && !inn.has(k)) inn.set(k, { from: tx.Account, date: d });
        }
      }
      marker = r.marker; if (!marker) break;
    }
    return { out, inn };
  })().catch(e => { kmCache.at = 0; throw e; });
  return kmCache.p;
}
async function passedKeys(me) {
  const mv = await keyMoves(me), ids = mv.out;
  const toks = [];
  await Promise.all([...ids.keys()].map(id => uriToken(id).then(x => { if (x && x.Issuer !== me && x.Owner !== me && keyTokenId(x)) toks.push(x); }).catch(() => {})));
  const byIss = new Map(); for (const x of toks) { if (!byIss.has(x.Issuer)) byIss.set(x.Issuer, []); byIss.get(x.Issuer).push(x); }
  const out = [];
  for (const [iss, ks] of byIss) {
    let st = new Map(); try { st = new Map((await nsEntries(iss)).map(e => [e.HookStateKey, e.HookStateData])); } catch { continue; }
    const want = new Map(ks.map(k => [k.index.toUpperCase(), k]));
    for (const [k, d] of st) {
      if (d.length !== 170) continue; const m = st.get(L.modeKey(k));
      if (!m || m.length !== 66 || !m.startsWith('01')) continue; const kt = m.slice(2).toUpperCase();
      const tok = want.get(kt); if (!tok) continue; const b = parseBox(d); if (!b) continue;
      const x = ids.get(kt) || {}, fr = mv.inn.get(kt);
      out.push({ b: Object.assign(b, { key: k, h: iss, ktid: kt }), nonce: b.nonce, key: true, st: t('mbNotOpened'), who: [t('mbKeyAt'), tok.Owner], from: fr ? fr.from : iss, to: x.to, date: x.date });
    }
  }
  return out;
}
async function mbLoad() {
  const seq = ++mbSeq, list = $('mbList'); errSet('boxesErr'); mbData = null; mbBusy = true; mbTabsUi();
  list.textContent = ''; $('vcCard').classList.add('hide');
  if (!S.account) {
    $('mbSub').textContent = ''; mbBusy = false;
    list.append(h('p', { class: 'sub' }, t('mbSignIn')), h('button', { class: 'btn y', type: 'button', onclick: () => enterMyBoxes() }, t('signInShort')));
    return;
  }
  list.append(h('div', { class: 'spin sm' }));
  const me = S.account.address;
  try {
    const [v, inbox, hist, passed] = await Promise.all([loadAccountView(me), findInbox(true).catch(() => null), boxHistory(me, true).catch(() => null), passedKeys(me).catch(() => [])]);
    if (seq !== mbSeq) return;
    acct = v;
    const recs = hist ? hist.recs : [];
    const packByKey = new Map(), claimOn = new Map();
    for (const r of recs) {
      if (r.cmd === 'PACK' && r.hk === me && !packByKey.has(r.bk)) packByKey.set(r.bk, r);
      if (r.cmd === 'CLAIM' && r.hk === me && r.from !== me && !claimOn.has(r.bk)) claimOn.set(r.bk, r);
    }
    // the box number (VC) of a live box: this device's records first, then the public PACK of this account
    const known = new Map(S.history.filter(x => x.h === me && x.net === S.net).map(x => [L.boxKey(x.vc), x]));
    const links = new Map(), live = new Set(v.boxes.map(b => b.key)), stale = [];
    for (const [id, x] of Object.entries(vaultAll())) {
      if (!x || x.h !== me || x.net !== S.net) continue;
      const k = L.boxKey(x.vc);
      if (live.has(k)) { links.set(k, x); if (!known.has(k)) known.set(k, x); }
      else if (x.nonce != null || Date.now() - (x.created || 0) > 86400000) stale.push(id);
    }
    vaultDrop(stale);
    const kn = b => known.get(b.key) || (packByKey.get(String(b.key).toUpperCase()) ? { vc: packByKey.get(String(b.key).toUpperCase()).vc } : null);
    const built = v.boxes.slice().sort((a, c) => c.nonce - a.nonce);
    // who holds the key token of each live key box now
    const holders = new Map();
    const keyObj = new Map();
    await Promise.all(built.filter(b => b.ktid).map(b => uriToken(b.ktid).then(x => { holders.set(b.key, x ? x.Owner : null); keyObj.set(b.key, x); }).catch(() => {})));
    if (seq !== mbSeq) return;
    const moved = built.filter(b => b.ktid && holders.has(b.key) && (holders.get(b.key) !== me || (keyObj.get(b.key) || {}).Amount != null));
    const xf = await keyXfers(me, moved.map(b => b.ktid)).catch(() => new Map());
    if (seq !== mbSeq) return;
    const keySt = b => {
      if (!b.ktid || !holders.has(b.key)) return null;
      const ho = holders.get(b.key), o = keyObj.get(b.key) || {}, x = xf.get(String(b.ktid).toUpperCase()) || {};
      if (!ho) return { st: 'gone', x };
      if (ho !== me) return { st: 'sent', to: ho, x };
      if (o.Amount != null) return { st: 'offer', to: o.Destination || x.to || null, x };
      return null;
    };
    const sent = [];
    for (const b of built) {
      if (b.status !== 0) continue; // being opened: listed below with its CLAIM
      const ho = holders.get(b.key), lk = links.get(b.key) || known.get(b.key);
      const pkh = (packByKey.get(String(b.key).toUpperCase()) || {}).hash;
      if (b.ktid && ho && ho !== me) sent.push({ b, pack: pkh, nonce: b.nonce, live: true, key: true, st: t('mbNotOpened'), to: (xf.get(String(b.ktid).toUpperCase()) || {}).to, who: [t('mbKeyAt'), ho] });
      else if (b.ktid && holders.has(b.key) && !ho) sent.push({ b, pack: pkh, nonce: b.nonce, live: true, key: true, st: t('mbKeyGone'), bad: true });
      else if (!b.ktid && lk && lk.kind === 'named') sent.push({ b, pack: pkh, nonce: b.nonce, live: true, key: false, st: t('mbNotOpened'), who: lk.named ? [t('mbFor'), lk.named] : null, local: true });
    }
    for (const [bk, r] of claimOn) {
      const lb = v.boxes.find(b => String(b.key).toUpperCase() === bk), pk = packByKey.get(bk);
      const b = lb || r.b; if (!b) continue;
      sent.push({ b, pack: pk && pk.hash, nonce: b.nonce, key: pk ? !!pk.ktid : !r.link, st: lb && lb.status !== 0 ? t('stClaiming') : t('mbOpenedSt'), ok: true, who: [t('mbOpenedBy'), r.from], date: r.date, hash: r.hash });
    }
    for (const x of passed) sent.push(x);
    sent.sort((a, c) => (c.nonce || 0) - (a.nonce || 0));
    const recvOpen = (inbox || []).filter(b => !b.gone), recvGone = (inbox || []).filter(b => b.gone);
    const mine = recs.filter(r => r.cmd === 'CLAIM' && r.from === me && r.hk !== me && r.b)
      .map(r => ({ b: r.b, nonce: r.b.nonce, key: !r.link, st: t('mbOpenedYou'), ok: true, who: [t('inboxFrom'), r.hk], date: r.date, hash: r.hash }))
      .sort((a, c) => (c.date || 0) - (a.date || 0));
    mbData = { me, built, keySt, kn, pk: b => packByKey.get(String(b.key).toUpperCase()) || null, links, sent, recvOpen, recvGone, mine, inboxErr: !inbox, histErr: !hist, more: hist && hist.more, n: hist ? hist.n : 0 };
    mbBusy = false; mbRender();
  } catch (e) { if (seq !== mbSeq) return; mbBusy = false; list.textContent = ''; errSet('boxesErr', e.message); }
}
function mbTabsUi() {
  const d = mbData, cnt = { built: d && d.built.length, recv: d && (d.recvOpen.filter(inboxOpenable).length || null), sent: d && d.sent.length };
  document.querySelectorAll('#mbTabs .tab').forEach(b => {
    const on = b.dataset.tab === mbTab; b.classList.toggle('on', on); b.setAttribute('aria-selected', String(on));
    const n = cnt[b.dataset.tab]; b.querySelector('.tn').textContent = n ? String(n) : ''; b.querySelector('.tn').classList.toggle('hide', !n);
  });
  $('mbSub').textContent = t(mbOnly ? 'inboxOnlySub' : mbTab === 'built' ? 'mbBuiltSub' : mbTab === 'recv' ? 'mbRecvSub' : 'mbSentSub');
  $('mbTabs').classList.toggle('hide', mbOnly); $('mbTitle').textContent = t(mbOnly ? 'inboxT' : 'mbH');
}
function mbRender() {
  const d = mbData, list = $('mbList'); if (!d) return;
  mbTabsUi(); list.textContent = ''; errSet('boxesErr');
  const note = k => list.append(h('p', { class: 'sm mbnote' }, k));
  if (mbTab === 'built') {
    if (!d.built.length) list.append(h('p', { class: 'sub' }, t('noBoxes')));
    for (const b of d.built) list.append(boxCard(b, d.kn(b), d.links.get(b.key), d.pk(b), d.keySt(b)));
    $('vcCard').classList.toggle('hide', false);
  } else if (mbOnly) {
    $('vcCard').classList.add('hide');
    const live = d.recvOpen.filter(inboxOpenable);
    if (d.inboxErr) note(t('mbPartErr'));
    if (!live.length) list.append(h('p', { class: 'sub' }, t('mbNone')));
    for (const b of live) list.append(inboxCard(b));
  } else if (mbTab === 'recv') {
    $('vcCard').classList.add('hide');
    if (d.inboxErr) note(t('mbPartErr'));
    if (!d.recvOpen.length && !d.mine.length && !d.recvGone.length) list.append(h('p', { class: 'sub' }, t('mbNone')));
    for (const b of d.recvOpen) list.append(inboxCard(b));
    for (const x of d.mine) list.append(histCard(x));
    if (d.recvGone.length) { const det = h('details', { class: 'sfd oldkeys' }, h('summary', null, t('mbOldKeys') + ' (' + d.recvGone.length + ')')); for (const b of d.recvGone) det.append(inboxCard(b)); list.append(det); }
    note(t('mbRecvNote'));
  } else {
    $('vcCard').classList.add('hide');
    if (!d.sent.length) list.append(h('p', { class: 'sub' }, t('mbNone')));
    for (const x of d.sent) list.append(histCard(x));
    note(t('mbSentNote'));
  }
  if (mbTab !== 'built' && d.histErr) note(t('mbPartErr'));
  if (mbTab !== 'built' && d.more) note(t('mbTrunc').replace('{n}', String(d.n)));
  renderLive(false);
}
$('mbTabs').onclick = e => { const b = e.target.closest('[data-tab]'); if (!b || b.dataset.tab === mbTab) return; mbTab = b.dataset.tab; if (mbData) mbRender(); else mbTabsUi(); };
/* a box that is no longer (or not only) in this account's hook state: read-only card from the ledger */
const histOpen = new Set();
function histCard(x) {
  const b = x.b, amt = BigInt('0x' + b.amt), hasTok = !isZero(b.tid), id = (x.hash || '') + ':' + b.nonce;
  const sumTxt = h('span', { class: 'bsum' }, [amt ? dropsToXah(amt) + ' XAH' : null, hasTok ? '1 URIToken' : null].filter(Boolean).join(' + ') || t('bxEmpty'));
  const head = h('button', { class: 'bhead', type: 'button', 'aria-expanded': 'false' },
    h('span', { class: 'bn' }, '#' + b.nonce),
    h('span', { class: 'bbadge' + (x.key ? ' key' : '') }, x.key ? '🔑 ' + t('tokenKind') : '🔗 ' + t('kLink')),
    h('span', { class: 'bchev', 'aria-hidden': 'true' }, '▾'),
    h('span', { class: 'bmeta' }, h('span', { class: 'bst' + (x.bad ? ' bad' : x.ok ? ' ok' : ' yel') }, x.st), sumTxt));
  const inside = h('div', { class: 'binside' }, h('div', { class: 'lbl' }, t('bxInside')));
  if (amt) inside.append(row('XAH', dropsToXah(amt) + ' XAH', 'yel'));
  if (hasTok) {
    const tr = row('URIToken', short(b.tid)), slot = h('div'); inside.append(tr, slot);
    uriToken(b.tid).then(tok => { if (!tok) return; if (gcTok(tok)) { tr.lastChild.textContent = t('gcTag') + ' · ' + short(b.tid); sumTxt.textContent = [amt ? dropsToXah(amt) + ' XAH' : null, t('gcTag')].filter(Boolean).join(' + '); } slot.append(tokenCard(tok)); if (gcTok(tok) && S.account && tok.Owner === S.account.address) slot.append(h('div', { class: 'card warn' }, h('p', null, t('gcGotHint')), h('button', { class: 'btn y', type: 'button', onclick: () => enterCodes() }, t('myCodes')), h('p', { class: 'sm' }, t('askPwEg')), h('a', { class: 'btn o', href: C.EVERGRAM_URL, target: '_blank', rel: 'noopener noreferrer' }, h('img', { class: 'evi', src: 'img/evergram-logo.png', alt: '' }), 'Evergram'))); }).catch(() => {});
  }
  if (!amt && !hasTok) inside.append(h('p', { class: 'sm' }, t('bxEmpty')));
  const body = h('div', { class: 'bbody hide' }, inside,
    x.from ? row(t('kFromWho'), short(x.from)) : null,
    x.to ? row(t('kToWho'), short(x.to)) : null,
    x.who ? row(x.who[0], short(x.who[1])) : null,
    x.date ? row(t('mbWhen'), new Date(x.date).toLocaleString(S.lang)) : null,
    row(t('bxNo'), '#' + b.nonce),
    x.local ? h('p', { class: 'sm' }, t('mbLocal')) : null,
    x.live ? h('p', { class: 'sm' }, t('mbSeeBuilt')) : null,
    exBlock([['exPack', x.pack], ['exClaim', x.hash]]) || h('p', { class: 'sm' }, t('exNone')));
  const c = h('div', { class: 'card bcard' }, head, body);
  const set = on => { body.classList.toggle('hide', !on); c.classList.toggle('open', on); head.setAttribute('aria-expanded', String(on)); };
  head.onclick = () => { const on = !histOpen.has(id); if (on) histOpen.add(id); else histOpen.delete(id); set(on); };
  set(histOpen.has(id));
  return c;
}

/* ---------- install a hook (SetHook) on the signed-in Xaman account ----------
   The wasm file is read here in the browser only; it leaves the page only inside the Xaman payload. Nothing is stored. */
const HK_ON = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF10FFFFFFFCFFC1FFFBF800240';
const isHex = (v, n) => new RegExp('^[0-9A-F]{' + n + '}$').test(v);
function hkUi() {
  const w = $('hkWho'); w.textContent = ''; w.className = 'card' + (S.net === 'mainnet' ? ' warn' : '');
  w.append(row(t('hkAcct'), S.account && S.account.via === 'xaman' ? short(S.account.address) : '—', 'mono'), row(t('hkNet'), 'Xahau ' + NET().label + ' (NetworkID ' + NET().networkId + ')'));
  if (S.net === 'mainnet') w.append(h('p', { class: 'sm yel' }, t('hkMainWarn')));
  if (!S.account || S.account.via !== 'xaman') w.append(h('p', { class: 'sm' }, t('hkNeedXaman')));
  if (!$('hkOn').value) $('hkOn').value = HK_ON;
  if (!$('hkNs').value) $('hkNs').value = C.HOOK_NAMESPACE;
}
$('acc-hook').addEventListener('toggle', () => { if ($('acc-hook').open) hkUi(); });
async function hkDefExists(hash) {
  const r = await rpc('ledger_entry', { hook_definition: hash, ledger_index: 'validated' });
  if (r.node) return true;
  if (r.error === 'entryNotFound') return false;
  throw new Error(r.error_message || r.error || 'ledger_entry');
}
function hkTx(who) {
  const on = $('hkOn').value.trim().toUpperCase(), ns = $('hkNs').value.trim().toUpperCase(), api = $('hkApi').value.trim(), fl = $('hkFlags').value.trim();
  if (!isHex(on, 64)) throw new Error('HookOn: 64 hex');
  if (!isHex(ns, 64)) throw new Error('HookNamespace: 64 hex');
  if (!/^\d{1,3}$/.test(api) || !/^\d{1,10}$/.test(fl)) throw new Error('HookApiVersion / Flags');
  const hs = $('hkHash').value.trim().toUpperCase(); if (!isHex(hs, 64)) throw new Error('HookHash: 64 hex');
  const hk = { HookHash: hs };
  Object.assign(hk, { HookOn: on, HookNamespace: ns, Flags: Number(fl) }); // by hash: no HookApiVersion (temMALFORMED), it comes from the definition
  return { TransactionType: 'SetHook', Account: who || S.account.address, NetworkID: NET().networkId, Hooks: [{ Hook: hk }] };
}
$('hkGo').onclick = async () => {
  errSet('hkErr'); const out = $('hkOut'); out.textContent = '';
  if (!S.account || S.account.via !== 'xaman' || !xstate) { $('acc-hook').open = true; return signIn('settings'); }
  let tx; try { tx = hkTx(); } catch (x) { return errSet('hkErr', x.message); }
  const btn = $('hkGo'); btn.disabled = true;
  try {
    {
      out.append(h('p', { class: 'sm' }, t('hkChecking')));
      let ok; try { ok = await hkDefExists(tx.Hooks[0].Hook.HookHash); } catch (x) { out.textContent = ''; return errSet('hkErr', t('hkCheckFail') + ' ' + x.message); }
      out.textContent = '';
      if (!ok) return errSet('hkErr', t('hkNoDef'));
      const objs = await accountObjects(tx.Account).catch(() => []);
      if (objs.some(o => o.LedgerEntryType === 'Hook' && (o.Hooks || []).some(x => x.Hook && String(x.Hook.HookHash || '').toUpperCase() === tx.Hooks[0].Hook.HookHash))) { out.append(h('p', { class: 'sub yel' }, '✓ ' + t('hkAlready'))); return; }
    }
    out.append(h('div', { class: 'card' + (S.net === 'mainnet' ? ' warn' : '') }, row(t('hkAcct'), short(tx.Account), 'mono'), row(t('hkNet'), NET().label + ' · ' + tx.NetworkID)), h('p', { class: 'sm' }, t('hkFeeNote')));
    const box = h('div'); out.append(box);
    const id = await xamanSign(tx, box);
    box.textContent = ''; box.append(h('p', { class: 'sub' }, t('hkSent')), h('p', { class: 'mono sm' }, id),
      exTx(id));
    const r = await waitTx(id);
    const res = r && r.meta ? r.meta.TransactionResult : null;
    box.append(h('p', { class: res === 'tesSUCCESS' ? 'sub yel' : 'err-line' }, res ? (res === 'tesSUCCESS' ? t('hkOk') : t('hkFail') + ' ' + res) : t('hkPendingTx')));
  } catch (x) { if (x && x.xaman) xamanErrShow('hkErr', x); else errSet('hkErr', x && x.message || String(x)); }
  finally { btn.disabled = false; }
};

/* ---------- routing / header ---------- */
function route(name) {
  if (name === 'create') return enterCreate();
  if (name === 'open') return enterOpen();
  if (name === 'boxes') return enterBoxes();
  if (name === 'mybx') return enterMyBoxes();
  if (name === 'codes') return enterCodes();
  if (name === 'inbox') return enterInbox();
  if (name === 'sign' && S.pending) return enterSign();
  if (name === 'account') return show('account');
  if (name === 'settings') return enterSettings();
  if (name === 'hook') return enterSettings('hook');
  if (name === 'security') return enterSettings('security'); // old #security links
  show('home');
}
$('goCreate').onclick = () => enterCreate();
$('goMyBoxes').onclick = () => enterMyBoxes();
$('goOpen').onclick = () => enterOpen();
$('goInbox').onclick = () => enterInbox();
/* Settings and info: one screen, sections as an accordion (one open at a time) */
function enterSettings(sec) {
  if (sec) document.querySelectorAll('#s-settings details.acc').forEach(d => { d.open = d.id === 'acc-' + sec; });
  show('settings');
  if (sec && sec !== 'lang' && sec !== 'boxes') { const d = $('acc-' + sec); if (d) setTimeout(() => d.scrollIntoView({ block: 'start' }), 0); }
}
$('setBack').onclick = () => goBack();
$('setOutBtn').onclick = () => { if (S.account) signOut(); else signIn('settings'); };
/* browsers without <details name> still keep only one section open */
document.querySelectorAll('#s-settings details.acc').forEach(d => d.addEventListener('toggle', () => {
  if (d.open) document.querySelectorAll('#s-settings details.acc').forEach(o => { if (o !== d) o.open = false; });
}));
$('langList').onclick = e => {
  const b = e.target.closest('[data-lang]'); if (!b || b.dataset.lang === S.lang) return;
  S.lang = b.dataset.lang; save(); applyLang(); loadStats(); if (mbData) mbRender(); else mbTabsUi(); if (codesFor) codesLoad();
};
function themeUi() { const cur = window.XBOX_THEME ? XBOX_THEME.get() : 'dark';
  document.querySelectorAll('#themeList [data-theme-opt]').forEach(b => { const on = b.dataset.themeOpt === cur; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); }); }
document.querySelectorAll('#themeList [data-ti]').forEach(e => { if (window.BOX_ICON) e.replaceWith(BOX_ICON(e.dataset.ti)); });
$('themeList').onclick = e => { const b = e.target.closest('[data-theme-opt]'); if (!b || !window.XBOX_THEME) return; XBOX_THEME.set(b.dataset.themeOpt); themeUi(); };
themeUi();
$('pageVer').textContent = (([...document.scripts].map(x => x.src).find(x => /app\.js/.test(x)) || '').split('v=')[1] || '—');
$('backBtn').onclick = () => goBack();
$('setBtn').onclick = () => enterSettings();
$('netBtn').onclick = () => { S.net = S.net === 'testnet' ? 'mainnet' : 'testnet'; save(); applyNet(); pollLedger(); renderAcct(); acct = null; if ($('acc-hook').open) hkUi(); route(current === 'sign' || current === 'done' || current === 'opened' ? 'home' : current); };
for (const id of ['evergramDone']) $(id).href = C.EVERGRAM_URL;
function handleHash() {
  startLive();
  const hs = decodeURIComponent(location.hash.slice(1));
  if (hs.startsWith('tgs1:')) { history.replaceState(null, '', '#open'); return enterOpen(hs); }
  route(hs || 'home');
}
window.addEventListener('hashchange', () => { if (location.hash.slice(1) !== current) handleHash(); });
/* every "Evergram" in page text becomes a small link pill with their logo (official site, new tab) */
const EG_SKIP = new Set(['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'PRE', 'OPTION', 'SCRIPT', 'STYLE', 'TITLE', 'LABEL']);
function egPill() {
  const a = h('a', { class: 'egpill', href: C.EVERGRAM_URL, target: '_blank', rel: 'noopener noreferrer' }, h('img', { src: 'img/evergram-logo.png', alt: '' }), 'Evergram');
  return a;
}
function egify(root) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => {
    if (!/Evergram/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
    for (let p = n.parentNode; p && p !== document.body; p = p.parentNode) if (EG_SKIP.has(p.nodeName) || (p.classList && p.classList.contains('noeg'))) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT; } });
  const hits = []; while (w.nextNode()) hits.push(w.currentNode);
  for (const n of hits) {
    const parts = n.nodeValue.split('Evergram'), f = document.createDocumentFragment();
    parts.forEach((x, i) => { if (i) f.append(egPill()); if (x) f.append(x); });
    n.parentNode.replaceChild(f, n);
  }
}
new MutationObserver(ms => { for (const m of ms) { if (m.type === 'characterData') { if (m.target.parentNode) egify(m.target.parentNode); } else for (const n of m.addedNodes) if (n.nodeType === 1) egify(n); else if (n.nodeType === 3 && n.parentNode) egify(n.parentNode); } })
  .observe(document.body, { childList: true, subtree: true, characterData: true });
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  const sv = $('pageVer').textContent;
  navigator.serviceWorker.register('sw.js?v=' + encodeURIComponent(sv), { scope: './' }).catch(() => {});
}
$('stRefresh').onclick = () => { try { localStorage.removeItem(STK); } catch {} loadStats(true); };
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && current === 'home') loadStats(); });

/* ---------- donations (footer, home only): one address for XAH and XRP, QR with the coin logo in the center ---------- */
const DON_ADDR = 'rP3xBUHaYUqHKcrXLJiTadex9SFZRpoBbw';
let donCoin = 'xah';
async function donPaint() {
  const cv = $('donQr'); if (!cv) return;
  document.querySelectorAll('.dontab').forEach(b => b.classList.toggle('on', b.dataset.c === donCoin));
  $('donAddr').textContent = DON_ADDR; $('donLbl').textContent = t(donCoin === 'xah' ? 'donLblXah' : 'donLblXrp');
  $('donXaman').href = 'https://xumm.app/detect/request:' + DON_ADDR;
  try {
    const ctx = cv.getContext('2d'), S0 = cv.width;
    const qr = await loadImg(await L.qrDataURL(DON_ADDR, { margin: 1, width: S0, errorCorrectionLevel: 'H', color: { dark: '#0c1a3e', light: '#FFFFFF' } }));
    ctx.imageSmoothingEnabled = false; ctx.clearRect(0, 0, S0, S0); ctx.drawImage(qr, 0, 0, S0, S0);
    const ico = await loadImg('img/don-' + donCoin + '.png?v=1').catch(() => null);
    if (ico) { const s = Math.round(S0 * 0.24), o = (S0 - s) / 2; ctx.fillStyle = '#fff'; ctx.fillRect(o - 4, o - 4, s + 8, s + 8); ctx.imageSmoothingEnabled = true; ctx.drawImage(ico, o, o, s, s); }
  } catch {}
}
document.querySelectorAll('.dontab').forEach(b => b.onclick = () => { donCoin = b.dataset.c; donPaint(); });
if ($('donCopy')) $('donCopy').onclick = () => copy(DON_ADDR);
acctSwap(); initXaman(); mwCarriedErr(); applyLang(); applyNet(); renderAcct(); handleHash(); resumePack(); resumeClaim(); resumeMint(); resumeRemit(); resumeOpen(); setTimeout(stepPoll, 1500); egify(document.body);
// test hook for automated checks (read-only helpers, no secrets)
window.__box = { hkTx, packTx, claimKeyTx, claimTokTx, openTx, auditTx, remitTx, parseQr, makeQr, mintTx, gc: { encrypt: gcEncrypt, decrypt: gcDecrypt, genPw: gcGenPw, max: GC.MAX, iter: GC.ITER } };
})();
