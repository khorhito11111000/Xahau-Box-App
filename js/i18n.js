/* UI texts: EN, ES, FR, RU, DE, ZH, JA. All seven must have identical key sets (checked by the test). */
window.BOX_I18N = {
en: {
  recipientPh: 'r... (recipient)',
  change: 'Change', signIn: "Sign in with Xaman", signInShort: "Sign in", signOut: "Sign out", notSignedIn: "Not signed in", addrOnlyTag: "address", signedIn: "Signed in", signedOut: "Signed out. Box links saved on this device are kept.", signInToSign: "Sign in with Xaman to sign here in one tap. Or copy the JSON below and sign it yourself.", otherAcct: "You are signed in with another account. This transaction must be signed by", homeTitle1: 'Build and give a box', homeTitle2: 'XAH and a token, or just one, inside',
  homeSub: 'Put XAH and/or a URIToken inside, lock it, and hand it over with a QR code.',
  createBox: 'Create a box', openBox: 'Open a box', myBoxes: 'My boxes',
  homeNote: 'No server. You sign every step in your own wallet.',
  connectTitle: 'Your account', connectSub: 'Choose how you sign. Keys stay in your wallet; this page never sees them.',
  xamanSign: 'Sign with Xaman', xamanNote: 'Wallet app on your phone',
  xamanOff: 'Not set up yet on this page. Use the address option below.',
  addrOnly: 'Or enter your address (sign elsewhere)', addrOnlyNote: 'The page reads the ledger and gives you transaction JSON to copy. You sign it in Xaman or another tool.',
  continue: 'Continue', xahAmount: 'XAH in the box', tokenInside: 'URIToken in the box', optional: '(optional)',
  kLink: 'Link / QR', kLinkSub: 'You get a link and a box picture with the same link in its QR.', mintKey: 'Create a new key', mintKeySub: 'Mints a new key URIToken on this account (not burnable). After you sign, it is picked as the key automatically.', orPickKey: 'Or pick a token you already have', mintTitle: 'Sign the key token', mintNoFunds: 'Not enough free XAH to create a key token (approx.).', minted: 'Key token created and picked as the key.', newTag: 'new',
  ledgerNow: 'Ledger now', ledgerExp: 'Expiry ledger', timeLeft: 'Time left', ledgerShort: 'Ledger', expiredState: 'Expired', ledgersLeft: 'ledgers', ledgersAgo: 'ledgers ago', secPerLedger: 's/ledger', uD: 'd', uH: 'h', uM: 'min',
  howGive: 'How to give it', kBearer: 'For anyone', kBearerSub: 'Whoever opens the link or QR first takes the box. Good for a public giveaway.',
  kNamed: 'For one address', kNamedSub: 'Only this address can open. The link and QR are safe to show publicly.',
  kToken: 'Key token', kTokenSub: 'Whoever holds the key URIToken opens the box. The QR just points to the box; the key can be given or sold.',
  timeLimit: 'Time limit', noLimit: 'No limit', d1: '1 day', d7: '7 days', d30: '30 days', d90: '90 days',
  total: 'In the box', buildBox: 'Build the box', checkLedger: 'I signed it — check the ledger', back: 'Back',
  boxReady: 'Box is ready!', locked: 'Locked', download: 'Download picture', share: 'Share picture', shareLink: 'Share link', copyLink: 'Copy link',
  bearerWarn: 'Whoever uses this link or QR first opens the box. Post it for a giveaway, or send it privately to one person.',
  handKey: 'Hand the key token to', buildRemit: 'Build transfer', evergramHint: 'Tell the recipient on Evergram that a box is waiting.',
  finish: 'Done', boxForYou: 'Box for you', pasteQr: 'Box QR or link', show: 'Show box', scan: 'Scan', photo: 'Photo', stop: 'Stop',
  opened: 'Opened! 🎉', home: 'Home', myBoxesSub: 'Boxes locked on the connected account (read from the ledger).',
  takeBackByVc: 'Take a box back (after its time limit)', buildOpen: 'Build take-back',
  footer: 'Static page. No server, no tracking. Testnet first.',
  // dynamic
  needAccount: 'Enter a valid r-address.', notFoundAcct: 'Account not found on this network.',
  hookYes: 'Box hook found on this account', hookNo: 'No hook on this account. Boxes are created from the account that has the box hook.',
  balance: 'Balance', available: 'Free to lock', reserve: 'Reserve', noTokens: 'This account holds no URITokens of its own. You can put in XAH only, or create a gift code below.', noFreeTokens: 'None of your URITokens can go in right now (the reason is under each). You can put in XAH or create a gift code below.', tokPick: 'Can be picked: {n}. Tap a token to put it in the box.',
  burnable: 'burnable by its issuer — the hook does not accept it', onSale: 'on sale', inBox: 'in a box', keyOfBox: 'key of a box', none: 'None',
  needSomething: 'Put XAH or a token into the box.', needKey: 'Pick the key token.', needNamed: 'Enter the recipient address.',
  keyIsGift: 'The key token cannot be the token inside.', amtBad: 'Wrong amount.', notEnough: 'Not enough free XAH (approx.).',
  expAt: 'Until ledger', approx: 'approx.', auditFirst: 'The hook will want an AUDIT first. Sign step 1, then step 2.',
  stepAudit: 'Step 1 · AUDIT (only if needed)', stepPack: 'Step 2 · PACK the box', stepOnly: 'Transaction',
  copy: 'Copy', copied: 'Copied', signHere: 'Copy the JSON and sign it in Xaman or another raw-transaction tool, account',
  packTitle: 'Sign the box', claimTitle: 'Sign the opening', openTitle: 'Take the box back', remitTitle: 'Send the key token',
  waiting: 'Waiting for the ledger…', notYet: 'Not on the ledger yet. Wait a few seconds and check again.',
  xamanOpen: 'Open in Xaman', xamanWait: 'Approve the request in Xaman…', rejected: 'Request was cancelled in Xaman.',
  hookSays: 'Hook answer', txHash: 'Transaction', contents: 'Inside', kind: 'Type', expires: 'Opens until', status: 'Status',
  stClosed: 'Locked — waiting', stExpired: 'Expired — the creator can take it back', stClaiming: 'Being opened…', stGone: 'Not found or already opened', boxNumber: 'Box number',
  keyHolder: 'Key token holder', nonce: 'Signature number', youOpen: 'Open as', openNow: 'Open the box',
  notForYou: 'This QR is for another address', notHolder: 'You do not hold the key token', expired: 'Time limit passed',
  badQr: 'This is not a box QR.', netSwitched: 'Switched network to match the QR', giftCode: 'Gift code',
  received: 'Sent to your account', explorer: 'View in explorer', noBoxes: 'No locked boxes on this account.',
  takeBack: 'Take back', vcUnknown: 'Box number unknown on this device', vcBad: 'VC must be 64 hex characters.',
  showLink: 'Show link / QR', boxRestored: 'Box found on the ledger: here is its link', storageOff: 'This browser does not let the page save the box link. Turn off private mode and try again.',
  bearerKind: 'Link / QR · for anyone', namedKind: 'Link / QR · for one address', tokenKind: 'Key token', copyFailed: 'Copy failed',
  checkHash: 'Or paste the transaction hash', checkHashBtn: 'Check', needOpener: 'Enter the address that will open the box.',
  signedFor: 'Signed for', keyQrHint: 'Use this picture as the key token image, or share it: only the key holder can open.',
  remitHint: 'Normal transfer of the key token. The hook does not take part.', transferKey: 'Transfer key token', keyChecking: 'Checking the key token on the ledger…', keyGone: 'The key token no longer exists on the ledger (burned?).', keyNotYours: 'The key token is not on your account now. Holder:', keySelf: 'This is your own address. Enter the recipient’s address.', wStepOf: 'Step {n} of {m}', wNext: 'Next', wPrev: 'Back', w1T: 'What goes in the box', w1H: 'Enter XAH and/or tap one token. Key tokens are not shown here: they open boxes.', w2T: 'How to give it', w2H: 'Link/QR: whoever gets the link opens it. Key token: whoever holds the key opens it. A gift code always goes with a key token.', w3T: 'Key', w3H: 'Pick a free key token. Create a new one only if you have none.', w4T: 'Time limit', w4H: 'Optional. After it, the box can no longer be opened and you can take it back.', w5T: 'Check and sign', w5H: 'Check everything, then sign the box in Xaman.', myCodes: '🔒 My gift codes', gcNone: 'This account holds no gift-code tokens.', bxInside: 'Inside the box', bxEmpty: 'Empty', bxNo: 'Box', bxKeyTok: 'Key token of this box', inboxT: '🎁 Boxes for me', inboxSub: 'Boxes you can open with a key token on this account. Boxes sent as a link/QR are not listed here: open them from the link.', inboxNone: 'No key tokens for boxes on this account.', inboxFrom: 'From', inboxOpen: 'Open', inboxGone: 'This key no longer opens anything: the box was already opened or taken back.', inboxNoVc: 'Could not find this box’s PACK transaction on the ledger. Try again later.', inboxGcNote: 'After opening, enter the password from the sender in “My gift codes”.', gcGotHint: 'This is a gift code locked with a password. Ask the sender for the password and open it in “My gift codes”.', scamH: "Beware of scammers", scamT: "Xahau Box works through Xaman: you sign in and sign every transaction in your own Xaman. So beware of scammers trying to take advantage of this. Nothing related to Xahau Box will ever ask for your secret key or a deposit to a random address.", egH: "Contact via Evergram", egT: "If anything feels off, message the sender or recipient on Evergram before you sign. It’s also a handy way to pass on a gift-code password personally.", egPwT: "A handy way to pass on a gift-code password is Evergram, in a private chat with the recipient. Evergram encrypts messages right on your device, and the keys are created there and never leave it. Its servers only relay encrypted data and can’t read the text, and messages aren’t written to the blockchain. Don’t send the password in a group chat: everyone in it will see it.", gcTag: '🔒 gift code', pickKey: 'Your free key tokens', sumKey: 'Key token', doneStepKey: 'Step 6: hand the key to the recipient', doneGcPw: 'There is a gift code inside: send the password to the recipient personally (for example on Evergram), never in the link, the QR or a public post.', doneNextKey: 'The box is ready. Last step: hand the key token to the recipient (below).', doneNextLink: 'The box is ready. Next: send the link or the picture with the QR to the recipient.', isKeyTok: 'This is a key token: it opens a box, it does not go inside.', noKeyYet: 'No free key token on this account yet. Create the key token first (one signature), then sign the box.', gcNeedsKey: 'A gift code goes only into a "Key token" box.', limitNone: 'none',
  secLink: "Security", secTitle: "Security", secIntro: "How a box works and what to keep in mind.", s1h: "No server, you sign yourself", s1t: "The page has no server. It only builds transactions, and you sign each one yourself in Xaman or your own tool. The page never asks for and never sees your secret (seed). Never type your secret into any website.", s2h: "Where the gift is", s2t: "The XAH stays on the box creator's account balance and is locked by the hook's rules. The token also stays on the creator's account until the box is opened. A box holds only XAH and URITokens.", s3h: "Trust in the creator", s3t: "The creator controls their account: they can remove the hook or move the funds. A box is a promise backed by the creator's account, not an escrow. Accept boxes from people you trust.", s4h: "Other hooks on the same account", s4t: "All hooks on one account are equal and control it equally. The main real risk is hooks that send payments on their own (auto-payments, forwarding, savings, schedules): they can spend the box's XAH. Then the payout will not go through, and the box stays closed until the balance is topped up. Another risk is a hook with a bug in its code, or a hook you don't know the real behavior of: such a hook can change or delete the box's data. Put next to the box only hooks you trust and understand. In v15, which is being worked on, the box's XAH will be reserved. Until then, check your balance and stay alert.", s5h: "\"For anyone\" works like cash", s5t: "Whoever opens the link or QR first gets the box, so share it privately unless it is a giveaway. A \"For one address\" box can only be opened by that address, so its link can be public.", s6h: "Key token", s6t: "Whoever holds the key token can open the box. Real key tokens are issued by the box account, but anyone can mint a look-alike token with a nice picture, so check the issuer and open the box through the page. After opening, the holder can keep the key as a souvenir or burn it in their own wallet.", s7h: "Time limit", s7t: "A time limit is a ledger number. After it passes, the box can no longer be opened, and the creator can take the contents back. Before that, the box rules do not let the creator take it back. A box with no time limit stays until it is opened; if its key token is burned, the creator can take it back.", s8h: "Everything is public", s8t: "Amounts, addresses and box records are visible to anyone on the ledger. The page code is open source.", s9h: "Check before you sign", s9t: "Look at the Testnet / Mainnet label at the top of the page before signing. In Xaman, read the transaction details before you sign.", secBye: "Take care of yourself and your loved ones 🙏",
  gcTitle: "Gift code", gcSub: "Put a code from another site (for example a Roblox gift card) into the box. The page locks it with a password right here in your browser and puts it into a new token.", gcAdd: "Add a gift code", gcCancel: "Cancel", gcCodeLbl: "Code", gcCodePh: "e.g. ABCD-1234-EFGH", gcLeft: "Left: {n} of {m} bytes (letters outside A–Z take 2–3)", gcTooLong: "The code is too long. Make it shorter.", gcPwLbl: "Password", gcPwPh: "at least 12 characters", gcGen: "Make a password", gcCopyPw: "Copy password", gcPwShort: "Password is too short: at least 12 characters. Better tap \"Make a password\".", gcWarn: "The code is protected only by this password. Anyone who has the token data and the password can read it. The page does not keep the password: save it now and send it personally to the person you give the box to, never in the QR, the link or a public post.", gcSaved: "I saved the password", gcMint: "Create gift-code token", gcMintSub: "Mints a new URIToken on this account with the locked code inside (Flags 0: only its holder can burn it). After you sign, it is put into the box automatically.", gcNeedCode: "Enter the code.", gcNeedSaved: "Save the password first, then tick \"I saved the password\".", gcEncErr: "Could not lock the code in this browser.", gcMintTitle: "Sign the gift-code token", gcMinted: "Gift-code token created and put into the box.", gcModeHint: "A gift code is inside, so the box is given with a key token. Give the key token, and send the password personally.", gcCard: "Encrypted gift code", gcCardSub: "Locked with a password", gcAfterOpen: "The code can be unlocked with the password after the box is opened.", gcShow: "Show code", gcPwEnter: "Password", gcDecrypt: "Unlock", gcWorking: "Working…", gcWrong: "Wrong password. Check it and try again.", gcPwNeed: "Enter the password.", gcHide: "Hide", gcLocal: "Unlocked here in your browser. The password is not saved and nothing is sent anywhere.", gcMine: "Gift codes on this account", gcMineSub: "Tokens with a locked code that this account holds. Unlock one with its password.", s10h: "A gift code is protected only by its password", s10t: "A gift code in a token is encrypted in your browser with a password. Token data is public, so anyone who has it and the password can read the code. Use the generated strong password, send it personally (not in the QR, the link or a public post) and do not reuse it. The page does not save the password and cannot recover it."
},
es: {
  recipientPh: 'r... (destinatario)',
  change: 'Cambiar', signIn: "Entrar con Xaman", signInShort: "Entrar", signOut: "Salir", notSignedIn: "Sin sesión", addrOnlyTag: "dirección", signedIn: "Sesión iniciada", signedOut: "Sesión cerrada. Los enlaces de cajas guardados en este dispositivo se conservan.", signInToSign: "Entra con Xaman para firmar aquí con un toque. O copia el JSON de abajo y fírmalo tú mismo.", otherAcct: "Has entrado con otra cuenta. Esta transacción debe firmarla", homeTitle1: 'Arma y regala una caja', homeTitle2: 'XAH y un token, o solo uno, dentro',
  homeSub: 'Mete XAH y/o un URIToken, ciérrala y entrégala con un código QR.',
  createBox: 'Crear una caja', openBox: 'Abrir una caja', myBoxes: 'Mis cajas',
  homeNote: 'Sin servidor. Firmas cada paso en tu propia billetera.',
  connectTitle: 'Tu cuenta', connectSub: 'Elige cómo firmar. Las claves se quedan en tu billetera; esta página nunca las ve.',
  xamanSign: 'Firmar con Xaman', xamanNote: 'App de billetera en tu móvil',
  xamanOff: 'Aún no está configurado en esta página. Usa la opción de dirección de abajo.',
  addrOnly: 'O introduce tu dirección (firma en otro sitio)', addrOnlyNote: 'La página lee el ledger y te da el JSON de la transacción para copiar. Lo firmas en Xaman u otra herramienta.',
  continue: 'Continuar', xahAmount: 'XAH en la caja', tokenInside: 'URIToken en la caja', optional: '(opcional)',
  kLink: 'Enlace / QR', kLinkSub: 'Recibes un enlace y una imagen de la caja con el mismo enlace en su QR.', mintKey: 'Crear una llave nueva', mintKeySub: 'Emite un nuevo URIToken llave en esta cuenta (no quemable). Cuando lo firmes, se elegirá como llave automáticamente.', orPickKey: 'O elige un token que ya tengas', mintTitle: 'Firma el token llave', mintNoFunds: 'No hay suficiente XAH libre para crear un token llave (aprox.).', minted: 'Token llave creado y elegido como llave.', newTag: 'nuevo',
  ledgerNow: 'Ledger actual', ledgerExp: 'Ledger de vencimiento', timeLeft: 'Tiempo restante', ledgerShort: 'Ledger', expiredState: 'Vencida', ledgersLeft: 'ledgers', ledgersAgo: 'ledgers atrás', secPerLedger: 's/ledger', uD: 'd', uH: 'h', uM: 'min',
  howGive: 'Cómo entregarla', kBearer: 'Para cualquiera', kBearerSub: 'Quien abra primero el enlace o el QR se lleva la caja. Ideal para un sorteo público.',
  kNamed: 'Para una dirección', kNamedSub: 'Solo esta dirección puede abrirla. El enlace y el QR se pueden mostrar en público.',
  kToken: 'Token llave', kTokenSub: 'Quien tenga el URIToken llave abre la caja. El QR solo señala la caja; la llave se puede regalar o vender.',
  timeLimit: 'Plazo', noLimit: 'Sin plazo', d1: '1 día', d7: '7 días', d30: '30 días', d90: '90 días',
  total: 'En la caja', buildBox: 'Preparar la caja', checkLedger: 'Ya firmé: comprobar el ledger', back: 'Atrás',
  boxReady: '¡La caja está lista!', locked: 'Cerrada', download: 'Descargar imagen', share: 'Compartir imagen', shareLink: 'Compartir enlace', copyLink: 'Copiar enlace',
  bearerWarn: 'Quien use primero este enlace o QR abre la caja. Publícalo para un sorteo o envíalo en privado a una persona.',
  handKey: 'Entregar el token llave a', buildRemit: 'Preparar envío', evergramHint: 'Avisa al destinatario en Evergram de que le espera una caja.',
  finish: 'Listo', boxForYou: 'Una caja para ti', pasteQr: 'QR o enlace de la caja', show: 'Ver caja', scan: 'Escanear', photo: 'Foto', stop: 'Parar',
  opened: '¡Abierta! 🎉', home: 'Inicio', myBoxesSub: 'Cajas cerradas en la cuenta conectada (leídas del ledger).',
  takeBackByVc: 'Recuperar una caja (tras su plazo)', buildOpen: 'Preparar recuperación',
  footer: 'Página estática. Sin servidor ni rastreo. Primero testnet.',
  needAccount: 'Introduce una dirección r válida.', notFoundAcct: 'Cuenta no encontrada en esta red.',
  hookYes: 'Hook de cajas encontrado en esta cuenta', hookNo: 'Esta cuenta no tiene hook. Las cajas se crean desde la cuenta que tiene el hook de cajas.',
  balance: 'Saldo', available: 'Libre para bloquear', reserve: 'Reserva', noTokens: 'Esta cuenta no tiene URITokens propios. Puedes meter solo XAH o crear un código regalo abajo.', noFreeTokens: 'Ahora mismo no puedes meter ninguno de tus URITokens (el motivo está debajo de cada uno). Puedes meter XAH o crear un código regalo abajo.', tokPick: 'Se pueden elegir: {n}. Toca un token para meterlo en la caja.',
  burnable: 'quemable por su emisor — el hook no lo acepta', onSale: 'en venta', inBox: 'en una caja', keyOfBox: 'llave de una caja', none: 'Ninguno',
  needSomething: 'Mete XAH o un token en la caja.', needKey: 'Elige el token llave.', needNamed: 'Introduce la dirección del destinatario.',
  keyIsGift: 'El token llave no puede ser el token de dentro.', amtBad: 'Cantidad incorrecta.', notEnough: 'No hay suficiente XAH libre (aprox.).',
  expAt: 'Hasta el ledger', approx: 'aprox.', auditFirst: 'El hook pedirá primero un AUDIT. Firma el paso 1 y luego el paso 2.',
  stepAudit: 'Paso 1 · AUDIT (solo si hace falta)', stepPack: 'Paso 2 · PACK de la caja', stepOnly: 'Transacción',
  copy: 'Copiar', copied: 'Copiado', signHere: 'Copia el JSON y fírmalo en Xaman u otra herramienta de transacciones, cuenta',
  packTitle: 'Firma la caja', claimTitle: 'Firma la apertura', openTitle: 'Recuperar la caja', remitTitle: 'Enviar el token llave',
  waiting: 'Esperando al ledger…', notYet: 'Aún no está en el ledger. Espera unos segundos y vuelve a comprobar.',
  xamanOpen: 'Abrir en Xaman', xamanWait: 'Aprueba la solicitud en Xaman…', rejected: 'La solicitud se canceló en Xaman.',
  hookSays: 'Respuesta del hook', txHash: 'Transacción', contents: 'Contenido', kind: 'Tipo', expires: 'Se puede abrir hasta', status: 'Estado',
  stClosed: 'Cerrada, en espera', stExpired: 'Vencida — el creador puede recuperarla', stClaiming: 'Abriéndose…', stGone: 'No encontrada o ya abierta', boxNumber: 'Número de caja',
  keyHolder: 'Titular del token llave', nonce: 'Número de firma', youOpen: 'Abrir como', openNow: 'Abrir la caja',
  notForYou: 'Este QR es para otra dirección', notHolder: 'No tienes el token llave', expired: 'El plazo ha vencido',
  badQr: 'Esto no es un QR de caja.', netSwitched: 'Red cambiada según el QR', giftCode: 'Código regalo',
  received: 'Enviado a tu cuenta', explorer: 'Ver en el explorador', noBoxes: 'No hay cajas cerradas en esta cuenta.',
  takeBack: 'Recuperar', vcUnknown: 'Número de caja desconocido en este dispositivo', vcBad: 'El VC debe tener 64 caracteres hex.',
  showLink: 'Mostrar enlace / QR', boxRestored: 'Caja encontrada en el ledger: aquí está su enlace', storageOff: 'Este navegador no deja guardar el enlace de la caja. Desactiva el modo privado y vuelve a intentarlo.',
  bearerKind: 'Enlace / QR · para cualquiera', namedKind: 'Enlace / QR · para una dirección', tokenKind: 'Token llave', copyFailed: 'No se pudo copiar',
  checkHash: 'O pega el hash de la transacción', checkHashBtn: 'Comprobar', needOpener: 'Introduce la dirección que abrirá la caja.',
  signedFor: 'Firmado para', keyQrHint: 'Usa esta imagen como imagen del token llave o compártela: solo quien tenga la llave puede abrir.',
  remitHint: 'Envío normal del token llave. El hook no interviene.', transferKey: 'Transferir token llave', keyChecking: 'Comprobando el token llave en el ledger…', keyGone: 'El token llave ya no existe en el ledger (¿quemado?).', keyNotYours: 'El token llave ya no está en tu cuenta. Titular:', keySelf: 'Es tu propia dirección. Introduce la del destinatario.', wStepOf: 'Paso {n} de {m}', wNext: 'Siguiente', wPrev: 'Atrás', w1T: 'Qué metes en la caja', w1H: 'Escribe XAH y/o toca un token. Los tokens llave no salen aquí: abren cajas.', w2T: 'Cómo la entregas', w2H: 'Enlace/QR: la abre quien tenga el enlace. Token llave: la abre quien tenga la llave. Un código regalo siempre va con token llave.', w3T: 'Llave', w3H: 'Elige un token llave libre. Crea uno nuevo solo si no tienes ninguno.', w4T: 'Plazo', w4H: 'Opcional. Después, la caja ya no se puede abrir y puedes recuperarla.', w5T: 'Revisa y firma', w5H: 'Revisa todo y firma la caja en Xaman.', myCodes: '🔒 Mis códigos regalo', gcNone: 'Esta cuenta no tiene tokens con código regalo.', bxInside: 'Dentro de la caja', bxEmpty: 'Vacía', bxNo: 'Caja', bxKeyTok: 'Token llave de esta caja', inboxT: '🎁 Cajas para mí', inboxSub: 'Cajas que puedes abrir con un token llave de esta cuenta. Las cajas enviadas como enlace/QR no aparecen aquí: ábrelas desde el enlace.', inboxNone: 'No hay tokens llave de cajas en esta cuenta.', inboxFrom: 'De', inboxOpen: 'Abrir', inboxGone: 'Esta llave ya no abre nada: la caja ya se abrió o se recuperó.', inboxNoVc: 'No se encontró la transacción PACK de esta caja en el ledger. Inténtalo más tarde.', inboxGcNote: 'Después de abrirla, introduce la contraseña del remitente en «Mis códigos regalo».', gcGotHint: 'Es un código regalo cerrado con contraseña. Pide la contraseña al remitente y ábrelo en «Mis códigos regalo».', scamH: "Cuidado con las estafas", scamT: "Xahau Box funciona a través de Xaman: inicias sesión y firmas cada transacción en tu propio Xaman. Por eso, ten cuidado con los estafadores que intenten aprovecharse de ello. Nada relacionado con Xahau Box te pedirá nunca tu clave secreta ni un depósito a una dirección cualquiera.", egH: "Contacto por Evergram", egT: "Si algo te parece raro, escribe al remitente o al destinatario en Evergram antes de firmar. También es una forma práctica de pasar en persona la contraseña de un código regalo.", egPwT: "Una forma práctica de pasar la contraseña de un código regalo es Evergram, en un chat privado con el destinatario. Evergram cifra los mensajes directamente en tu dispositivo, y las claves se crean ahí y nunca salen de él. Sus servidores solo retransmiten datos cifrados y no pueden leer el texto, y los mensajes no se escriben en la blockchain. No envíes la contraseña en un chat de grupo: todos sus miembros la verán.", gcTag: '🔒 código regalo', pickKey: 'Tus tokens llave libres', sumKey: 'Token llave', doneStepKey: 'Paso 6: entrega la llave al destinatario', doneGcPw: 'Dentro hay un código regalo: envía la contraseña al destinatario en persona (por ejemplo en Evergram), nunca en el enlace, el QR ni una publicación pública.', doneNextKey: 'La caja está lista. Último paso: entrega el token llave al destinatario (abajo).', doneNextLink: 'La caja está lista. Ahora envía el enlace o la imagen con el QR al destinatario.', isKeyTok: 'Es un token llave: abre una caja, no va dentro.', noKeyYet: 'Aún no hay ningún token llave libre en esta cuenta. Primero crea el token llave (una firma) y luego firma la caja.', gcNeedsKey: 'Un código regalo solo va en una caja con «Token llave».', limitNone: 'sin plazo',
  secLink: "Seguridad", secTitle: "Seguridad", secIntro: "Cómo funciona una caja y qué tener en cuenta.", s1h: "Sin servidor, firmas tú", s1t: "La página no tiene servidor. Solo prepara transacciones, y tú firmas cada una en Xaman o en tu propia herramienta. La página nunca pide ni ve tu secreto (seed). Nunca escribas tu secreto en ningún sitio web.", s2h: "Dónde está el regalo", s2t: "Los XAH se quedan en el saldo de la cuenta de quien creó la caja y están bloqueados por las reglas del hook. El token también se queda en la cuenta del creador hasta que se abre la caja. Una caja solo contiene XAH y URITokens.", s3h: "Confianza en el creador", s3t: "El creador controla su cuenta: puede quitar el hook o mover los fondos. Una caja es una promesa respaldada por la cuenta del creador, no un escrow. Acepta cajas de personas en las que confías.", s4h: "Otros hooks en la misma cuenta", s4t: "Todos los hooks de una cuenta son iguales y la controlan por igual. El principal riesgo real son los hooks que envían pagos por sí mismos (pagos automáticos, reenvío, ahorro, pagos programados): pueden gastar los XAH de la caja. Entonces el pago no se realizará y la caja seguirá cerrada hasta que se recargue el saldo. Otro riesgo es un hook con un error en su código o un hook del que no sabes qué hace realmente: puede cambiar o borrar los datos de la caja. Pon junto a la caja solo hooks en los que confíes y que entiendas. En v15, en la que se está trabajando, los XAH de la caja quedarán reservados. Mientras tanto, revisa tu saldo y mantente atento.", s5h: "\"Para cualquiera\" es como efectivo", s5t: "Quien abra primero el enlace o el QR se queda la caja, así que compártelo en privado salvo que sea un sorteo. Una caja \"Para una dirección\" solo la puede abrir esa dirección, así que su enlace puede ser público.", s6h: "Token llave", s6t: "Quien tenga el token llave puede abrir la caja. Los tokens llave reales los emite la cuenta de la caja, pero cualquiera puede crear un token parecido con una imagen bonita, así que comprueba el emisor y abre la caja desde la página. Después de abrirla, quien la tiene puede guardar la llave como recuerdo o quemarla en su propia cartera.", s7h: "Plazo", s7t: "El plazo es un número de ledger. Cuando pasa, la caja ya no se puede abrir y el creador puede recuperar el contenido. Antes de eso, las reglas de la caja no dejan que el creador la recupere. Una caja sin plazo sigue ahí hasta que se abre; si su token llave se quema, el creador puede recuperarla.", s8h: "Todo es público", s8t: "Los importes, las direcciones y los registros de las cajas son visibles para cualquiera en el ledger. El código de la página es abierto.", s9h: "Revisa antes de firmar", s9t: "Mira la etiqueta Testnet / Mainnet arriba en la página antes de firmar. En Xaman, lee los detalles de la transacción antes de firmar.", secBye: "Cuídense ustedes y a sus seres queridos 🙏",
  gcTitle: "Código regalo", gcSub: "Mete en la caja un código de otro sitio (por ejemplo, una tarjeta regalo de Roblox). La página lo cierra con una contraseña aquí mismo, en tu navegador, y lo pone en un token nuevo.", gcAdd: "Añadir un código regalo", gcCancel: "Cancelar", gcCodeLbl: "Código", gcCodePh: "p. ej. ABCD-1234-EFGH", gcLeft: "Quedan: {n} de {m} bytes (las letras fuera de A–Z ocupan 2–3)", gcTooLong: "El código es demasiado largo. Acórtalo.", gcPwLbl: "Contraseña", gcPwPh: "al menos 12 caracteres", gcGen: "Crear contraseña", gcCopyPw: "Copiar contraseña", gcPwShort: "Contraseña demasiado corta: al menos 12 caracteres. Mejor pulsa «Crear contraseña».", gcWarn: "El código solo está protegido por esta contraseña. Quien tenga los datos del token y la contraseña puede leerlo. La página no guarda la contraseña: guárdala ahora y envíala en persona a quien le das la caja, nunca en el QR, el enlace ni en una publicación pública.", gcSaved: "He guardado la contraseña", gcMint: "Crear token con código", gcMintSub: "Emite un URIToken nuevo en esta cuenta con el código cerrado dentro (Flags 0: solo su titular puede quemarlo). Cuando lo firmes, se meterá en la caja automáticamente.", gcNeedCode: "Escribe el código.", gcNeedSaved: "Primero guarda la contraseña y marca «He guardado la contraseña».", gcEncErr: "No se pudo cerrar el código en este navegador.", gcMintTitle: "Firma el token con código", gcMinted: "Token con código creado y metido en la caja.", gcModeHint: "Dentro hay un código regalo, así que la caja se entrega con token llave. Entrega el token llave y envía la contraseña en persona.", gcCard: "Código regalo cifrado", gcCardSub: "Cerrado con contraseña", gcAfterOpen: "El código se puede abrir con la contraseña después de abrir la caja.", gcShow: "Mostrar código", gcPwEnter: "Contraseña", gcDecrypt: "Abrir", gcWorking: "Procesando…", gcWrong: "Contraseña incorrecta. Revísala e inténtalo de nuevo.", gcPwNeed: "Escribe la contraseña.", gcHide: "Ocultar", gcLocal: "Se abre aquí, en tu navegador. La contraseña no se guarda y no se envía nada a ningún sitio.", gcMine: "Códigos regalo en esta cuenta", gcMineSub: "Tokens con un código cerrado que tiene esta cuenta. Ábrelos con su contraseña.", s10h: "Un código regalo solo está protegido por su contraseña", s10t: "Un código regalo dentro de un token se cifra en tu navegador con una contraseña. Los datos del token son públicos, así que quien los tenga junto con la contraseña puede leer el código. Usa la contraseña fuerte generada, envíala en persona (no en el QR, el enlace ni una publicación pública) y no la reutilices. La página no guarda la contraseña y no puede recuperarla."
},
fr: {
  recipientPh: 'r... (destinataire)',
  change: 'Changer', signIn: "Se connecter avec Xaman", signInShort: "Connexion", signOut: "Déconnexion", notSignedIn: "Non connecté", addrOnlyTag: "adresse", signedIn: "Connecté", signedOut: "Déconnecté. Les liens des boîtes enregistrés sur cet appareil sont conservés.", signInToSign: "Connectez-vous avec Xaman pour signer ici en un geste. Ou copiez le JSON ci-dessous et signez-le vous-même.", otherAcct: "Vous êtes connecté avec un autre compte. Cette transaction doit être signée par", homeTitle1: 'Préparez et offrez une boîte', homeTitle2: 'XAH et un token, ou l’un des deux, dedans',
  homeSub: 'Mettez des XAH et/ou un URIToken dedans, verrouillez-la et remettez-la avec un QR code.',
  createBox: 'Créer une boîte', openBox: 'Ouvrir une boîte', myBoxes: 'Mes boîtes',
  homeNote: 'Aucun serveur. Vous signez chaque étape dans votre propre wallet.',
  connectTitle: 'Votre compte', connectSub: 'Choisissez comment signer. Les clés restent dans votre wallet ; cette page ne les voit jamais.',
  xamanSign: 'Signer avec Xaman', xamanNote: 'Application wallet sur votre téléphone',
  xamanOff: 'Pas encore configuré sur cette page. Utilisez l’option adresse ci-dessous.',
  addrOnly: 'Ou saisissez votre adresse (signature ailleurs)', addrOnlyNote: 'La page lit le ledger et vous donne le JSON de la transaction à copier. Vous le signez dans Xaman ou un autre outil.',
  continue: 'Continuer', xahAmount: 'XAH dans la boîte', tokenInside: 'URIToken dans la boîte', optional: '(facultatif)',
  kLink: 'Lien / QR', kLinkSub: 'Vous obtenez un lien et une image de la boîte avec le même lien dans son QR.', mintKey: 'Créer une nouvelle clé', mintKeySub: 'Émet un nouvel URIToken clé sur ce compte (non brûlable). Une fois signé, il est choisi automatiquement comme clé.', orPickKey: 'Ou choisissez un jeton que vous avez déjà', mintTitle: 'Signer le jeton clé', mintNoFunds: 'Pas assez de XAH disponibles pour créer un jeton clé (approx.).', minted: 'Jeton clé créé et choisi comme clé.', newTag: 'nouveau',
  ledgerNow: 'Ledger actuel', ledgerExp: 'Ledger d’expiration', timeLeft: 'Temps restant', ledgerShort: 'Ledger', expiredState: 'Expirée', ledgersLeft: 'ledgers', ledgersAgo: 'ledgers passés', secPerLedger: 's/ledger', uD: 'j', uH: 'h', uM: 'min',
  howGive: 'Comment la remettre', kBearer: 'Pour tout le monde', kBearerSub: 'Le premier qui ouvre le lien ou le QR prend la boîte. Idéal pour un concours public.',
  kNamed: 'Pour une adresse', kNamedSub: 'Seule cette adresse peut l’ouvrir. Le lien et le QR peuvent être montrés publiquement.',
  kToken: 'Jeton clé', kTokenSub: 'Le détenteur de l’URIToken clé ouvre la boîte. Le QR indique seulement la boîte ; la clé peut être offerte ou vendue.',
  timeLimit: 'Délai', noLimit: 'Sans délai', d1: '1 jour', d7: '7 jours', d30: '30 jours', d90: '90 jours',
  total: 'Dans la boîte', buildBox: 'Préparer la boîte', checkLedger: 'J’ai signé : vérifier le ledger', back: 'Retour',
  boxReady: 'La boîte est prête !', locked: 'Verrouillée', download: 'Télécharger l’image', share: 'Partager l’image', shareLink: 'Partager le lien', copyLink: 'Copier le lien',
  bearerWarn: 'Le premier qui utilise ce lien ou ce QR ouvre la boîte. Publiez-le pour un concours ou envoyez-le en privé à une personne.',
  handKey: 'Remettre le jeton clé à', buildRemit: 'Préparer le transfert', evergramHint: 'Prévenez le destinataire sur Evergram qu’une boîte l’attend.',
  finish: 'Terminé', boxForYou: 'Une boîte pour vous', pasteQr: 'QR ou lien de la boîte', show: 'Voir la boîte', scan: 'Scanner', photo: 'Photo', stop: 'Arrêter',
  opened: 'Ouverte ! 🎉', home: 'Accueil', myBoxesSub: 'Boîtes verrouillées sur le compte connecté (lues sur le ledger).',
  takeBackByVc: 'Récupérer une boîte (après son délai)', buildOpen: 'Préparer la récupération',
  footer: 'Page statique. Aucun serveur, aucun pistage. Testnet d’abord.',
  needAccount: 'Saisissez une adresse r valide.', notFoundAcct: 'Compte introuvable sur ce réseau.',
  hookYes: 'Hook de boîtes trouvé sur ce compte', hookNo: 'Aucun hook sur ce compte. Les boîtes se créent depuis le compte qui porte le hook de boîtes.',
  balance: 'Solde', available: 'Disponible à verrouiller', reserve: 'Réserve', noTokens: 'Ce compte ne détient aucun URIToken. Vous pouvez mettre seulement des XAH ou créer un code cadeau ci-dessous.', noFreeTokens: 'Aucun de vos URIToken ne peut être mis pour l’instant (la raison est indiquée sous chacun). Vous pouvez mettre des XAH ou créer un code cadeau ci-dessous.', tokPick: 'Sélectionnables : {n}. Touchez un jeton pour le mettre dans la boîte.',
  burnable: 'brûlable par son émetteur — le hook ne l’accepte pas', onSale: 'en vente', inBox: 'dans une boîte', keyOfBox: 'clé d’une boîte', none: 'Aucun',
  needSomething: 'Mettez des XAH ou un jeton dans la boîte.', needKey: 'Choisissez le jeton clé.', needNamed: 'Saisissez l’adresse du destinataire.',
  keyIsGift: 'Le jeton clé ne peut pas être le jeton à l’intérieur.', amtBad: 'Montant incorrect.', notEnough: 'Pas assez de XAH disponibles (approx.).',
  expAt: 'Jusqu’au ledger', approx: 'env.', auditFirst: 'Le hook demandera d’abord un AUDIT. Signez l’étape 1, puis l’étape 2.',
  stepAudit: 'Étape 1 · AUDIT (seulement si nécessaire)', stepPack: 'Étape 2 · PACK de la boîte', stepOnly: 'Transaction',
  copy: 'Copier', copied: 'Copié', signHere: 'Copiez le JSON et signez-le dans Xaman ou un autre outil de transactions, compte',
  packTitle: 'Signer la boîte', claimTitle: 'Signer l’ouverture', openTitle: 'Récupérer la boîte', remitTitle: 'Envoyer le jeton clé',
  waiting: 'En attente du ledger…', notYet: 'Pas encore sur le ledger. Attendez quelques secondes et vérifiez à nouveau.',
  xamanOpen: 'Ouvrir dans Xaman', xamanWait: 'Approuvez la demande dans Xaman…', rejected: 'La demande a été annulée dans Xaman.',
  hookSays: 'Réponse du hook', txHash: 'Transaction', contents: 'Contenu', kind: 'Type', expires: 'Ouvrable jusqu’au', status: 'Statut',
  stClosed: 'Verrouillée, en attente', stExpired: 'Expirée — le créateur peut la reprendre', stClaiming: 'Ouverture en cours…', stGone: 'Introuvable ou déjà ouverte', boxNumber: 'Numéro de boîte',
  keyHolder: 'Détenteur du jeton clé', nonce: 'Numéro de signature', youOpen: 'Ouvrir en tant que', openNow: 'Ouvrir la boîte',
  notForYou: 'Ce QR est destiné à une autre adresse', notHolder: 'Vous ne détenez pas le jeton clé', expired: 'Délai dépassé',
  badQr: 'Ce n’est pas un QR de boîte.', netSwitched: 'Réseau changé pour correspondre au QR', giftCode: 'Code cadeau',
  received: 'Envoyé sur votre compte', explorer: 'Voir dans l’explorateur', noBoxes: 'Aucune boîte verrouillée sur ce compte.',
  takeBack: 'Récupérer', vcUnknown: 'Numéro de boîte inconnu sur cet appareil', vcBad: 'Le VC doit faire 64 caractères hex.',
  showLink: 'Afficher le lien / QR', boxRestored: 'Boîte trouvée sur le ledger : voici son lien', storageOff: 'Ce navigateur ne permet pas d’enregistrer le lien de la boîte. Désactivez la navigation privée et réessayez.',
  bearerKind: 'Lien / QR · pour tout le monde', namedKind: 'Lien / QR · pour une adresse', tokenKind: 'Jeton clé', copyFailed: 'Échec de la copie',
  checkHash: 'Ou collez le hash de la transaction', checkHashBtn: 'Vérifier', needOpener: 'Saisissez l’adresse qui ouvrira la boîte.',
  signedFor: 'Signé pour', keyQrHint: 'Utilisez cette image comme image du jeton clé ou partagez-la : seul le détenteur de la clé peut ouvrir.',
  remitHint: 'Transfert normal du jeton clé. Le hook n’intervient pas.', transferKey: 'Transférer le jeton clé', keyChecking: 'Vérification du jeton clé sur le ledger…', keyGone: 'Le jeton clé n’existe plus sur le ledger (brûlé ?).', keyNotYours: 'Le jeton clé n’est plus sur votre compte. Détenteur :', keySelf: 'C’est votre propre adresse. Saisissez celle du destinataire.', wStepOf: 'Étape {n} sur {m}', wNext: 'Suivant', wPrev: 'Retour', w1T: 'Ce que vous mettez dedans', w1H: 'Saisissez des XAH et/ou touchez un jeton. Les jetons clés ne sont pas listés ici : ils ouvrent les boîtes.', w2T: 'Comment la donner', w2H: 'Lien/QR : celui qui a le lien l’ouvre. Jeton clé : celui qui détient la clé l’ouvre. Un code cadeau va toujours avec un jeton clé.', w3T: 'Clé', w3H: 'Choisissez un jeton clé libre. N’en créez un nouveau que si vous n’en avez aucun.', w4T: 'Délai', w4H: 'Facultatif. Ensuite, la boîte ne peut plus être ouverte et vous pouvez la récupérer.', w5T: 'Vérifier et signer', w5H: 'Vérifiez tout, puis signez la boîte dans Xaman.', myCodes: '🔒 Mes codes cadeaux', gcNone: 'Ce compte n’a aucun jeton code cadeau.', bxInside: 'Dans la boîte', bxEmpty: 'Vide', bxNo: 'Boîte', bxKeyTok: 'Jeton clé de cette boîte', inboxT: '🎁 Boîtes pour moi', inboxSub: 'Boîtes que vous pouvez ouvrir avec un jeton clé de ce compte. Les boîtes envoyées par lien/QR n’apparaissent pas ici : ouvrez-les depuis le lien.', inboxNone: 'Aucun jeton clé de boîte sur ce compte.', inboxFrom: 'De', inboxOpen: 'Ouvrir', inboxGone: 'Cette clé n’ouvre plus rien : la boîte a déjà été ouverte ou reprise.', inboxNoVc: 'Transaction PACK de cette boîte introuvable dans le ledger. Réessayez plus tard.', inboxGcNote: 'Après l’ouverture, saisissez le mot de passe de l’expéditeur dans « Mes codes cadeaux ».', gcGotHint: 'C’est un code cadeau verrouillé par mot de passe. Demandez le mot de passe à l’expéditeur et ouvrez-le dans « Mes codes cadeaux ».', scamH: "Méfiez-vous des arnaques", scamT: "Xahau Box fonctionne via Xaman : vous vous connectez et signez chaque transaction dans votre propre Xaman. Méfiez-vous donc des escrocs qui tenteraient d’en profiter. Rien de ce qui concerne Xahau Box ne vous demandera jamais votre clé secrète ni un dépôt vers une adresse au hasard.", egH: "Contact via Evergram", egT: "Si quelque chose vous semble suspect, écrivez à l’expéditeur ou au destinataire sur Evergram avant de signer. C’est aussi un moyen pratique de transmettre en personne le mot de passe d’un code cadeau.", egPwT: "Pour transmettre le mot de passe d’un code cadeau, Evergram est pratique, dans une discussion privée avec le destinataire. Evergram chiffre les messages directement sur votre appareil, et les clés y sont créées et ne le quittent jamais. Ses serveurs ne font que relayer des données chiffrées et ne peuvent pas lire le texte, et les messages ne sont pas écrits dans la blockchain. N’envoyez pas le mot de passe dans une discussion de groupe : tous ses membres le verront.", gcTag: '🔒 code cadeau', pickKey: 'Vos jetons clés libres', sumKey: 'Jeton clé', doneStepKey: 'Étape 6 : remettez la clé au destinataire', doneGcPw: 'Il y a un code cadeau dedans : envoyez le mot de passe au destinataire en personne (par exemple sur Evergram), jamais dans le lien, le QR ou un post public.', doneNextKey: 'La boîte est prête. Dernière étape : remettez le jeton clé au destinataire (ci-dessous).', doneNextLink: 'La boîte est prête. Ensuite : envoyez le lien ou l’image avec le QR au destinataire.', isKeyTok: 'C’est un jeton clé : il ouvre une boîte, il ne va pas dedans.', noKeyYet: 'Aucun jeton clé libre sur ce compte. Créez d’abord le jeton clé (une signature), puis signez la boîte.', gcNeedsKey: 'Un code cadeau ne va que dans une boîte « Jeton clé ».', limitNone: 'aucun',
  secLink: "Sécurité", secTitle: "Sécurité", secIntro: "Comment fonctionne une boîte et ce qu'il faut garder en tête.", s1h: "Pas de serveur, vous signez vous-même", s1t: "La page n'a pas de serveur. Elle prépare seulement les transactions, et vous signez chacune vous-même dans Xaman ou votre propre outil. La page ne demande jamais et ne voit jamais votre secret (seed). Ne tapez jamais votre secret sur un site web.", s2h: "Où est le cadeau", s2t: "Les XAH restent sur le solde du compte du créateur de la boîte et sont bloqués par les règles du hook. Le token reste aussi sur le compte du créateur jusqu'à l'ouverture de la boîte. Une boîte ne contient que des XAH et des URITokens.", s3h: "Confiance envers le créateur", s3t: "Le créateur contrôle son compte : il peut retirer le hook ou déplacer les fonds. Une boîte est une promesse garantie par le compte du créateur, pas un escrow. Acceptez des boîtes de personnes en qui vous avez confiance.", s4h: "Autres hooks sur le même compte", s4t: "Tous les hooks d'un même compte sont égaux et le contrôlent à parts égales. Le principal risque réel, ce sont les hooks qui envoient eux-mêmes des paiements (paiements automatiques, transfert, épargne, paiements programmés) : ils peuvent dépenser les XAH de la boîte. Le paiement ne passera alors pas, et la boîte restera fermée jusqu'à ce que le solde soit rechargé. Autre risque : un hook avec une erreur dans son code, ou un hook dont vous ne savez pas ce qu'il fait vraiment : il peut modifier ou supprimer les données de la boîte. Ne mettez à côté de la boîte que des hooks en qui vous avez confiance et que vous comprenez. Dans la v15, en préparation, les XAH de la boîte seront réservés. En attendant, vérifiez votre solde et restez vigilant.", s5h: "« Pour tout le monde » fonctionne comme de l'argent liquide", s5t: "La première personne qui ouvre le lien ou le QR reçoit la boîte, donc partagez-le en privé sauf pour un concours. Une boîte « Pour une adresse » ne peut être ouverte que par cette adresse, son lien peut donc être public.", s6h: "Token clé", s6t: "Celui qui détient le token clé peut ouvrir la boîte. Les vrais tokens clés sont émis par le compte de la boîte, mais n'importe qui peut créer un token ressemblant avec une jolie image : vérifiez l'émetteur et ouvrez la boîte via la page. Après l'ouverture, le détenteur peut garder la clé en souvenir ou la brûler dans son propre portefeuille.", s7h: "Délai", s7t: "Le délai est un numéro de ledger. Une fois passé, la boîte ne peut plus être ouverte et le créateur peut reprendre le contenu. Avant cela, les règles de la boîte ne permettent pas au créateur de la reprendre. Une boîte sans délai reste jusqu'à son ouverture ; si son token clé est brûlé, le créateur peut la reprendre.", s8h: "Tout est public", s8t: "Les montants, les adresses et les enregistrements des boîtes sont visibles par tous sur le ledger. Le code de la page est open source.", s9h: "Vérifiez avant de signer", s9t: "Regardez l'étiquette Testnet / Mainnet en haut de la page avant de signer. Dans Xaman, lisez les détails de la transaction avant de signer.", secBye: "Prenez soin de vous et de vos proches 🙏",
  gcTitle: "Code cadeau", gcSub: "Mettez dans la boîte un code d’un autre site (par exemple une carte cadeau Roblox). La page le verrouille avec un mot de passe ici même, dans votre navigateur, et le place dans un nouveau jeton.", gcAdd: "Ajouter un code cadeau", gcCancel: "Annuler", gcCodeLbl: "Code", gcCodePh: "ex. ABCD-1234-EFGH", gcLeft: "Reste : {n} sur {m} octets (les lettres hors A–Z en prennent 2–3)", gcTooLong: "Le code est trop long. Raccourcissez-le.", gcPwLbl: "Mot de passe", gcPwPh: "au moins 12 caractères", gcGen: "Créer un mot de passe", gcCopyPw: "Copier le mot de passe", gcPwShort: "Mot de passe trop court : au moins 12 caractères. Mieux vaut toucher « Créer un mot de passe ».", gcWarn: "Le code n’est protégé que par ce mot de passe. Quiconque a les données du jeton et le mot de passe peut le lire. La page ne garde pas le mot de passe : enregistrez-le maintenant et envoyez-le en personne à qui vous offrez la boîte, jamais dans le QR, le lien ou une publication publique.", gcSaved: "J’ai enregistré le mot de passe", gcMint: "Créer le jeton à code", gcMintSub: "Émet un nouvel URIToken sur ce compte avec le code verrouillé dedans (Flags 0 : seul son détenteur peut le brûler). Une fois signé, il est mis dans la boîte automatiquement.", gcNeedCode: "Saisissez le code.", gcNeedSaved: "Enregistrez d’abord le mot de passe, puis cochez « J’ai enregistré le mot de passe ».", gcEncErr: "Impossible de verrouiller le code dans ce navigateur.", gcMintTitle: "Signez le jeton à code", gcMinted: "Jeton à code créé et mis dans la boîte.", gcModeHint: "Un code cadeau est dedans, la boîte se donne donc avec un jeton clé. Donnez le jeton clé et envoyez le mot de passe en personne.", gcCard: "Code cadeau chiffré", gcCardSub: "Verrouillé par mot de passe", gcAfterOpen: "Le code se déverrouille avec le mot de passe une fois la boîte ouverte.", gcShow: "Afficher le code", gcPwEnter: "Mot de passe", gcDecrypt: "Déverrouiller", gcWorking: "En cours…", gcWrong: "Mot de passe incorrect. Vérifiez-le et réessayez.", gcPwNeed: "Saisissez le mot de passe.", gcHide: "Masquer", gcLocal: "Déverrouillé ici, dans votre navigateur. Le mot de passe n’est pas enregistré et rien n’est envoyé nulle part.", gcMine: "Codes cadeaux sur ce compte", gcMineSub: "Jetons avec un code verrouillé détenus par ce compte. Déverrouillez-les avec leur mot de passe.", s10h: "Un code cadeau n’est protégé que par son mot de passe", s10t: "Un code cadeau dans un jeton est chiffré dans votre navigateur avec un mot de passe. Les données du jeton sont publiques : quiconque les a avec le mot de passe peut lire le code. Utilisez le mot de passe fort généré, envoyez-le en personne (pas dans le QR, le lien ou une publication publique) et ne le réutilisez pas. La page ne garde pas le mot de passe et ne peut pas le retrouver."
},
ru: {
  recipientPh: 'r... (получатель)',
  change: 'Сменить', signIn: "Войти через Xaman", signInShort: "Войти", signOut: "Выйти", notSignedIn: "Вход не выполнен", addrOnlyTag: "адрес", signedIn: "Вход выполнен", signedOut: "Ты вышел. Ссылки на боксы на этом устройстве сохранены.", signInToSign: "Войди через Xaman, чтобы подписать здесь в одно касание. Или скопируй JSON ниже и подпиши сам.", otherAcct: "Ты вошёл с другим аккаунтом. Эту транзакцию должен подписать", homeTitle1: 'Собери и подари бокс', homeTitle2: 'XAH и токен или что-то одно внутри',
  homeSub: 'Положи внутрь XAH и/или URIToken, закрой и отдай по QR-коду.',
  createBox: 'Создать бокс', openBox: 'Открыть бокс', myBoxes: 'Мои боксы',
  homeNote: 'Без сервера. Каждый шаг подписываешь в своём кошельке.',
  connectTitle: 'Твой аккаунт', connectSub: 'Выбери, чем подписывать. Ключи остаются в кошельке, страница их не видит.',
  xamanSign: 'Подписать в Xaman', xamanNote: 'Приложение на телефоне',
  xamanOff: 'На этой странице пока не настроено. Используй вариант с адресом ниже.',
  addrOnly: 'Или введи свой адрес (подпись в другом месте)', addrOnlyNote: 'Страница читает леджер и даёт JSON транзакции. Подписываешь его в Xaman или другом инструменте.',
  continue: 'Дальше', xahAmount: 'XAH в боксе', tokenInside: 'URIToken в боксе', optional: '(необязательно)',
  kLink: 'Ссылка / QR', kLinkSub: 'Получишь ссылку и картинку бокса с той же ссылкой в QR.', mintKey: 'Создать новый ключ', mintKeySub: 'Выпускает новый URIToken-ключ на этом аккаунте (не сжигаемый). После подписи он сам выберется как ключ.', orPickKey: 'Или выбери токен, который уже есть', mintTitle: 'Подпиши токен-ключ', mintNoFunds: 'Не хватает свободных XAH, чтобы создать токен-ключ (примерно).', minted: 'Токен-ключ создан и выбран как ключ.', newTag: 'новый',
  ledgerNow: 'Леджер сейчас', ledgerExp: 'Леджер окончания', timeLeft: 'Осталось', ledgerShort: 'Леджер', expiredState: 'Срок истёк', ledgersLeft: 'леджеров', ledgersAgo: 'леджеров назад', secPerLedger: 'с/леджер', uD: 'д', uH: 'ч', uM: 'мин',
  howGive: 'Как отдать', kBearer: 'Для любого', kBearerSub: 'Кто первым откроет ссылку или QR, тот и забирает бокс. Для публичного розыгрыша.',
  kNamed: 'Для одного адреса', kNamedSub: 'Открыть сможет только этот адрес. Ссылку и QR можно показывать публично.',
  kToken: 'Токен-ключ', kTokenSub: 'Открывает тот, у кого URIToken-ключ. QR только указывает на бокс; ключ можно подарить или продать.',
  timeLimit: 'Срок', noLimit: 'Без срока', d1: '1 день', d7: '7 дней', d30: '30 дней', d90: '90 дней',
  total: 'В боксе', buildBox: 'Собрать бокс', checkLedger: 'Подписал — проверить леджер', back: 'Назад',
  boxReady: 'Бокс готов!', locked: 'Закрыт', download: 'Скачать картинку', share: 'Поделиться картинкой', shareLink: 'Поделиться ссылкой', copyLink: 'Копировать ссылку',
  bearerWarn: 'Кто первым воспользуется ссылкой или QR, тот и откроет бокс. Опубликуй для розыгрыша или отправь лично одному человеку.',
  handKey: 'Передать токен-ключ адресу', buildRemit: 'Собрать перевод', evergramHint: 'Напиши получателю в Evergram, что его ждёт бокс.',
  finish: 'Готово', boxForYou: 'Бокс для тебя', pasteQr: 'QR или ссылка бокса', show: 'Показать', scan: 'Сканировать', photo: 'Фото', stop: 'Стоп',
  opened: 'Открыто! 🎉', home: 'На главную', myBoxesSub: 'Закрытые боксы на этом аккаунте (из леджера).',
  takeBackByVc: 'Забрать бокс обратно (после срока)', buildOpen: 'Собрать возврат',
  footer: 'Статичная страница. Без сервера и слежки. Сначала тестнет.',
  needAccount: 'Введи правильный r-адрес.', notFoundAcct: 'Аккаунт не найден в этой сети.',
  hookYes: 'Хук бокса на аккаунте найден', hookNo: 'На аккаунте нет хука. Боксы создаются с аккаунта, где стоит хук бокса.',
  balance: 'Баланс', available: 'Можно заблокировать', reserve: 'Резерв', noTokens: 'На этом аккаунте нет своих URIToken. Можно положить только XAH или создать подарочный код ниже.', noFreeTokens: 'Сейчас ни один твой URIToken положить нельзя (причина под каждым). Можно положить XAH или создать подарочный код ниже.', tokPick: 'Можно выбрать: {n}. Нажми на токен, чтобы положить его в бокс.',
  burnable: 'сжигаемый выпустившим — хук не принимает такие токены', onSale: 'выставлен на продажу', inBox: 'уже в боксе', keyOfBox: 'ключ бокса', none: 'Нет',
  needSomething: 'Положи в бокс XAH или токен.', needKey: 'Выбери токен-ключ.', needNamed: 'Введи адрес получателя.',
  keyIsGift: 'Ключом не может быть токен из бокса.', amtBad: 'Неверная сумма.', notEnough: 'Не хватает свободных XAH (примерно).',
  expAt: 'До леджера', approx: 'примерно', auditFirst: 'Хук сначала попросит AUDIT. Подпиши шаг 1, потом шаг 2.',
  stepAudit: 'Шаг 1 · AUDIT (только если нужен)', stepPack: 'Шаг 2 · PACK бокса', stepOnly: 'Транзакция',
  copy: 'Копировать', copied: 'Скопировано', signHere: 'Скопируй JSON и подпиши в Xaman или другом инструменте сырых транзакций, аккаунт',
  packTitle: 'Подпиши бокс', claimTitle: 'Подпиши открытие', openTitle: 'Вернуть бокс', remitTitle: 'Передать токен-ключ',
  waiting: 'Ждём леджер…', notYet: 'В леджере пока нет. Подожди пару секунд и проверь снова.',
  xamanOpen: 'Открыть в Xaman', xamanWait: 'Подтверди запрос в Xaman…', rejected: 'Запрос отменён в Xaman.',
  hookSays: 'Ответ хука', txHash: 'Транзакция', contents: 'Внутри', kind: 'Тип', expires: 'Открыть до', status: 'Статус',
  stClosed: 'Закрыт — ждёт', stExpired: 'Срок истёк — создатель может забрать', stClaiming: 'Открывается…', stGone: 'Не найден или уже открыт', boxNumber: 'Номер бокса',
  keyHolder: 'Держатель ключа', nonce: 'Номер подписи', youOpen: 'Открываешь как', openNow: 'Открыть бокс',
  notForYou: 'Этот QR для другого адреса', notHolder: 'У тебя нет токена-ключа', expired: 'Срок прошёл',
  badQr: 'Это не QR бокса.', netSwitched: 'Сеть переключена под QR', giftCode: 'Подарочный код',
  received: 'Отправлено на твой аккаунт', explorer: 'Смотреть в обозревателе', noBoxes: 'Закрытых боксов на аккаунте нет.',
  takeBack: 'Забрать', vcUnknown: 'Номер бокса на этом устройстве не сохранён', vcBad: 'VC — это 64 hex-символа.',
  showLink: 'Показать ссылку/QR', boxRestored: 'Бокс найден в леджере, вот его ссылка', storageOff: 'Браузер не даёт странице сохранить ссылку бокса. Выключи режим инкогнито и попробуй снова.',
  bearerKind: 'Ссылка / QR · для любого', namedKind: 'Ссылка / QR · для одного адреса', tokenKind: 'Токен-ключ', copyFailed: 'Не скопировалось',
  checkHash: 'Или вставь хэш транзакции', checkHashBtn: 'Проверить', needOpener: 'Введи адрес, которым откроешь бокс.',
  signedFor: 'Подписано для', keyQrHint: 'Эту картинку можно сделать изображением токена-ключа или просто показать: откроет только держатель ключа.',
  remitHint: 'Обычный перевод токена-ключа. Хук в этом не участвует.', transferKey: 'Передать токен-ключ', keyChecking: 'Проверяю токен-ключ в леджере…', keyGone: 'Токена-ключа больше нет в леджере (сожжён?).', keyNotYours: 'Токен-ключ сейчас не на твоём аккаунте. Держатель:', keySelf: 'Это твой собственный адрес. Введи адрес получателя.', wStepOf: 'Шаг {n} из {m}', wNext: 'Далее', wPrev: 'Назад', w1T: 'Что кладёшь', w1H: 'Введи XAH и/или нажми на один токен. Токены-ключи здесь не показаны: они открывают боксы.', w2T: 'Как отдать', w2H: 'По ссылке/QR: откроет тот, у кого ссылка. Через токен-ключ: откроет тот, у кого ключ. Подарочный код — только через токен-ключ.', w3T: 'Ключ', w3H: 'Выбери свободный токен-ключ. Новый создавай, только если свободного нет.', w4T: 'Срок', w4H: 'Необязательно. После срока бокс уже не открыть, и ты можешь забрать его обратно.', w5T: 'Проверь и подпиши', w5H: 'Проверь всё и подпиши бокс в Xaman.', myCodes: '🔒 Мои подарочные коды', gcNone: 'На этом аккаунте нет токенов с подарочным кодом.', bxInside: 'Внутри бокса', bxEmpty: 'Пусто', bxNo: 'Бокс', bxKeyTok: 'Токен-ключ этого бокса', inboxT: '🎁 Мне пришли боксы', inboxSub: 'Боксы, которые ты можешь открыть токеном-ключом с этого аккаунта. Боксы по ссылке/QR здесь не видны — открывай их по ссылке.', inboxNone: 'На этом аккаунте нет токенов-ключей от боксов.', inboxFrom: 'От кого', inboxOpen: 'Открыть', inboxGone: 'Этот ключ больше ничего не открывает: бокс уже открыт или забран.', inboxNoVc: 'Не нашёл в леджере транзакцию PACK этого бокса. Попробуй позже.', inboxGcNote: 'После открытия введи пароль от отправителя в «Мои подарочные коды».', gcGotHint: 'Это подарочный код, запертый паролем. Попроси пароль у отправителя и открой его в «Мои подарочные коды».', scamH: "Остерегайся мошенников", scamT: "Xahau Box работает через Xaman: ты входишь и подписываешь каждую транзакцию в своём Xaman. Поэтому остерегайся мошенников, которые попытаются этим воспользоваться. Ничто, связанное с Xahau Box, никогда не потребует твой секретный ключ или перевод на случайный адрес.", egH: "Связь через Evergram", egT: "Если что-то вызывает сомнения, напиши отправителю или получателю в Evergram, прежде чем подписывать. Там же удобно лично передать пароль от подарочного кода.", egPwT: "Пароль от подарочного кода удобно передать через Evergram, в личном чате с получателем. Evergram шифрует сообщения прямо на твоём устройстве, ключи создаются на нём же и никуда не уходят. Серверы передают только зашифрованное и не могут прочитать текст. Сообщения не записываются в блокчейн. Не отправляй пароль в групповой чат: там его увидят все участники.", gcTag: '🔒 подарочный код', pickKey: 'Твои свободные токены-ключи', sumKey: 'Токен-ключ', doneStepKey: 'Шаг 6: передай ключ получателю', doneGcPw: 'В боксе подарочный код: пароль отправь получателю лично (например, в Evergram), не в ссылке, не в QR и не в открытом посте.', doneNextKey: 'Бокс готов. Последний шаг: передай токен-ключ получателю (ниже).', doneNextLink: 'Бокс готов. Дальше: отправь получателю ссылку или картинку с QR.', isKeyTok: 'Это токен-ключ: он открывает бокс, внутрь его не кладут.', noKeyYet: 'Свободного токена-ключа на аккаунте пока нет. Сначала создай токен-ключ (одна подпись), потом подпиши бокс.', gcNeedsKey: 'Подарочный код кладётся только в бокс с токеном-ключом.', limitNone: 'нет',
  secLink: "Безопасность", secTitle: "Безопасность", secIntro: "Как устроен бокс и что стоит знать.", s1h: "Без сервера, подписываешь сам", s1t: "У страницы нет сервера. Она только собирает транзакции, а каждую ты подписываешь сам в Xaman или в своём инструменте. Страница никогда не спрашивает и не видит твой секрет (seed). Никогда не вводи секрет ни на каком сайте.", s2h: "Где лежит подарок", s2t: "XAH остаются на балансе аккаунта создателя бокса и заблокированы правилами хука. Токен тоже остаётся на аккаунте создателя, пока бокс не откроют. В боксе бывают только XAH и URIToken.", s3h: "Доверие к создателю", s3t: "Создатель управляет своим аккаунтом: он может снять хук или перевести средства. Бокс — это обещание, за которым стоит аккаунт создателя, а не эскроу. Принимай боксы от тех, кому доверяешь.", s4h: "Другие хуки на том же аккаунте", s4t: "Все хуки на одном аккаунте равны и распоряжаются им наравне. Главный реальный риск — хуки, которые сами отправляют платежи (автоплатежи, пересылка, сбережения, расписание): они могут потратить XAH бокса. Тогда выплата не пройдёт, а бокс останется закрытым до пополнения баланса. Ещё риск — хук с ошибкой в коде или хук, о котором вы не знаете, что он на самом деле делает: такой может изменить или удалить данные бокса. Ставьте рядом с боксом только хуки, которым доверяете и понимаете, что они делают. В v15, над которым идёт работа, XAH бокса будут зарезервированы. Пока что сверяйте баланс и будьте бдительны.", s5h: "«Для любого» — как наличные", s5t: "Кто первым откроет ссылку или QR, тот и получит бокс, поэтому делись ею лично, если это не розыгрыш. Бокс «Для одного адреса» откроет только этот адрес, так что его ссылку можно показывать открыто.", s6h: "Токен-ключ", s6t: "Кто держит токен-ключ, тот и может открыть бокс. Настоящие токены-ключи выпускает аккаунт бокса, но кто угодно может выпустить похожий токен с красивой картинкой, поэтому проверяй выпустившего и открывай бокс через страницу. После открытия держатель может оставить ключ на память или сжечь его в своём кошельке.", s7h: "Срок", s7t: "Срок — это номер леджера. После него бокс уже нельзя открыть, а создатель может забрать содержимое обратно. До этого правила бокса не дают создателю забрать его. Бокс без срока ждёт, пока его откроют; если его токен-ключ сожгли, создатель может забрать бокс.", s8h: "Всё публично", s8t: "Суммы, адреса и записи боксов видны всем в леджере. Код страницы открыт.", s9h: "Проверяй перед подписью", s9t: "Перед подписью посмотри на метку Testnet / Mainnet вверху страницы. В Xaman прочитай детали транзакции, прежде чем подписать.", secBye: "Берегите себя и своих близких 🙏",
  gcTitle: "Подарочный код", gcSub: "Положи в бокс код с другого сайта (например, подарочную карту Roblox). Страница запирает его паролем прямо здесь, в твоём браузере, и кладёт в новый токен.", gcAdd: "Добавить подарочный код", gcCancel: "Отмена", gcCodeLbl: "Код", gcCodePh: "например ABCD-1234-EFGH", gcLeft: "Осталось: {n} из {m} байт (буквы не из A–Z занимают 2–3)", gcTooLong: "Код слишком длинный. Сократи его.", gcPwLbl: "Пароль", gcPwPh: "минимум 12 символов", gcGen: "Придумать пароль", gcCopyPw: "Скопировать пароль", gcPwShort: "Пароль слишком короткий: минимум 12 символов. Лучше нажми «Придумать пароль».", gcWarn: "Код защищён только этим паролем. Кто знает данные токена и пароль, тот прочитает код. Страница не хранит пароль: сохрани его сейчас и передай лично тому, кому даришь бокс. Никогда не клади его в QR, ссылку или публичный пост.", gcSaved: "Я сохранил пароль", gcMint: "Создать токен с кодом", gcMintSub: "Выпускает новый URIToken на этом аккаунте с запертым кодом внутри (Flags 0: сжечь его может только владелец). После подписи он сам положится в бокс.", gcNeedCode: "Введи код.", gcNeedSaved: "Сначала сохрани пароль и отметь «Я сохранил пароль».", gcEncErr: "Не удалось запереть код в этом браузере.", gcMintTitle: "Подпиши токен с кодом", gcMinted: "Токен с кодом создан и положен в бокс.", gcModeHint: "Внутри подарочный код, поэтому бокс передаётся только токеном-ключом. Отдай токен-ключ, а пароль передай лично.", gcCard: "Зашифрованный подарочный код", gcCardSub: "Заперт паролем", gcAfterOpen: "Код можно открыть паролем после того, как бокс открыт.", gcShow: "Показать код", gcPwEnter: "Пароль", gcDecrypt: "Открыть код", gcWorking: "Секунду…", gcWrong: "Неверный пароль. Проверь и попробуй ещё раз.", gcPwNeed: "Введи пароль.", gcHide: "Скрыть", gcLocal: "Код открывается здесь, в твоём браузере. Пароль не сохраняется, и ничего никуда не отправляется.", gcMine: "Подарочные коды на этом аккаунте", gcMineSub: "Токены с запертым кодом, которые есть у этого аккаунта. Открой код его паролем.", s10h: "Подарочный код защищён только паролем", s10t: "Подарочный код в токене шифруется в твоём браузере паролем. Данные токена видны всем, поэтому кто знает их и пароль, тот прочитает код. Используй сгенерированный надёжный пароль, передавай его лично (не в QR, не в ссылке и не в публичном посте) и не используй повторно. Страница не хранит пароль и не может его восстановить."
}};

/* Settings and info screen (same keys in all four languages) */
Object.assign(window.BOX_I18N.en, {
"setLink": "⚙️ Settings and info",
"setTitle": "⚙️ Settings and info",
"setSub": "My boxes, gift codes, language, security, about the project, how it works and the rules. Tap a section to open it.",
"setLangH": "🌐 Language",
"setLangT": "Choose the page language. Your choice is saved on this device.",
"setSecH": "🛡️ Security",
"setAboutH": "ℹ️ About the project",
"setHowH": "📖 How it works",
"setRulesH": "📜 Terms of use",
"ab1h": "What it is",
"ab1t": "Xahau Box is a page where you build a box with XAH and/or a URIToken, lock it and give it by link, by QR or with a key token.",
"ab2h": "Independent project",
"ab2t": "This is an independent project, not an official Xahau product. It is not affiliated with Xaman or Evergram either: they are just tools it uses.",
"ab3h": "What a box can hold",
"ab3t": "Only XAH and URITokens. A gift code from another site also goes in as a URIToken, with the code locked inside by a password.",
"ab4h": "How the page works",
"ab4t": "A static page with no server and no tracking. It reads the public Xahau ledger and builds transactions, and you sign them yourself in Xaman. The box rules are enforced by the hook on the box creator's account.",
"ab5h": "Network",
"ab5t": "The project is tested on Testnet first. Switch the network with the Testnet / Mainnet button at the top of the page. A box can only be created from an account that has the box hook.",
"abVer": "Page version",
"hw1h": "Create a box",
"hw1t": "5 steps: what goes in → how to give it → key (key token only) → time limit → check and sign in Xaman. You can put in XAH and/or one of your URITokens. A token that its issuer can burn, a token on sale, a token already in a box, or a key token cannot go in.",
"hw2h": "Link / QR \"For anyone\"",
"hw2t": "You get a link and a box picture with a QR. Whoever opens it first takes it. Good for a giveaway, or to send privately to one person.",
"hw3h": "Link / QR \"For one address\"",
"hw3t": "Only the given address can open it, so the link is safe to show publicly.",
"hw4h": "Key token",
"hw4t": "Whoever holds the key token (a URIToken) opens the box. Pick one of your free key tokens or create a new one (one signature). When the box is ready, the last step is to hand the key token to the recipient. The key can be given or sold.",
"hw5h": "Gift code with a password",
"hw5t": "A code from another site (for example a gift card) is locked with a password right in your browser and put into a new token. Such a box is given only with a key token. Send the password to the recipient personally, for example on Evergram. After opening, the recipient enters the password in \"🔒 My gift codes\".",
"hw6h": "Open a box",
"hw6t": "Tap \"Open a box\" and paste the link, scan the QR or pick a photo. The page shows what is inside and builds the opening transaction. You sign it in Xaman.",
"hw7h": "🎁 Boxes for me",
"hw7t": "Shows boxes you can open with a key token on your account. Tap \"Open\" and sign. Boxes sent as a link/QR are not listed here: open them from the link.",
"hw8h": "My boxes",
"hw8t": "Locked boxes on your account, newest first, with their contents. From here you can show the link/QR again, hand over the key token, and take a box back after its time limit.",
"hw9h": "Time limit",
"hw9t": "A time limit is a ledger number. Before it, the box can be opened and the creator cannot take it back. After it, the box can no longer be opened and the creator can take the contents back.",
"rulesIntro": "By using this page you agree to these rules:",
"r1": "You use the page at your own risk. The project is experimental and provided \"as is\", without warranties.",
"r2": "You sign every transaction yourself in Xaman. Before signing, read the details and check the network (Testnet / Mainnet).",
"r3": "The page never asks for your secret key (seed) and never holds your funds. XAH and tokens stay on accounts on the ledger. The project cannot cancel, freeze or reverse a transaction.",
"r4": "Share box links and QR codes, key tokens and passwords only with the person you are giving to. A \"For anyone\" link is like cash.",
"r5": "Check the recipient address: a transfer to a wrong address cannot be undone.",
"r6": "Keep your passwords and links safe. The page does not store a gift-code password and cannot recover it. The project is not responsible for losses caused by lost or leaked links, passwords or keys.",
"r7": "Accept boxes from people you trust: a box is backed by the creator's account.",
"r8": "Only XAH and URITokens go into a box. Do not use the page for fraud or illegal purposes. For gift codes, follow the rules of the site that issued them.",
"r9": "This is an independent project, not an official Xahau product. The rules may be updated: the version on this page applies."
});
Object.assign(window.BOX_I18N.es, {
"setLink": "⚙️ Ajustes e información",
"setTitle": "⚙️ Ajustes e información",
"setSub": "Mis cajas, códigos regalo, idioma, seguridad, sobre el proyecto, cómo funciona y las reglas. Toca una sección para abrirla.",
"setLangH": "🌐 Idioma",
"setLangT": "Elige el idioma de la página. Tu elección se guarda en este dispositivo.",
"setSecH": "🛡️ Seguridad",
"setAboutH": "ℹ️ Sobre el proyecto",
"setHowH": "📖 Cómo funciona",
"setRulesH": "📜 Reglas de uso",
"ab1h": "Qué es",
"ab1t": "Xahau Box es una página para armar una caja con XAH y/o un URIToken, cerrarla y regalarla con un enlace, un QR o un token llave.",
"ab2h": "Proyecto independiente",
"ab2t": "Es un proyecto independiente, no un producto oficial de Xahau. Tampoco está vinculado a Xaman ni a Evergram: solo son herramientas que usa.",
"ab3h": "Qué puede llevar una caja",
"ab3t": "Solo XAH y URITokens. Un código regalo de otro sitio también va como URIToken, con el código cerrado dentro con una contraseña.",
"ab4h": "Cómo funciona la página",
"ab4t": "Una página estática sin servidor y sin rastreo. Lee el ledger público de Xahau y prepara transacciones, y tú las firmas en Xaman. Las reglas de la caja las aplica el hook en la cuenta de quien crea la caja.",
"ab5h": "Red",
"ab5t": "El proyecto se prueba primero en Testnet. Cambia de red con el botón Testnet / Mainnet arriba en la página. Solo se puede crear una caja desde una cuenta que tenga el hook de cajas.",
"abVer": "Versión de la página",
"hw1h": "Crear una caja",
"hw1t": "5 pasos: qué metes → cómo la entregas → llave (solo con token llave) → plazo → revisar y firmar en Xaman. Puedes meter XAH y/o uno de tus URITokens. No se puede meter un token que su emisor pueda quemar, un token en venta, un token que ya está en una caja ni un token llave.",
"hw2h": "Enlace / QR «Para cualquiera»",
"hw2t": "Recibes un enlace y una imagen de la caja con QR. Quien la abra primero se la lleva. Sirve para un sorteo o para enviarla en privado a una persona.",
"hw3h": "Enlace / QR «Para una dirección»",
"hw3t": "Solo la dirección indicada puede abrirla, así que el enlace se puede mostrar en público.",
"hw4h": "Token llave",
"hw4t": "Abre la caja quien tenga el token llave (un URIToken). Elige uno de tus tokens llave libres o crea uno nuevo (una firma). Cuando la caja está lista, el último paso es entregar el token llave al destinatario. La llave se puede regalar o vender.",
"hw5h": "Código regalo con contraseña",
"hw5t": "Un código de otro sitio (por ejemplo, una tarjeta regalo) se cierra con una contraseña en tu navegador y se pone en un token nuevo. Esa caja solo se entrega con token llave. Envía la contraseña al destinatario en persona, por ejemplo en Evergram. Tras abrir la caja, el destinatario escribe la contraseña en «🔒 Mis códigos regalo».",
"hw6h": "Abrir una caja",
"hw6t": "Toca «Abrir una caja» y pega el enlace, escanea el QR o elige una foto. La página muestra lo que hay dentro y prepara la transacción de apertura. La firmas en Xaman.",
"hw7h": "🎁 Cajas para mí",
"hw7t": "Muestra las cajas que puedes abrir con un token llave de tu cuenta. Toca «Abrir» y firma. Las cajas enviadas como enlace/QR no aparecen aquí: ábrelas desde el enlace.",
"hw8h": "Mis cajas",
"hw8t": "Cajas cerradas en tu cuenta, las nuevas primero, con su contenido. Desde aquí puedes volver a mostrar el enlace/QR, entregar el token llave y recuperar una caja cuando vence su plazo.",
"hw9h": "Plazo",
"hw9t": "El plazo es un número de ledger. Antes, la caja se puede abrir y el creador no puede recuperarla. Después, ya no se puede abrir y el creador puede recuperar el contenido.",
"rulesIntro": "Al usar esta página aceptas estas reglas:",
"r1": "Usas la página bajo tu propio riesgo. El proyecto es experimental y se ofrece «tal cual», sin garantías.",
"r2": "Firmas cada transacción tú mismo en Xaman. Antes de firmar, lee los detalles y comprueba la red (Testnet / Mainnet).",
"r3": "La página nunca pide tu clave secreta (seed) ni guarda tus fondos. Los XAH y los tokens siguen en cuentas del ledger. El proyecto no puede cancelar, congelar ni revertir una transacción.",
"r4": "Comparte enlaces y QR de cajas, tokens llave y contraseñas solo con la persona a quien regalas. Un enlace «Para cualquiera» es como efectivo.",
"r5": "Comprueba la dirección del destinatario: un envío a una dirección equivocada no se puede deshacer.",
"r6": "Guarda bien tus contraseñas y enlaces. La página no guarda la contraseña de un código regalo y no puede recuperarla. El proyecto no responde por pérdidas debidas a enlaces, contraseñas o llaves perdidos o filtrados.",
"r7": "Acepta cajas de personas en las que confías: una caja está respaldada por la cuenta de su creador.",
"r8": "En una caja solo van XAH y URITokens. No uses la página para estafas ni fines ilegales. Con los códigos regalo, respeta las reglas del sitio que los emitió.",
"r9": "Es un proyecto independiente, no un producto oficial de Xahau. Las reglas pueden actualizarse: vale la versión de esta página."
});
Object.assign(window.BOX_I18N.fr, {
"setLink": "⚙️ Réglages et infos",
"setTitle": "⚙️ Réglages et infos",
"setSub": "Mes boîtes, codes cadeaux, langue, sécurité, à propos du projet, fonctionnement et règles. Touchez une section pour l’ouvrir.",
"setLangH": "🌐 Langue",
"setLangT": "Choisissez la langue de la page. Votre choix est enregistré sur cet appareil.",
"setSecH": "🛡️ Sécurité",
"setAboutH": "ℹ️ À propos du projet",
"setHowH": "📖 Comment ça marche",
"setRulesH": "📜 Règles d’utilisation",
"ab1h": "Ce que c’est",
"ab1t": "Xahau Box est une page pour préparer une boîte avec des XAH et/ou un URIToken, la verrouiller et l’offrir par lien, par QR ou avec un jeton clé.",
"ab2h": "Projet indépendant",
"ab2t": "C’est un projet indépendant, pas un produit officiel de Xahau. Il n’est pas non plus lié à Xaman ni à Evergram : ce sont seulement des outils qu’il utilise.",
"ab3h": "Ce qu’une boîte peut contenir",
"ab3t": "Seulement des XAH et des URITokens. Un code cadeau d’un autre site y va aussi sous forme d’URIToken, avec le code verrouillé par un mot de passe.",
"ab4h": "Comment fonctionne la page",
"ab4t": "Une page statique, sans serveur et sans pistage. Elle lit le ledger public de Xahau et prépare les transactions, et vous les signez vous-même dans Xaman. Les règles de la boîte sont appliquées par le hook du compte de son créateur.",
"ab5h": "Réseau",
"ab5t": "Le projet est d’abord testé sur Testnet. Changez de réseau avec le bouton Testnet / Mainnet en haut de la page. Une boîte ne peut être créée que depuis un compte qui porte le hook de boîtes.",
"abVer": "Version de la page",
"hw1h": "Créer une boîte",
"hw1t": "5 étapes : ce que vous mettez → comment la donner → clé (jeton clé seulement) → délai → vérifier et signer dans Xaman. Vous pouvez mettre des XAH et/ou un de vos URITokens. Impossible d’y mettre un jeton que son émetteur peut brûler, un jeton en vente, un jeton déjà dans une boîte ou un jeton clé.",
"hw2h": "Lien / QR « Pour tout le monde »",
"hw2t": "Vous obtenez un lien et une image de la boîte avec un QR. Le premier qui l’ouvre la prend. Idéal pour un concours, ou pour l’envoyer en privé à une personne.",
"hw3h": "Lien / QR « Pour une adresse »",
"hw3t": "Seule l’adresse indiquée peut l’ouvrir, le lien peut donc être montré publiquement.",
"hw4h": "Jeton clé",
"hw4t": "Le détenteur du jeton clé (un URIToken) ouvre la boîte. Choisissez un de vos jetons clés libres ou créez-en un (une signature). Quand la boîte est prête, la dernière étape est de remettre le jeton clé au destinataire. La clé peut être offerte ou vendue.",
"hw5h": "Code cadeau avec mot de passe",
"hw5t": "Un code d’un autre site (par exemple une carte cadeau) est verrouillé par un mot de passe dans votre navigateur et placé dans un nouveau jeton. Une telle boîte se donne seulement avec un jeton clé. Envoyez le mot de passe au destinataire en personne, par exemple sur Evergram. Après l’ouverture, le destinataire saisit le mot de passe dans « 🔒 Mes codes cadeaux ».",
"hw6h": "Ouvrir une boîte",
"hw6t": "Touchez « Ouvrir une boîte » puis collez le lien, scannez le QR ou choisissez une photo. La page montre le contenu et prépare la transaction d’ouverture. Vous la signez dans Xaman.",
"hw7h": "🎁 Boîtes pour moi",
"hw7t": "Affiche les boîtes que vous pouvez ouvrir avec un jeton clé de votre compte. Touchez « Ouvrir » et signez. Les boîtes envoyées par lien/QR n’apparaissent pas ici : ouvrez-les depuis le lien.",
"hw8h": "Mes boîtes",
"hw8t": "Les boîtes verrouillées sur votre compte, les plus récentes d’abord, avec leur contenu. D’ici, vous pouvez réafficher le lien/QR, remettre le jeton clé et récupérer une boîte après son délai.",
"hw9h": "Délai",
"hw9t": "Un délai est un numéro de ledger. Avant, la boîte peut être ouverte et le créateur ne peut pas la reprendre. Après, elle ne peut plus être ouverte et le créateur peut reprendre le contenu.",
"rulesIntro": "En utilisant cette page, vous acceptez ces règles :",
"r1": "Vous utilisez la page à vos risques. Le projet est expérimental et fourni « tel quel », sans garantie.",
"r2": "Vous signez vous-même chaque transaction dans Xaman. Avant de signer, lisez les détails et vérifiez le réseau (Testnet / Mainnet).",
"r3": "La page ne demande jamais votre clé secrète (seed) et ne détient jamais vos fonds. Les XAH et les jetons restent sur des comptes du ledger. Le projet ne peut ni annuler, ni geler, ni inverser une transaction.",
"r4": "Ne partagez les liens et QR des boîtes, les jetons clés et les mots de passe qu’avec la personne à qui vous offrez. Un lien « Pour tout le monde » est comme de l’argent liquide.",
"r5": "Vérifiez l’adresse du destinataire : un transfert vers une mauvaise adresse ne peut pas être annulé.",
"r6": "Gardez vos mots de passe et liens en lieu sûr. La page ne garde pas le mot de passe d’un code cadeau et ne peut pas le retrouver. Le projet n’est pas responsable des pertes dues à des liens, mots de passe ou clés perdus ou divulgués.",
"r7": "Acceptez des boîtes de personnes de confiance : une boîte repose sur le compte de son créateur.",
"r8": "Une boîte ne contient que des XAH et des URITokens. N’utilisez pas la page pour des arnaques ou à des fins illégales. Pour les codes cadeaux, respectez les règles du site qui les a émis.",
"r9": "C’est un projet indépendant, pas un produit officiel de Xahau. Les règles peuvent évoluer : la version de cette page s’applique."
});
Object.assign(window.BOX_I18N.ru, {
"setLink": "⚙️ Настройки и информация",
"setTitle": "⚙️ Настройки и информация",
"setSub": "Мои боксы, подарочные коды, язык, безопасность, о проекте, как всё работает и правила. Нажми на раздел, чтобы открыть его.",
"setLangH": "🌐 Язык",
"setLangT": "Выбери язык страницы. Выбор сохранится на этом устройстве.",
"setSecH": "🛡️ Безопасность",
"setAboutH": "ℹ️ О проекте",
"setHowH": "📖 Как это работает",
"setRulesH": "📜 Правила использования",
"ab1h": "Что это",
"ab1t": "Xahau Box — страница, где можно собрать бокс с XAH и/или URIToken, закрыть его и подарить по ссылке, по QR или через токен-ключ.",
"ab2h": "Независимый проект",
"ab2t": "Это независимый проект, а не официальный продукт Xahau. С Xaman и Evergram проект тоже не связан: это просто инструменты, которыми он пользуется.",
"ab3h": "Что бывает в боксе",
"ab3t": "Только XAH и URIToken. Подарочный код с другого сайта тоже кладётся как URIToken: код внутри заперт паролем.",
"ab4h": "Как устроена страница",
"ab4t": "Статичная страница без сервера и без слежки. Она читает публичный леджер Xahau и собирает транзакции, а подписываешь их ты сам в Xaman. Правила бокса выполняет хук на аккаунте создателя бокса.",
"ab5h": "Сеть",
"ab5t": "Сначала проект проверяется в тестнете (Testnet). Сеть переключается кнопкой Testnet / Mainnet вверху страницы. Создать бокс можно только с аккаунта, на котором стоит хук бокса.",
"abVer": "Версия страницы",
"hw1h": "Создать бокс",
"hw1t": "5 шагов: что кладёшь → как отдать → ключ (только для токена-ключа) → срок → проверка и подпись в Xaman. Положить можно XAH и/или один свой URIToken. Нельзя положить токен, который может сжечь выпустивший, токен на продаже, токен, который уже в боксе, и токен-ключ.",
"hw2h": "Ссылка / QR «Для любого»",
"hw2t": "Ты получаешь ссылку и картинку бокса с QR. Кто первым откроет, тот и забирает. Подходит для розыгрыша или чтобы лично отправить одному человеку.",
"hw3h": "Ссылка / QR «Для одного адреса»",
"hw3t": "Открыть сможет только указанный адрес, поэтому ссылку можно показывать открыто.",
"hw4h": "Токен-ключ",
"hw4t": "Бокс открывает тот, у кого токен-ключ (URIToken). Ключ выбираешь из своих свободных или создаёшь новый (одна подпись). Когда бокс готов, последний шаг — передать токен-ключ получателю. Ключ можно подарить или продать.",
"hw5h": "Подарочный код с паролем",
"hw5t": "Код с другого сайта (например, подарочная карта) запирается паролем прямо в твоём браузере и кладётся в новый токен. Такой бокс отдаётся только через токен-ключ. Пароль передай получателю лично, например в Evergram. После открытия получатель вводит пароль в «🔒 Мои подарочные коды».",
"hw6h": "Открыть бокс",
"hw6t": "Нажми «Открыть бокс» и вставь ссылку, отсканируй QR или выбери фото. Страница покажет, что внутри, и соберёт транзакцию открытия. Подписываешь её в Xaman.",
"hw7h": "🎁 Мне пришли боксы",
"hw7t": "Здесь видны боксы, которые можно открыть токеном-ключом с твоего аккаунта. Нажми «Открыть» и подпиши. Боксы по ссылке/QR здесь не видны: открывай их по ссылке.",
"hw8h": "Мои боксы",
"hw8t": "Закрытые боксы на твоём аккаунте, новые сверху, с содержимым. Отсюда можно снова показать ссылку/QR, передать токен-ключ и забрать бокс обратно, когда срок истёк.",
"hw9h": "Срок",
"hw9t": "Срок — это номер леджера. До него бокс можно открыть, а создатель забрать его не может. После срока открыть уже нельзя, и создатель может забрать содержимое.",
"rulesIntro": "Пользуясь страницей, ты соглашаешься с этими правилами:",
"r1": "Ты пользуешься страницей на свой риск. Проект экспериментальный и даётся «как есть», без гарантий.",
"r2": "Каждую транзакцию ты подписываешь сам в Xaman. Перед подписью читай детали и проверяй сеть (Testnet / Mainnet).",
"r3": "Страница никогда не просит секретный ключ (seed) и не хранит твои средства. XAH и токены остаются на аккаунтах в леджере. Проект не может отменить, заморозить или вернуть транзакцию.",
"r4": "Ссылки и QR боксов, токены-ключи и пароли передавай только тому, кому даришь. Ссылка «Для любого» — как наличные.",
"r5": "Проверяй адрес получателя: перевод на неверный адрес не отменить.",
"r6": "Сохраняй пароли и ссылки. Пароль от подарочного кода страница не хранит и восстановить не может. Проект не отвечает за потери из-за потерянных или утёкших ссылок, паролей и ключей.",
"r7": "Принимай боксы от тех, кому доверяешь: бокс держится на аккаунте создателя.",
"r8": "В бокс кладутся только XAH и URIToken. Не используй страницу для обмана и незаконных целей. С подарочными кодами соблюдай правила сайта, который их выдал.",
"r9": "Это независимый проект, а не официальный продукт Xahau. Правила могут обновляться: действует версия на этой странице."
});

/* My boxes tabs (Settings and info) */
Object.assign(window.BOX_I18N.en, {
"mbH": "📦 My boxes",
"mbBuilt": "Built",
"mbRecv": "Received",
"mbSent": "Sent",
"mbBuiltSub": "Boxes you built that are still locked on your account (read from the ledger). Here you can show the link/QR again, hand over the key or take a box back after its time limit.",
"mbRecvSub": "Boxes for you: ones you can open with your key token, and ones you already opened.",
"mbSentSub": "Boxes you gave away: the key token is now at another address, a \"For one address\" box, or a box someone else already opened.",
"mbRecvNote": "A link/QR box you have not opened yet is not listed here: only whoever has the link knows it. Opened boxes come from your own opening transactions.",
"mbSentNote": "A \"For anyone\" link box that nobody has opened yet is listed only in \"Built\": the page cannot know whether you sent the link.",
"mbLocal": "The page knows this is a \"For one address\" box only from the records on this device.",
"mbSeeBuilt": "The box is still locked on your account: its actions are in the \"Built\" tab.",
"mbSignIn": "Sign in with Xaman or enter your address to see your boxes.",
"mbNone": "Nothing here yet.",
"mbOpenedYou": "Opened by you",
"mbOpenedBy": "Opened by",
"mbOpenedSt": "Opened",
"mbKeyAt": "Key held by",
"mbKeyGone": "The key no longer exists (burned)",
"mbNotOpened": "Not opened yet",
"mbFor": "For address",
"mbWhen": "When",
"mbOldKeys": "Old keys: their box was already opened or taken back",
"mbTrunc": "Checked the last {n} transactions of this account; older boxes may be missing.",
"mbPartErr": "Some ledger data did not load. Open the section again a bit later.",
"hw7t": "The home button opens the \"Received\" tab in \"📦 My boxes\". It shows boxes you can open with a key token on your account: tap \"Open\" and sign. Open link/QR boxes from the link.",
"hw8h": "📦 My boxes",
"hw8t": "Three tabs. \"Built\": your locked boxes, newest first, with contents; show the link/QR again, hand over the key token, take a box back after its time limit. \"Received\": boxes for you and the ones you already opened. \"Sent\": boxes you gave away and whether they were opened."
});
Object.assign(window.BOX_I18N.es, {
"mbH": "📦 Mis cajas",
"mbBuilt": "Armadas",
"mbRecv": "Recibidas",
"mbSent": "Enviadas",
"mbBuiltSub": "Cajas que armaste y que siguen cerradas en tu cuenta (leídas del ledger). Aquí puedes volver a mostrar el enlace/QR, entregar la llave o recuperar una caja tras su plazo.",
"mbRecvSub": "Cajas para ti: las que puedes abrir con tu token llave y las que ya abriste.",
"mbSentSub": "Cajas que entregaste: el token llave ya está en otra dirección, una caja «Para una dirección» o una caja que ya abrió otra persona.",
"mbRecvNote": "Una caja de enlace/QR que aún no abriste no aparece aquí: solo la conoce quien tiene el enlace. Las cajas abiertas salen de tus propias transacciones de apertura.",
"mbSentNote": "Una caja de enlace «Para cualquiera» que nadie ha abierto aún solo aparece en «Armadas»: la página no puede saber si enviaste el enlace.",
"mbLocal": "La página sabe que es una caja «Para una dirección» solo por los registros de este dispositivo.",
"mbSeeBuilt": "La caja sigue cerrada en tu cuenta: sus acciones están en la pestaña «Armadas».",
"mbSignIn": "Entra con Xaman o introduce tu dirección para ver tus cajas.",
"mbNone": "Aún no hay nada.",
"mbOpenedYou": "Abierta por ti",
"mbOpenedBy": "La abrió",
"mbOpenedSt": "Abierta",
"mbKeyAt": "Llave en",
"mbKeyGone": "La llave ya no existe (quemada)",
"mbNotOpened": "Aún sin abrir",
"mbFor": "Para la dirección",
"mbWhen": "Cuándo",
"mbOldKeys": "Llaves antiguas: su caja ya se abrió o se recuperó",
"mbTrunc": "Se revisaron las últimas {n} transacciones de la cuenta; puede faltar alguna caja más antigua.",
"mbPartErr": "Parte de los datos del ledger no se cargó. Vuelve a abrir la sección un poco más tarde.",
"hw7t": "El botón de inicio abre la pestaña «Recibidas» en «📦 Mis cajas». Ahí ves las cajas que puedes abrir con un token llave de tu cuenta: toca «Abrir» y firma. Las cajas de enlace/QR se abren desde el enlace.",
"hw8h": "📦 Mis cajas",
"hw8t": "Tres pestañas. «Armadas»: tus cajas cerradas, las nuevas primero, con su contenido; vuelve a mostrar el enlace/QR, entrega el token llave o recupera la caja tras su plazo. «Recibidas»: cajas para ti y las que ya abriste. «Enviadas»: cajas que entregaste y si se abrieron."
});
Object.assign(window.BOX_I18N.fr, {
"mbH": "📦 Mes boîtes",
"mbBuilt": "Préparées",
"mbRecv": "Reçues",
"mbSent": "Envoyées",
"mbBuiltSub": "Les boîtes que vous avez préparées et qui sont encore verrouillées sur votre compte (lues sur le ledger). Ici, vous pouvez réafficher le lien/QR, remettre la clé ou récupérer une boîte après son délai.",
"mbRecvSub": "Les boîtes pour vous : celles que vous pouvez ouvrir avec votre jeton clé, et celles que vous avez déjà ouvertes.",
"mbSentSub": "Les boîtes que vous avez données : le jeton clé est chez une autre adresse, une boîte « Pour une adresse », ou une boîte déjà ouverte par quelqu’un d’autre.",
"mbRecvNote": "Une boîte par lien/QR pas encore ouverte n’apparaît pas ici : seul celui qui a le lien la connaît. Les boîtes ouvertes viennent de vos propres transactions d’ouverture.",
"mbSentNote": "Une boîte par lien « Pour tout le monde » que personne n’a encore ouverte n’apparaît que dans « Préparées » : la page ne peut pas savoir si vous avez envoyé le lien.",
"mbLocal": "La page sait qu’il s’agit d’une boîte « Pour une adresse » seulement grâce aux données de cet appareil.",
"mbSeeBuilt": "La boîte est encore verrouillée sur votre compte : ses actions sont dans l’onglet « Préparées ».",
"mbSignIn": "Connectez-vous avec Xaman ou saisissez votre adresse pour voir vos boîtes.",
"mbNone": "Rien pour l’instant.",
"mbOpenedYou": "Ouverte par vous",
"mbOpenedBy": "Ouverte par",
"mbOpenedSt": "Ouverte",
"mbKeyAt": "Clé chez",
"mbKeyGone": "La clé n’existe plus (brûlée)",
"mbNotOpened": "Pas encore ouverte",
"mbFor": "Pour l’adresse",
"mbWhen": "Quand",
"mbOldKeys": "Anciennes clés : leur boîte a déjà été ouverte ou reprise",
"mbTrunc": "Les {n} dernières transactions du compte ont été lues ; des boîtes plus anciennes peuvent manquer.",
"mbPartErr": "Une partie des données du ledger ne s’est pas chargée. Rouvrez la section un peu plus tard.",
"hw7t": "Le bouton de l’accueil ouvre l’onglet « Reçues » dans « 📦 Mes boîtes ». On y voit les boîtes que vous pouvez ouvrir avec un jeton clé de votre compte : touchez « Ouvrir » et signez. Les boîtes par lien/QR s’ouvrent depuis le lien.",
"hw8h": "📦 Mes boîtes",
"hw8t": "Trois onglets. « Préparées » : vos boîtes verrouillées, les plus récentes d’abord, avec leur contenu ; réafficher le lien/QR, remettre le jeton clé, récupérer une boîte après son délai. « Reçues » : les boîtes pour vous et celles déjà ouvertes. « Envoyées » : les boîtes que vous avez données et si elles ont été ouvertes."
});
Object.assign(window.BOX_I18N.ru, {
"mbH": "📦 Мои боксы",
"mbBuilt": "Собранные",
"mbRecv": "Полученные",
"mbSent": "Отправленные",
"mbBuiltSub": "Боксы, которые ты собрал и которые ещё закрыты на твоём аккаунте (из леджера). Здесь можно снова показать ссылку/QR, передать ключ или забрать бокс после срока.",
"mbRecvSub": "Боксы для тебя: те, что можно открыть твоим токеном-ключом, и те, что ты уже открыл.",
"mbSentSub": "Боксы, которые ты отдал: токен-ключ уже у другого адреса, бокс «Для одного адреса» или бокс, который уже открыл кто-то другой.",
"mbRecvNote": "Бокс по ссылке/QR, который ты ещё не открыл, здесь не виден: его знает только тот, у кого ссылка. Открытые боксы взяты из твоих транзакций открытия.",
"mbSentNote": "Бокс по ссылке «Для любого», который ещё никто не открыл, виден только в «Собранные»: страница не может знать, отправил ли ты ссылку.",
"mbLocal": "Что это бокс «Для одного адреса», страница знает только по записям на этом устройстве.",
"mbSeeBuilt": "Бокс ещё закрыт на твоём аккаунте: действия с ним — во вкладке «Собранные».",
"mbSignIn": "Войди через Xaman или введи адрес, чтобы увидеть свои боксы.",
"mbNone": "Пока пусто.",
"mbOpenedYou": "Открыт тобой",
"mbOpenedBy": "Открыл",
"mbOpenedSt": "Открыт",
"mbKeyAt": "Ключ у",
"mbKeyGone": "Ключа больше нет (сожжён)",
"mbNotOpened": "Ещё не открыт",
"mbFor": "Для адреса",
"mbWhen": "Когда",
"mbOldKeys": "Старые ключи: их бокс уже открыт или забран",
"mbTrunc": "Просмотрены последние {n} транзакций аккаунта, более старые боксы могут не попасть в список.",
"mbPartErr": "Часть данных из леджера не загрузилась. Открой раздел ещё раз чуть позже.",
"hw7t": "Кнопка на главной открывает вкладку «Полученные» в «📦 Мои боксы». Там видны боксы, которые можно открыть токеном-ключом с твоего аккаунта: нажми «Открыть» и подпиши. Боксы по ссылке/QR открывай по ссылке.",
"hw8h": "📦 Мои боксы",
"hw8t": "Три вкладки. «Собранные» — твои закрытые боксы, новые сверху, с содержимым: можно снова показать ссылку/QR, передать токен-ключ и забрать бокс, когда срок истёк. «Полученные» — боксы для тебя и те, что ты уже открыл. «Отправленные» — боксы, которые ты отдал, и открыты ли они."
});
/* header network toggle */
Object.assign(window.BOX_I18N.en, { netSwitch: "Switch network: Testnet ⇄ Mainnet" });
Object.assign(window.BOX_I18N.es, { netSwitch: "Cambiar red: Testnet ⇄ Mainnet" });
Object.assign(window.BOX_I18N.fr, { netSwitch: "Changer de réseau : Testnet ⇄ Mainnet" });
Object.assign(window.BOX_I18N.ru, { netSwitch: "Переключить сеть: Testnet ⇄ Mainnet" });
/* gift codes section in Settings */
Object.assign(window.BOX_I18N.en, { gcSignIn: "Sign in with Xaman or enter your address to see your gift codes." });
Object.assign(window.BOX_I18N.es, { gcSignIn: "Entra con Xaman o introduce tu dirección para ver tus códigos regalo." });
Object.assign(window.BOX_I18N.fr, { gcSignIn: "Connectez-vous avec Xaman ou saisissez votre adresse pour voir vos codes cadeaux." });
Object.assign(window.BOX_I18N.ru, { gcSignIn: "Войди через Xaman или введи адрес, чтобы увидеть свои подарочные коды." });
/* header settings button */
Object.assign(window.BOX_I18N.en, { setBtnT: "⚙️ Settings & info" });
Object.assign(window.BOX_I18N.es, { setBtnT: "⚙️ Ajustes e info" });
Object.assign(window.BOX_I18N.fr, { setBtnT: "⚙️ Réglages et infos" });
Object.assign(window.BOX_I18N.ru, { setBtnT: "⚙️ Настройки и инфо" });
/* who can receive/open (How it works) */
Object.assign(window.BOX_I18N.ru, {"hw0h": "Кто может получать и открывать боксы", "hw0a": "Получать и открывать боксы может любой пользователь сети", "hw0b": "— для этого не нужно ставить хук. Хук нужен только на аккаунте, который собирает и отправляет боксы."});
Object.assign(window.BOX_I18N.en, {"hw0h": "Who can receive and open boxes", "hw0a": "Anyone on", "hw0b": "can receive and open boxes — no hook installation is needed for that. The hook is needed only on the account that builds and sends boxes."});
Object.assign(window.BOX_I18N.es, {"hw0h": "Quién puede recibir y abrir cajas", "hw0a": "Cualquier usuario de la red", "hw0b": "puede recibir y abrir cajas: para eso no hace falta instalar ningún hook. El hook solo se necesita en la cuenta que arma y envía las cajas."});
Object.assign(window.BOX_I18N.fr, {"hw0h": "Qui peut recevoir et ouvrir des boîtes", "hw0a": "Tout utilisateur du réseau", "hw0b": "peut recevoir et ouvrir des boîtes : aucune installation de hook n’est nécessaire pour cela. Le hook n’est nécessaire que sur le compte qui prépare et envoie les boîtes."});
/* How it works: QR codes */
Object.assign(window.BOX_I18N.ru, {"hwQh": "QR-коды", "hwQ1": "QR-код — это та же ссылка на бокс, только картинкой. В ней есть ключ, которым открывается бокс, поэтому береги её как сам подарок.", "hwQ2": "Как отдать: собери бокс в режиме «Для любого» или «Для одного адреса» и подпиши в Xaman — страница покажет ссылку и QR. Ссылку можно отправить текстом — лучше всего через Evergram. QR можно показать на экране, чтобы его отсканировали, или отправить картинку с QR. Снова показать ссылку и QR можно в «📦 Мои боксы» → «Собранные», но только для боксов, собранных в этом браузере: ключ от ссылки хранится только у тебя на устройстве.", "hwQ3": "Как открыть: на главной нажми «Открыть бокс» и отсканируй QR камерой или выбери фото с ним. Можно и просто навести камеру телефона на QR: в нём адрес этой страницы, и она сразу откроется с этим боксом (и сама переключит сеть, если нужно). Страница покажет, что внутри; дальше войди через Xaman и подпиши открытие.", "hwQ4": "Важно: QR «Для любого» — как наличные: кто первым откроет, тот и забирает, поэтому не выкладывай его в открытый доступ. Бокс «Для одного адреса» откроется только для этого адреса, даже если QR увидят другие. В режиме токена-ключа QR не нужен: ты передаёшь токен-ключ, а получатель открывает бокс в «🎁 Мне пришли боксы»."});
Object.assign(window.BOX_I18N.en, {"hwQh": "QR codes", "hwQ1": "A QR code is the same box link, as a picture. It contains the key that opens the box, so keep it as safe as the gift itself.", "hwQ2": "Giving: build a box in \"For anyone\" or \"For one address\" mode and sign it in Xaman — the page shows the link and the QR. Send the link as text — best via Evergram. Or show the QR on screen to be scanned, or send the picture with the QR. You can show the link and QR again in \"📦 My boxes\" → \"Built\", but only for boxes built in this browser: the link key is kept only on your device.", "hwQ3": "Opening: on the home screen tap \"Open a box\" and scan the QR with the camera or pick a photo of it. You can also just point your phone camera at the QR: it holds this page’s address, so the page opens straight with that box (and switches the network if needed). The page shows what is inside; then sign in with Xaman and sign the opening.", "hwQ4": "Important: a \"For anyone\" QR is like cash — whoever opens it first takes it, so don’t post it publicly. A \"For one address\" box opens only for that address, even if others see the QR. In key-token mode no QR is needed: you hand over the key token and the recipient opens the box in \"🎁 Boxes for me\"."});
Object.assign(window.BOX_I18N.es, {"hwQh": "Códigos QR", "hwQ1": "Un código QR es el mismo enlace de la caja, en forma de imagen. Contiene la llave que abre la caja, así que cuídalo como el propio regalo.", "hwQ2": "Para entregarla: arma una caja en modo «Para cualquiera» o «Para una dirección» y fírmala en Xaman: la página muestra el enlace y el QR. Puedes enviar el enlace como texto, mejor por Evergram. O mostrar el QR en pantalla para que lo escaneen o enviar la imagen con el QR. Puedes volver a mostrar el enlace y el QR en «📦 Mis cajas» → «Armadas», pero solo para cajas armadas en este navegador: la llave del enlace se guarda solo en tu dispositivo.", "hwQ3": "Para abrirla: en el inicio toca «Abrir una caja» y escanea el QR con la cámara o elige una foto de él. También puedes apuntar la cámara del móvil al QR: contiene la dirección de esta página, que se abre directamente con esa caja (y cambia de red si hace falta). La página muestra qué hay dentro; luego entra con Xaman y firma la apertura.", "hwQ4": "Importante: un QR «Para cualquiera» es como dinero en efectivo: quien lo abra primero se lo queda, así que no lo publiques. Una caja «Para una dirección» solo se abre para esa dirección, aunque otros vean el QR. En modo token llave no hace falta QR: entregas el token llave y el destinatario abre la caja en «🎁 Cajas para mí»."});
Object.assign(window.BOX_I18N.fr, {"hwQh": "Codes QR", "hwQ1": "Un code QR, c’est le même lien de la boîte, en image. Il contient la clé qui ouvre la boîte : gardez-le aussi précieusement que le cadeau.", "hwQ2": "Pour donner : préparez une boîte en mode « Pour tout le monde » ou « Pour une adresse » et signez-la dans Xaman — la page affiche le lien et le QR. Envoyez le lien en texte, idéalement via Evergram. Ou montrez le QR à l’écran pour qu’on le scanne, ou envoyez l’image avec le QR. Vous pouvez réafficher le lien et le QR dans « 📦 Mes boîtes » → « Préparées », mais seulement pour les boîtes préparées dans ce navigateur : la clé du lien n’est conservée que sur votre appareil.", "hwQ3": "Pour ouvrir : sur l’accueil, touchez « Ouvrir une boîte » et scannez le QR avec la caméra ou choisissez une photo du QR. Vous pouvez aussi simplement viser le QR avec l’appareil photo du téléphone : il contient l’adresse de cette page, qui s’ouvre directement sur cette boîte (et change de réseau si besoin). La page montre ce qu’il y a dedans ; connectez-vous ensuite avec Xaman et signez l’ouverture.", "hwQ4": "Important : un QR « Pour tout le monde » est comme de l’argent liquide — le premier qui l’ouvre le prend, ne le publiez donc pas. Une boîte « Pour une adresse » ne s’ouvre que pour cette adresse, même si d’autres voient le QR. En mode jeton clé, pas besoin de QR : vous remettez le jeton clé et le destinataire ouvre la boîte dans « 🎁 Boîtes pour moi »."});

window.BOX_I18N.de = {
 "recipientPh": "r... (Empfänger)",
 "change": "Ändern",
 "signIn": "Mit Xaman anmelden",
 "signInShort": "Anmelden",
 "signOut": "Abmelden",
 "notSignedIn": "Nicht angemeldet",
 "addrOnlyTag": "Adresse",
 "signedIn": "Angemeldet",
 "signedOut": "Abgemeldet. Die auf diesem Gerät gespeicherten Box-Links bleiben erhalten.",
 "signInToSign": "Melde dich mit Xaman an, dann signierst du hier mit einem Tippen. Oder kopiere das JSON unten und signiere es selbst.",
 "otherAcct": "Du bist mit einem anderen Konto angemeldet. Diese Transaktion muss signiert werden von",
 "homeTitle1": "Pack eine Box und verschenk sie",
 "homeTitle2": "XAH und ein Token – oder nur eins davon",
 "homeSub": "Leg XAH und/oder ein URIToken hinein, verschließ die Box und gib sie per QR-Code weiter.",
 "createBox": "Box erstellen",
 "openBox": "Box öffnen",
 "myBoxes": "Meine Boxen",
 "homeNote": "Kein Server. Jeden Schritt signierst du selbst in deiner Wallet.",
 "connectTitle": "Dein Konto",
 "connectSub": "Wähl, wie du signierst. Deine Schlüssel bleiben in deiner Wallet – diese Seite sieht sie nie.",
 "xamanSign": "Mit Xaman signieren",
 "xamanNote": "Wallet-App auf deinem Handy",
 "xamanOff": "Auf dieser Seite noch nicht eingerichtet. Nutze unten die Option mit der Adresse.",
 "addrOnly": "Oder gib deine Adresse ein (woanders signieren)",
 "addrOnlyNote": "Die Seite liest den Ledger und gibt dir Transaktions-JSON zum Kopieren. Signieren kannst du es in Xaman oder einem anderen Tool.",
 "continue": "Weiter",
 "xahAmount": "XAH in der Box",
 "tokenInside": "URIToken in der Box",
 "optional": "(optional)",
 "kLink": "Link / QR",
 "kLinkSub": "Du bekommst einen Link und ein Box-Bild, dessen QR-Code denselben Link enthält.",
 "mintKey": "Neuen Schlüssel erstellen",
 "mintKeySub": "Erstellt auf diesem Konto ein neues Schlüssel-URIToken (nicht verbrennbar). Nach dem Signieren wird es automatisch als Schlüssel gewählt.",
 "orPickKey": "Oder nimm ein Token, das du schon hast",
 "mintTitle": "Schlüssel-Token signieren",
 "mintNoFunds": "Nicht genug freie XAH, um ein Schlüssel-Token zu erstellen (ca.).",
 "minted": "Schlüssel-Token erstellt und als Schlüssel gewählt.",
 "newTag": "neu",
 "ledgerNow": "Aktueller Ledger",
 "ledgerExp": "Ablauf-Ledger",
 "timeLeft": "Verbleibend",
 "ledgerShort": "Ledger",
 "expiredState": "Abgelaufen",
 "ledgersLeft": "Ledger",
 "ledgersAgo": "Ledger her",
 "secPerLedger": "s/Ledger",
 "uD": "T",
 "uH": "Std",
 "uM": "Min",
 "howGive": "Wie du sie übergibst",
 "kBearer": "Für alle",
 "kBearerSub": "Wer den Link oder QR-Code zuerst öffnet, bekommt die Box. Gut für öffentliche Giveaways.",
 "kNamed": "Für eine Adresse",
 "kNamedSub": "Nur diese Adresse kann sie öffnen. Link und QR-Code darfst du ruhig öffentlich zeigen.",
 "kToken": "Schlüssel-Token",
 "kTokenSub": "Wer das Schlüssel-URIToken besitzt, öffnet die Box. Der QR-Code zeigt nur auf die Box; den Schlüssel kannst du verschenken oder verkaufen.",
 "timeLimit": "Frist",
 "noLimit": "Keine Frist",
 "d1": "1 Tag",
 "d7": "7 Tage",
 "d30": "30 Tage",
 "d90": "90 Tage",
 "total": "In der Box",
 "buildBox": "Box zusammenstellen",
 "checkLedger": "Signiert – Ledger prüfen",
 "back": "Zurück",
 "boxReady": "Die Box ist fertig!",
 "locked": "Verschlossen",
 "download": "Bild herunterladen",
 "share": "Bild teilen",
 "shareLink": "Link teilen",
 "copyLink": "Link kopieren",
 "bearerWarn": "Wer diesen Link oder QR-Code zuerst nutzt, öffnet die Box. Poste ihn für ein Giveaway oder schick ihn privat an eine Person.",
 "handKey": "Schlüssel-Token übergeben an",
 "buildRemit": "Übertragung vorbereiten",
 "evergramHint": "Sag dem Empfänger auf Evergram, dass eine Box auf ihn wartet.",
 "finish": "Fertig",
 "boxForYou": "Eine Box für dich",
 "pasteQr": "QR-Code oder Link der Box",
 "show": "Box anzeigen",
 "scan": "Scannen",
 "photo": "Foto",
 "stop": "Stopp",
 "opened": "Geöffnet! 🎉",
 "home": "Start",
 "myBoxesSub": "Verschlossene Boxen auf dem verbundenen Konto (aus dem Ledger gelesen).",
 "takeBackByVc": "Box zurückholen (nach Ablauf der Frist)",
 "buildOpen": "Rückholung vorbereiten",
 "footer": "Statische Seite. Kein Server, kein Tracking. Erst im Testnet.",
 "needAccount": "Gib eine gültige r-Adresse ein.",
 "notFoundAcct": "Konto in diesem Netzwerk nicht gefunden.",
 "hookYes": "Box-Hook auf diesem Konto gefunden",
 "hookNo": "Auf diesem Konto ist kein Hook. Boxen werden von dem Konto erstellt, auf dem der Box-Hook installiert ist.",
 "balance": "Guthaben",
 "available": "Frei verfügbar",
 "reserve": "Reserve",
 "noTokens": "Dieses Konto hat keine eigenen URITokens. Du kannst nur XAH hineinlegen oder unten einen Geschenkcode erstellen.",
 "noFreeTokens": "Keins deiner URITokens kann gerade hinein (der Grund steht jeweils darunter). Du kannst XAH hineinlegen oder unten einen Geschenkcode erstellen.",
 "tokPick": "Wählbar: {n}. Tipp auf ein Token, um es in die Box zu legen.",
 "burnable": "vom Herausgeber verbrennbar – der Hook nimmt es nicht an",
 "onSale": "zum Verkauf",
 "inBox": "in einer Box",
 "keyOfBox": "Schlüssel einer Box",
 "none": "Keine",
 "needSomething": "Leg XAH oder ein Token in die Box.",
 "needKey": "Wähl das Schlüssel-Token.",
 "needNamed": "Gib die Empfängeradresse ein.",
 "keyIsGift": "Das Schlüssel-Token kann nicht gleichzeitig der Inhalt sein.",
 "amtBad": "Ungültiger Betrag.",
 "notEnough": "Nicht genug freie XAH (ca.).",
 "expAt": "Bis Ledger",
 "approx": "ca.",
 "auditFirst": "Der Hook verlangt zuerst ein AUDIT. Signiere Schritt 1, dann Schritt 2.",
 "stepAudit": "Schritt 1 · AUDIT (nur falls nötig)",
 "stepPack": "Schritt 2 · Box packen (PACK)",
 "stepOnly": "Transaktion",
 "copy": "Kopieren",
 "copied": "Kopiert",
 "signHere": "Kopiere das JSON und signiere es in Xaman oder einem anderen Tool für Roh-Transaktionen, Konto",
 "packTitle": "Box signieren",
 "claimTitle": "Öffnen signieren",
 "openTitle": "Box zurückholen",
 "remitTitle": "Schlüssel-Token senden",
 "waiting": "Warte auf den Ledger…",
 "notYet": "Noch nicht im Ledger. Warte ein paar Sekunden und prüf es noch mal.",
 "xamanOpen": "In Xaman öffnen",
 "xamanWait": "Bestätige die Anfrage in Xaman…",
 "rejected": "Die Anfrage wurde in Xaman abgebrochen.",
 "hookSays": "Antwort des Hooks",
 "txHash": "Transaktion",
 "contents": "Inhalt",
 "kind": "Art",
 "expires": "Zu öffnen bis",
 "status": "Status",
 "stClosed": "Verschlossen – wartet",
 "stExpired": "Abgelaufen – der Ersteller kann sie zurückholen",
 "stClaiming": "Wird geöffnet…",
 "stGone": "Nicht gefunden oder schon geöffnet",
 "boxNumber": "Box-Nummer",
 "keyHolder": "Besitzer des Schlüssel-Tokens",
 "nonce": "Signaturnummer",
 "youOpen": "Öffnen als",
 "openNow": "Box öffnen",
 "notForYou": "Dieser QR-Code ist für eine andere Adresse",
 "notHolder": "Du besitzt das Schlüssel-Token nicht",
 "expired": "Frist abgelaufen",
 "badQr": "Das ist kein Box-QR-Code.",
 "netSwitched": "Netzwerk passend zum QR-Code gewechselt",
 "giftCode": "Geschenkcode",
 "received": "Auf dein Konto gesendet",
 "explorer": "Im Explorer ansehen",
 "noBoxes": "Keine verschlossenen Boxen auf diesem Konto.",
 "takeBack": "Zurückholen",
 "vcUnknown": "Box-Nummer auf diesem Gerät unbekannt",
 "vcBad": "VC muss aus 64 Hex-Zeichen bestehen.",
 "showLink": "Link / QR anzeigen",
 "boxRestored": "Box im Ledger gefunden – hier ist ihr Link",
 "storageOff": "Dieser Browser lässt die Seite den Box-Link nicht speichern. Schalte den privaten Modus aus und versuch es noch mal.",
 "bearerKind": "Link / QR · für alle",
 "namedKind": "Link / QR · für eine Adresse",
 "tokenKind": "Schlüssel-Token",
 "copyFailed": "Kopieren fehlgeschlagen",
 "checkHash": "Oder füg den Transaktions-Hash ein",
 "checkHashBtn": "Prüfen",
 "needOpener": "Gib die Adresse ein, die die Box öffnen soll.",
 "signedFor": "Signiert für",
 "keyQrHint": "Nutze dieses Bild als Bild des Schlüssel-Tokens oder teile es: Öffnen kann nur, wer den Schlüssel besitzt.",
 "remitHint": "Ganz normale Übertragung des Schlüssel-Tokens. Der Hook ist daran nicht beteiligt.",
 "transferKey": "Schlüssel-Token übertragen",
 "keyChecking": "Schlüssel-Token wird im Ledger geprüft…",
 "keyGone": "Das Schlüssel-Token existiert im Ledger nicht mehr (verbrannt?).",
 "keyNotYours": "Das Schlüssel-Token ist gerade nicht auf deinem Konto. Besitzer:",
 "keySelf": "Das ist deine eigene Adresse. Gib die Adresse des Empfängers ein.",
 "wStepOf": "Schritt {n} von {m}",
 "wNext": "Weiter",
 "wPrev": "Zurück",
 "w1T": "Was in die Box kommt",
 "w1H": "Gib XAH ein und/oder tipp auf ein Token. Schlüssel-Tokens erscheinen hier nicht: Sie öffnen Boxen.",
 "w2T": "Wie du sie übergibst",
 "w2H": "Link/QR: Wer den Link hat, öffnet die Box. Schlüssel-Token: Wer den Schlüssel besitzt, öffnet sie. Ein Geschenkcode geht immer mit einem Schlüssel-Token.",
 "w3T": "Schlüssel",
 "w3H": "Wähl ein freies Schlüssel-Token. Erstell nur dann ein neues, wenn du keins hast.",
 "w4T": "Frist",
 "w4H": "Optional. Danach lässt sich die Box nicht mehr öffnen, und du kannst sie zurückholen.",
 "w5T": "Prüfen und signieren",
 "w5H": "Prüf alles und signiere die Box dann in Xaman.",
 "myCodes": "🔒 Meine Geschenkcodes",
 "gcNone": "Auf diesem Konto gibt es keine Geschenkcode-Tokens.",
 "bxInside": "In der Box",
 "bxEmpty": "Leer",
 "bxNo": "Box",
 "bxKeyTok": "Schlüssel-Token dieser Box",
 "inboxT": "🎁 Boxen für mich",
 "inboxSub": "Boxen, die du mit einem Schlüssel-Token auf diesem Konto öffnen kannst. Boxen per Link/QR stehen hier nicht – öffne sie über den Link.",
 "inboxNone": "Keine Schlüssel-Tokens für Boxen auf diesem Konto.",
 "inboxFrom": "Von",
 "inboxOpen": "Öffnen",
 "inboxGone": "Dieser Schlüssel öffnet nichts mehr: Die Box wurde schon geöffnet oder zurückgeholt.",
 "inboxNoVc": "Die PACK-Transaktion dieser Box wurde im Ledger nicht gefunden. Versuch es später noch mal.",
 "inboxGcNote": "Gib nach dem Öffnen das Passwort vom Absender unter „Meine Geschenkcodes“ ein.",
 "gcGotHint": "Das ist ein Geschenkcode mit Passwortschutz. Frag den Absender nach dem Passwort und öffne ihn unter „Meine Geschenkcodes“.",
 "scamH": "Vorsicht vor Betrügern",
 "scamT": "Xahau Box läuft über Xaman: Du meldest dich an und signierst jede Transaktion in deinem eigenen Xaman. Pass deshalb auf Betrüger auf, die das ausnutzen wollen. Nichts, was zu Xahau Box gehört, wird dich je nach deinem geheimen Schlüssel oder nach einer Einzahlung an irgendeine Adresse fragen.",
 "egH": "Kontakt über Evergram",
 "egT": "Wenn dir etwas komisch vorkommt, schreib dem Absender oder Empfänger auf Evergram, bevor du signierst. Darüber kannst du auch bequem das Passwort eines Geschenkcodes persönlich weitergeben.",
 "egPwT": "Das Passwort eines Geschenkcodes gibst du am besten über Evergram weiter, im privaten Chat mit dem Empfänger. Evergram verschlüsselt Nachrichten direkt auf deinem Gerät; die Schlüssel entstehen dort und verlassen es nie. Die Server leiten nur verschlüsselte Daten weiter und können den Text nicht lesen, und die Nachrichten landen nicht in der Blockchain. Schick das Passwort nicht in einen Gruppenchat: Dort sehen es alle.",
 "gcTag": "🔒 Geschenkcode",
 "pickKey": "Deine freien Schlüssel-Tokens",
 "sumKey": "Schlüssel-Token",
 "doneStepKey": "Schritt 6: Übergib den Schlüssel an den Empfänger",
 "doneGcPw": "In der Box ist ein Geschenkcode: Schick dem Empfänger das Passwort persönlich (z. B. auf Evergram) – niemals im Link, im QR-Code oder in einem öffentlichen Post.",
 "doneNextKey": "Die Box ist fertig. Letzter Schritt: Übergib das Schlüssel-Token an den Empfänger (unten).",
 "doneNextLink": "Die Box ist fertig. Jetzt schick dem Empfänger den Link oder das Bild mit dem QR-Code.",
 "isKeyTok": "Das ist ein Schlüssel-Token: Es öffnet eine Box und kommt nicht hinein.",
 "noKeyYet": "Auf diesem Konto gibt es noch kein freies Schlüssel-Token. Erstell zuerst das Schlüssel-Token (eine Signatur) und signiere dann die Box.",
 "gcNeedsKey": "Ein Geschenkcode kommt nur in eine Box mit „Schlüssel-Token“.",
 "limitNone": "keine",
 "secLink": "Sicherheit",
 "secTitle": "Sicherheit",
 "secIntro": "Wie eine Box funktioniert und worauf du achten solltest.",
 "s1h": "Kein Server, du signierst selbst",
 "s1t": "Die Seite hat keinen Server. Sie stellt nur Transaktionen zusammen, und jede signierst du selbst in Xaman oder deinem eigenen Tool. Die Seite fragt nie nach deinem Secret (Seed) und sieht es nie. Gib dein Secret niemals auf einer Website ein.",
 "s2h": "Wo das Geschenk liegt",
 "s2t": "Die XAH bleiben im Guthaben des Kontos, das die Box erstellt hat, und sind durch die Regeln des Hooks gesperrt. Auch das Token bleibt bis zum Öffnen auf dem Konto des Erstellers. Eine Box enthält nur XAH und URITokens.",
 "s3h": "Vertrauen in den Ersteller",
 "s3t": "Der Ersteller kontrolliert sein Konto: Er kann den Hook entfernen oder die Mittel verschieben. Eine Box ist ein Versprechen, das am Konto des Erstellers hängt – kein Treuhandkonto. Nimm Boxen nur von Leuten an, denen du vertraust.",
 "s4h": "Andere Hooks auf demselben Konto",
 "s4t": "Alle Hooks auf einem Konto sind gleichberechtigt und steuern es gleichermaßen. Das größte echte Risiko sind Hooks, die selbstständig Zahlungen senden (Daueraufträge, Weiterleitung, Sparen, Zeitpläne): Sie können die XAH der Box ausgeben. Dann geht die Auszahlung nicht durch, und die Box bleibt zu, bis das Guthaben wieder aufgefüllt ist. Ein weiteres Risiko ist ein Hook mit einem Fehler im Code oder einer, dessen echtes Verhalten du nicht kennst: So ein Hook kann die Daten der Box ändern oder löschen. Installiere neben der Box nur Hooks, denen du vertraust und die du verstehst. In v15, an der gerade gearbeitet wird, werden die XAH der Box reserviert. Bis dahin: Behalte dein Guthaben im Blick und bleib aufmerksam.",
 "s5h": "„Für alle“ ist wie Bargeld",
 "s5t": "Wer den Link oder QR-Code zuerst öffnet, bekommt die Box – teil ihn also privat, außer bei einem Giveaway. Eine Box „Für eine Adresse“ kann nur diese Adresse öffnen, ihr Link darf daher öffentlich sein.",
 "s6h": "Schlüssel-Token",
 "s6t": "Wer das Schlüssel-Token besitzt, kann die Box öffnen. Echte Schlüssel-Tokens gibt das Box-Konto heraus, aber jeder kann ein ähnlich aussehendes Token mit hübschem Bild erstellen. Prüf also den Herausgeber und öffne die Box über die Seite. Nach dem Öffnen kann der Besitzer den Schlüssel als Andenken behalten oder in seiner Wallet verbrennen.",
 "s7h": "Frist",
 "s7t": "Eine Frist ist eine Ledger-Nummer. Ist sie überschritten, lässt sich die Box nicht mehr öffnen, und der Ersteller kann den Inhalt zurückholen. Vorher erlauben die Box-Regeln dem Ersteller kein Zurückholen. Eine Box ohne Frist bleibt bestehen, bis sie geöffnet wird; wird ihr Schlüssel-Token verbrannt, kann der Ersteller sie zurückholen.",
 "s8h": "Alles ist öffentlich",
 "s8t": "Beträge, Adressen und Box-Daten sind im Ledger für alle sichtbar. Der Code der Seite ist Open Source.",
 "s9h": "Erst prüfen, dann signieren",
 "s9t": "Schau vor dem Signieren oben auf der Seite nach, ob Testnet oder Mainnet aktiv ist. Lies in Xaman die Transaktionsdetails, bevor du signierst.",
 "secBye": "Pass auf dich und deine Liebsten auf 🙏",
 "gcTitle": "Geschenkcode",
 "gcSub": "Leg einen Code von einer anderen Seite (z. B. eine Roblox-Geschenkkarte) in die Box. Die Seite verschließt ihn direkt hier in deinem Browser mit einem Passwort und legt ihn in ein neues Token.",
 "gcAdd": "Geschenkcode hinzufügen",
 "gcCancel": "Abbrechen",
 "gcCodeLbl": "Code",
 "gcCodePh": "z. B. ABCD-1234-EFGH",
 "gcLeft": "Übrig: {n} von {m} Byte (Zeichen außerhalb von A–Z brauchen 2–3)",
 "gcTooLong": "Der Code ist zu lang. Kürz ihn bitte.",
 "gcPwLbl": "Passwort",
 "gcPwPh": "mindestens 12 Zeichen",
 "gcGen": "Passwort erzeugen",
 "gcCopyPw": "Passwort kopieren",
 "gcPwShort": "Das Passwort ist zu kurz: mindestens 12 Zeichen. Tipp lieber auf „Passwort erzeugen“.",
 "gcWarn": "Der Code ist nur durch dieses Passwort geschützt. Wer die Token-Daten und das Passwort hat, kann ihn lesen. Die Seite speichert das Passwort nicht: Sichere es jetzt und schick es persönlich an die Person, der du die Box schenkst – niemals im QR-Code, im Link oder in einem öffentlichen Post.",
 "gcSaved": "Ich habe das Passwort gesichert",
 "gcMint": "Geschenkcode-Token erstellen",
 "gcMintSub": "Erstellt auf diesem Konto ein neues URIToken mit dem verschlossenen Code (Flags 0: Nur der Besitzer kann es verbrennen). Nach dem Signieren landet es automatisch in der Box.",
 "gcNeedCode": "Gib den Code ein.",
 "gcNeedSaved": "Sichere zuerst das Passwort und hak dann „Ich habe das Passwort gesichert“ an.",
 "gcEncErr": "Der Code konnte in diesem Browser nicht verschlossen werden.",
 "gcMintTitle": "Geschenkcode-Token signieren",
 "gcMinted": "Geschenkcode-Token erstellt und in die Box gelegt.",
 "gcModeHint": "In der Box ist ein Geschenkcode, daher wird sie mit einem Schlüssel-Token übergeben. Gib das Schlüssel-Token weiter und schick das Passwort persönlich.",
 "gcCard": "Verschlüsselter Geschenkcode",
 "gcCardSub": "Mit Passwort verschlossen",
 "gcAfterOpen": "Nach dem Öffnen der Box lässt sich der Code mit dem Passwort entsperren.",
 "gcShow": "Code anzeigen",
 "gcPwEnter": "Passwort",
 "gcDecrypt": "Entsperren",
 "gcWorking": "Einen Moment…",
 "gcWrong": "Falsches Passwort. Prüf es und versuch es noch mal.",
 "gcPwNeed": "Gib das Passwort ein.",
 "gcHide": "Ausblenden",
 "gcLocal": "Hier in deinem Browser entsperrt. Das Passwort wird nicht gespeichert, und nichts wird irgendwohin gesendet.",
 "gcMine": "Geschenkcodes auf diesem Konto",
 "gcMineSub": "Tokens mit verschlossenem Code auf diesem Konto. Entsperr einen mit seinem Passwort.",
 "s10h": "Ein Geschenkcode ist nur durch sein Passwort geschützt",
 "s10t": "Ein Geschenkcode im Token wird in deinem Browser mit einem Passwort verschlüsselt. Token-Daten sind öffentlich – wer sie und das Passwort hat, kann den Code lesen. Nutze das erzeugte starke Passwort, gib es persönlich weiter (nicht im QR-Code, im Link oder in einem öffentlichen Post) und verwende es kein zweites Mal. Die Seite speichert das Passwort nicht und kann es nicht wiederherstellen.",
 "setLink": "⚙️ Einstellungen und Infos",
 "setTitle": "⚙️ Einstellungen und Infos",
 "setSub": "Meine Boxen, Geschenkcodes, Sprache, Sicherheit, über das Projekt, so funktioniert’s und Nutzungsregeln. Tipp auf einen Bereich, um ihn zu öffnen.",
 "setLangH": "🌐 Sprache",
 "setLangT": "Wähl die Sprache der Seite. Deine Wahl wird auf diesem Gerät gespeichert.",
 "setSecH": "🛡️ Sicherheit",
 "setAboutH": "ℹ️ Über das Projekt",
 "setHowH": "📖 So funktioniert’s",
 "setRulesH": "📜 Nutzungsregeln",
 "ab1h": "Was das ist",
 "ab1t": "Xahau Box ist eine Seite, auf der du eine Box mit XAH und/oder einem URIToken packst, verschließt und per Link, QR-Code oder Schlüssel-Token verschenkst.",
 "ab2h": "Unabhängiges Projekt",
 "ab2t": "Das ist ein unabhängiges Projekt und kein offizielles Produkt von Xahau. Es gehört auch nicht zu Xaman oder Evergram – das sind nur Werkzeuge, die es nutzt.",
 "ab3h": "Was in eine Box passt",
 "ab3t": "Nur XAH und URITokens. Auch ein Geschenkcode von einer anderen Seite kommt als URIToken hinein, mit dem Code darin per Passwort verschlossen.",
 "ab4h": "Wie die Seite funktioniert",
 "ab4t": "Eine statische Seite ohne Server und ohne Tracking. Sie liest den öffentlichen Xahau-Ledger und stellt Transaktionen zusammen, die du selbst in Xaman signierst. Die Box-Regeln setzt der Hook auf dem Konto des Box-Erstellers durch.",
 "ab5h": "Netzwerk",
 "ab5t": "Das Projekt wird zuerst im Testnet erprobt. Das Netzwerk wechselst du oben auf der Seite mit dem Testnet-/Mainnet-Button. Eine Box kann nur von einem Konto erstellt werden, auf dem der Box-Hook installiert ist.",
 "abVer": "Version der Seite",
 "hw1h": "Box erstellen",
 "hw1t": "5 Schritte: Inhalt → Übergabe → Schlüssel (nur bei Schlüssel-Token) → Frist → prüfen und in Xaman signieren. Hinein kann XAH und/oder eines deiner URITokens. Nicht hinein dürfen: ein Token, das der Herausgeber verbrennen kann, ein Token im Verkauf, ein Token, das schon in einer Box liegt, und ein Schlüssel-Token.",
 "hw2h": "Link / QR „Für alle“",
 "hw2t": "Du bekommst einen Link und ein Box-Bild mit QR-Code. Wer zuerst öffnet, bekommt die Box. Gut für ein Giveaway oder um sie privat an eine Person zu schicken.",
 "hw3h": "Link / QR „Für eine Adresse“",
 "hw3t": "Nur die angegebene Adresse kann sie öffnen – den Link kannst du also ruhig öffentlich zeigen.",
 "hw4h": "Schlüssel-Token",
 "hw4t": "Wer das Schlüssel-Token (ein URIToken) besitzt, öffnet die Box. Du wählst eins deiner freien Schlüssel-Tokens oder erstellst ein neues (eine Signatur). Ist die Box fertig, übergibst du im letzten Schritt das Schlüssel-Token an den Empfänger. Den Schlüssel kannst du verschenken oder verkaufen.",
 "hw5h": "Geschenkcode mit Passwort",
 "hw5t": "Ein Code von einer anderen Seite (z. B. eine Geschenkkarte) wird direkt in deinem Browser mit einem Passwort verschlossen und in ein neues Token gelegt. So eine Box wird nur per Schlüssel-Token übergeben. Schick dem Empfänger das Passwort persönlich, z. B. auf Evergram. Nach dem Öffnen gibt der Empfänger das Passwort unter „🔒 Meine Geschenkcodes“ ein.",
 "hw6h": "Box öffnen",
 "hw6t": "Tipp auf „Box öffnen“ und füg den Link ein, scann den QR-Code oder wähl ein Foto. Die Seite zeigt den Inhalt und stellt die Öffnungs-Transaktion zusammen. Signiert wird sie in Xaman.",
 "hw7h": "🎁 Boxen für mich",
 "hw7t": "Der Button auf der Startseite öffnet den Tab „Erhalten“ unter „📦 Meine Boxen“. Dort siehst du Boxen, die du mit einem Schlüssel-Token auf deinem Konto öffnen kannst: Tipp auf „Öffnen“ und signiere. Boxen per Link/QR öffnest du über den Link.",
 "hw8h": "📦 Meine Boxen",
 "hw8t": "Drei Tabs. „Gepackt“: deine verschlossenen Boxen, neueste zuerst, mit Inhalt – Link/QR erneut anzeigen, Schlüssel-Token übergeben, Box nach Ablauf der Frist zurückholen. „Erhalten“: Boxen für dich und die, die du schon geöffnet hast. „Verschickt“: Boxen, die du weitergegeben hast, und ob sie geöffnet wurden.",
 "hw9h": "Frist",
 "hw9t": "Eine Frist ist eine Ledger-Nummer. Davor lässt sich die Box öffnen, und der Ersteller kann sie nicht zurückholen. Danach lässt sie sich nicht mehr öffnen, und der Ersteller kann den Inhalt zurückholen.",
 "rulesIntro": "Mit der Nutzung dieser Seite stimmst du diesen Regeln zu:",
 "r1": "Du nutzt die Seite auf eigenes Risiko. Das Projekt ist experimentell und wird „wie besehen“ ohne Gewährleistung bereitgestellt.",
 "r2": "Jede Transaktion signierst du selbst in Xaman. Lies vor dem Signieren die Details und prüf das Netzwerk (Testnet / Mainnet).",
 "r3": "Die Seite fragt nie nach deinem geheimen Schlüssel (Seed) und verwahrt nie deine Mittel. XAH und Tokens bleiben auf Konten im Ledger. Das Projekt kann keine Transaktion stornieren, einfrieren oder rückgängig machen.",
 "r4": "Teile Box-Links und QR-Codes, Schlüssel-Tokens und Passwörter nur mit der Person, die du beschenkst. Ein Link „Für alle“ ist wie Bargeld.",
 "r5": "Prüf die Empfängeradresse: Eine Übertragung an eine falsche Adresse lässt sich nicht rückgängig machen.",
 "r6": "Bewahr deine Passwörter und Links sicher auf. Die Seite speichert kein Geschenkcode-Passwort und kann es nicht wiederherstellen. Für Verluste durch verlorene oder geleakte Links, Passwörter oder Schlüssel übernimmt das Projekt keine Haftung.",
 "r7": "Nimm Boxen nur von Leuten an, denen du vertraust: Eine Box hängt am Konto des Erstellers.",
 "r8": "In eine Box kommen nur XAH und URITokens. Nutze die Seite nicht für Betrug oder illegale Zwecke. Halte dich bei Geschenkcodes an die Regeln der Seite, die sie ausgegeben hat.",
 "r9": "Das ist ein unabhängiges Projekt und kein offizielles Produkt von Xahau. Die Regeln können sich ändern: Es gilt die Version auf dieser Seite.",
 "mbH": "📦 Meine Boxen",
 "mbBuilt": "Gepackt",
 "mbRecv": "Erhalten",
 "mbSent": "Verschickt",
 "mbBuiltSub": "Boxen, die du gepackt hast und die noch auf deinem Konto verschlossen sind (aus dem Ledger gelesen). Hier kannst du Link/QR erneut anzeigen, den Schlüssel übergeben oder eine Box nach Ablauf der Frist zurückholen.",
 "mbRecvSub": "Boxen für dich: solche, die du mit deinem Schlüssel-Token öffnen kannst, und solche, die du schon geöffnet hast.",
 "mbSentSub": "Boxen, die du weitergegeben hast: Das Schlüssel-Token liegt jetzt bei einer anderen Adresse, es ist eine Box „Für eine Adresse“, oder jemand anderes hat sie schon geöffnet.",
 "mbRecvNote": "Eine Box per Link/QR, die du noch nicht geöffnet hast, steht hier nicht: Sie kennt nur, wer den Link hat. Geöffnete Boxen stammen aus deinen eigenen Öffnungs-Transaktionen.",
 "mbSentNote": "Eine Box „Für alle“, die noch niemand geöffnet hat, steht nur unter „Gepackt“: Die Seite kann nicht wissen, ob du den Link verschickt hast.",
 "mbLocal": "Dass es eine Box „Für eine Adresse“ ist, weiß die Seite nur aus den Daten auf diesem Gerät.",
 "mbSeeBuilt": "Die Box ist noch auf deinem Konto verschlossen: Ihre Aktionen findest du im Tab „Gepackt“.",
 "mbSignIn": "Melde dich mit Xaman an oder gib deine Adresse ein, um deine Boxen zu sehen.",
 "mbNone": "Hier ist noch nichts.",
 "mbOpenedYou": "Von dir geöffnet",
 "mbOpenedBy": "Geöffnet von",
 "mbOpenedSt": "Geöffnet",
 "mbKeyAt": "Schlüssel bei",
 "mbKeyGone": "Den Schlüssel gibt es nicht mehr (verbrannt)",
 "mbNotOpened": "Noch nicht geöffnet",
 "mbFor": "Für Adresse",
 "mbWhen": "Wann",
 "mbOldKeys": "Alte Schlüssel: Ihre Box wurde schon geöffnet oder zurückgeholt",
 "mbTrunc": "Die letzten {n} Transaktionen dieses Kontos wurden geprüft; ältere Boxen können fehlen.",
 "mbPartErr": "Ein Teil der Ledger-Daten wurde nicht geladen. Öffne den Bereich gleich noch mal.",
 "netSwitch": "Netzwerk wechseln: Testnet ⇄ Mainnet",
 "gcSignIn": "Melde dich mit Xaman an oder gib deine Adresse ein, um deine Geschenkcodes zu sehen.",
 "setBtnT": "⚙️ Einstellungen & Infos",
 "hw0h": "Wer Boxen empfangen und öffnen kann",
 "hw0a": "Jeder im",
 "hw0b": "kann Boxen empfangen und öffnen – dafür musst du keinen Hook installieren. Den Hook braucht nur das Konto, das Boxen packt und verschickt.",
 "hwQh": "QR-Codes",
 "hwQ1": "Ein QR-Code ist derselbe Box-Link, nur als Bild. Er enthält den Schlüssel, der die Box öffnet – pass also so gut darauf auf wie auf das Geschenk selbst.",
 "hwQ2": "Übergeben: Pack eine Box im Modus „Für alle“ oder „Für eine Adresse“ und signiere sie in Xaman – die Seite zeigt dir Link und QR-Code. Schick den Link als Text, am besten über Evergram. Oder zeig den QR-Code auf dem Bildschirm zum Scannen, oder schick das Bild mit dem QR-Code. Link und QR kannst du unter „📦 Meine Boxen“ → „Gepackt“ erneut anzeigen, aber nur für Boxen, die du in diesem Browser gepackt hast: Der Link-Schlüssel liegt nur auf deinem Gerät.",
 "hwQ3": "Öffnen: Tipp auf der Startseite auf „Box öffnen“ und scann den QR-Code mit der Kamera oder wähl ein Foto davon. Du kannst auch einfach die Handykamera auf den QR-Code richten: Er enthält die Adresse dieser Seite, die sich dann direkt mit dieser Box öffnet (und bei Bedarf das Netzwerk wechselt). Die Seite zeigt den Inhalt; dann meldest du dich mit Xaman an und signierst das Öffnen.",
 "hwQ4": "Wichtig: Ein QR-Code „Für alle“ ist wie Bargeld – wer zuerst öffnet, bekommt die Box. Poste ihn also nicht öffentlich. Eine Box „Für eine Adresse“ öffnet sich nur für diese Adresse, auch wenn andere den QR-Code sehen. Im Modus Schlüssel-Token brauchst du keinen QR-Code: Du übergibst das Schlüssel-Token, und der Empfänger öffnet die Box unter „🎁 Boxen für mich“."
};

window.BOX_I18N.zh = {
 "recipientPh": "r...（收件人）",
 "change": "更改",
 "signIn": "用 Xaman 登录",
 "signInShort": "登录",
 "signOut": "退出登录",
 "notSignedIn": "未登录",
 "addrOnlyTag": "地址",
 "signedIn": "已登录",
 "signedOut": "已退出登录。本设备上保存的礼盒链接仍会保留。",
 "signInToSign": "用 Xaman 登录后，在这里点一下即可签名。也可以复制下面的 JSON 自行签名。",
 "otherAcct": "你当前登录的是另一个账户。这笔交易需要由以下账户签名：",
 "homeTitle1": "打包礼盒，送给别人",
 "homeTitle2": "里面放 XAH 和代币，或只放其一",
 "homeSub": "放入 XAH 和/或一个 URIToken，封好礼盒，用二维码送出。",
 "createBox": "创建礼盒",
 "openBox": "打开礼盒",
 "myBoxes": "我的礼盒",
 "homeNote": "没有服务器。每一步都由你在自己的钱包里签名。",
 "connectTitle": "你的账户",
 "connectSub": "选择签名方式。密钥始终留在你的钱包里，本页面永远看不到。",
 "xamanSign": "用 Xaman 签名",
 "xamanNote": "手机上的钱包应用",
 "xamanOff": "本页面尚未配置。请使用下方的地址方式。",
 "addrOnly": "或输入你的地址（在别处签名）",
 "addrOnlyNote": "页面会读取账本，并给你可复制的交易 JSON。你可以在 Xaman 或其他工具中签名。",
 "continue": "继续",
 "xahAmount": "礼盒中的 XAH",
 "tokenInside": "礼盒中的 URIToken",
 "optional": "（可选）",
 "kLink": "链接 / 二维码",
 "kLinkSub": "你会得到一个链接和一张礼盒图片，图中的二维码就是同一个链接。",
 "mintKey": "新建钥匙",
 "mintKeySub": "在此账户上铸造一个新的钥匙 URIToken（不可被发行方销毁）。签名后会自动选为钥匙。",
 "orPickKey": "或选择你已有的代币",
 "mintTitle": "签名钥匙代币",
 "mintNoFunds": "可用 XAH 不足，无法创建钥匙代币（估算）。",
 "minted": "钥匙代币已创建，并已选为钥匙。",
 "newTag": "新",
 "ledgerNow": "当前账本",
 "ledgerExp": "到期账本",
 "timeLeft": "剩余时间",
 "ledgerShort": "账本",
 "expiredState": "已过期",
 "ledgersLeft": "个账本",
 "ledgersAgo": "个账本前",
 "secPerLedger": "秒/账本",
 "uD": "天",
 "uH": "小时",
 "uM": "分钟",
 "howGive": "送出方式",
 "kBearer": "任何人",
 "kBearerSub": "谁先打开链接或二维码，礼盒就归谁。适合公开抽奖。",
 "kNamed": "指定地址",
 "kNamedSub": "只有这个地址能打开。链接和二维码可以放心公开。",
 "kToken": "钥匙代币",
 "kTokenSub": "持有钥匙 URIToken 的人可以打开礼盒。二维码只指向礼盒；钥匙可以赠送或出售。",
 "timeLimit": "期限",
 "noLimit": "不设期限",
 "d1": "1 天",
 "d7": "7 天",
 "d30": "30 天",
 "d90": "90 天",
 "total": "礼盒内容",
 "buildBox": "生成礼盒",
 "checkLedger": "我已签名，查询账本",
 "back": "返回",
 "boxReady": "礼盒准备好了！",
 "locked": "已封存",
 "download": "下载图片",
 "share": "分享图片",
 "shareLink": "分享链接",
 "copyLink": "复制链接",
 "bearerWarn": "谁先使用这个链接或二维码，谁就能打开礼盒。可用于公开抽奖，或私下只发给一个人。",
 "handKey": "将钥匙代币转给",
 "buildRemit": "生成转账",
 "evergramHint": "在 Evergram 上告诉收件人有礼盒在等他。",
 "finish": "完成",
 "boxForYou": "给你的礼盒",
 "pasteQr": "礼盒二维码或链接",
 "show": "查看礼盒",
 "scan": "扫码",
 "photo": "照片",
 "stop": "停止",
 "opened": "已打开！🎉",
 "home": "首页",
 "myBoxesSub": "当前账户上已封存的礼盒（读取自账本）。",
 "takeBackByVc": "取回礼盒（期限过后）",
 "buildOpen": "生成取回交易",
 "footer": "静态页面。无服务器，无追踪。先在测试网试用。",
 "needAccount": "请输入有效的 r 地址。",
 "notFoundAcct": "在此网络上找不到该账户。",
 "hookYes": "此账户已安装礼盒 Hook",
 "hookNo": "此账户没有 Hook。礼盒需要从安装了礼盒 Hook 的账户创建。",
 "balance": "余额",
 "available": "可封存",
 "reserve": "储备金",
 "noTokens": "此账户没有自己的 URIToken。你可以只放入 XAH，或在下方创建礼品码。",
 "noFreeTokens": "你的 URIToken 目前都不能放入（原因见各项下方）。你可以放入 XAH，或在下方创建礼品码。",
 "tokPick": "可选：{n} 个。点一下代币即可放入礼盒。",
 "burnable": "发行方可销毁——Hook 不接受",
 "onSale": "出售中",
 "inBox": "已在礼盒中",
 "keyOfBox": "某个礼盒的钥匙",
 "none": "无",
 "needSomething": "请在礼盒里放入 XAH 或代币。",
 "needKey": "请选择钥匙代币。",
 "needNamed": "请输入收件人地址。",
 "keyIsGift": "钥匙代币不能同时作为礼盒里的代币。",
 "amtBad": "金额有误。",
 "notEnough": "可用 XAH 不足（估算）。",
 "expAt": "截至账本",
 "approx": "约",
 "auditFirst": "Hook 需要先进行 AUDIT。请先签名第 1 步，再签名第 2 步。",
 "stepAudit": "第 1 步 · AUDIT（仅在需要时）",
 "stepPack": "第 2 步 · 封存礼盒（PACK）",
 "stepOnly": "交易",
 "copy": "复制",
 "copied": "已复制",
 "signHere": "复制 JSON，在 Xaman 或其他原始交易工具中签名，账户：",
 "packTitle": "签名礼盒",
 "claimTitle": "签名打开",
 "openTitle": "取回礼盒",
 "remitTitle": "发送钥匙代币",
 "waiting": "等待账本确认…",
 "notYet": "账本上还没有。请等几秒再查。",
 "xamanOpen": "在 Xaman 中打开",
 "xamanWait": "请在 Xaman 中确认请求…",
 "rejected": "请求已在 Xaman 中取消。",
 "hookSays": "Hook 返回",
 "txHash": "交易",
 "contents": "内容",
 "kind": "类型",
 "expires": "可打开至",
 "status": "状态",
 "stClosed": "已封存 · 等待打开",
 "stExpired": "已过期——创建者可以取回",
 "stClaiming": "正在打开…",
 "stGone": "未找到或已被打开",
 "boxNumber": "礼盒编号",
 "keyHolder": "钥匙代币持有人",
 "nonce": "签名序号",
 "youOpen": "打开账户",
 "openNow": "打开礼盒",
 "notForYou": "这个二维码是给另一个地址的",
 "notHolder": "你没有这把钥匙代币",
 "expired": "已超过期限",
 "badQr": "这不是礼盒二维码。",
 "netSwitched": "已根据二维码切换网络",
 "giftCode": "礼品码",
 "received": "已发送到你的账户",
 "explorer": "在浏览器中查看",
 "noBoxes": "此账户上没有已封存的礼盒。",
 "takeBack": "取回",
 "vcUnknown": "本设备上没有这个礼盒编号",
 "vcBad": "VC 必须是 64 位十六进制字符。",
 "showLink": "显示链接 / 二维码",
 "boxRestored": "已在账本上找到礼盒，这是它的链接",
 "storageOff": "此浏览器不允许页面保存礼盒链接。请关闭无痕模式后重试。",
 "bearerKind": "链接 / 二维码 · 任何人",
 "namedKind": "链接 / 二维码 · 指定地址",
 "tokenKind": "钥匙代币",
 "copyFailed": "复制失败",
 "checkHash": "或粘贴交易哈希",
 "checkHashBtn": "查询",
 "needOpener": "请输入将要打开礼盒的地址。",
 "signedFor": "签名对象",
 "keyQrHint": "可以把这张图作为钥匙代币的图片，也可以分享：只有钥匙持有人能打开。",
 "remitHint": "钥匙代币的普通转账，Hook 不参与。",
 "transferKey": "转让钥匙代币",
 "keyChecking": "正在账本上核对钥匙代币…",
 "keyGone": "账本上已经没有这把钥匙代币（已销毁？）。",
 "keyNotYours": "钥匙代币目前不在你的账户上。持有人：",
 "keySelf": "这是你自己的地址。请输入收件人地址。",
 "wStepOf": "第 {n} 步，共 {m} 步",
 "wNext": "下一步",
 "wPrev": "上一步",
 "w1T": "礼盒里放什么",
 "w1H": "输入 XAH 和/或点选一个代币。钥匙代币不会显示在这里：它们是用来打开礼盒的。",
 "w2T": "送出方式",
 "w2H": "链接/二维码：拿到链接的人打开。钥匙代币：持有钥匙的人打开。礼品码只能配合钥匙代币送出。",
 "w3T": "钥匙",
 "w3H": "选择一把空闲的钥匙代币。只有在没有空闲钥匙时才新建。",
 "w4T": "期限",
 "w4H": "可选。过期后礼盒就不能再打开，你可以把它取回。",
 "w5T": "检查并签名",
 "w5H": "检查无误后，在 Xaman 中签名礼盒。",
 "myCodes": "🔒 我的礼品码",
 "gcNone": "此账户没有礼品码代币。",
 "bxInside": "礼盒内容",
 "bxEmpty": "空",
 "bxNo": "礼盒",
 "bxKeyTok": "此礼盒的钥匙代币",
 "inboxT": "🎁 我收到的礼盒",
 "inboxSub": "你可以用此账户上的钥匙代币打开的礼盒。以链接/二维码发送的礼盒不会显示在这里，请通过链接打开。",
 "inboxNone": "此账户上没有礼盒的钥匙代币。",
 "inboxFrom": "来自",
 "inboxOpen": "打开",
 "inboxGone": "这把钥匙已经打不开任何礼盒：礼盒已被打开或取回。",
 "inboxNoVc": "在账本上找不到这个礼盒的 PACK 交易。请稍后再试。",
 "inboxGcNote": "打开后，在「我的礼品码」中输入发送者给你的密码。",
 "gcGotHint": "这是一个用密码锁住的礼品码。请向发送者要密码，然后在「我的礼品码」中打开。",
 "scamH": "谨防诈骗",
 "scamT": "Xahau Box 通过 Xaman 运行：你在自己的 Xaman 里登录，并签名每一笔交易。因此要提防想借此行骗的人。与 Xahau Box 有关的任何东西都绝不会向你索要私钥，也不会让你往陌生地址转账。",
 "egH": "通过 Evergram 联系",
 "egT": "如果觉得哪里不对，签名前先在 Evergram 上联系发送者或收件人。用它私下传递礼品码密码也很方便。",
 "egPwT": "传递礼品码密码，推荐用 Evergram 和收件人私聊。Evergram 直接在你的设备上加密消息，密钥也在设备上生成，从不离开设备。服务器只转发加密数据，读不到内容，消息也不会写入区块链。不要把密码发到群聊里：群里所有人都会看到。",
 "gcTag": "🔒 礼品码",
 "pickKey": "你的空闲钥匙代币",
 "sumKey": "钥匙代币",
 "doneStepKey": "第 6 步：把钥匙交给收件人",
 "doneGcPw": "礼盒里有礼品码：请私下把密码发给收件人（例如通过 Evergram），千万不要放进链接、二维码或公开帖子里。",
 "doneNextKey": "礼盒已就绪。最后一步：把钥匙代币转给收件人（见下方）。",
 "doneNextLink": "礼盒已就绪。接下来：把链接或带二维码的图片发给收件人。",
 "isKeyTok": "这是钥匙代币：它用来打开礼盒，不能放进礼盒。",
 "noKeyYet": "此账户还没有空闲的钥匙代币。请先创建钥匙代币（一次签名），再签名礼盒。",
 "gcNeedsKey": "礼品码只能放进「钥匙代币」方式的礼盒。",
 "limitNone": "无",
 "secLink": "安全",
 "secTitle": "安全",
 "secIntro": "礼盒如何运作，以及需要注意什么。",
 "s1h": "没有服务器，由你自己签名",
 "s1t": "本页面没有服务器，只负责生成交易，每一笔都由你自己在 Xaman 或你的工具中签名。页面从不索要、也从不接触你的私钥（种子）。永远不要在任何网站上输入你的私钥。",
 "s2h": "礼物放在哪里",
 "s2t": "XAH 一直留在礼盒创建者的账户余额中，并受 Hook 规则锁定。代币在礼盒被打开前也一直留在创建者的账户上。礼盒里只能放 XAH 和 URIToken。",
 "s3h": "信任创建者",
 "s3t": "创建者掌控自己的账户：他可以删除 Hook，也可以转走资金。礼盒是由创建者账户担保的承诺，而不是托管。只接受你信任的人送的礼盒。",
 "s4h": "同一账户上的其他 Hook",
 "s4t": "同一账户上的所有 Hook 地位平等，对账户有同样的控制权。真正最大的风险是会自动付款的 Hook（自动付款、转发、储蓄、定时任务）：它们可能花掉礼盒的 XAH。这样一来，礼盒无法完成支付，会一直保持封存，直到余额补足。另一个风险是代码有缺陷的 Hook，或你并不了解其真实行为的 Hook：它可能修改或删除礼盒的数据。礼盒旁边只安装你信任且了解的 Hook。正在开发的 v15 会为礼盒的 XAH 做预留。在那之前，请留意余额，保持警惕。",
 "s5h": "「任何人」礼盒就像现金",
 "s5t": "谁先打开链接或二维码，谁就得到礼盒，所以除非是抽奖，请私下分享。「指定地址」礼盒只有该地址能打开，链接可以公开。",
 "s6h": "钥匙代币",
 "s6t": "持有钥匙代币的人可以打开礼盒。真正的钥匙代币由礼盒账户发行，但任何人都能铸造一个配图好看的仿冒代币，所以请核对发行方，并通过本页面打开礼盒。打开后，持有人可以把钥匙留作纪念，也可以在自己的钱包里销毁。",
 "s7h": "期限",
 "s7t": "期限是一个账本编号。过了这个编号，礼盒就不能再打开，创建者可以取回里面的东西。在此之前，礼盒规则不允许创建者取回。不设期限的礼盒会一直保留到被打开；如果它的钥匙代币被销毁，创建者可以取回。",
 "s8h": "一切都是公开的",
 "s8t": "金额、地址和礼盒记录在账本上对所有人可见。页面代码是开源的。",
 "s9h": "签名前先检查",
 "s9t": "签名前看一下页面顶部的 Testnet / Mainnet 标记。在 Xaman 中签名前，请仔细阅读交易详情。",
 "secBye": "照顾好自己和家人 🙏",
 "gcTitle": "礼品码",
 "gcSub": "把其他网站的兑换码（例如 Roblox 礼品卡）放进礼盒。页面会在你的浏览器里直接用密码加密它，并放进一个新的代币。",
 "gcAdd": "添加礼品码",
 "gcCancel": "取消",
 "gcCodeLbl": "兑换码",
 "gcCodePh": "例如 ABCD-1234-EFGH",
 "gcLeft": "剩余：{n} / {m} 字节（A–Z 以外的字符占 2–3 字节）",
 "gcTooLong": "兑换码太长了，请缩短。",
 "gcPwLbl": "密码",
 "gcPwPh": "至少 12 个字符",
 "gcGen": "生成密码",
 "gcCopyPw": "复制密码",
 "gcPwShort": "密码太短：至少 12 个字符。建议点「生成密码」。",
 "gcWarn": "兑换码只靠这个密码保护。拿到代币数据和密码的人都能读取它。页面不会保存密码：请现在保存好，并私下发给收礼的人，千万不要放进二维码、链接或公开帖子里。",
 "gcSaved": "我已保存密码",
 "gcMint": "创建礼品码代币",
 "gcMintSub": "在此账户上铸造一个新的 URIToken，里面是加密后的兑换码（Flags 0：只有持有人能销毁）。签名后会自动放进礼盒。",
 "gcNeedCode": "请输入兑换码。",
 "gcNeedSaved": "请先保存密码，再勾选「我已保存密码」。",
 "gcEncErr": "无法在此浏览器中加密兑换码。",
 "gcMintTitle": "签名礼品码代币",
 "gcMinted": "礼品码代币已创建并放进礼盒。",
 "gcModeHint": "礼盒里有礼品码，所以要用钥匙代币送出。转交钥匙代币，并私下发送密码。",
 "gcCard": "加密礼品码",
 "gcCardSub": "已用密码锁定",
 "gcAfterOpen": "礼盒打开后，可以用密码解锁兑换码。",
 "gcShow": "查看兑换码",
 "gcPwEnter": "密码",
 "gcDecrypt": "解锁",
 "gcWorking": "处理中…",
 "gcWrong": "密码错误。请检查后重试。",
 "gcPwNeed": "请输入密码。",
 "gcHide": "隐藏",
 "gcLocal": "已在你的浏览器中解锁。密码不会被保存，也不会发送到任何地方。",
 "gcMine": "此账户上的礼品码",
 "gcMineSub": "此账户持有的、内含加密兑换码的代币。用对应的密码解锁。",
 "s10h": "礼品码只靠密码保护",
 "s10t": "代币中的礼品码在你的浏览器里用密码加密。代币数据是公开的，拿到数据和密码的人都能读取兑换码。请使用生成的强密码，私下传递（不要放进二维码、链接或公开帖子），也不要重复使用。页面不保存密码，也无法找回。",
 "setLink": "⚙️ 设置与说明",
 "setTitle": "⚙️ 设置与说明",
 "setSub": "我的礼盒、礼品码、语言、安全、关于项目、使用说明和使用规则。点击某一项即可展开。",
 "setLangH": "🌐 语言",
 "setLangT": "选择页面语言。你的选择会保存在本设备上。",
 "setSecH": "🛡️ 安全",
 "setAboutH": "ℹ️ 关于项目",
 "setHowH": "📖 使用说明",
 "setRulesH": "📜 使用规则",
 "ab1h": "这是什么",
 "ab1t": "Xahau Box 是一个网页：你可以把 XAH 和/或一个 URIToken 装进礼盒，封好后通过链接、二维码或钥匙代币送出。",
 "ab2h": "独立项目",
 "ab2t": "这是一个独立项目，不是 Xahau 官方产品，也与 Xaman 和 Evergram 没有关联：它们只是本项目使用的工具。",
 "ab3h": "礼盒里能放什么",
 "ab3t": "只能放 XAH 和 URIToken。其他网站的礼品码也会以 URIToken 的形式放进去，里面的兑换码用密码锁住。",
 "ab4h": "页面如何运作",
 "ab4t": "这是一个静态页面，没有服务器，也没有追踪。它读取公开的 Xahau 账本并生成交易，由你自己在 Xaman 中签名。礼盒规则由礼盒创建者账户上的 Hook 执行。",
 "ab5h": "网络",
 "ab5t": "项目先在测试网（Testnet）上测试。用页面顶部的 Testnet / Mainnet 按钮切换网络。只有安装了礼盒 Hook 的账户才能创建礼盒。",
 "abVer": "页面版本",
 "hw1h": "创建礼盒",
 "hw1t": "共 5 步：放什么 → 送出方式 → 钥匙（仅钥匙代币方式）→ 期限 → 检查并在 Xaman 中签名。可以放 XAH 和/或一个你自己的 URIToken。以下代币不能放：发行方可销毁的代币、出售中的代币、已在礼盒中的代币，以及钥匙代币。",
 "hw2h": "链接 / 二维码「任何人」",
 "hw2t": "你会得到一个链接和一张带二维码的礼盒图片。谁先打开，礼盒就归谁。适合抽奖，或私下只发给一个人。",
 "hw3h": "链接 / 二维码「指定地址」",
 "hw3t": "只有指定的地址能打开，所以链接可以放心公开。",
 "hw4h": "钥匙代币",
 "hw4t": "持有钥匙代币（一个 URIToken）的人可以打开礼盒。你可以从空闲的钥匙代币中选一个，或新建一个（一次签名）。礼盒就绪后，最后一步是把钥匙代币转给收件人。钥匙可以赠送，也可以出售。",
 "hw5h": "带密码的礼品码",
 "hw5t": "其他网站的兑换码（例如礼品卡）会直接在你的浏览器里用密码锁住，并放进一个新的代币。这种礼盒只能用钥匙代币送出。请私下把密码发给收件人，例如通过 Evergram。打开后，收件人在「🔒 我的礼品码」中输入密码。",
 "hw6h": "打开礼盒",
 "hw6t": "点击「打开礼盒」，粘贴链接、扫描二维码或选择照片。页面会显示里面有什么，并生成打开交易。你在 Xaman 中签名即可。",
 "hw7h": "🎁 我收到的礼盒",
 "hw7t": "首页的这个按钮会打开「📦 我的礼盒」里的「收到的」标签页。这里列出你可以用账户上的钥匙代币打开的礼盒：点「打开」并签名。链接/二维码礼盒请通过链接打开。",
 "hw8h": "📦 我的礼盒",
 "hw8t": "三个标签页。「已创建」：你封存中的礼盒，最新的在前，可查看内容；可再次显示链接/二维码、转交钥匙代币，期限过后取回礼盒。「收到的」：给你的礼盒和你已打开的礼盒。「已送出」：你送出去的礼盒，以及是否已被打开。",
 "hw9h": "期限",
 "hw9t": "期限是一个账本编号。在此之前，礼盒可以被打开，创建者不能取回。过了之后，礼盒不能再打开，创建者可以取回里面的东西。",
 "rulesIntro": "使用本页面即表示你同意以下规则：",
 "r1": "使用本页面的风险由你自行承担。本项目属于实验性质，按「现状」提供，不作任何保证。",
 "r2": "每一笔交易都由你自己在 Xaman 中签名。签名前请阅读详情，并确认网络（Testnet / Mainnet）。",
 "r3": "本页面从不索要你的私钥（种子），也从不保管你的资金。XAH 和代币一直在账本上的账户里。本项目无法取消、冻结或撤回任何交易。",
 "r4": "礼盒链接和二维码、钥匙代币以及密码，只分享给你要送礼的人。「任何人」链接就像现金。",
 "r5": "请核对收件人地址：转到错误地址后无法撤回。",
 "r6": "请妥善保管你的密码和链接。本页面不保存礼品码密码，也无法找回。因链接、密码或钥匙丢失或泄露造成的损失，本项目不承担责任。",
 "r7": "只接受你信任的人送的礼盒：礼盒由创建者的账户担保。",
 "r8": "礼盒里只能放 XAH 和 URIToken。不要将本页面用于诈骗或违法用途。使用礼品码时，请遵守发行网站的规则。",
 "r9": "这是一个独立项目，不是 Xahau 官方产品。规则可能会更新，以本页面上的版本为准。",
 "mbH": "📦 我的礼盒",
 "mbBuilt": "已创建",
 "mbRecv": "收到的",
 "mbSent": "已送出",
 "mbBuiltSub": "你创建的、仍封存在你账户上的礼盒（读取自账本）。在这里可以再次显示链接/二维码、转交钥匙，或在期限过后取回礼盒。",
 "mbRecvSub": "给你的礼盒：可以用你的钥匙代币打开的，以及你已经打开的。",
 "mbSentSub": "你送出的礼盒：钥匙代币已在其他地址、「指定地址」礼盒，或已被别人打开的礼盒。",
 "mbRecvNote": "你还没打开的链接/二维码礼盒不会显示在这里：只有拿到链接的人才知道它。已打开的礼盒来自你自己的打开交易。",
 "mbSentNote": "还没人打开的「任何人」链接礼盒只会出现在「已创建」中：页面无法知道你是否已经发出链接。",
 "mbLocal": "页面只能根据本设备上的记录判断这是「指定地址」礼盒。",
 "mbSeeBuilt": "礼盒仍封存在你的账户上：相关操作在「已创建」标签页。",
 "mbSignIn": "用 Xaman 登录或输入你的地址，即可查看你的礼盒。",
 "mbNone": "这里还没有内容。",
 "mbOpenedYou": "你已打开",
 "mbOpenedBy": "打开者",
 "mbOpenedSt": "已打开",
 "mbKeyAt": "钥匙持有人",
 "mbKeyGone": "钥匙已不存在（已销毁）",
 "mbNotOpened": "尚未打开",
 "mbFor": "指定地址",
 "mbWhen": "时间",
 "mbOldKeys": "旧钥匙：对应的礼盒已被打开或取回",
 "mbTrunc": "已查看此账户最近 {n} 笔交易，更早的礼盒可能未列出。",
 "mbPartErr": "部分账本数据未能加载。请稍后重新打开此栏目。",
 "netSwitch": "切换网络：Testnet ⇄ Mainnet",
 "gcSignIn": "用 Xaman 登录或输入你的地址，即可查看你的礼品码。",
 "setBtnT": "⚙️ 设置与说明",
 "hw0h": "谁可以接收和打开礼盒",
 "hw0a": "任何",
 "hw0b": "用户都可以接收和打开礼盒——无需安装 Hook。只有创建和送出礼盒的账户才需要 Hook。",
 "hwQh": "二维码",
 "hwQ1": "二维码就是礼盒链接的图片形式。里面包含打开礼盒的钥匙，所以要像保管礼物本身一样保管它。",
 "hwQ2": "送出：用「任何人」或「指定地址」方式创建礼盒，并在 Xaman 中签名，页面就会显示链接和二维码。你可以把链接以文字发送，最好通过 Evergram；也可以在屏幕上展示二维码让对方扫，或者发送带二维码的图片。之后可以在「📦 我的礼盒」→「已创建」中再次显示链接和二维码，但仅限在这个浏览器里创建的礼盒：链接钥匙只保存在你的设备上。",
 "hwQ3": "打开：在首页点「打开礼盒」，用摄像头扫描二维码或选择二维码照片。也可以直接用手机相机对准二维码：它包含本页面的地址，页面会直接打开这个礼盒（需要时还会自动切换网络）。页面会显示里面有什么；然后用 Xaman 登录并签名打开。",
 "hwQ4": "重要：「任何人」二维码就像现金——谁先打开就归谁，所以不要公开发布。「指定地址」礼盒只有该地址能打开，即使别人看到二维码也没关系。钥匙代币方式不需要二维码：你转交钥匙代币，收件人在「🎁 我收到的礼盒」中打开。"
};

window.BOX_I18N.ja = {
 "recipientPh": "r...（受取人）",
 "change": "変更",
 "signIn": "Xaman でサインイン",
 "signInShort": "サインイン",
 "signOut": "サインアウト",
 "notSignedIn": "未サインイン",
 "addrOnlyTag": "アドレス",
 "signedIn": "サインインしました",
 "signedOut": "サインアウトしました。この端末に保存したボックスのリンクはそのまま残ります。",
 "signInToSign": "Xaman でサインインすると、ここからワンタップで署名できます。下の JSON をコピーして自分で署名することもできます。",
 "otherAcct": "別のアカウントでサインインしています。このトランザクションに署名するアカウント：",
 "homeTitle1": "ボックスを作って贈ろう",
 "homeTitle2": "中身は XAH とトークン、またはどちらか一方",
 "homeSub": "XAH や URIToken を入れてボックスを閉じ、QR コードで渡せます。",
 "createBox": "ボックスを作る",
 "openBox": "ボックスを開ける",
 "myBoxes": "マイボックス",
 "homeNote": "サーバーはありません。すべてのステップは自分のウォレットで署名します。",
 "connectTitle": "あなたのアカウント",
 "connectSub": "署名方法を選んでください。鍵はウォレットの中にあり、このページから見えることはありません。",
 "xamanSign": "Xaman で署名",
 "xamanNote": "スマホのウォレットアプリ",
 "xamanOff": "このページではまだ設定されていません。下のアドレス入力をお使いください。",
 "addrOnly": "またはアドレスを入力（署名は別の場所で）",
 "addrOnlyNote": "ページはレジャーを読み取り、コピー用のトランザクション JSON を表示します。署名は Xaman や他のツールで行ってください。",
 "continue": "続ける",
 "xahAmount": "ボックスに入れる XAH",
 "tokenInside": "ボックスに入れる URIToken",
 "optional": "（任意）",
 "kLink": "リンク / QR",
 "kLinkSub": "リンクと、同じリンクの QR が入ったボックス画像が届きます。",
 "mintKey": "新しいキーを作る",
 "mintKeySub": "このアカウントで新しいキー URIToken を発行します（バーン不可）。署名すると自動でキーとして選ばれます。",
 "orPickKey": "または手持ちのトークンから選ぶ",
 "mintTitle": "キートークンに署名",
 "mintNoFunds": "キートークンを作るための空き XAH が足りません（概算）。",
 "minted": "キートークンを作成し、キーとして選びました。",
 "newTag": "新規",
 "ledgerNow": "現在のレジャー",
 "ledgerExp": "期限のレジャー",
 "timeLeft": "残り時間",
 "ledgerShort": "レジャー",
 "expiredState": "期限切れ",
 "ledgersLeft": "レジャー",
 "ledgersAgo": "レジャー前",
 "secPerLedger": "秒/レジャー",
 "uD": "日",
 "uH": "時間",
 "uM": "分",
 "howGive": "渡し方",
 "kBearer": "誰でも",
 "kBearerSub": "リンクや QR を最初に開いた人がボックスを受け取ります。公開プレゼント企画向けです。",
 "kNamed": "特定のアドレス",
 "kNamedSub": "このアドレスだけが開けます。リンクや QR は公開しても大丈夫です。",
 "kToken": "キートークン",
 "kTokenSub": "キー URIToken を持っている人がボックスを開けます。QR はボックスを指すだけで、キーは譲ることも売ることもできます。",
 "timeLimit": "期限",
 "noLimit": "期限なし",
 "d1": "1日",
 "d7": "7日",
 "d30": "30日",
 "d90": "90日",
 "total": "ボックスの中身",
 "buildBox": "ボックスを作成",
 "checkLedger": "署名しました — レジャーを確認",
 "back": "戻る",
 "boxReady": "ボックスができました！",
 "locked": "ロック中",
 "download": "画像を保存",
 "share": "画像を共有",
 "shareLink": "リンクを共有",
 "copyLink": "リンクをコピー",
 "bearerWarn": "このリンクや QR を最初に使った人がボックスを開けます。プレゼント企画で公開するか、1人だけに個別に送ってください。",
 "handKey": "キートークンの渡し先",
 "buildRemit": "送付を作成",
 "evergramHint": "Evergram で受取人にボックスが届いていることを伝えましょう。",
 "finish": "完了",
 "boxForYou": "あなたへのボックス",
 "pasteQr": "ボックスの QR またはリンク",
 "show": "ボックスを表示",
 "scan": "スキャン",
 "photo": "写真",
 "stop": "停止",
 "opened": "開けました！🎉",
 "home": "ホーム",
 "myBoxesSub": "接続中のアカウントでロックされているボックス（レジャーから取得）。",
 "takeBackByVc": "ボックスを取り戻す（期限後）",
 "buildOpen": "取り戻しを作成",
 "footer": "静的ページです。サーバーなし、トラッキングなし。まずはテストネットで。",
 "needAccount": "有効な r アドレスを入力してください。",
 "notFoundAcct": "このネットワークにアカウントが見つかりません。",
 "hookYes": "このアカウントにボックスのフックがあります",
 "hookNo": "このアカウントにはフックがありません。ボックスはボックスのフックが入ったアカウントから作成します。",
 "balance": "残高",
 "available": "ロック可能",
 "reserve": "リザーブ",
 "noTokens": "このアカウントには自分の URIToken がありません。XAH だけを入れるか、下でギフトコードを作成できます。",
 "noFreeTokens": "今は入れられる URIToken がありません（理由は各トークンの下に表示）。XAH を入れるか、下でギフトコードを作成できます。",
 "tokPick": "選べるトークン：{n} 件。タップするとボックスに入ります。",
 "burnable": "発行者がバーンできるため、フックが受け付けません",
 "onSale": "販売中",
 "inBox": "ボックスに入っています",
 "keyOfBox": "ボックスのキー",
 "none": "なし",
 "needSomething": "ボックスに XAH かトークンを入れてください。",
 "needKey": "キートークンを選んでください。",
 "needNamed": "受取人のアドレスを入力してください。",
 "keyIsGift": "キートークンを中身にすることはできません。",
 "amtBad": "金額が正しくありません。",
 "notEnough": "空き XAH が足りません（概算）。",
 "expAt": "期限レジャー",
 "approx": "約",
 "auditFirst": "フックが先に AUDIT を求めています。ステップ 1、ステップ 2 の順に署名してください。",
 "stepAudit": "ステップ 1 · AUDIT（必要な場合のみ）",
 "stepPack": "ステップ 2 · ボックスを封入（PACK）",
 "stepOnly": "トランザクション",
 "copy": "コピー",
 "copied": "コピーしました",
 "signHere": "JSON をコピーし、Xaman など生トランザクションに対応したツールで署名してください。アカウント：",
 "packTitle": "ボックスに署名",
 "claimTitle": "開封に署名",
 "openTitle": "ボックスを取り戻す",
 "remitTitle": "キートークンを送る",
 "waiting": "レジャーを待っています…",
 "notYet": "まだレジャーに反映されていません。数秒待ってからもう一度確認してください。",
 "xamanOpen": "Xaman で開く",
 "xamanWait": "Xaman でリクエストを承認してください…",
 "rejected": "Xaman でリクエストがキャンセルされました。",
 "hookSays": "フックの応答",
 "txHash": "トランザクション",
 "contents": "中身",
 "kind": "種類",
 "expires": "開封期限",
 "status": "状態",
 "stClosed": "ロック中 — 開封待ち",
 "stExpired": "期限切れ — 作成者が取り戻せます",
 "stClaiming": "開封中…",
 "stGone": "見つからないか、すでに開封済み",
 "boxNumber": "ボックス番号",
 "keyHolder": "キートークンの保有者",
 "nonce": "署名番号",
 "youOpen": "開けるアカウント",
 "openNow": "ボックスを開ける",
 "notForYou": "この QR は別のアドレス宛てです",
 "notHolder": "キートークンを持っていません",
 "expired": "期限が過ぎています",
 "badQr": "これはボックスの QR ではありません。",
 "netSwitched": "QR に合わせてネットワークを切り替えました",
 "giftCode": "ギフトコード",
 "received": "あなたのアカウントに送られました",
 "explorer": "エクスプローラーで見る",
 "noBoxes": "このアカウントにロック中のボックスはありません。",
 "takeBack": "取り戻す",
 "vcUnknown": "この端末ではボックス番号が不明です",
 "vcBad": "VC は 16 進数 64 文字で入力してください。",
 "showLink": "リンク / QR を表示",
 "boxRestored": "レジャーでボックスが見つかりました。リンクはこちらです",
 "storageOff": "このブラウザではボックスのリンクを保存できません。プライベートモードをオフにしてもう一度お試しください。",
 "bearerKind": "リンク / QR · 誰でも",
 "namedKind": "リンク / QR · 特定のアドレス",
 "tokenKind": "キートークン",
 "copyFailed": "コピーできませんでした",
 "checkHash": "またはトランザクションハッシュを貼り付け",
 "checkHashBtn": "確認",
 "needOpener": "ボックスを開けるアドレスを入力してください。",
 "signedFor": "署名の宛先",
 "keyQrHint": "この画像はキートークンの画像として使うことも、共有することもできます。開けられるのはキーの保有者だけです。",
 "remitHint": "キートークンの通常の送付です。フックは関与しません。",
 "transferKey": "キートークンを送る",
 "keyChecking": "レジャーでキートークンを確認しています…",
 "keyGone": "キートークンはもうレジャーに存在しません（バーン済み？）。",
 "keyNotYours": "キートークンは今あなたのアカウントにありません。保有者：",
 "keySelf": "これはあなた自身のアドレスです。受取人のアドレスを入力してください。",
 "wStepOf": "ステップ {n} / {m}",
 "wNext": "次へ",
 "wPrev": "戻る",
 "w1T": "ボックスに入れるもの",
 "w1H": "XAH を入力するか、トークンを1つタップしてください。キートークンはボックスを開けるためのものなので、ここには表示されません。",
 "w2T": "渡し方",
 "w2H": "リンク/QR：リンクを持っている人が開けます。キートークン：キーを持っている人が開けます。ギフトコードは必ずキートークンで渡します。",
 "w3T": "キー",
 "w3H": "空いているキートークンを選んでください。1つもない場合だけ新しく作ります。",
 "w4T": "期限",
 "w4H": "任意です。期限を過ぎるとボックスは開けられなくなり、あなたが取り戻せます。",
 "w5T": "確認して署名",
 "w5H": "内容をすべて確認してから、Xaman でボックスに署名してください。",
 "myCodes": "🔒 マイギフトコード",
 "gcNone": "このアカウントにギフトコードのトークンはありません。",
 "bxInside": "ボックスの中身",
 "bxEmpty": "空",
 "bxNo": "ボックス",
 "bxKeyTok": "このボックスのキートークン",
 "inboxT": "🎁 届いたボックス",
 "inboxSub": "このアカウントのキートークンで開けられるボックスです。リンク/QR で送られたボックスはここには表示されないので、リンクから開いてください。",
 "inboxNone": "このアカウントにボックスのキートークンはありません。",
 "inboxFrom": "送り主",
 "inboxOpen": "開ける",
 "inboxGone": "このキーではもう何も開けられません。ボックスはすでに開封されたか、取り戻されています。",
 "inboxNoVc": "このボックスの PACK トランザクションがレジャーで見つかりません。しばらくしてからお試しください。",
 "inboxGcNote": "開封後、送り主から聞いたパスワードを「マイギフトコード」で入力してください。",
 "gcGotHint": "これはパスワードでロックされたギフトコードです。送り主にパスワードを聞いて、「マイギフトコード」で開いてください。",
 "scamH": "詐欺にご注意ください",
 "scamT": "Xahau Box は Xaman を通じて動きます。サインインも、すべてのトランザクションへの署名も、あなた自身の Xaman で行います。それを悪用しようとする詐欺には十分ご注意ください。Xahau Box に関係するものが、シークレットキーや見知らぬアドレスへの入金を求めることは決してありません。",
 "egH": "Evergram で連絡",
 "egT": "少しでも不安を感じたら、署名する前に Evergram で送り主や受取人に連絡しましょう。ギフトコードのパスワードを直接伝えるのにも便利です。",
 "egPwT": "ギフトコードのパスワードは、Evergram で受取人と個別チャットして伝えるのがおすすめです。Evergram はメッセージを端末上で暗号化し、鍵も端末内で作られて外に出ることはありません。サーバーは暗号化されたデータを中継するだけで内容は読めず、メッセージがブロックチェーンに書き込まれることもありません。グループチャットには送らないでください。参加者全員に見えてしまいます。",
 "gcTag": "🔒 ギフトコード",
 "pickKey": "空いているキートークン",
 "sumKey": "キートークン",
 "doneStepKey": "ステップ 6：キーを受取人に渡す",
 "doneGcPw": "ギフトコードが入っています。パスワードは受取人に直接（例えば Evergram で）伝えてください。リンクや QR、公開の投稿には絶対に載せないでください。",
 "doneNextKey": "ボックスができました。最後のステップ：キートークンを受取人に渡してください（下）。",
 "doneNextLink": "ボックスができました。次に、リンクか QR 付きの画像を受取人に送ってください。",
 "isKeyTok": "これはキートークンです。ボックスを開けるためのもので、中には入れられません。",
 "noKeyYet": "このアカウントにはまだ空いているキートークンがありません。先にキートークンを作成（署名1回）してから、ボックスに署名してください。",
 "gcNeedsKey": "ギフトコードは「キートークン」のボックスにしか入れられません。",
 "limitNone": "なし",
 "secLink": "セキュリティ",
 "secTitle": "セキュリティ",
 "secIntro": "ボックスの仕組みと、気をつけたいこと。",
 "s1h": "サーバーなし、署名は自分で",
 "s1t": "このページにサーバーはありません。トランザクションを組み立てるだけで、署名はすべてあなたが Xaman や自分のツールで行います。ページがシークレット（シード）を求めたり、見たりすることはありません。どんなサイトにもシークレットを入力しないでください。",
 "s2h": "贈り物はどこにある？",
 "s2t": "XAH はボックス作成者のアカウント残高に残ったまま、フックのルールでロックされます。トークンも開封されるまで作成者のアカウントにあります。ボックスに入るのは XAH と URIToken だけです。",
 "s3h": "作成者への信頼",
 "s3t": "作成者は自分のアカウントを管理しているので、フックを外したり資金を動かしたりできます。ボックスは作成者のアカウントに裏付けられた約束であり、エスクローではありません。信頼できる人からのボックスだけを受け取ってください。",
 "s4h": "同じアカウントにある他のフック",
 "s4t": "1つのアカウントにあるフックはすべて対等で、同じようにアカウントを操作できます。現実的に一番のリスクは、自動で支払いを送るフック（自動送金、転送、積立、スケジュール）です。ボックスの XAH を使ってしまうことがあり、その場合は支払いが通らず、残高が補充されるまでボックスは閉じたままになります。もう1つのリスクは、コードにバグがあるフックや、実際の動作を把握していないフックです。こうしたフックはボックスのデータを変更・削除するおそれがあります。ボックスと一緒に置くのは、信頼できて仕組みを理解しているフックだけにしてください。開発中の v15 では、ボックスの XAH が確保されるようになります。それまでは残高をこまめに確認し、注意を怠らないでください。",
 "s5h": "「誰でも」は現金と同じ",
 "s5t": "リンクや QR を最初に開いた人がボックスを受け取ります。プレゼント企画でない限り、個別に共有してください。「特定のアドレス」のボックスはそのアドレスしか開けないので、リンクを公開しても大丈夫です。",
 "s6h": "キートークン",
 "s6t": "キートークンを持っている人がボックスを開けられます。本物のキートークンはボックスのアカウントが発行しますが、誰でもきれいな画像付きのそっくりなトークンを作れます。発行者を確認し、このページからボックスを開けてください。開封後、保有者はキーを記念に取っておくことも、自分のウォレットでバーンすることもできます。",
 "s7h": "期限",
 "s7t": "期限はレジャー番号で決まります。それを過ぎるとボックスは開けられなくなり、作成者が中身を取り戻せます。それまでは、ボックスのルール上、作成者は取り戻せません。期限なしのボックスは開封されるまで残ります。キートークンがバーンされた場合は、作成者が取り戻せます。",
 "s8h": "すべて公開されています",
 "s8t": "金額、アドレス、ボックスの記録はレジャー上で誰でも見られます。ページのコードはオープンソースです。",
 "s9h": "署名する前に確認",
 "s9t": "署名する前に、ページ上部の Testnet / Mainnet の表示を確認してください。Xaman では、署名前にトランザクションの詳細を読んでください。",
 "secBye": "ご自身と大切な人を守ってください 🙏",
 "gcTitle": "ギフトコード",
 "gcSub": "ほかのサイトのコード（例えば Roblox のギフトカード）をボックスに入れられます。ページがこのブラウザ内でパスワードを使ってロックし、新しいトークンに入れます。",
 "gcAdd": "ギフトコードを追加",
 "gcCancel": "キャンセル",
 "gcCodeLbl": "コード",
 "gcCodePh": "例：ABCD-1234-EFGH",
 "gcLeft": "残り：{n} / {m} バイト（A–Z 以外の文字は 2–3 バイト）",
 "gcTooLong": "コードが長すぎます。短くしてください。",
 "gcPwLbl": "パスワード",
 "gcPwPh": "12 文字以上",
 "gcGen": "パスワードを生成",
 "gcCopyPw": "パスワードをコピー",
 "gcPwShort": "パスワードが短すぎます（12 文字以上）。「パスワードを生成」がおすすめです。",
 "gcWarn": "コードを守っているのはこのパスワードだけです。トークンのデータとパスワードがあれば誰でも読めます。ページはパスワードを保存しません。今すぐ控えて、ボックスを贈る相手に直接伝えてください。QR やリンク、公開の投稿には絶対に載せないでください。",
 "gcSaved": "パスワードを控えました",
 "gcMint": "ギフトコードのトークンを作成",
 "gcMintSub": "ロックしたコード入りの新しい URIToken をこのアカウントで発行します（Flags 0：バーンできるのは保有者だけ）。署名すると自動でボックスに入ります。",
 "gcNeedCode": "コードを入力してください。",
 "gcNeedSaved": "先にパスワードを控えてから、「パスワードを控えました」にチェックを入れてください。",
 "gcEncErr": "このブラウザではコードをロックできませんでした。",
 "gcMintTitle": "ギフトコードのトークンに署名",
 "gcMinted": "ギフトコードのトークンを作成し、ボックスに入れました。",
 "gcModeHint": "ギフトコードが入っているため、このボックスはキートークンで渡します。キートークンを渡し、パスワードは直接伝えてください。",
 "gcCard": "暗号化されたギフトコード",
 "gcCardSub": "パスワードでロック済み",
 "gcAfterOpen": "ボックスを開けたあと、パスワードでコードのロックを解除できます。",
 "gcShow": "コードを表示",
 "gcPwEnter": "パスワード",
 "gcDecrypt": "ロック解除",
 "gcWorking": "処理中…",
 "gcWrong": "パスワードが違います。確認してもう一度お試しください。",
 "gcPwNeed": "パスワードを入力してください。",
 "gcHide": "隠す",
 "gcLocal": "このブラウザ内でロックを解除しました。パスワードは保存されず、どこにも送信されません。",
 "gcMine": "このアカウントのギフトコード",
 "gcMineSub": "このアカウントが持っている、コードがロックされたトークンです。パスワードでロックを解除してください。",
 "s10h": "ギフトコードを守るのはパスワードだけ",
 "s10t": "トークン内のギフトコードは、ブラウザ内でパスワードを使って暗号化されます。トークンのデータは公開されているため、データとパスワードがあれば誰でもコードを読めます。生成された強いパスワードを使い、直接伝え（QR やリンク、公開の投稿には載せない）、使い回さないでください。ページはパスワードを保存せず、復元もできません。",
 "setLink": "⚙️ 設定と情報",
 "setTitle": "⚙️ 設定と情報",
 "setSub": "マイボックス、ギフトコード、言語、セキュリティ、プロジェクトについて、使い方、利用規約。項目をタップすると開きます。",
 "setLangH": "🌐 言語",
 "setLangT": "ページの言語を選んでください。選択はこの端末に保存されます。",
 "setSecH": "🛡️ セキュリティ",
 "setAboutH": "ℹ️ プロジェクトについて",
 "setHowH": "📖 使い方",
 "setRulesH": "📜 利用規約",
 "ab1h": "これは何？",
 "ab1t": "Xahau Box は、XAH や URIToken を入れたボックスを作って閉じ、リンク・QR・キートークンで贈れるページです。",
 "ab2h": "独立したプロジェクト",
 "ab2t": "これは独立したプロジェクトで、Xahau の公式プロダクトではありません。Xaman や Evergram とも提携しておらず、それらは利用しているツールにすぎません。",
 "ab3h": "ボックスに入れられるもの",
 "ab3t": "XAH と URIToken だけです。ほかのサイトのギフトコードも URIToken として入れ、中のコードはパスワードでロックされます。",
 "ab4h": "ページの仕組み",
 "ab4t": "サーバーもトラッキングもない静的ページです。公開されている Xahau のレジャーを読み取ってトランザクションを組み立て、署名はあなたが Xaman で行います。ボックスのルールは、作成者のアカウントにあるフックが守らせます。",
 "ab5h": "ネットワーク",
 "ab5t": "プロジェクトはまずテストネット（Testnet）で試しています。ネットワークはページ上部の Testnet / Mainnet ボタンで切り替えます。ボックスを作れるのは、ボックスのフックが入ったアカウントだけです。",
 "abVer": "ページのバージョン",
 "hw1h": "ボックスを作る",
 "hw1t": "5 ステップ：入れるもの → 渡し方 → キー（キートークンの場合のみ）→ 期限 → 確認して Xaman で署名。XAH や、自分の URIToken を1つ入れられます。発行者がバーンできるトークン、販売中のトークン、すでにボックスに入っているトークン、キートークンは入れられません。",
 "hw2h": "リンク / QR「誰でも」",
 "hw2t": "リンクと、QR 付きのボックス画像が届きます。最初に開けた人が受け取ります。プレゼント企画や、1人だけに個別に送るときに向いています。",
 "hw3h": "リンク / QR「特定のアドレス」",
 "hw3t": "指定したアドレスだけが開けるので、リンクを公開しても大丈夫です。",
 "hw4h": "キートークン",
 "hw4t": "キートークン（URIToken）を持っている人がボックスを開けます。空いているキートークンから選ぶか、新しく作成します（署名1回）。ボックスができたら、最後にキートークンを受取人に渡します。キーは譲ることも売ることもできます。",
 "hw5h": "パスワード付きギフトコード",
 "hw5t": "ほかのサイトのコード（例えばギフトカード）を、ブラウザ内でパスワードを使ってロックし、新しいトークンに入れます。このボックスはキートークンでしか渡せません。パスワードは受取人に直接、例えば Evergram で伝えてください。受取人は開封後、「🔒 マイギフトコード」でパスワードを入力します。",
 "hw6h": "ボックスを開ける",
 "hw6t": "「ボックスを開ける」をタップして、リンクを貼り付けるか、QR をスキャンするか、写真を選びます。ページが中身を表示し、開封のトランザクションを組み立てます。署名は Xaman で行います。",
 "hw7h": "🎁 届いたボックス",
 "hw7t": "ホームのこのボタンで「📦 マイボックス」の「受け取り」タブが開きます。あなたのアカウントのキートークンで開けられるボックスが表示されるので、「開ける」をタップして署名してください。リンク/QR のボックスはリンクから開いてください。",
 "hw8h": "📦 マイボックス",
 "hw8t": "3 つのタブがあります。「作成済み」：ロック中の自分のボックス（新しい順、中身つき）。リンク/QR の再表示、キートークンの受け渡し、期限後の取り戻しができます。「受け取り」：あなた宛てのボックスと、開封済みのボックス。「送信済み」：渡したボックスと、開封されたかどうか。",
 "hw9h": "期限",
 "hw9t": "期限はレジャー番号で決まります。それまではボックスを開けることができ、作成者は取り戻せません。過ぎるとボックスは開けられなくなり、作成者が中身を取り戻せます。",
 "rulesIntro": "このページを使うことで、以下のルールに同意したものとみなされます：",
 "r1": "このページは自己責任でご利用ください。プロジェクトは実験的なもので、無保証・現状のまま提供されます。",
 "r2": "トランザクションへの署名はすべて自分で Xaman で行います。署名前に詳細を読み、ネットワーク（Testnet / Mainnet）を確認してください。",
 "r3": "ページがシークレットキー（シード）を求めることも、資金を預かることもありません。XAH とトークンはレジャー上のアカウントにあります。プロジェクトはトランザクションの取り消し・凍結・巻き戻しができません。",
 "r4": "ボックスのリンクや QR、キートークン、パスワードは、贈る相手とだけ共有してください。「誰でも」のリンクは現金と同じです。",
 "r5": "受取人のアドレスを確認してください。間違ったアドレスへの送付は取り消せません。",
 "r6": "パスワードとリンクは大切に保管してください。ページはギフトコードのパスワードを保存せず、復元もできません。リンク・パスワード・キーの紛失や漏えいによる損失について、プロジェクトは責任を負いません。",
 "r7": "信頼できる人からのボックスだけを受け取ってください。ボックスは作成者のアカウントに裏付けられています。",
 "r8": "ボックスに入れられるのは XAH と URIToken だけです。詐欺や違法な目的に使わないでください。ギフトコードは、発行元サイトのルールに従ってください。",
 "r9": "これは独立したプロジェクトで、Xahau の公式プロダクトではありません。ルールは更新されることがあり、このページに掲載の版が適用されます。",
 "mbH": "📦 マイボックス",
 "mbBuilt": "作成済み",
 "mbRecv": "受け取り",
 "mbSent": "送信済み",
 "mbBuiltSub": "あなたが作成し、まだアカウントでロックされているボックスです（レジャーから取得）。リンク/QR の再表示、キーの受け渡し、期限後の取り戻しができます。",
 "mbRecvSub": "あなた宛てのボックス：キートークンで開けられるものと、すでに開封したものです。",
 "mbSentSub": "渡したボックス：キートークンが別のアドレスにあるもの、「特定のアドレス」のボックス、ほかの人がすでに開封したものです。",
 "mbRecvNote": "まだ開けていないリンク/QR のボックスはここには表示されません。リンクを持っている人しかその存在を知らないためです。開封済みのボックスは、あなた自身の開封トランザクションから表示しています。",
 "mbSentNote": "まだ誰も開けていない「誰でも」のボックスは「作成済み」にだけ表示されます。リンクを送ったかどうかは、ページにはわからないためです。",
 "mbLocal": "「特定のアドレス」のボックスであることは、この端末の記録からしかわかりません。",
 "mbSeeBuilt": "このボックスはまだアカウントでロックされています。操作は「作成済み」タブから行えます。",
 "mbSignIn": "ボックスを見るには、Xaman でサインインするかアドレスを入力してください。",
 "mbNone": "まだ何もありません。",
 "mbOpenedYou": "あなたが開封",
 "mbOpenedBy": "開封した人",
 "mbOpenedSt": "開封済み",
 "mbKeyAt": "キーの保有者",
 "mbKeyGone": "キーはもう存在しません（バーン済み）",
 "mbNotOpened": "未開封",
 "mbFor": "宛先アドレス",
 "mbWhen": "日時",
 "mbOldKeys": "古いキー：対応するボックスは開封済みか、取り戻し済みです",
 "mbTrunc": "このアカウントの直近 {n} 件のトランザクションを確認しました。それより古いボックスは表示されないことがあります。",
 "mbPartErr": "レジャーのデータの一部を読み込めませんでした。少し時間をおいてから、もう一度開いてください。",
 "netSwitch": "ネットワークを切り替え：Testnet ⇄ Mainnet",
 "gcSignIn": "ギフトコードを見るには、Xaman でサインインするかアドレスを入力してください。",
 "setBtnT": "⚙️ 設定と情報",
 "hw0h": "ボックスを受け取って開けられる人",
 "hw0a": "この",
 "hw0b": "のユーザーなら誰でもボックスを受け取って開けられます。フックのインストールは不要です。フックが必要なのは、ボックスを作成して送るアカウントだけです。",
 "hwQh": "QR コード",
 "hwQ1": "QR コードは、ボックスのリンクを画像にしたものです。ボックスを開けるキーが含まれているので、贈り物そのものと同じように大切に扱ってください。",
 "hwQ2": "渡し方：「誰でも」か「特定のアドレス」でボックスを作り、Xaman で署名すると、ページにリンクと QR が表示されます。リンクはテキストで送れます。おすすめは Evergram です。QR を画面に表示してスキャンしてもらったり、QR 付きの画像を送ったりすることもできます。リンクと QR は「📦 マイボックス」→「作成済み」で再表示できますが、このブラウザで作ったボックスに限ります。リンクのキーはあなたの端末にしか保存されていないためです。",
 "hwQ3": "開け方：ホームで「ボックスを開ける」をタップし、カメラで QR をスキャンするか、QR の写真を選びます。スマホのカメラを QR に向けるだけでも大丈夫です。QR にはこのページのアドレスが入っているので、そのボックスがそのまま開きます（必要ならネットワークも自動で切り替わります）。中身が表示されたら、Xaman でサインインして開封に署名してください。",
 "hwQ4": "大切なこと：「誰でも」の QR は現金と同じです。最初に開けた人が受け取るので、公開しないでください。「特定のアドレス」のボックスは、ほかの人に QR を見られても、そのアドレスでしか開けられません。キートークンのボックスに QR は不要です。キートークンを渡せば、受取人が「🎁 届いたボックス」から開けます。"
};

/* gift card + explorer links (v20261027r) */
Object.assign(window.BOX_I18N.en, { giftTitle: 'A gift for you', giftFrom: 'From', giftInside: 'Inside', giftSee: 'Open the gift', exCheck: 'Check in explorer', exPack: 'Box created', exClaim: 'Box opened', exNone: 'No transaction found for this box yet.' });
Object.assign(window.BOX_I18N.es, { giftTitle: 'Tienes un regalo', giftFrom: 'De', giftInside: 'Dentro', giftSee: 'Ver el regalo', exCheck: 'Comprobar en el explorador', exPack: 'Caja creada', exClaim: 'Caja abierta', exNone: 'Aún no hay transacciones de esta caja.' });
Object.assign(window.BOX_I18N.fr, { giftTitle: 'Un cadeau pour toi', giftFrom: 'De', giftInside: 'Dedans', giftSee: 'Voir le cadeau', exCheck: 'Vérifier dans l’explorateur', exPack: 'Boîte créée', exClaim: 'Boîte ouverte', exNone: 'Pas encore de transaction pour cette boîte.' });
Object.assign(window.BOX_I18N.ru, { giftTitle: 'Тебе подарок', giftFrom: 'От', giftInside: 'Внутри', giftSee: 'Открыть подарок', exCheck: 'Проверить в эксплорере', exPack: 'Бокс собран', exClaim: 'Бокс открыт', exNone: 'Транзакций этого бокса пока не найдено.' });
Object.assign(window.BOX_I18N.de, { giftTitle: 'Ein Geschenk für dich', giftFrom: 'Von', giftInside: 'Drin', giftSee: 'Geschenk ansehen', exCheck: 'Im Explorer prüfen', exPack: 'Box erstellt', exClaim: 'Box geöffnet', exNone: 'Für diese Box wurde noch keine Transaktion gefunden.' });
Object.assign(window.BOX_I18N.zh, { giftTitle: '你收到一份礼物', giftFrom: '来自', giftInside: '里面有', giftSee: '查看礼物', exCheck: '在浏览器中核实', exPack: '创建礼盒', exClaim: '打开礼盒', exNone: '暂未找到这个礼盒的交易。' });
Object.assign(window.BOX_I18N.ja, { giftTitle: 'プレゼントが届きました', giftFrom: '送り主', giftInside: '中身', giftSee: 'プレゼントを見る', exCheck: 'エクスプローラーで確認', exPack: 'ボックス作成', exClaim: 'ボックス開封', exNone: 'このボックスの取引はまだ見つかりません。' });

/* useful Xahau projects (v20261027t) */
Object.assign(window.BOX_I18N.en, {"pjTitle": "Useful Xahau projects", "pjEg": "Messenger where your keys and messages stay with you (end-to-end encrypted)", "pjXc": "Card packs on Xahau", "pjXv": "NFT marketplace for XRPL and Xahau", "pjOx": "Hub for the Xahau ecosystem", "pjXe": "Xahau explorer by Bithomp", "pjBt": "XRPL explorer", "pjXw": "XRP Ledger explorer", "pjNote": "Independent links. We are not affiliated with these projects, and this is not an endorsement."});
Object.assign(window.BOX_I18N.es, {"pjTitle": "Proyectos útiles de Xahau", "pjEg": "Mensajería donde tus claves y mensajes son solo tuyos (cifrado de extremo a extremo)", "pjXc": "Sobres de cartas en Xahau", "pjXv": "Mercado de NFT para XRPL y Xahau", "pjOx": "Punto de encuentro del ecosistema Xahau", "pjXe": "Explorador de Xahau de Bithomp", "pjBt": "Explorador de XRPL", "pjXw": "Explorador del XRP Ledger", "pjNote": "Enlaces independientes. No tenemos relación con estos proyectos y no es una recomendación oficial."});
Object.assign(window.BOX_I18N.fr, {"pjTitle": "Projets Xahau utiles", "pjEg": "Messagerie où tes clés et tes messages restent à toi (chiffrement de bout en bout)", "pjXc": "Packs de cartes sur Xahau", "pjXv": "Place de marché NFT pour XRPL et Xahau", "pjOx": "Le carrefour de l’écosystème Xahau", "pjXe": "Explorateur Xahau par Bithomp", "pjBt": "Explorateur XRPL", "pjXw": "Explorateur du XRP Ledger", "pjNote": "Liens indépendants. Nous ne sommes pas liés à ces projets et ce n’est pas une recommandation officielle."});
Object.assign(window.BOX_I18N.ru, {"pjTitle": "Полезные проекты Xahau", "pjEg": "Мессенджер, где ключи и сообщения остаются только у тебя (сквозное шифрование)", "pjXc": "Наборы карточек на Xahau", "pjXv": "NFT-маркетплейс для XRPL и Xahau", "pjOx": "Вся экосистема Xahau в одном месте", "pjXe": "Обозреватель Xahau от Bithomp", "pjBt": "Обозреватель XRPL", "pjXw": "Обозреватель XRP Ledger", "pjNote": "Независимые ссылки. Мы не связаны с этими проектами, и это не реклама."});
Object.assign(window.BOX_I18N.de, {"pjTitle": "Nützliche Xahau-Projekte", "pjEg": "Messenger, bei dem deine Schlüssel und Nachrichten bei dir bleiben (Ende-zu-Ende-verschlüsselt)", "pjXc": "Kartenpacks auf Xahau", "pjXv": "NFT-Marktplatz für XRPL und Xahau", "pjOx": "Anlaufstelle für das Xahau-Ökosystem", "pjXe": "Xahau-Explorer von Bithomp", "pjBt": "XRPL-Explorer", "pjXw": "XRP-Ledger-Explorer", "pjNote": "Unabhängige Links. Wir gehören nicht zu diesen Projekten, und das ist keine Empfehlung."});
Object.assign(window.BOX_I18N.zh, {"pjTitle": "实用的 Xahau 项目", "pjEg": "密钥和消息只属于你的通讯应用（端到端加密）", "pjXc": "Xahau 上的卡包", "pjXv": "XRPL 和 Xahau 的 NFT 市场", "pjOx": "Xahau 生态导航", "pjXe": "Bithomp 出品的 Xahau 浏览器", "pjBt": "XRPL 浏览器", "pjXw": "XRP Ledger 浏览器", "pjNote": "以上为独立链接，我们与这些项目无关联，也不代表推荐。"});
Object.assign(window.BOX_I18N.ja, {"pjTitle": "便利な Xahau プロジェクト", "pjEg": "鍵もメッセージも自分の手元に残るメッセンジャー（エンドツーエンド暗号化）", "pjXc": "Xahau のカードパック", "pjXv": "XRPL と Xahau の NFT マーケットプレイス", "pjOx": "Xahau エコシステムのポータル", "pjXe": "Bithomp による Xahau エクスプローラー", "pjBt": "XRPL エクスプローラー", "pjXw": "XRP Ledger エクスプローラー", "pjNote": "各リンクは独立したものです。これらのプロジェクトとは提携しておらず、推奨するものでもありません。"});
Object.assign(window.BOX_I18N.en, {"pjSub": "These projects make using Xahau Box easier and better."});
Object.assign(window.BOX_I18N.es, {"pjSub": "Estos proyectos te ayudan a usar Xahau Box de forma más fácil y mejor."});
Object.assign(window.BOX_I18N.fr, {"pjSub": "Ces projets t’aident à utiliser Xahau Box plus facilement et mieux."});
Object.assign(window.BOX_I18N.ru, {"pjSub": "Эти проекты помогут тебе удобнее и лучше пользоваться Xahau Box."});
Object.assign(window.BOX_I18N.de, {"pjSub": "Mit diesen Projekten nutzt du Xahau Box einfacher und besser."});
Object.assign(window.BOX_I18N.zh, {"pjSub": "这些项目能让你更方便、更好地使用 Xahau Box。"});
Object.assign(window.BOX_I18N.ja, {"pjSub": "これらのプロジェクトを使うと、Xahau Box をもっと便利に、快適に使えます。"});

/* theme picker (v20261028e) */
Object.assign(window.BOX_I18N.en, {"setThemeH": "🎨 Theme", "setThemeT": "Choose how the page looks. “System” follows your phone’s light or dark mode.", "themeDark": "Dark", "themeLight": "Light", "themeSys": "System"});
Object.assign(window.BOX_I18N.es, {"setThemeH": "🎨 Tema", "setThemeT": "Elige cómo se ve la página. «Sistema» sigue el modo claro u oscuro de tu móvil.", "themeDark": "Oscuro", "themeLight": "Claro", "themeSys": "Sistema"});
Object.assign(window.BOX_I18N.fr, {"setThemeH": "🎨 Thème", "setThemeT": "Choisis l’apparence de la page. « Système » suit le mode clair ou sombre de ton téléphone.", "themeDark": "Sombre", "themeLight": "Clair", "themeSys": "Système"});
Object.assign(window.BOX_I18N.ru, {"setThemeH": "🎨 Тема", "setThemeT": "Выбери, как выглядит страница. «Как в системе» повторяет светлый или тёмный режим телефона.", "themeDark": "Тёмная", "themeLight": "Светлая", "themeSys": "Как в системе"});
Object.assign(window.BOX_I18N.de, {"setThemeH": "🎨 Design", "setThemeT": "Wähle, wie die Seite aussieht. „System“ folgt dem hellen oder dunklen Modus deines Handys.", "themeDark": "Dunkel", "themeLight": "Hell", "themeSys": "System"});
Object.assign(window.BOX_I18N.zh, {"setThemeH": "🎨 主题", "setThemeT": "选择页面的外观。“跟随系统”会随手机的浅色或深色模式切换。", "themeDark": "深色", "themeLight": "浅色", "themeSys": "跟随系统"});
Object.assign(window.BOX_I18N.ja, {"setThemeH": "🎨 テーマ", "setThemeT": "ページの見た目を選べます。「システム」はスマホのライト／ダークモードに合わせます。", "themeDark": "ダーク", "themeLight": "ライト", "themeSys": "システム"});

/* Xaman re-login message (v20261028e) */
Object.assign(window.BOX_I18N.en, {"xamanRelogin": "Lost connection to Xaman, or your sign-in has expired. Sign out, sign in with Xaman again, then try once more.", "xamanReloginBtn": "Sign in again"});
Object.assign(window.BOX_I18N.es, {"xamanRelogin": "Se perdió la conexión con Xaman o tu sesión ha caducado. Cierra sesión, vuelve a entrar con Xaman y prueba otra vez.", "xamanReloginBtn": "Volver a entrar"});
Object.assign(window.BOX_I18N.fr, {"xamanRelogin": "La connexion à Xaman a été coupée ou ta session a expiré. Déconnecte-toi, reconnecte-toi avec Xaman, puis réessaie.", "xamanReloginBtn": "Se reconnecter"});
Object.assign(window.BOX_I18N.ru, {"xamanRelogin": "Связь с Xaman прервалась или вход устарел. Выйди и войди через Xaman заново, потом попробуй ещё раз.", "xamanReloginBtn": "Войти снова"});
Object.assign(window.BOX_I18N.de, {"xamanRelogin": "Die Verbindung zu Xaman ist abgebrochen oder deine Anmeldung ist abgelaufen. Melde dich ab, melde dich erneut mit Xaman an und versuche es noch einmal.", "xamanReloginBtn": "Erneut anmelden"});
Object.assign(window.BOX_I18N.zh, {"xamanRelogin": "与 Xaman 的连接中断了，或登录已过期。请先退出，再用 Xaman 重新登录，然后再试一次。", "xamanReloginBtn": "重新登录"});
Object.assign(window.BOX_I18N.ja, {"xamanRelogin": "Xaman との接続が切れたか、ログインの有効期限が切れました。いったんログアウトして Xaman で再ログインし、もう一度お試しください。", "xamanReloginBtn": "再ログイン"});

/* named-box hint (v20261028e) */
Object.assign(window.BOX_I18N.en, {"namedOnly": "This box was made for one address only: {a}. Only that account can open it. Sign in to Xaman with {a} and try again."});
Object.assign(window.BOX_I18N.es, {"namedOnly": "Esta caja se creó solo para una dirección: {a}. Solo esa cuenta puede abrirla. Entra en Xaman con {a} y vuelve a intentarlo."});
Object.assign(window.BOX_I18N.fr, {"namedOnly": "Cette boîte a été créée pour une seule adresse : {a}. Seul ce compte peut l’ouvrir. Connecte-toi à Xaman avec {a} et réessaie."});
Object.assign(window.BOX_I18N.ru, {"namedOnly": "Этот бокс сделан только для одного адреса: {a}. Открыть его может только этот аккаунт. Войди в Xaman с {a} и попробуй снова."});
Object.assign(window.BOX_I18N.de, {"namedOnly": "Diese Box wurde nur für eine Adresse erstellt: {a}. Nur dieses Konto kann sie öffnen. Melde dich in Xaman mit {a} an und versuche es erneut."});
Object.assign(window.BOX_I18N.zh, {"namedOnly": "这个礼盒只为一个地址创建：{a}。只有该账户能打开它。请在 Xaman 中用 {a} 登录后再试。"});
Object.assign(window.BOX_I18N.ja, {"namedOnly": "このボックスは 1 つのアドレス専用です：{a}。開けるのはこのアカウントだけです。Xaman に {a} でログインして、もう一度お試しください。"});

/* open by link (v20261028e) */
Object.assign(window.BOX_I18N.en, {"openByLink": "Open by link or QR", "openByLinkSub": "Paste the box link here, or scan / pick a photo of its QR code.", "pasteBtn": "Paste", "pasteManual": "Couldn’t read the clipboard. Long-press the field and choose Paste."});
Object.assign(window.BOX_I18N.es, {"openByLink": "Abrir con enlace o QR", "openByLinkSub": "Pega aquí el enlace de la caja, o escanea / elige una foto de su código QR.", "pasteBtn": "Pegar", "pasteManual": "No se pudo leer el portapapeles. Mantén pulsado el campo y elige Pegar."});
Object.assign(window.BOX_I18N.fr, {"openByLink": "Ouvrir avec un lien ou un QR", "openByLinkSub": "Colle ici le lien de la boîte, ou scanne / choisis une photo de son QR code.", "pasteBtn": "Coller", "pasteManual": "Impossible de lire le presse-papiers. Appuie longuement sur le champ et choisis Coller."});
Object.assign(window.BOX_I18N.ru, {"openByLink": "Открыть по ссылке или QR", "openByLinkSub": "Вставь сюда ссылку на бокс или отсканируй / выбери фото его QR-кода.", "pasteBtn": "Вставить", "pasteManual": "Не получилось прочитать буфер обмена. Зажми поле и выбери «Вставить»."});
Object.assign(window.BOX_I18N.de, {"openByLink": "Mit Link oder QR öffnen", "openByLinkSub": "Füge hier den Link zur Box ein oder scanne / wähle ein Foto ihres QR-Codes.", "pasteBtn": "Einfügen", "pasteManual": "Die Zwischenablage ließ sich nicht lesen. Halte das Feld gedrückt und wähle Einfügen."});
Object.assign(window.BOX_I18N.zh, {"openByLink": "用链接或二维码打开", "openByLinkSub": "把礼盒链接粘贴到这里，或扫描 / 选择它的二维码照片。", "pasteBtn": "粘贴", "pasteManual": "无法读取剪贴板。请长按输入框并选择“粘贴”。"});
Object.assign(window.BOX_I18N.ja, {"openByLink": "リンクまたは QR で開く", "openByLinkSub": "ボックスのリンクをここに貼り付けるか、QR コードをスキャン／写真を選んでください。", "pasteBtn": "貼り付け", "pasteManual": "クリップボードを読み取れませんでした。入力欄を長押しして「貼り付け」を選んでください。"});

/* install hook (v20261028k) */
Object.assign(window.BOX_I18N.en, {"hkH": "🪝 Install hook", "hkSub": "Installs a hook (SetHook) on the account you are signed in with in Xaman. You sign it yourself in Xaman.", "hkByHash": "By hash", "hkByWasm": "From wasm file", "hkPick": "Choose .wasm file", "hkFee": "Fee", "hkGo": "Install hook — sign in Xaman", "hkAcct": "Account", "hkNet": "Network", "hkMainWarn": "This is the REAL network (mainnet). The fee is paid in real XAH and the hook goes live at once. Check everything before signing.", "hkNeedXaman": "Sign in with Xaman first: the hook is installed on that account.", "hkNotWasm": "This is not a wasm file.", "hkHashIs": "hash starts with", "hkPickFirst": "Choose the wasm file first.", "hkChecking": "Checking that this hook exists on this network…", "hkCheckFail": "Could not check the network.", "hkNoDef": "This hook is not on this network.", "hkSent": "Sent. Transaction:", "hkOk": "Hook installed (tesSUCCESS).", "hkFail": "Not installed:", "hkPendingTx": "Not confirmed yet. Check in the explorer."});
Object.assign(window.BOX_I18N.ru, {"hkH": "🪝 Установить хук", "hkSub": "Ставит хук (SetHook) на аккаунт, с которым ты вошёл в Xaman. Подписываешь сам в Xaman.", "hkByHash": "По хешу", "hkByWasm": "Из файла wasm", "hkPick": "Выбрать файл .wasm", "hkFee": "Комиссия", "hkGo": "Установить хук — подписать в Xaman", "hkAcct": "Аккаунт", "hkNet": "Сеть", "hkMainWarn": "Это НАСТОЯЩАЯ сеть (mainnet). Комиссия платится реальными XAH, хук начнёт работать сразу. Проверь всё перед подписью.", "hkNeedXaman": "Сначала войди через Xaman: хук ставится на этот аккаунт.", "hkNotWasm": "Это не файл wasm.", "hkHashIs": "хеш начинается с", "hkPickFirst": "Сначала выбери файл wasm.", "hkChecking": "Проверяю, есть ли этот хук в этой сети…", "hkCheckFail": "Не получилось проверить сеть.", "hkNoDef": "Этого хука нет в этой сети.", "hkSent": "Отправлено. Транзакция:", "hkOk": "Хук установлен (tesSUCCESS).", "hkFail": "Не установлен:", "hkPendingTx": "Ещё не подтверждено. Проверь в обозревателе."});
Object.assign(window.BOX_I18N.es, {"hkH": "🪝 Instalar hook", "hkSub": "Instala un hook (SetHook) en la cuenta con la que entraste en Xaman. Lo firmas tú en Xaman.", "hkByHash": "Por hash", "hkByWasm": "Desde archivo wasm", "hkPick": "Elegir archivo .wasm", "hkFee": "Comisión", "hkGo": "Instalar hook — firmar en Xaman", "hkAcct": "Cuenta", "hkNet": "Red", "hkMainWarn": "Esta es la red REAL (mainnet). La comisión se paga en XAH reales y el hook funciona al instante. Revisa todo antes de firmar.", "hkNeedXaman": "Primero entra con Xaman: el hook se instala en esa cuenta.", "hkNotWasm": "Esto no es un archivo wasm.", "hkHashIs": "el hash empieza por", "hkPickFirst": "Primero elige el archivo wasm.", "hkChecking": "Comprobando que este hook existe en esta red…", "hkCheckFail": "No se pudo comprobar la red.", "hkNoDef": "Este hook no está en esta red.", "hkSent": "Enviado. Transacción:", "hkOk": "Hook instalado (tesSUCCESS).", "hkFail": "No instalado:", "hkPendingTx": "Aún sin confirmar. Revisa en el explorador."});
Object.assign(window.BOX_I18N.fr, {"hkH": "🪝 Installer un hook", "hkSub": "Installe un hook (SetHook) sur le compte connecté dans Xaman. Tu signes toi-même dans Xaman.", "hkByHash": "Par hash", "hkByWasm": "Depuis un fichier wasm", "hkPick": "Choisir un fichier .wasm", "hkFee": "Frais", "hkGo": "Installer le hook — signer dans Xaman", "hkAcct": "Compte", "hkNet": "Réseau", "hkMainWarn": "C’est le VRAI réseau (mainnet). Les frais sont payés en vrais XAH et le hook est actif tout de suite. Vérifie tout avant de signer.", "hkNeedXaman": "Connecte-toi d’abord avec Xaman : le hook est installé sur ce compte.", "hkNotWasm": "Ce n’est pas un fichier wasm.", "hkHashIs": "le hash commence par", "hkPickFirst": "Choisis d’abord le fichier wasm.", "hkChecking": "Vérification que ce hook existe sur ce réseau…", "hkCheckFail": "Impossible de vérifier le réseau.", "hkNoDef": "Ce hook n’existe pas sur ce réseau.", "hkSent": "Envoyé. Transaction :", "hkOk": "Hook installé (tesSUCCESS).", "hkFail": "Non installé :", "hkPendingTx": "Pas encore confirmé. Vérifie dans l’explorateur."});
Object.assign(window.BOX_I18N.de, {"hkH": "🪝 Hook installieren", "hkSub": "Installiert einen Hook (SetHook) auf dem Konto, mit dem du in Xaman angemeldet bist. Du signierst selbst in Xaman.", "hkByHash": "Per Hash", "hkByWasm": "Aus wasm-Datei", "hkPick": ".wasm-Datei wählen", "hkFee": "Gebühr", "hkGo": "Hook installieren — in Xaman signieren", "hkAcct": "Konto", "hkNet": "Netzwerk", "hkMainWarn": "Das ist das ECHTE Netzwerk (Mainnet). Die Gebühr wird in echten XAH bezahlt und der Hook ist sofort aktiv. Prüfe alles vor dem Signieren.", "hkNeedXaman": "Melde dich zuerst mit Xaman an: der Hook wird auf diesem Konto installiert.", "hkNotWasm": "Das ist keine wasm-Datei.", "hkHashIs": "Hash beginnt mit", "hkPickFirst": "Wähle zuerst die wasm-Datei.", "hkChecking": "Prüfe, ob dieser Hook in diesem Netzwerk existiert…", "hkCheckFail": "Netzwerk konnte nicht geprüft werden.", "hkNoDef": "Diesen Hook gibt es in diesem Netzwerk nicht.", "hkSent": "Gesendet. Transaktion:", "hkOk": "Hook installiert (tesSUCCESS).", "hkFail": "Nicht installiert:", "hkPendingTx": "Noch nicht bestätigt. Prüfe im Explorer."});
Object.assign(window.BOX_I18N.zh, {"hkH": "🪝 安装 Hook", "hkSub": "在你用 Xaman 登录的账户上安装 Hook（SetHook）。由你自己在 Xaman 中签名。", "hkByHash": "按哈希", "hkByWasm": "从 wasm 文件", "hkPick": "选择 .wasm 文件", "hkFee": "手续费", "hkGo": "安装 Hook — 在 Xaman 中签名", "hkAcct": "账户", "hkNet": "网络", "hkMainWarn": "这是真实网络（主网）。手续费用真实 XAH 支付，Hook 会立即生效。签名前请检查所有内容。", "hkNeedXaman": "请先用 Xaman 登录：Hook 将安装到该账户。", "hkNotWasm": "这不是 wasm 文件。", "hkHashIs": "哈希开头为", "hkPickFirst": "请先选择 wasm 文件。", "hkChecking": "正在检查此 Hook 是否存在于该网络…", "hkCheckFail": "无法检查网络。", "hkNoDef": "该网络上没有这个 Hook。", "hkSent": "已发送。交易：", "hkOk": "Hook 已安装（tesSUCCESS）。", "hkFail": "未安装：", "hkPendingTx": "尚未确认，请在浏览器中查看。"});
Object.assign(window.BOX_I18N.ja, {"hkH": "🪝 フックをインストール", "hkSub": "Xaman でログインしているアカウントにフック（SetHook）をインストールします。署名は Xaman で自分で行います。", "hkByHash": "ハッシュで", "hkByWasm": "wasm ファイルから", "hkPick": ".wasm ファイルを選択", "hkFee": "手数料", "hkGo": "フックをインストール — Xaman で署名", "hkAcct": "アカウント", "hkNet": "ネットワーク", "hkMainWarn": "これは本番ネットワーク（メインネット）です。手数料は実際の XAH で支払われ、フックはすぐに有効になります。署名前にすべて確認してください。", "hkNeedXaman": "先に Xaman でログインしてください。フックはそのアカウントにインストールされます。", "hkNotWasm": "wasm ファイルではありません。", "hkHashIs": "ハッシュの先頭", "hkPickFirst": "先に wasm ファイルを選択してください。", "hkChecking": "このネットワークにこのフックがあるか確認中…", "hkCheckFail": "ネットワークを確認できませんでした。", "hkNoDef": "このフックはこのネットワークにありません。", "hkSent": "送信しました。トランザクション：", "hkOk": "フックをインストールしました（tesSUCCESS）。", "hkFail": "インストールされませんでした：", "hkPendingTx": "まだ確認されていません。エクスプローラーで確認してください。"});

/* install hook: fee note (v20261028k) */
Object.assign(window.BOX_I18N.en, {"hkFeeNote": "The network charges its own fee for this transaction. You will see the exact amount in Xaman when you sign."});
Object.assign(window.BOX_I18N.ru, {"hkFeeNote": "Сеть сама берёт комиссию за эту транзакцию. Точную сумму увидишь в Xaman при подписи."});
Object.assign(window.BOX_I18N.es, {"hkFeeNote": "La red cobra su propia comisión por esta transacción. Verás la cantidad exacta en Xaman al firmar."});
Object.assign(window.BOX_I18N.fr, {"hkFeeNote": "Le réseau prélève ses propres frais pour cette transaction. Tu verras le montant exact dans Xaman au moment de signer."});
Object.assign(window.BOX_I18N.de, {"hkFeeNote": "Das Netzwerk berechnet für diese Transaktion selbst eine Gebühr. Den genauen Betrag siehst du beim Signieren in Xaman."});
Object.assign(window.BOX_I18N.zh, {"hkFeeNote": "网络会自行收取这笔交易的手续费。签名时可在 Xaman 中看到准确金额。"});
Object.assign(window.BOX_I18N.ja, {"hkFeeNote": "このトランザクションの手数料はネットワークが自動で計算します。正確な金額は Xaman で署名するときに表示されます。"});

/* how it works: audit (v20261028k) */
Object.assign(window.BOX_I18N.en, {"hwAh": "Audit (AUDIT)", "hwAt": "The account with the hook can have its own objects that are not boxes, for example tokens, offers or checks that were there before the hook. Before the first box, the hook counts them once so it never mixes them up with the reserve of the boxes. This is the AUDIT step: the page offers it by itself, you sign it in Xaman, and then PACK. Only the network fee is charged. An audit is needed again only if new objects like that appear on the account."});
Object.assign(window.BOX_I18N.ru, {"hwAh": "Аудит (AUDIT)", "hwAt": "На аккаунте с хуком могут быть свои объекты, которые не являются боксами, например токены, офферы или чеки, появившиеся до хука. Перед первым боксом хук один раз их пересчитывает, чтобы никогда не путать их с резервом боксов. Это шаг AUDIT: страница сама его предложит, ты подписываешь его в Xaman, а потом PACK. Берётся только комиссия сети. Снова аудит понадобится, только если на аккаунте появятся новые такие объекты."});
Object.assign(window.BOX_I18N.es, {"hwAh": "Auditoría (AUDIT)", "hwAt": "La cuenta con el hook puede tener sus propios objetos que no son cajas, por ejemplo tokens, ofertas o cheques que ya estaban antes del hook. Antes de la primera caja, el hook los cuenta una vez para no confundirlos nunca con la reserva de las cajas. Es el paso AUDIT: la página lo propone sola, lo firmas en Xaman y luego PACK. Solo se cobra la comisión de la red. La auditoría solo vuelve a hacer falta si aparecen nuevos objetos así en la cuenta."});
Object.assign(window.BOX_I18N.fr, {"hwAh": "Audit (AUDIT)", "hwAt": "Le compte avec le hook peut avoir ses propres objets qui ne sont pas des boîtes, par exemple des tokens, des offres ou des chèques déjà présents avant le hook. Avant la première boîte, le hook les compte une fois pour ne jamais les confondre avec la réserve des boîtes. C’est l’étape AUDIT : la page la propose d’elle-même, tu la signes dans Xaman, puis PACK. Seuls les frais du réseau sont prélevés. Un nouvel audit n’est nécessaire que si de nouveaux objets de ce type apparaissent sur le compte."});
Object.assign(window.BOX_I18N.de, {"hwAh": "Audit (AUDIT)", "hwAt": "Das Konto mit dem Hook kann eigene Objekte haben, die keine Boxen sind, zum Beispiel Tokens, Angebote oder Schecks, die schon vor dem Hook da waren. Vor der ersten Box zählt der Hook sie einmal, damit er sie nie mit der Reserve der Boxen verwechselt. Das ist der Schritt AUDIT: Die Seite schlägt ihn selbst vor, du signierst ihn in Xaman und danach PACK. Es fällt nur die Netzwerkgebühr an. Ein neues Audit ist nur nötig, wenn neue solche Objekte auf dem Konto auftauchen."});
Object.assign(window.BOX_I18N.zh, {"hwAh": "审计（AUDIT）", "hwAt": "带有 Hook 的账户可能有自己的非礼盒对象，例如在安装 Hook 之前就已存在的代币、报价或支票。在第一个礼盒之前，Hook 会对它们清点一次，以免与礼盒的储备混淆。这就是 AUDIT 步骤：页面会自动提示，你在 Xaman 中签名，然后再签 PACK。只收取网络手续费。只有当账户上出现新的此类对象时，才需要再次审计。"});
Object.assign(window.BOX_I18N.ja, {"hwAh": "監査（AUDIT）", "hwAt": "フックのあるアカウントには、ボックス以外の独自のオブジェクト（フック導入前からあったトークン、オファー、チェックなど）がある場合があります。最初のボックスの前に、フックはそれらを一度だけ数え、ボックスの準備金と混同しないようにします。これが AUDIT ステップです。ページが自動で提案し、Xaman で署名してから PACK を行います。かかるのはネットワーク手数料だけです。アカウントに新しいそのようなオブジェクトが現れた場合にのみ、再び監査が必要になります。"});

/* connected wallets (v20261028l) */
Object.assign(window.BOX_I18N.en, {"mwTitle": "Connected wallets", "mwAdd": "+ Connect another wallet", "mwOpen": "👛 Connected wallets", "mwMake": "Use this wallet", "mwOut": "Sign out this wallet", "mwCopy": "Copy address", "mwView": "view only", "mwEmpty": "No wallets on this device yet.", "mwNeedSign": "Tap ✓ to sign in with Xaman for this wallet.", "mwNoSess": "sign in with Xaman", "mwSignFor": "Sign in with Xaman as", "mwRemoved": "Wallet removed from this device."});
Object.assign(window.BOX_I18N.ru, {"mwTitle": "Подключённые кошельки", "mwAdd": "+ Подключить другой кошелёк", "mwOpen": "👛 Подключённые кошельки", "mwMake": "Управлять этим кошельком", "mwOut": "Выйти из этого кошелька", "mwCopy": "Копировать адрес", "mwView": "только просмотр", "mwEmpty": "На этом устройстве пока нет кошельков.", "mwNeedSign": "Нажми ✓, чтобы войти в этот кошелёк через Xaman.", "mwNoSess": "войди через Xaman", "mwSignFor": "Войди в Xaman как", "mwRemoved": "Кошелёк убран с этого устройства."});
Object.assign(window.BOX_I18N.es, {"mwTitle": "Billeteras conectadas", "mwAdd": "+ Conectar otra billetera", "mwOpen": "👛 Billeteras conectadas", "mwMake": "Usar esta billetera", "mwOut": "Cerrar sesión de esta billetera", "mwCopy": "Copiar dirección", "mwView": "solo ver", "mwEmpty": "Aún no hay billeteras en este dispositivo.", "mwNeedSign": "Toca ✓ para entrar con Xaman en esta billetera.", "mwNoSess": "entra con Xaman", "mwSignFor": "Entra en Xaman como", "mwRemoved": "Billetera quitada de este dispositivo."});
Object.assign(window.BOX_I18N.fr, {"mwTitle": "Portefeuilles connectés", "mwAdd": "+ Connecter un autre portefeuille", "mwOpen": "👛 Portefeuilles connectés", "mwMake": "Utiliser ce portefeuille", "mwOut": "Déconnecter ce portefeuille", "mwCopy": "Copier l’adresse", "mwView": "lecture seule", "mwEmpty": "Aucun portefeuille sur cet appareil.", "mwNeedSign": "Touche ✓ pour te connecter avec Xaman à ce portefeuille.", "mwNoSess": "connecte-toi avec Xaman", "mwSignFor": "Connecte-toi dans Xaman avec", "mwRemoved": "Portefeuille retiré de cet appareil."});
Object.assign(window.BOX_I18N.de, {"mwTitle": "Verbundene Wallets", "mwAdd": "+ Weitere Wallet verbinden", "mwOpen": "👛 Verbundene Wallets", "mwMake": "Diese Wallet verwenden", "mwOut": "Von dieser Wallet abmelden", "mwCopy": "Adresse kopieren", "mwView": "nur ansehen", "mwEmpty": "Noch keine Wallets auf diesem Gerät.", "mwNeedSign": "Tippe auf ✓, um dich mit Xaman bei dieser Wallet anzumelden.", "mwNoSess": "mit Xaman anmelden", "mwSignFor": "Melde dich in Xaman an als", "mwRemoved": "Wallet von diesem Gerät entfernt."});
Object.assign(window.BOX_I18N.zh, {"mwTitle": "已连接的钱包", "mwAdd": "+ 连接另一个钱包", "mwOpen": "👛 已连接的钱包", "mwMake": "使用此钱包", "mwOut": "退出此钱包", "mwCopy": "复制地址", "mwView": "仅查看", "mwEmpty": "此设备上还没有钱包。", "mwNeedSign": "点 ✓ 用 Xaman 登录此钱包。", "mwNoSess": "请用 Xaman 登录", "mwSignFor": "请在 Xaman 中登录", "mwRemoved": "已从此设备移除钱包。"});
Object.assign(window.BOX_I18N.ja, {"mwTitle": "接続済みウォレット", "mwAdd": "+ 別のウォレットを接続", "mwOpen": "👛 接続済みウォレット", "mwMake": "このウォレットを使う", "mwOut": "このウォレットからログアウト", "mwCopy": "アドレスをコピー", "mwView": "閲覧のみ", "mwEmpty": "このデバイスにはまだウォレットがありません。", "mwNeedSign": "✓ をタップして、このウォレットに Xaman でログインします。", "mwNoSess": "Xaman でログイン", "mwSignFor": "Xaman でログイン：", "mwRemoved": "このデバイスからウォレットを削除しました。"});

/* gift-code warning + box creator (v20261028n) */
(() => { const W = {
en: ["Do not buy or trade boxes with gift codes if you are not sure about the sender's address or something feels off. Trust only verified addresses, family and friends. The hook and this page do not check external codes and are not responsible for them.", "Box created by", "address taken from the ledger, it cannot be faked"],
ru: ["Не покупайте и не обменивайте боксы с подарочными кодами, если не уверены в адресе отправителя или чувствуете подвох. Доверяйте только проверенным адресам, близким и знакомым. Хук и страница не проверяют внешние коды и не несут за них ответственности.", "Бокс создал", "адрес взят из сети, подделать его нельзя"],
es: ["No compres ni intercambies cajas con códigos de regalo si no estás seguro de la dirección del remitente o algo te huele mal. Confía solo en direcciones verificadas, familiares y amigos. El hook y esta página no verifican los códigos externos y no se hacen responsables de ellos.", "Caja creada por", "dirección tomada de la red, no se puede falsificar"],
fr: ["N’achète pas et n’échange pas de boîtes avec des codes cadeaux si tu n’es pas sûr de l’adresse de l’expéditeur ou si quelque chose te semble louche. Fais confiance uniquement aux adresses vérifiées, à tes proches et à tes amis. Le hook et cette page ne vérifient pas les codes externes et n’en sont pas responsables.", "Boîte créée par", "adresse lue sur le réseau, impossible à falsifier"],
de: ["Kaufe oder tausche keine Boxen mit Geschenkcodes, wenn du dir bei der Adresse des Absenders nicht sicher bist oder etwas faul wirkt. Vertraue nur geprüften Adressen, Familie und Freunden. Der Hook und diese Seite prüfen externe Codes nicht und übernehmen dafür keine Verantwortung.", "Box erstellt von", "Adresse aus dem Netzwerk, sie kann nicht gefälscht werden"],
zh: ["如果你不确定发送者的地址，或感觉有诈，请不要购买或交换含有礼品码的礼盒。只信任经过验证的地址、亲人和朋友。Hook 和本页面不检查外部礼品码，也不对其负责。", "礼盒创建者", "地址来自链上，无法伪造"],
ja: ["送信者のアドレスに確信がない場合や、怪しいと感じた場合は、ギフトコード入りのボックスを購入・交換しないでください。確認済みのアドレス、家族や知人だけを信頼してください。フックとこのページは外部コードを確認せず、その責任も負いません。", "ボックスの作成者", "アドレスはネットワークから取得、偽造できません"] };
for (const [l, v] of Object.entries(W)) Object.assign(window.BOX_I18N[l], { gcWarn: v[0], gcWarnS: '⚠ ' + v[0], r10: '⚠ ' + v[0], boxBy: v[1], boxByNote: v[2] }); })();

/* token details (v20261028o) */
Object.assign(window.BOX_I18N.en, {"tokInfo": "Token details", "tokClose": "Close", "tokId": "Token ID", "tokIssuer": "Issuer", "tokNoProps": "No properties in this token."});
Object.assign(window.BOX_I18N.ru, {"tokInfo": "Данные токена", "tokClose": "Закрыть", "tokId": "ID токена", "tokIssuer": "Эмитент", "tokNoProps": "У этого токена нет свойств."});
Object.assign(window.BOX_I18N.es, {"tokInfo": "Datos del token", "tokClose": "Cerrar", "tokId": "ID del token", "tokIssuer": "Emisor", "tokNoProps": "Este token no tiene propiedades."});
Object.assign(window.BOX_I18N.fr, {"tokInfo": "Détails du jeton", "tokClose": "Fermer", "tokId": "ID du jeton", "tokIssuer": "Émetteur", "tokNoProps": "Ce jeton n’a pas de propriétés."});
Object.assign(window.BOX_I18N.de, {"tokInfo": "Token-Details", "tokClose": "Schließen", "tokId": "Token-ID", "tokIssuer": "Aussteller", "tokNoProps": "Dieser Token hat keine Eigenschaften."});
Object.assign(window.BOX_I18N.zh, {"tokInfo": "代币详情", "tokClose": "关闭", "tokId": "代币 ID", "tokIssuer": "发行方", "tokNoProps": "此代币没有属性。"});
Object.assign(window.BOX_I18N.ja, {"tokInfo": "トークンの詳細", "tokClose": "閉じる", "tokId": "トークン ID", "tokIssuer": "発行者", "tokNoProps": "このトークンにはプロパティがありません。"});

/* box statistics (v20261028p) */
Object.assign(window.BOX_I18N.en, {"stTitle": "Box statistics", "stTotal": "Total Xahau Boxes created", "stModes": "all modes: link, QR, one address, key token", "stOpenOf": "opened of {m}", "stPct": "{p}% of boxes already opened", "stXahL": "XAH passed through boxes", "stTokL": "Tokens transferred", "stKeyL": "Key tokens created", "stGcL": "Gift-code tokens created", "stNote": "Data from the Xahau network, counted from the hook's history."});
Object.assign(window.BOX_I18N.ru, {"stTitle": "Статистика боксов", "stTotal": "Всего создано Xahau Box", "stModes": "все режимы: ссылка, QR, один адрес, токен-ключ", "stOpenOf": "открыто из {m}", "stPct": "{p}% боксов уже открыты", "stXahL": "XAH прошло через боксы", "stTokL": "Токенов передано", "stKeyL": "Создано токенов-ключей", "stGcL": "Токенов с подарочным кодом", "stNote": "Данные из сети Xahau, подсчёт по истории хука."});
Object.assign(window.BOX_I18N.es, {"stTitle": "Estadísticas de cajas", "stTotal": "Total de Xahau Box creadas", "stModes": "todos los modos: enlace, QR, una dirección, token llave", "stOpenOf": "abiertas de {m}", "stPct": "{p}% de las cajas ya abiertas", "stXahL": "XAH pasados por las cajas", "stTokL": "Tokens transferidos", "stKeyL": "Tokens llave creados", "stGcL": "Tokens con código de regalo", "stNote": "Datos de la red Xahau, contados con el historial del hook."});
Object.assign(window.BOX_I18N.fr, {"stTitle": "Statistiques des boîtes", "stTotal": "Total de Xahau Box créées", "stModes": "tous les modes : lien, QR, une adresse, jeton-clé", "stOpenOf": "ouvertes sur {m}", "stPct": "{p}% des boîtes déjà ouvertes", "stXahL": "XAH passés par les boîtes", "stTokL": "Jetons transférés", "stKeyL": "Jetons-clés créés", "stGcL": "Jetons avec code cadeau", "stNote": "Données du réseau Xahau, comptées depuis l’historique du hook."});
Object.assign(window.BOX_I18N.de, {"stTitle": "Box-Statistik", "stTotal": "Insgesamt erstellte Xahau Boxen", "stModes": "alle Modi: Link, QR, eine Adresse, Schlüssel-Token", "stOpenOf": "geöffnet von {m}", "stPct": "{p}% der Boxen bereits geöffnet", "stXahL": "XAH durch Boxen gegangen", "stTokL": "Übertragene Token", "stKeyL": "Erstellte Schlüssel-Token", "stGcL": "Token mit Geschenkcode", "stNote": "Daten aus dem Xahau-Netzwerk, gezählt aus der Hook-Historie."});
Object.assign(window.BOX_I18N.zh, {"stTitle": "盒子统计", "stTotal": "已创建的 Xahau Box 总数", "stModes": "所有模式：链接、二维码、单一地址、钥匙代币", "stOpenOf": "已打开，共 {m}", "stPct": "{p}% 的盒子已打开", "stXahL": "经过盒子的 XAH", "stTokL": "已转移的代币", "stKeyL": "已创建的钥匙代币", "stGcL": "含礼品码的代币", "stNote": "数据来自 Xahau 网络，按 hook 历史统计。"});
Object.assign(window.BOX_I18N.ja, {"stTitle": "ボックス統計", "stTotal": "作成された Xahau Box の合計", "stModes": "すべてのモード：リンク、QR、単一アドレス、キートークン", "stOpenOf": "件開封 / {m}", "stPct": "{p}% のボックスが開封済み", "stXahL": "ボックスを通った XAH", "stTokL": "転送されたトークン", "stKeyL": "作成されたキートークン", "stGcL": "ギフトコード付きトークン", "stNote": "Xahau ネットワークのデータ。フックの履歴から集計。"});
/* stats refresh (v20261028q) */
Object.assign(window.BOX_I18N.en, {"stRefresh": "↻ Refresh"});
Object.assign(window.BOX_I18N.ru, {"stRefresh": "↻ Обновить"});
Object.assign(window.BOX_I18N.es, {"stRefresh": "↻ Actualizar"});
Object.assign(window.BOX_I18N.fr, {"stRefresh": "↻ Actualiser"});
Object.assign(window.BOX_I18N.de, {"stRefresh": "↻ Aktualisieren"});
Object.assign(window.BOX_I18N.zh, {"stRefresh": "↻ 刷新"});
Object.assign(window.BOX_I18N.ja, {"stRefresh": "↻ 更新"});
/* stats hook accounts (v20261028r) */
Object.assign(window.BOX_I18N.en, {"stHooksAll": "All accounts with the hook are counted: {k}.", "stHooksPart": "Counted accounts with the hook: {k} of {n} on the network."});
Object.assign(window.BOX_I18N.ru, {"stHooksAll": "Считаются все аккаунты с хуком: {k}.", "stHooksPart": "Считаются аккаунты с хуком: {k} из {n} в сети."});
Object.assign(window.BOX_I18N.es, {"stHooksAll": "Se cuentan todas las cuentas con el hook: {k}.", "stHooksPart": "Cuentas con el hook contadas: {k} de {n} en la red."});
Object.assign(window.BOX_I18N.fr, {"stHooksAll": "Tous les comptes avec le hook sont comptés : {k}.", "stHooksPart": "Comptes avec le hook comptés : {k} sur {n} sur le réseau."});
Object.assign(window.BOX_I18N.de, {"stHooksAll": "Alle Konten mit dem Hook werden gezählt: {k}.", "stHooksPart": "Gezählte Konten mit dem Hook: {k} von {n} im Netzwerk."});
Object.assign(window.BOX_I18N.zh, {"stHooksAll": "已统计所有安装该 hook 的账户：{k}。", "stHooksPart": "已统计安装该 hook 的账户：{k} / 网络中共 {n}。"});
Object.assign(window.BOX_I18N.ja, {"stHooksAll": "フックのあるすべてのアカウントを集計：{k}。", "stHooksPart": "集計したフック付きアカウント：ネットワーク上 {n} 件中 {k} 件。"});
Object.assign(window.BOX_I18N.en, {"kxSent": "Box handed over", "kxOffer": "Key handed over: waiting to be accepted", "kxMode": "How", "kxModeRemit": "Key token sent (Remit)", "kxModeOffer": "Key token offered (sell offer)", "kxTo": "To", "kxTx": "Key transfer tx", "kxSentNote": "The key token is now with the recipient. Only they can open the box. Until it is opened, you can take it back only after the time limit.", "kxOfferNote": "The recipient must accept the offer in their wallet. Until then the key is still on your account.", "kxSentShort": "Handed over"});
Object.assign(window.BOX_I18N.ru, {"kxSent": "Бокс передан", "kxOffer": "Ключ передан: ждёт принятия", "kxMode": "Как", "kxModeRemit": "Токен-ключ отправлен (Remit)", "kxModeOffer": "Токен-ключ предложен (оффер)", "kxTo": "Кому", "kxTx": "Транзакция передачи ключа", "kxSentNote": "Токен-ключ теперь у получателя. Открыть бокс может только он. Пока бокс не открыт, забрать его можно только после срока.", "kxOfferNote": "Получатель должен принять оффер в своём кошельке. До этого ключ ещё на твоём аккаунте.", "kxSentShort": "Передан"});
Object.assign(window.BOX_I18N.es, {"kxSent": "Caja entregada", "kxOffer": "Llave ofrecida: esperando aceptación", "kxMode": "Cómo", "kxModeRemit": "Token llave enviado (Remit)", "kxModeOffer": "Token llave ofrecido (oferta)", "kxTo": "A", "kxTx": "Tx de entrega de la llave", "kxSentNote": "El token llave ya está con el destinatario. Solo él puede abrir la caja. Mientras no se abra, puedes recuperarla solo tras el plazo.", "kxOfferNote": "El destinatario debe aceptar la oferta en su billetera. Hasta entonces la llave sigue en tu cuenta.", "kxSentShort": "Entregada"});
Object.assign(window.BOX_I18N.fr, {"kxSent": "Boîte remise", "kxOffer": "Clé proposée : en attente d’acceptation", "kxMode": "Comment", "kxModeRemit": "Jeton clé envoyé (Remit)", "kxModeOffer": "Jeton clé proposé (offre)", "kxTo": "À", "kxTx": "Tx de remise de la clé", "kxSentNote": "Le jeton clé est maintenant chez le destinataire. Lui seul peut ouvrir la boîte. Tant qu’elle n’est pas ouverte, vous ne pouvez la reprendre qu’après le délai.", "kxOfferNote": "Le destinataire doit accepter l’offre dans son portefeuille. D’ici là, la clé reste sur votre compte.", "kxSentShort": "Remise"});
Object.assign(window.BOX_I18N.de, {"kxSent": "Box übergeben", "kxOffer": "Schlüssel angeboten: wartet auf Annahme", "kxMode": "Wie", "kxModeRemit": "Schlüssel-Token gesendet (Remit)", "kxModeOffer": "Schlüssel-Token angeboten (Angebot)", "kxTo": "An", "kxTx": "Tx der Schlüsselübergabe", "kxSentNote": "Der Schlüssel-Token ist jetzt beim Empfänger. Nur er kann die Box öffnen. Solange sie nicht geöffnet ist, kannst du sie erst nach Fristablauf zurücknehmen.", "kxOfferNote": "Der Empfänger muss das Angebot in seiner Wallet annehmen. Bis dahin bleibt der Schlüssel auf deinem Konto.", "kxSentShort": "Übergeben"});
Object.assign(window.BOX_I18N.zh, {"kxSent": "盒子已转交", "kxOffer": "钥匙已报价：等待接受", "kxMode": "方式", "kxModeRemit": "钥匙代币已发送（Remit）", "kxModeOffer": "钥匙代币已报价（出售报价）", "kxTo": "接收方", "kxTx": "钥匙转交交易", "kxSentNote": "钥匙代币现在在接收方手中，只有他能打开盒子。在打开之前，你只能在期限过后取回。", "kxOfferNote": "接收方需在钱包中接受报价。在此之前钥匙仍在你的账户上。", "kxSentShort": "已转交"});
Object.assign(window.BOX_I18N.ja, {"kxSent": "ボックスを渡しました", "kxOffer": "鍵を提示済み：受け取り待ち", "kxMode": "方法", "kxModeRemit": "鍵トークンを送信（Remit）", "kxModeOffer": "鍵トークンを提示（売りオファー）", "kxTo": "宛先", "kxTx": "鍵の受け渡しTx", "kxSentNote": "鍵トークンは受取人の手元にあります。ボックスを開けられるのは受取人だけです。開けられるまでは、期限後にのみ取り戻せます。", "kxOfferNote": "受取人がウォレットでオファーを受け入れる必要があります。それまで鍵はあなたのアカウントにあります。", "kxSentShort": "引き渡し済み"});
/* site footer (v20261028t) */
Object.assign(window.BOX_I18N.ru, {"sfTag": "Боксы с XAH и токенами на Xahau. Без сервера, без хранения ключей.", "sfHook": "Боксы держит хук в твоём аккаунте, а не этот сайт.", "sfLearn": "Узнать", "sfHooks": "Как работают хуки", "sfNet": "Сеть Xahau", "sfExp": "Хук-аккаунт в эксплорере", "sfOther": "Другое", "sfPriv": "Конфиденциальность", "sfPrivT": "Мы ничего не собираем. Нет сервера, аналитики и счётчиков. Страница читает только публичный леджер. В браузере остаются лишь настройки (язык, сеть), подключённый адрес, твои записи о боксах и сессия Xaman — удалить можно, выйдя из аккаунта или очистив данные сайта.", "sfTerms": "Условия", "sfTermsT": "Страница бесплатная и с открытым кодом, без гарантий. Она только собирает транзакции — подписываешь ты сам в Xaman, и отменить подписанное нельзя. Проверяй адрес, сумму и сеть. За потерю ссылки, ключа или пароля отвечает тот, кто их хранит.", "sfCook": "Файлы cookie", "sfCookT": "Cookie нет. Используется только локальное хранилище браузера для работы страницы.", "sfDis": "Xahau Box не связан и не поддерживается XRPL Labs, Xaman, Xahau Alliance, INFTF, XahauCards, Evergram или Xahau Vault.", "sfRisk": "Пользуйся на свой риск. Начни с тестнета."});
Object.assign(window.BOX_I18N.en, {"sfTag": "Boxes of XAH and tokens on Xahau. No server, no keys kept.", "sfHook": "Boxes are held by a hook on your account, not by this site.", "sfLearn": "Learn", "sfHooks": "How hooks work", "sfNet": "Xahau network", "sfExp": "Hook account in explorer", "sfOther": "Other", "sfPriv": "Privacy", "sfPrivT": "We collect nothing. No server, analytics or counters. The page reads only the public ledger. Your browser keeps just settings (language, network), the connected address, your box records and the Xaman session — sign out or clear site data to remove them.", "sfTerms": "Terms", "sfTermsT": "Free, open-source page, no warranty. It only builds transactions — you sign them yourself in Xaman, and signed transactions cannot be undone. Check the address, amount and network. Whoever holds a link, key or password is responsible for it.", "sfCook": "Cookies", "sfCookT": "No cookies. Only the browser’s local storage is used, to make the page work.", "sfDis": "Xahau Box is not affiliated with or endorsed by XRPL Labs, Xaman, the Xahau Alliance, INFTF, XahauCards, Evergram or Xahau Vault.", "sfRisk": "Use at your own risk. Start on testnet."});
Object.assign(window.BOX_I18N.es, {"sfTag": "Cajas con XAH y tokens en Xahau. Sin servidor, sin guardar claves.", "sfHook": "Las cajas las guarda un hook en tu cuenta, no este sitio.", "sfLearn": "Aprender", "sfHooks": "Cómo funcionan los hooks", "sfNet": "Red Xahau", "sfExp": "Cuenta del hook en el explorador", "sfOther": "Otros", "sfPriv": "Privacidad", "sfPrivT": "No recopilamos nada. Sin servidor, analítica ni contadores. La página solo lee el ledger público. Tu navegador guarda solo los ajustes (idioma, red), la dirección conectada, tus registros de cajas y la sesión de Xaman: cierra sesión o borra los datos del sitio para eliminarlos.", "sfTerms": "Condiciones", "sfTermsT": "Página gratuita y de código abierto, sin garantía. Solo prepara transacciones: las firmas tú en Xaman, y una transacción firmada no se puede deshacer. Comprueba la dirección, el importe y la red. Quien guarda un enlace, una llave o una contraseña es responsable de ellos.", "sfCook": "Cookies", "sfCookT": "Sin cookies. Solo se usa el almacenamiento local del navegador para que la página funcione.", "sfDis": "Xahau Box no está afiliado ni respaldado por XRPL Labs, Xaman, la Xahau Alliance, INFTF, XahauCards, Evergram ni Xahau Vault.", "sfRisk": "Úsalo bajo tu propio riesgo. Empieza en testnet."});
Object.assign(window.BOX_I18N.fr, {"sfTag": "Des boîtes de XAH et de jetons sur Xahau. Sans serveur, sans conserver de clés.", "sfHook": "Les boîtes sont gardées par un hook sur votre compte, pas par ce site.", "sfLearn": "En savoir plus", "sfHooks": "Fonctionnement des hooks", "sfNet": "Réseau Xahau", "sfExp": "Compte du hook dans l’explorateur", "sfOther": "Autre", "sfPriv": "Confidentialité", "sfPrivT": "Nous ne collectons rien. Ni serveur, ni analytics, ni compteurs. La page lit seulement le ledger public. Votre navigateur garde uniquement les réglages (langue, réseau), l’adresse connectée, vos traces de boîtes et la session Xaman : déconnectez-vous ou effacez les données du site pour les supprimer.", "sfTerms": "Conditions", "sfTermsT": "Page gratuite et open source, sans garantie. Elle prépare seulement les transactions : vous les signez vous-même dans Xaman, et une transaction signée est irréversible. Vérifiez l’adresse, le montant et le réseau. Celui qui détient un lien, une clé ou un mot de passe en est responsable.", "sfCook": "Cookies", "sfCookT": "Aucun cookie. Seul le stockage local du navigateur est utilisé, pour faire fonctionner la page.", "sfDis": "Xahau Box n’est ni affilié ni approuvé par XRPL Labs, Xaman, la Xahau Alliance, INFTF, XahauCards, Evergram ou Xahau Vault.", "sfRisk": "Utilisation à vos risques. Commencez sur le testnet."});
Object.assign(window.BOX_I18N.de, {"sfTag": "Boxen mit XAH und Token auf Xahau. Kein Server, keine gespeicherten Schlüssel.", "sfHook": "Die Boxen hält ein Hook auf deinem Konto, nicht diese Seite.", "sfLearn": "Mehr erfahren", "sfHooks": "Wie Hooks funktionieren", "sfNet": "Xahau-Netzwerk", "sfExp": "Hook-Konto im Explorer", "sfOther": "Sonstiges", "sfPriv": "Datenschutz", "sfPrivT": "Wir sammeln nichts. Kein Server, keine Analyse, keine Zähler. Die Seite liest nur den öffentlichen Ledger. Dein Browser speichert nur Einstellungen (Sprache, Netzwerk), die verbundene Adresse, deine Box-Einträge und die Xaman-Sitzung – abmelden oder Website-Daten löschen, um sie zu entfernen.", "sfTerms": "Bedingungen", "sfTermsT": "Kostenlose Open-Source-Seite ohne Gewähr. Sie erstellt nur Transaktionen – du signierst sie selbst in Xaman, und signierte Transaktionen lassen sich nicht rückgängig machen. Prüfe Adresse, Betrag und Netzwerk. Wer einen Link, Schlüssel oder ein Passwort hat, ist dafür verantwortlich.", "sfCook": "Cookies", "sfCookT": "Keine Cookies. Nur der lokale Speicher des Browsers wird genutzt, damit die Seite funktioniert.", "sfDis": "Xahau Box ist nicht mit XRPL Labs, Xaman, der Xahau Alliance, INFTF, XahauCards, Evergram oder Xahau Vault verbunden oder von ihnen unterstützt.", "sfRisk": "Nutzung auf eigenes Risiko. Fang im Testnet an."});
Object.assign(window.BOX_I18N.zh, {"sfTag": "Xahau 上装有 XAH 和代币的盒子。无服务器，不保存密钥。", "sfHook": "盒子由你账户上的 hook 保管，而不是本网站。", "sfLearn": "了解", "sfHooks": "Hook 如何运作", "sfNet": "Xahau 网络", "sfExp": "浏览器中的 hook 账户", "sfOther": "其他", "sfPriv": "隐私", "sfPrivT": "我们不收集任何数据。没有服务器、统计或计数器。页面只读取公共账本。浏览器中仅保存设置（语言、网络）、已连接的地址、你的盒子记录和 Xaman 会话——退出账户或清除网站数据即可删除。", "sfTerms": "条款", "sfTermsT": "免费开源页面，不提供任何担保。它只生成交易——由你自己在 Xaman 中签名，已签名的交易无法撤销。请核对地址、金额和网络。链接、钥匙或密码由持有者自行负责。", "sfCook": "Cookie", "sfCookT": "不使用 Cookie。仅使用浏览器本地存储来让页面正常工作。", "sfDis": "Xahau Box 与 XRPL Labs、Xaman、Xahau Alliance、INFTF、XahauCards、Evergram 或 Xahau Vault 无关联，也未获其背书。", "sfRisk": "风险自负。请先在测试网上试用。"});
Object.assign(window.BOX_I18N.ja, {"sfTag": "Xahau 上の XAH とトークンのボックス。サーバーなし、鍵は保存しません。", "sfHook": "ボックスを保管するのはこのサイトではなく、あなたのアカウントのフックです。", "sfLearn": "学ぶ", "sfHooks": "フックの仕組み", "sfNet": "Xahau ネットワーク", "sfExp": "エクスプローラーでフックアカウント", "sfOther": "その他", "sfPriv": "プライバシー", "sfPrivT": "私たちは何も収集しません。サーバー、解析、カウンターはありません。ページは公開台帳を読むだけです。ブラウザーに残るのは設定（言語、ネットワーク）、接続中のアドレス、ボックスの記録、Xaman のセッションのみです。サインアウトするかサイトデータを消去すると削除できます。", "sfTerms": "利用規約", "sfTermsT": "無料のオープンソースのページで、保証はありません。トランザクションを作るだけで、署名は Xaman であなた自身が行い、署名したものは取り消せません。アドレス、金額、ネットワークを確認してください。リンク、鍵、パスワードの管理は保有者の責任です。", "sfCook": "Cookie", "sfCookT": "Cookie は使いません。ページの動作のためにブラウザーのローカルストレージのみを使います。", "sfDis": "Xahau Box は XRPL Labs、Xaman、Xahau Alliance、INFTF、XahauCards、Evergram、Xahau Vault とは提携しておらず、承認も受けていません。", "sfRisk": "自己責任でご利用ください。まずはテストネットで。"});

/* no-limit warning and take-back notes (v14: creator take-back only after the time limit, or after the key token is burned) */
Object.assign(window.BOX_I18N.en, { noLimitWarn: "No time limit: you can't take this box back. If the link or QR is lost, the box stays locked forever.", noLimitWarnKey: "No time limit: you can take this box back only if its key token is burned. While the key exists, nobody but its holder can open the box.", takeBackWait: "You can take the box back after its time limit passes.", takeBackNever: "This box has no time limit, so it can't be taken back. It waits until it is opened." });
Object.assign(window.BOX_I18N.es, { noLimitWarn: "Sin plazo: no podrás recuperar esta caja. Si se pierde el enlace o el QR, la caja quedará bloqueada para siempre.", noLimitWarnKey: "Sin plazo: solo podrás recuperar esta caja si su token llave se quema. Mientras exista la llave, solo quien la tenga puede abrir la caja.", takeBackWait: "Podrás recuperar la caja cuando pase su plazo.", takeBackNever: "Esta caja no tiene plazo, así que no se puede recuperar. Espera hasta que la abran." });
Object.assign(window.BOX_I18N.fr, { noLimitWarn: "Sans délai : vous ne pourrez pas reprendre cette boîte. Si le lien ou le QR est perdu, la boîte reste bloquée pour toujours.", noLimitWarnKey: "Sans délai : vous ne pourrez reprendre cette boîte que si son token clé est brûlé. Tant que la clé existe, seul son détenteur peut ouvrir la boîte.", takeBackWait: "Vous pourrez reprendre la boîte une fois son délai passé.", takeBackNever: "Cette boîte n'a pas de délai, elle ne peut donc pas être reprise. Elle attend d'être ouverte." });
Object.assign(window.BOX_I18N.ru, { noLimitWarn: "Без срока бокс нельзя забрать обратно. Если ссылка или QR потеряются, бокс останется закрытым навсегда.", noLimitWarnKey: "Без срока забрать бокс можно, только если его токен-ключ сожгут. Пока ключ существует, открыть бокс может только его держатель.", takeBackWait: "Забрать бокс можно после окончания срока.", takeBackNever: "У этого бокса нет срока, поэтому забрать его нельзя. Он ждёт, пока его откроют." });
Object.assign(window.BOX_I18N.de, { noLimitWarn: "Ohne Frist kannst du diese Box nicht zurückholen. Gehen Link oder QR verloren, bleibt die Box für immer verschlossen.", noLimitWarnKey: "Ohne Frist kannst du diese Box nur zurückholen, wenn ihr Schlüssel-Token verbrannt wird. Solange der Schlüssel existiert, kann nur sein Inhaber die Box öffnen.", takeBackWait: "Du kannst die Box zurückholen, wenn ihre Frist abgelaufen ist.", takeBackNever: "Diese Box hat keine Frist und kann daher nicht zurückgeholt werden. Sie wartet, bis sie geöffnet wird." });
Object.assign(window.BOX_I18N.zh, { noLimitWarn: "不设期限：你无法取回这个礼盒。如果链接或二维码丢失，礼盒将永远锁定。", noLimitWarnKey: "不设期限：只有当钥匙代币被销毁时，你才能取回这个礼盒。钥匙存在期间，只有持有者能打开礼盒。", takeBackWait: "期限过后你可以取回礼盒。", takeBackNever: "这个礼盒没有期限，因此无法取回。它会一直等到被打开。" });
Object.assign(window.BOX_I18N.ja, { noLimitWarn: "期限なしの場合、このボックスは取り戻せません。リンクやQRを失うと、ボックスは永久にロックされたままになります。", noLimitWarnKey: "期限なしの場合、キートークンがバーンされたときだけボックスを取り戻せます。キーがある間は、その保有者しか開けられません。", takeBackWait: "期限が過ぎたらボックスを取り戻せます。", takeBackNever: "このボックスには期限がないため、取り戻せません。開封されるまで待ちます。" });
Object.assign(window.BOX_I18N.ru, {"sfRoad": "Дорожная карта", "sfR1": "Приложение в Xaman", "sfR1T": "Xahau Box прямо внутри Xaman: создать, отправить и открыть бокс в пару нажатий.", "sfR2": "Кошелёк Xyra", "sfR2T": "Второй способ входа — для тех, у кого нет Xaman.", "sfR3": "Обновление хука", "sfR3T": "Новая версия хука: новые возможности и ещё больше защиты.", "sfR4": "Новые монеты", "sfR4T": "Боксы не только с XAH, но и с другими монетами сети Xahau."});
Object.assign(window.BOX_I18N.en, {"sfRoad": "Roadmap", "sfR1": "Xaman app", "sfR1T": "Xahau Box right inside Xaman: create, send and open a box in a couple of taps.", "sfR2": "Xyra wallet", "sfR2T": "A second way to sign in, for people without Xaman.", "sfR3": "Hook update", "sfR3T": "A new hook version: new features and even more protection.", "sfR4": "New coins", "sfR4T": "Boxes with other Xahau coins, not just XAH."});
Object.assign(window.BOX_I18N.es, {"sfRoad": "Hoja de ruta", "sfR1": "App en Xaman", "sfR1T": "Xahau Box dentro de Xaman: crea, envía y abre una caja en un par de toques.", "sfR2": "Monedero Xyra", "sfR2T": "Una segunda forma de entrar, para quien no tiene Xaman.", "sfR3": "Actualización del hook", "sfR3T": "Nueva versión del hook: más funciones y aún más protección.", "sfR4": "Nuevas monedas", "sfR4T": "Cajas con otras monedas de Xahau, no solo XAH."});
Object.assign(window.BOX_I18N.fr, {"sfRoad": "Feuille de route", "sfR1": "App dans Xaman", "sfR1T": "Xahau Box directement dans Xaman : créer, envoyer et ouvrir une boîte en quelques touches.", "sfR2": "Portefeuille Xyra", "sfR2T": "Un second moyen de connexion, pour ceux qui n’ont pas Xaman.", "sfR3": "Mise à jour du hook", "sfR3T": "Nouvelle version du hook : nouvelles fonctions et encore plus de protection.", "sfR4": "Nouvelles monnaies", "sfR4T": "Des boîtes avec d’autres monnaies Xahau, pas seulement XAH."});
Object.assign(window.BOX_I18N.de, {"sfRoad": "Roadmap", "sfR1": "App in Xaman", "sfR1T": "Xahau Box direkt in Xaman: eine Box mit wenigen Taps erstellen, senden und öffnen.", "sfR2": "Xyra-Wallet", "sfR2T": "Ein zweiter Anmeldeweg für alle ohne Xaman.", "sfR3": "Hook-Update", "sfR3T": "Neue Hook-Version: neue Funktionen und noch mehr Schutz.", "sfR4": "Neue Coins", "sfR4T": "Boxen mit weiteren Xahau-Coins, nicht nur XAH."});
Object.assign(window.BOX_I18N.zh, {"sfRoad": "路线图", "sfR1": "Xaman 应用", "sfR1T": "在 Xaman 内直接使用 Xahau Box：轻点几下即可创建、发送和打开盒子。", "sfR2": "Xyra 钱包", "sfR2T": "第二种登录方式，适合没有 Xaman 的用户。", "sfR3": "Hook 更新", "sfR3T": "新版 hook：更多功能，更强保护。", "sfR4": "新币种", "sfR4T": "盒子不仅支持 XAH，也支持 Xahau 上的其他币种。"});
Object.assign(window.BOX_I18N.ja, {"sfRoad": "ロードマップ", "sfR1": "Xaman アプリ", "sfR1T": "Xaman の中で Xahau Box：数タップでボックスを作成・送信・開封。", "sfR2": "Xyra ウォレット", "sfR2T": "Xaman を持っていない人のための2つ目のログイン方法。", "sfR3": "フックの更新", "sfR3T": "新しいフック：新機能とさらに強い保護。", "sfR4": "新しいコイン", "sfR4T": "XAH だけでなく、Xahau の他のコインも入れられるボックス。"});
Object.assign(window.BOX_I18N.ru, {"sfR5": "Свой сервер", "sfR5T": "Собственный сервер для проекта, возможно на Evernode."});
Object.assign(window.BOX_I18N.en, {"sfR5": "Own server", "sfR5T": "A dedicated server for the project, possibly on Evernode."});
Object.assign(window.BOX_I18N.es, {"sfR5": "Servidor propio", "sfR5T": "Un servidor propio para el proyecto, posiblemente en Evernode."});
Object.assign(window.BOX_I18N.fr, {"sfR5": "Serveur dédié", "sfR5T": "Un serveur dédié au projet, peut-être sur Evernode."});
Object.assign(window.BOX_I18N.de, {"sfR5": "Eigener Server", "sfR5T": "Ein eigener Server für das Projekt, möglicherweise auf Evernode."});
Object.assign(window.BOX_I18N.zh, {"sfR5": "自有服务器", "sfR5T": "为项目搭建专属服务器，可能部署在 Evernode 上。"});
Object.assign(window.BOX_I18N.ja, {"sfR5": "専用サーバー", "sfR5T": "プロジェクト専用のサーバー。Evernode 上になる可能性があります。"});
Object.assign(window.BOX_I18N.ru, {"sfR5N": "(Свой сервер, возможно на Evernode)"});
Object.assign(window.BOX_I18N.en, {"sfR5N": "(Own server, possibly on Evernode)"});
Object.assign(window.BOX_I18N.es, {"sfR5N": "(Servidor propio, posiblemente en Evernode)"});
Object.assign(window.BOX_I18N.fr, {"sfR5N": "(Serveur dédié, peut-être sur Evernode)"});
Object.assign(window.BOX_I18N.de, {"sfR5N": "(Eigener Server, möglicherweise auf Evernode)"});
Object.assign(window.BOX_I18N.zh, {"sfR5N": "（自有服务器，可能部署在 Evernode 上）"});
Object.assign(window.BOX_I18N.ja, {"sfR5N": "（専用サーバー、Evernode 上の可能性あり）"});
Object.assign(window.BOX_I18N.ru, {"sfR0": "Поддержка", "sfR0T": "Служба поддержки: поможем, если что-то не получается с боксом."});
Object.assign(window.BOX_I18N.en, {"sfR0": "Support", "sfR0T": "A support service to help if something goes wrong with a box."});
Object.assign(window.BOX_I18N.es, {"sfR0": "Soporte", "sfR0T": "Un servicio de soporte para ayudar si algo falla con una caja."});
Object.assign(window.BOX_I18N.fr, {"sfR0": "Support", "sfR0T": "Un service d’assistance pour aider si quelque chose ne va pas avec une boîte."});
Object.assign(window.BOX_I18N.de, {"sfR0": "Support", "sfR0T": "Ein Support-Service, der hilft, wenn mit einer Box etwas nicht klappt."});
Object.assign(window.BOX_I18N.zh, {"sfR0": "支持服务", "sfR0T": "支持服务：盒子遇到问题时为你提供帮助。"});
Object.assign(window.BOX_I18N.ja, {"sfR0": "サポート", "sfR0T": "ボックスで困ったときに助けるサポート窓口。"});
Object.assign(window.BOX_I18N.ru, {"finish": "На главную"}); Object.assign(window.BOX_I18N.en, {"finish": "Back to home"});
Object.assign(window.BOX_I18N.ru, {"kFromWho": "Получил от", "kToWho": "Отправил кому"});
Object.assign(window.BOX_I18N.en, {"kFromWho": "Received from", "kToWho": "Sent to"});
Object.assign(window.BOX_I18N.es, {"kFromWho": "Recibido de", "kToWho": "Enviado a"});
Object.assign(window.BOX_I18N.fr, {"kFromWho": "Reçu de", "kToWho": "Envoyé à"});
Object.assign(window.BOX_I18N.de, {"kFromWho": "Erhalten von", "kToWho": "Gesendet an"});
Object.assign(window.BOX_I18N.zh, {"kFromWho": "收到自", "kToWho": "发送给"});
Object.assign(window.BOX_I18N.ja, {"kFromWho": "受け取り元", "kToWho": "送り先"});

Object.assign(window.BOX_I18N.ru,{mbCardT:'Мои боксы',mbCardSub:'Собранные, полученные и отправленные'});
Object.assign(window.BOX_I18N.en,{mbCardT:'My boxes',mbCardSub:'Built, received and sent'});
Object.assign(window.BOX_I18N.es,{mbCardT:'Mis cajas',mbCardSub:'Creadas, recibidas y enviadas'});
Object.assign(window.BOX_I18N.fr,{mbCardT:'Mes boîtes',mbCardSub:'Créées, reçues et envoyées'});
Object.assign(window.BOX_I18N.de,{mbCardT:'Meine Boxen',mbCardSub:'Erstellt, erhalten und gesendet'});
Object.assign(window.BOX_I18N.zh,{mbCardT:'我的盒子',mbCardSub:'已创建、已收到和已发送'});
Object.assign(window.BOX_I18N.ja,{mbCardT:'マイボックス',mbCardSub:'作成・受取・送信したボックス'});
Object.assign(window.BOX_I18N.ru,{setSub:"Подарочные коды, язык, безопасность, о проекте, как всё работает и правила. Нажми на раздел, чтобы открыть его."});
Object.assign(window.BOX_I18N.en,{setSub:"Gift codes, language, security, about the project, how it works and the rules. Tap a section to open it."});
Object.assign(window.BOX_I18N.es,{setSub:"Códigos regalo, idioma, seguridad, sobre el proyecto, cómo funciona y las reglas. Toca una sección para abrirla."});
Object.assign(window.BOX_I18N.fr,{setSub:"Codes cadeaux, langue, sécurité, à propos du projet, fonctionnement et règles. Touchez une section pour l’ouvrir."});
Object.assign(window.BOX_I18N.de,{setSub:"Geschenkcodes, Sprache, Sicherheit, über das Projekt, so funktioniert’s und Nutzungsregeln. Tipp auf einen Bereich, um ihn zu öffnen."});
Object.assign(window.BOX_I18N.zh,{setSub:"礼品码、语言、安全、关于项目、使用说明和使用规则。点击某一项即可展开。"});
Object.assign(window.BOX_I18N.ja,{setSub:"ギフトコード、言語、セキュリティ、プロジェクトについて、使い方、利用規約。項目をタップすると開きます。"});

Object.assign(window.BOX_I18N.ru,{inboxOnlySub:'Боксы, которые пришли тебе и ещё не открыты.'});
Object.assign(window.BOX_I18N.en,{inboxOnlySub:'Boxes sent to you that are not opened yet.'});
Object.assign(window.BOX_I18N.es,{inboxOnlySub:'Cajas que te enviaron y aún no se han abierto.'});
Object.assign(window.BOX_I18N.fr,{inboxOnlySub:'Boîtes reçues qui ne sont pas encore ouvertes.'});
Object.assign(window.BOX_I18N.de,{inboxOnlySub:'Boxen, die du bekommen hast und die noch nicht geöffnet sind.'});
Object.assign(window.BOX_I18N.zh,{inboxOnlySub:'发给你但尚未打开的盒子。'});
Object.assign(window.BOX_I18N.ja,{inboxOnlySub:'あなたに届いた、まだ開けていないボックス。'});
Object.assign(window.BOX_I18N.ru,{homeSub:"Положи внутрь XAH и/или URIToken, закрой и отдай по ссылке, по QR-коду или токеном-ключом."});
Object.assign(window.BOX_I18N.en,{homeSub:"Put XAH and/or a URIToken inside, lock it, and hand it over by link, QR code or key token."});
Object.assign(window.BOX_I18N.es,{homeSub:"Mete XAH y/o un URIToken, ciérrala y entrégala con un enlace, un código QR o un token llave."});
Object.assign(window.BOX_I18N.fr,{homeSub:"Mettez des XAH et/ou un URIToken dedans, verrouillez-la et remettez-la par lien, QR code ou jeton clé."});
Object.assign(window.BOX_I18N.de,{homeSub:"Leg XAH und/oder ein URIToken hinein, verschließ die Box und gib sie per Link, QR-Code oder Schlüssel-Token weiter."});
Object.assign(window.BOX_I18N.zh,{homeSub:"放入 XAH 和/或 URIToken，锁好后通过链接、二维码或钥匙代币送出。"});
Object.assign(window.BOX_I18N.ja,{homeSub:"XAH や URIToken を入れてボックスを閉じ、リンク・QR コード・キートークンで渡せます。"});

Object.assign(window.BOX_I18N.ru,{opened:"Открыто!"});
Object.assign(window.BOX_I18N.en,{opened:"Opened!"});
Object.assign(window.BOX_I18N.es,{opened:"¡Abierta!"});
Object.assign(window.BOX_I18N.fr,{opened:"Ouverte !"});
Object.assign(window.BOX_I18N.de,{opened:"Geöffnet!"});
Object.assign(window.BOX_I18N.zh,{opened:"已打开！"});
Object.assign(window.BOX_I18N.ja,{opened:"開けました！"});

Object.assign(window.BOX_I18N.ru,{sfRisk:"Перед использованием прочитай правила и безопасность. Начни с тестнета."});
Object.assign(window.BOX_I18N.en,{sfRisk:"Before using, read the rules and the security section. Start on testnet."});
Object.assign(window.BOX_I18N.es,{sfRisk:"Antes de usarla, lee las reglas y la seguridad. Empieza en testnet."});
Object.assign(window.BOX_I18N.fr,{sfRisk:"Avant d’utiliser, lisez les règles et la sécurité. Commencez sur le testnet."});
Object.assign(window.BOX_I18N.de,{sfRisk:"Lies vor der Nutzung die Regeln und die Sicherheitshinweise. Starte im Testnet."});
Object.assign(window.BOX_I18N.zh,{sfRisk:"使用前请阅读规则和安全说明。先从测试网开始。"});
Object.assign(window.BOX_I18N.ja,{sfRisk:"使う前にルールとセキュリティを読んでください。まずはテストネットから。"});

Object.assign(window.BOX_I18N.ru, {"pjXhw": "Обозреватель сети Xahau"});
Object.assign(window.BOX_I18N.en, {"pjXhw": "Xahau Network explorer"});
Object.assign(window.BOX_I18N.es, {"pjXhw": "Explorador de la red Xahau"});
Object.assign(window.BOX_I18N.fr, {"pjXhw": "Explorateur du réseau Xahau"});
Object.assign(window.BOX_I18N.de, {"pjXhw": "Xahau-Netzwerk-Explorer"});
Object.assign(window.BOX_I18N.zh, {"pjXhw": "Xahau 网络浏览器"});
Object.assign(window.BOX_I18N.ja, {"pjXhw": "Xahau ネットワーク エクスプローラー"});
Object.assign(window.BOX_I18N.ru,{keyWait:"У тебя есть созданный токен-ключ {id}, он ждёт бокса. Он пойдёт в этот бокс.",keyWaitSum:"готовый",keyNewSum:"новый, создастся при сборке",keyNewHint:"Ключ создаётся только вместе с боксом: сначала подпишешь создание ключа, потом сразу сам бокс.",keyWaitHint:"Этот ключ уже создан и ждёт бокса. Подпись будет одна — сам бокс.",stepMintKey:"Шаг 1 из 2 · ключ для бокса (потом сразу бокс)"});
Object.assign(window.BOX_I18N.en,{keyWait:"You have a key token {id} that is waiting for a box. It goes into this box.",keyWaitSum:"ready",keyNewSum:"new, made when you build",keyNewHint:"A key is made only together with its box: first you sign the key, then right away the box.",keyWaitHint:"This key is already made and waiting for a box. One signature: the box itself.",stepMintKey:"Step 1 of 2 · key for the box (then the box)"});
Object.assign(window.BOX_I18N.es,{keyWait:"Tienes un token llave {id} esperando una caja. Irá en esta caja.",keyWaitSum:"lista",keyNewSum:"nueva, se crea al armar",keyNewHint:"La llave se crea solo junto con su caja: primero firmas la llave y enseguida la caja.",keyWaitHint:"Esta llave ya existe y espera una caja. Una sola firma: la caja.",stepMintKey:"Paso 1 de 2 · llave para la caja (luego la caja)"});
Object.assign(window.BOX_I18N.fr,{keyWait:"Vous avez un jeton clé {id} qui attend une boîte. Il ira dans cette boîte.",keyWaitSum:"prête",keyNewSum:"nouvelle, créée à l’assemblage",keyNewHint:"Une clé n’est créée qu’avec sa boîte : vous signez d’abord la clé, puis tout de suite la boîte.",keyWaitHint:"Cette clé existe déjà et attend une boîte. Une seule signature : la boîte.",stepMintKey:"Étape 1 sur 2 · clé de la boîte (puis la boîte)"});
Object.assign(window.BOX_I18N.de,{keyWait:"Du hast einen Schlüssel-Token {id}, der auf eine Box wartet. Er kommt in diese Box.",keyWaitSum:"bereit",keyNewSum:"neu, wird beim Packen erstellt",keyNewHint:"Ein Schlüssel wird nur zusammen mit seiner Box erstellt: erst signierst du den Schlüssel, dann gleich die Box.",keyWaitHint:"Dieser Schlüssel ist schon erstellt und wartet auf eine Box. Eine Signatur: die Box.",stepMintKey:"Schritt 1 von 2 · Schlüssel für die Box (dann die Box)"});
Object.assign(window.BOX_I18N.zh,{keyWait:"你有一个已创建的钥匙代币 {id}，正在等待盒子。它将用于这个盒子。",keyWaitSum:"已就绪",keyNewSum:"新的，打包时创建",keyNewHint:"钥匙只会和盒子一起创建：先签名创建钥匙，然后立即签名盒子。",keyWaitHint:"这把钥匙已创建，正在等待盒子。只需一次签名：盒子本身。",stepMintKey:"第 1 步（共 2 步）· 盒子的钥匙（然后是盒子）"});
Object.assign(window.BOX_I18N.ja,{keyWait:"作成済みのキートークン {id} がボックスを待っています。このボックスに使われます。",keyWaitSum:"作成済み",keyNewSum:"新規・作成時に発行",keyNewHint:"キーはボックスと一緒にだけ作られます。まずキーに署名し、続けてボックスに署名します。",keyWaitHint:"このキーは作成済みでボックスを待っています。署名は1回、ボックスだけです。",stepMintKey:"ステップ 1/2 · ボックスのキー（続けてボックス）"});

Object.assign(window.BOX_I18N.ru,{keySentTo:"Ключ передан:"});
Object.assign(window.BOX_I18N.en,{keySentTo:"Key sent to"});
Object.assign(window.BOX_I18N.es,{keySentTo:"Llave enviada a"});
Object.assign(window.BOX_I18N.fr,{keySentTo:"Clé envoyée à"});
Object.assign(window.BOX_I18N.de,{keySentTo:"Schlüssel gesendet an"});
Object.assign(window.BOX_I18N.zh,{keySentTo:"钥匙已发送给"});
Object.assign(window.BOX_I18N.ja,{keySentTo:"キーの送付先:"});

Object.assign(window.BOX_I18N.ru,{donH:"Поддержать проект",donT:"Можешь отправить любую сумму XAH или XRP на развитие проекта. Это добровольно.",donLblXah:"Адрес для донатов (Xahau, XAH)",donLblXrp:"Адрес для донатов (XRP Ledger, XRP)",donCopy:"Копировать",donXaman:"Открыть в Xaman",feeH:"Без комиссии",feeT:"Страница и хук не берут никакой комиссии. Платишь только обычную сетевую комиссию Xahau."});
Object.assign(window.BOX_I18N.en,{donH:"Support the project",donT:"You can send any amount of XAH or XRP to support the project. It is voluntary.",donLblXah:"Donation address (Xahau, XAH)",donLblXrp:"Donation address (XRP Ledger, XRP)",donCopy:"Copy",donXaman:"Open in Xaman",feeH:"No fees",feeT:"The page and the hook take no fee at all. You pay only the normal Xahau network fee."});
Object.assign(window.BOX_I18N.es,{donH:"Apoyar el proyecto",donT:"Puedes enviar cualquier cantidad de XAH o XRP para apoyar el proyecto. Es voluntario.",donLblXah:"Dirección para donaciones (Xahau, XAH)",donLblXrp:"Dirección para donaciones (XRP Ledger, XRP)",donCopy:"Copiar",donXaman:"Abrir en Xaman",feeH:"Sin comisiones",feeT:"La página y el hook no cobran ninguna comisión. Solo pagas la tarifa normal de la red Xahau."});
Object.assign(window.BOX_I18N.fr,{donH:"Soutenir le projet",donT:"Vous pouvez envoyer n’importe quel montant en XAH ou XRP pour soutenir le projet. C’est volontaire.",donLblXah:"Adresse de dons (Xahau, XAH)",donLblXrp:"Adresse de dons (XRP Ledger, XRP)",donCopy:"Copier",donXaman:"Ouvrir dans Xaman",feeH:"Sans commission",feeT:"La page et le hook ne prennent aucune commission. Vous payez seulement les frais normaux du réseau Xahau."});
Object.assign(window.BOX_I18N.de,{donH:"Projekt unterstützen",donT:"Du kannst einen beliebigen Betrag in XAH oder XRP senden, um das Projekt zu unterstützen. Das ist freiwillig.",donLblXah:"Spendenadresse (Xahau, XAH)",donLblXrp:"Spendenadresse (XRP Ledger, XRP)",donCopy:"Kopieren",donXaman:"In Xaman öffnen",feeH:"Keine Gebühren",feeT:"Seite und Hook nehmen keinerlei Gebühr. Du zahlst nur die normale Xahau-Netzwerkgebühr."});
Object.assign(window.BOX_I18N.zh,{donH:"支持项目",donT:"你可以发送任意数量的 XAH 或 XRP 来支持项目。完全自愿。",donLblXah:"捐赠地址（Xahau，XAH）",donLblXrp:"捐赠地址（XRP Ledger，XRP）",donCopy:"复制",donXaman:"在 Xaman 中打开",feeH:"无手续费",feeT:"页面和钩子不收取任何费用。你只需支付 Xahau 网络的正常手续费。"});
Object.assign(window.BOX_I18N.ja,{donH:"プロジェクトを支援",donT:"XAH または XRP を任意の額で送ってプロジェクトを支援できます。任意です。",donLblXah:"寄付アドレス（Xahau・XAH）",donLblXrp:"寄付アドレス（XRP Ledger・XRP）",donCopy:"コピー",donXaman:"Xaman で開く",feeH:"手数料なし",feeT:"ページとフックは手数料を一切取りません。支払うのは通常の Xahau ネットワーク手数料だけです。"});
Object.assign(window.BOX_I18N.ru,{feeH:"Без комиссии",feeT:"Страница и хук не берут комиссию в нашу пользу. Платишь только сетевую комиссию Xahau. Она чуть выше обычной, потому что сеть берёт плату за запуск хука. Так работают все хуки на Xahau."});
Object.assign(window.BOX_I18N.en,{feeH:"No fees for us",feeT:"The page and the hook take no fee for us. You pay only the Xahau network fee. It is a bit higher than usual because the network charges for running the hook. All hooks on Xahau work this way."});
Object.assign(window.BOX_I18N.es,{feeH:"Sin comisiones para nosotros",feeT:"La página y el hook no cobran comisión para nosotros. Solo pagas la tarifa de la red Xahau. Es un poco más alta de lo normal porque la red cobra por ejecutar el hook. Así funcionan todos los hooks en Xahau."});
Object.assign(window.BOX_I18N.fr,{feeH:"Aucune commission pour nous",feeT:"La page et le hook ne prennent aucune commission pour nous. Vous payez seulement les frais du réseau Xahau. Ils sont un peu plus élevés que d’habitude, car le réseau facture l’exécution du hook. Tous les hooks sur Xahau fonctionnent ainsi."});
Object.assign(window.BOX_I18N.de,{feeH:"Keine Gebühren für uns",feeT:"Seite und Hook nehmen keine Gebühr für uns. Du zahlst nur die Xahau-Netzwerkgebühr. Sie ist etwas höher als sonst, weil das Netzwerk für das Ausführen des Hooks berechnet. So funktionieren alle Hooks auf Xahau."});
Object.assign(window.BOX_I18N.zh,{feeH:"我们不收手续费",feeT:"页面和钩子不为我们收取任何费用。你只需支付 Xahau 网络手续费。它比平常略高，因为网络会对运行钩子收费。Xahau 上的所有钩子都是这样。"});
Object.assign(window.BOX_I18N.ja,{feeH:"私たちへの手数料なし",feeT:"ページとフックは私たちへの手数料を取りません。支払うのは Xahau ネットワーク手数料だけです。ネットワークがフックの実行に料金をかけるため、通常より少し高くなります。Xahau のすべてのフックがこの仕組みです。"});

Object.assign(window.BOX_I18N.ru,{mintStep1:"Шаг 1 из 2: создаём токен-ключ для бокса. Сразу после этого попросим вторую подпись, сборку самого бокса.",mintDone2:"Токен-ключ создан. Шаг 2 из 2: подпиши сборку бокса. В него положатся твои XAH или токен, а открыть его можно будет этим ключом.",mintDoneAudit:"Хук сначала попросит AUDIT: подпиши его, потом сборку бокса."});
Object.assign(window.BOX_I18N.en,{mintStep1:"Step 1 of 2: we create the key token for the box. Right after that you will be asked for a second signature, building the box itself.",mintDone2:"Key token created. Step 2 of 2: sign building the box. Your XAH or token go inside, and it can be opened with this key.",mintDoneAudit:"The hook asks for AUDIT first: sign it, then building the box."});
Object.assign(window.BOX_I18N.es,{mintStep1:"Paso 1 de 2: creamos el token llave para la caja. Justo después te pediremos una segunda firma, armar la caja.",mintDone2:"Token llave creado. Paso 2 de 2: firma el armado de la caja. Dentro van tus XAH o tu token, y se podrá abrir con esta llave.",mintDoneAudit:"El hook pide primero AUDIT: fírmalo y luego el armado de la caja."});
Object.assign(window.BOX_I18N.fr,{mintStep1:"Étape 1 sur 2 : nous créons le jeton clé de la boîte. Juste après, une seconde signature vous sera demandée pour assembler la boîte.",mintDone2:"Jeton clé créé. Étape 2 sur 2 : signez l’assemblage de la boîte. Vos XAH ou votre jeton y sont placés, et elle pourra être ouverte avec cette clé.",mintDoneAudit:"Le hook demande d’abord AUDIT : signez-le, puis l’assemblage de la boîte."});
Object.assign(window.BOX_I18N.de,{mintStep1:"Schritt 1 von 2: Wir erstellen den Schlüssel-Token für die Box. Gleich danach wirst du um eine zweite Signatur gebeten, das Packen der Box.",mintDone2:"Schlüssel-Token erstellt. Schritt 2 von 2: Signiere das Packen der Box. Deine XAH oder dein Token kommen hinein, und sie lässt sich mit diesem Schlüssel öffnen.",mintDoneAudit:"Der Hook verlangt zuerst AUDIT: Signiere es, dann das Packen der Box."});
Object.assign(window.BOX_I18N.zh,{mintStep1:"第 1 步（共 2 步）：为盒子创建钥匙代币。之后会立即请你进行第二次签名，打包盒子。",mintDone2:"钥匙代币已创建。第 2 步（共 2 步）：签名打包盒子。你的 XAH 或代币会放进去，之后可用这把钥匙打开。",mintDoneAudit:"钩子会先要求 AUDIT：先签它，再签打包盒子。"});
Object.assign(window.BOX_I18N.ja,{mintStep1:"ステップ 1/2：ボックス用のキートークンを作成します。その直後に 2 回目の署名（ボックスの作成）をお願いします。",mintDone2:"キートークンを作成しました。ステップ 2/2：ボックスの作成に署名してください。XAH またはトークンが入り、このキーで開けられます。",mintDoneAudit:"フックはまず AUDIT を求めます。先にそれに署名し、次にボックスの作成に署名してください。"});
Object.assign(window.BOX_I18N.ru,{"sigOf": "Подпись {n} из {m}", "sigOne": "Подпись", "sigMint": "создать токен-ключ для этого бокса", "sigGmint": "создать токен с подарочным кодом", "sigAudit": "AUDIT, служебная проверка хука, нужна перед сборкой", "sigPackKey": "собрать бокс ({what}), открыть можно этим ключом", "sigPackLink": "собрать бокс ({what}), открыть по ссылке/QR", "sigPackNamed": "собрать бокс ({what}), открыть по ссылке/QR сможет только {a}", "sigClaim": "открыть бокс и забрать {what}", "sigOpen": "забрать свой бокс обратно", "sigRemit": "передать токен-ключ на {a}, после этого ключ уже не твой", "sigTok": "токен", "keyMadeSum": "создан для этого бокса", "keyMadeOk": "Токен-ключ создан. Осталась сборка бокса.", "keyNotFree": "Этот токен-ключ уже нельзя использовать: он передан или уже стоит в боксе. Нажми «Собрать бокс» ещё раз, создастся новый ключ.", "keyNewHint": "Для бокса с ключом всегда создаётся новый токен-ключ: сначала подпишешь ключ, потом сразу сам бокс."});
Object.assign(window.BOX_I18N.en,{"sigOf": "Signature {n} of {m}", "sigOne": "Signature", "sigMint": "create the key token for this box", "sigGmint": "create the gift code token", "sigAudit": "AUDIT, a hook service check needed before building", "sigPackKey": "build the box ({what}), it opens with this key", "sigPackLink": "build the box ({what}), it opens by link/QR", "sigPackNamed": "build the box ({what}), only {a} can open it by link/QR", "sigClaim": "open the box and take {what}", "sigOpen": "take your box back", "sigRemit": "send the key token to {a}, after this the key is no longer yours", "sigTok": "token", "keyMadeSum": "made for this box", "keyMadeOk": "Key token created. Now build the box.", "keyNotFree": "This key token can no longer be used: it was sent away or is already in a box. Press «Build the box» again and a new key will be made.", "keyNewHint": "A key box always gets a new key token: first you sign the key, then right away the box."});
Object.assign(window.BOX_I18N.es,{"sigOf": "Firma {n} de {m}", "sigOne": "Firma", "sigMint": "crear el token llave de esta caja", "sigGmint": "crear el token con código regalo", "sigAudit": "AUDIT, revisión de servicio del hook, necesaria antes de armar", "sigPackKey": "armar la caja ({what}), se abre con esta llave", "sigPackLink": "armar la caja ({what}), se abre con enlace/QR", "sigPackNamed": "armar la caja ({what}), solo {a} puede abrirla con enlace/QR", "sigClaim": "abrir la caja y llevarte {what}", "sigOpen": "recuperar tu caja", "sigRemit": "enviar el token llave a {a}, después la llave ya no es tuya", "sigTok": "token", "keyMadeSum": "creada para esta caja", "keyMadeOk": "Token llave creado. Ahora arma la caja.", "keyNotFree": "Este token llave ya no se puede usar: fue enviado o ya está en una caja. Pulsa «Preparar la caja» otra vez y se creará una llave nueva.", "keyNewHint": "Una caja con llave siempre recibe un token llave nuevo: primero firmas la llave y enseguida la caja."});
Object.assign(window.BOX_I18N.fr,{"sigOf": "Signature {n} sur {m}", "sigOne": "Signature", "sigMint": "créer le jeton clé de cette boîte", "sigGmint": "créer le jeton code cadeau", "sigAudit": "AUDIT, vérification technique du hook, nécessaire avant l’assemblage", "sigPackKey": "assembler la boîte ({what}), elle s’ouvre avec cette clé", "sigPackLink": "assembler la boîte ({what}), elle s’ouvre par lien/QR", "sigPackNamed": "assembler la boîte ({what}), seul {a} peut l’ouvrir par lien/QR", "sigClaim": "ouvrir la boîte et prendre {what}", "sigOpen": "reprendre votre boîte", "sigRemit": "envoyer le jeton clé à {a}, ensuite la clé n’est plus à vous", "sigTok": "jeton", "keyMadeSum": "créée pour cette boîte", "keyMadeOk": "Jeton clé créé. Assemblez maintenant la boîte.", "keyNotFree": "Ce jeton clé ne peut plus servir : il a été envoyé ou est déjà dans une boîte. Appuyez de nouveau sur « Préparer la boîte », une nouvelle clé sera créée.", "keyNewHint": "Une boîte à clé reçoit toujours un nouveau jeton clé : vous signez d’abord la clé, puis tout de suite la boîte."});
Object.assign(window.BOX_I18N.de,{"sigOf": "Signatur {n} von {m}", "sigOne": "Signatur", "sigMint": "Schlüssel-Token für diese Box erstellen", "sigGmint": "Geschenkcode-Token erstellen", "sigAudit": "AUDIT, interne Prüfung des Hooks, vor dem Packen nötig", "sigPackKey": "Box packen ({what}), öffnet sich mit diesem Schlüssel", "sigPackLink": "Box packen ({what}), öffnet sich per Link/QR", "sigPackNamed": "Box packen ({what}), nur {a} kann sie per Link/QR öffnen", "sigClaim": "Box öffnen und {what} nehmen", "sigOpen": "deine Box zurückholen", "sigRemit": "Schlüssel-Token an {a} senden, danach gehört dir der Schlüssel nicht mehr", "sigTok": "Token", "keyMadeSum": "für diese Box erstellt", "keyMadeOk": "Schlüssel-Token erstellt. Jetzt die Box packen.", "keyNotFree": "Dieser Schlüssel-Token ist nicht mehr nutzbar: er wurde verschickt oder steckt schon in einer Box. Tippe nochmal auf «Box zusammenstellen», dann wird ein neuer Schlüssel erstellt.", "keyNewHint": "Eine Schlüssel-Box bekommt immer einen neuen Schlüssel-Token: erst signierst du den Schlüssel, dann gleich die Box."});
Object.assign(window.BOX_I18N.zh,{"sigOf": "签名 {n}/{m}", "sigOne": "签名", "sigMint": "为这个盒子创建钥匙代币", "sigGmint": "创建礼品码代币", "sigAudit": "AUDIT，钩子的内部检查，打包前需要", "sigPackKey": "打包盒子（{what}），用这把钥匙打开", "sigPackLink": "打包盒子（{what}），通过链接/二维码打开", "sigPackNamed": "打包盒子（{what}），只有 {a} 能通过链接/二维码打开", "sigClaim": "打开盒子并取走 {what}", "sigOpen": "取回你的盒子", "sigRemit": "把钥匙代币发送给 {a}，之后钥匙就不再属于你", "sigTok": "代币", "keyMadeSum": "为此盒子创建", "keyMadeOk": "钥匙代币已创建。现在打包盒子。", "keyNotFree": "这个钥匙代币已不能使用：已被发送或已在盒子里。再点一次“生成礼盒”，会创建新钥匙。", "keyNewHint": "带钥匙的盒子总会使用新的钥匙代币：先签名钥匙，然后立即签名盒子。"});
Object.assign(window.BOX_I18N.ja,{"sigOf": "署名 {n}/{m}", "sigOne": "署名", "sigMint": "このボックス用のキートークンを作成", "sigGmint": "ギフトコードのトークンを作成", "sigAudit": "AUDIT、フックの内部チェック、作成前に必要", "sigPackKey": "ボックスを作成（{what}）、このキーで開けます", "sigPackLink": "ボックスを作成（{what}）、リンク/QRで開けます", "sigPackNamed": "ボックスを作成（{what}）、{a} だけがリンク/QRで開けます", "sigClaim": "ボックスを開けて {what} を受け取る", "sigOpen": "自分のボックスを取り戻す", "sigRemit": "キートークンを {a} に送る、送った後キーはあなたのものではありません", "sigTok": "トークン", "keyMadeSum": "このボックス用に作成", "keyMadeOk": "キートークンを作成しました。次にボックスを作成します。", "keyNotFree": "このキートークンはもう使えません。送信済みか、すでにボックスに入っています。もう一度「作成」を押すと新しいキーが作られます。", "keyNewHint": "キー付きボックスには必ず新しいキートークンが作られます。まずキーに署名し、続けてボックスに署名します。"});
Object.assign(window.BOX_I18N.ru,{"signsAcct": "Подписывает аккаунт", "kdBoxT": "Бокс собран", "kdStays": "Бокс остаётся на твоём аккаунте {a}, в хуке. Он никуда не переходит.", "kdKeyT": "Токен-ключ от этого бокса", "kdKeyNo": "Номер ключа", "kdKeyNote": "Кто держит этот ключ, тот и откроет бокс. Бокс остаётся у тебя, передаёшь только ключ."});
Object.assign(window.BOX_I18N.en,{"signsAcct": "Signing account", "kdBoxT": "Box built", "kdStays": "The box stays on your account {a}, in the hook. It never moves.", "kdKeyT": "Key token for this box", "kdKeyNo": "Key number", "kdKeyNote": "Whoever holds this key can open the box. The box stays with you, you hand over only the key."});
Object.assign(window.BOX_I18N.es,{"signsAcct": "Firma la cuenta", "kdBoxT": "Caja lista", "kdStays": "La caja se queda en tu cuenta {a}, en el hook. No se mueve.", "kdKeyT": "Token llave de esta caja", "kdKeyNo": "Número de llave", "kdKeyNote": "Quien tenga esta llave puede abrir la caja. La caja se queda contigo, solo entregas la llave."});
Object.assign(window.BOX_I18N.fr,{"signsAcct": "Compte signataire", "kdBoxT": "Boîte prête", "kdStays": "La boîte reste sur votre compte {a}, dans le hook. Elle ne bouge pas.", "kdKeyT": "Jeton clé de cette boîte", "kdKeyNo": "Numéro de clé", "kdKeyNote": "Celui qui détient cette clé peut ouvrir la boîte. La boîte reste chez vous, vous ne remettez que la clé."});
Object.assign(window.BOX_I18N.de,{"signsAcct": "Es signiert das Konto", "kdBoxT": "Box gepackt", "kdStays": "Die Box bleibt auf deinem Konto {a}, im Hook. Sie wandert nicht.", "kdKeyT": "Schlüssel-Token dieser Box", "kdKeyNo": "Schlüsselnummer", "kdKeyNote": "Wer diesen Schlüssel hat, kann die Box öffnen. Die Box bleibt bei dir, du gibst nur den Schlüssel weiter."});
Object.assign(window.BOX_I18N.zh,{"signsAcct": "签名账户", "kdBoxT": "盒子已生成", "kdStays": "盒子留在你的账户 {a} 的钩子里，不会转移。", "kdKeyT": "这个盒子的钥匙代币", "kdKeyNo": "钥匙编号", "kdKeyNote": "谁持有这把钥匙，谁就能打开盒子。盒子留在你这里，你只交出钥匙。"});
Object.assign(window.BOX_I18N.ja,{"signsAcct": "署名アカウント", "kdBoxT": "ボックス作成完了", "kdStays": "ボックスはあなたのアカウント {a} のフック内に残り、移動しません。", "kdKeyT": "このボックスのキートークン", "kdKeyNo": "キー番号", "kdKeyNote": "このキーを持つ人がボックスを開けられます。ボックスはあなたの元に残り、渡すのはキーだけです。"});

Object.assign(window.BOX_I18N.ru,{doneStepKey:"Шаг 6: передай ключ от бокса получателю"});
Object.assign(window.BOX_I18N.en,{doneStepKey:"Step 6: hand the box key to the recipient"});
Object.assign(window.BOX_I18N.es,{doneStepKey:"Paso 6: entrega la llave de la caja al destinatario"});
Object.assign(window.BOX_I18N.fr,{doneStepKey:"Étape 6 : remettez la clé de la boîte au destinataire"});
Object.assign(window.BOX_I18N.de,{doneStepKey:"Schritt 6: Gib den Schlüssel der Box an den Empfänger"});
Object.assign(window.BOX_I18N.zh,{doneStepKey:"第 6 步：把盒子的钥匙交给收件人"});
Object.assign(window.BOX_I18N.ja,{doneStepKey:"ステップ 6：ボックスのキーを受取人に渡す"});
Object.assign(window.BOX_I18N.ru,{"stDone": "Подписано и подтверждено сетью.", "stWaitNet": "Подписано. Ждём подтверждения сети…", "stOpenX": "Запрос уже открыт в Xaman. Подпиши его там, страница сама продолжит.", "stCancel": "Отменить запрос", "stFail": "Сеть не приняла транзакцию ({r}). Можно подписать снова.", "stAuditFirst": "Сначала нужна подпись выше.", "hkAlready": "Этот хук уже установлен на аккаунте. Подписывать снова не нужно."});
Object.assign(window.BOX_I18N.en,{"stDone": "Signed and confirmed by the network.", "stWaitNet": "Signed. Waiting for the network to confirm…", "stOpenX": "A request is already open in Xaman. Sign it there, the page continues by itself.", "stCancel": "Cancel request", "stFail": "The network did not accept the transaction ({r}). You can sign again.", "stAuditFirst": "First the signature above.", "hkAlready": "This hook is already installed on the account. No need to sign again."});
Object.assign(window.BOX_I18N.es,{"stDone": "Firmado y confirmado por la red.", "stWaitNet": "Firmado. Esperando la confirmación de la red…", "stOpenX": "Ya hay una solicitud abierta en Xaman. Fírmala allí, la página seguirá sola.", "stCancel": "Cancelar solicitud", "stFail": "La red no aceptó la transacción ({r}). Puedes firmar de nuevo.", "stAuditFirst": "Primero la firma de arriba.", "hkAlready": "Este hook ya está instalado en la cuenta. No hace falta firmar otra vez."});
Object.assign(window.BOX_I18N.fr,{"stDone": "Signé et confirmé par le réseau.", "stWaitNet": "Signé. En attente de la confirmation du réseau…", "stOpenX": "Une demande est déjà ouverte dans Xaman. Signez-la là-bas, la page continuera seule.", "stCancel": "Annuler la demande", "stFail": "Le réseau n’a pas accepté la transaction ({r}). Vous pouvez signer à nouveau.", "stAuditFirst": "D’abord la signature ci-dessus.", "hkAlready": "Ce hook est déjà installé sur le compte. Inutile de signer à nouveau."});
Object.assign(window.BOX_I18N.de,{"stDone": "Signiert und vom Netzwerk bestätigt.", "stWaitNet": "Signiert. Warte auf Bestätigung des Netzwerks…", "stOpenX": "In Xaman ist schon eine Anfrage offen. Signiere sie dort, die Seite macht dann selbst weiter.", "stCancel": "Anfrage abbrechen", "stFail": "Das Netzwerk hat die Transaktion nicht angenommen ({r}). Du kannst erneut signieren.", "stAuditFirst": "Zuerst die Signatur oben.", "hkAlready": "Dieser Hook ist auf dem Konto schon installiert. Nicht nochmal signieren."});
Object.assign(window.BOX_I18N.zh,{"stDone": "已签名，网络已确认。", "stWaitNet": "已签名。正在等待网络确认…", "stOpenX": "Xaman 中已有一个打开的请求。请在那里签名，页面会自动继续。", "stCancel": "取消请求", "stFail": "网络未接受该交易（{r}）。可以重新签名。", "stAuditFirst": "请先完成上面的签名。", "hkAlready": "此钩子已安装在账户上，无需再次签名。"});
Object.assign(window.BOX_I18N.ja,{"stDone": "署名済み、ネットワークで確認済み。", "stWaitNet": "署名済み。ネットワークの確認を待っています…", "stOpenX": "Xaman でリクエストがすでに開いています。そこで署名すれば、ページは自動で続きます。", "stCancel": "リクエストを取り消す", "stFail": "ネットワークがトランザクションを受け付けませんでした（{r}）。もう一度署名できます。", "stAuditFirst": "まず上の署名を。", "hkAlready": "このフックはすでにアカウントに入っています。再署名は不要です。"});

Object.assign(window.BOX_I18N.ru,{w4H:"Необязательно. До срока бокс может открыть получатель. Если он не успел, после срока бокс уже не открыть, и ты забираешь его обратно.",noLimitWarnKey:"Без срока бокс навсегда за держателем ключа. Забрать его обратно ты сможешь, только если держатель сам сожжёт ключ. Хочешь иметь возможность вернуть бокс, поставь срок.",noLimitWarn:"Без срока бокс нельзя забрать обратно. Если ссылка или QR потеряются, бокс останется закрытым навсегда. Хочешь иметь возможность вернуть бокс, поставь срок."});
Object.assign(window.BOX_I18N.en,{w4H:"Optional. Until the deadline the recipient can open the box. If they don't make it, after the deadline the box can no longer be opened and you take it back.",noLimitWarnKey:"Without a time limit the box belongs to the key holder for good. You can take it back only if the holder burns the key themselves. If you want to be able to get the box back, set a time limit.",noLimitWarn:"Without a time limit you can't take the box back. If the link or QR is lost, the box stays locked forever. If you want to be able to get the box back, set a time limit."});
Object.assign(window.BOX_I18N.es,{w4H:"Opcional. Hasta el plazo el destinatario puede abrir la caja. Si no lo hace a tiempo, después del plazo ya no se puede abrir y tú la recuperas.",noLimitWarnKey:"Sin plazo la caja queda para siempre en manos de quien tenga la llave. Solo podrás recuperarla si esa persona quema la llave. Si quieres poder recuperar la caja, pon un plazo.",noLimitWarn:"Sin plazo no podrás recuperar la caja. Si se pierde el enlace o el QR, la caja quedará bloqueada para siempre. Si quieres poder recuperarla, pon un plazo."});
Object.assign(window.BOX_I18N.fr,{w4H:"Facultatif. Jusqu’à l’échéance, le destinataire peut ouvrir la boîte. S’il ne le fait pas à temps, la boîte ne peut plus être ouverte et vous la reprenez.",noLimitWarnKey:"Sans délai, la boîte appartient pour toujours au détenteur de la clé. Vous ne pourrez la reprendre que s’il brûle lui-même la clé. Pour pouvoir récupérer la boîte, fixez un délai.",noLimitWarn:"Sans délai, vous ne pourrez pas reprendre la boîte. Si le lien ou le QR est perdu, la boîte reste bloquée pour toujours. Pour pouvoir la récupérer, fixez un délai."});
Object.assign(window.BOX_I18N.de,{w4H:"Optional. Bis zur Frist kann der Empfänger die Box öffnen. Schafft er es nicht, lässt sich die Box danach nicht mehr öffnen und du holst sie zurück.",noLimitWarnKey:"Ohne Frist gehört die Box für immer dem Inhaber des Schlüssels. Zurückholen kannst du sie nur, wenn er den Schlüssel selbst verbrennt. Willst du die Box zurückholen können, setze eine Frist.",noLimitWarn:"Ohne Frist kannst du die Box nicht zurückholen. Gehen Link oder QR verloren, bleibt sie für immer verschlossen. Willst du sie zurückholen können, setze eine Frist."});
Object.assign(window.BOX_I18N.zh,{w4H:"可选。期限之前收件人可以打开盒子。如果没来得及，过期后盒子就无法打开，你可以把它取回。",noLimitWarnKey:"不设期限，盒子永远属于钥匙持有者。只有持有者自己销毁钥匙，你才能取回盒子。想保留取回的可能，请设置期限。",noLimitWarn:"不设期限，你无法取回盒子。如果链接或二维码丢失，盒子将永远锁定。想保留取回的可能，请设置期限。"});
Object.assign(window.BOX_I18N.ja,{w4H:"任意です。期限までは受取人がボックスを開けられます。間に合わなければ、期限後は開けられなくなり、あなたが取り戻せます。",noLimitWarnKey:"期限なしだと、ボックスはずっとキーの持ち主のものです。持ち主が自分でキーをバーンした場合だけ取り戻せます。取り戻せるようにしたいなら期限を設定してください。",noLimitWarn:"期限なしだと、ボックスは取り戻せません。リンクやQRを失うと、永久にロックされたままです。取り戻せるようにしたいなら期限を設定してください。"});

Object.assign(window.BOX_I18N.ru,{w4H:"Необязательно. Бокс со сроком создатель может вернуть себе только после того, как срок истечёт.",noLimitWarnKey:"Бокс без срока создатель не может вернуть ни при каких условиях.",noLimitWarn:"Бокс без срока создатель не может вернуть ни при каких условиях. Если ссылка или QR потеряются, бокс останется закрытым навсегда."});
Object.assign(window.BOX_I18N.en,{w4H:"Optional. The creator can take back a box with a time limit only after the time limit has passed.",noLimitWarnKey:"The creator cannot take back a box without a time limit under any circumstances.",noLimitWarn:"The creator cannot take back a box without a time limit under any circumstances. If the link or QR is lost, the box stays locked forever."});
Object.assign(window.BOX_I18N.es,{w4H:"Opcional. Quien crea una caja con plazo solo puede recuperarla después de que venza el plazo.",noLimitWarnKey:"Quien crea una caja sin plazo no puede recuperarla bajo ninguna circunstancia.",noLimitWarn:"Quien crea una caja sin plazo no puede recuperarla bajo ninguna circunstancia. Si se pierde el enlace o el QR, la caja quedará bloqueada para siempre."});
Object.assign(window.BOX_I18N.fr,{w4H:"Facultatif. Le créateur d’une boîte avec délai ne peut la reprendre qu’une fois le délai expiré.",noLimitWarnKey:"Le créateur d’une boîte sans délai ne peut la reprendre en aucun cas.",noLimitWarn:"Le créateur d’une boîte sans délai ne peut la reprendre en aucun cas. Si le lien ou le QR est perdu, la boîte reste bloquée pour toujours."});
Object.assign(window.BOX_I18N.de,{w4H:"Optional. Eine Box mit Frist kann der Ersteller erst nach Ablauf der Frist zurückholen.",noLimitWarnKey:"Eine Box ohne Frist kann der Ersteller unter keinen Umständen zurückholen.",noLimitWarn:"Eine Box ohne Frist kann der Ersteller unter keinen Umständen zurückholen. Gehen Link oder QR verloren, bleibt sie für immer verschlossen."});
Object.assign(window.BOX_I18N.zh,{w4H:"可选。设有期限的盒子，创建者只能在期限过后取回。",noLimitWarnKey:"不设期限的盒子，创建者在任何情况下都无法取回。",noLimitWarn:"不设期限的盒子，创建者在任何情况下都无法取回。如果链接或二维码丢失，盒子将永远锁定。"});
Object.assign(window.BOX_I18N.ja,{w4H:"任意です。期限付きのボックスは、期限が過ぎてからでないと作成者は取り戻せません。",noLimitWarnKey:"期限なしのボックスは、作成者がどんな場合でも取り戻せません。",noLimitWarn:"期限なしのボックスは、作成者がどんな場合でも取り戻せません。リンクやQRを失うと、永久にロックされたままです。"});

Object.assign(window.BOX_I18N.ru,{w4H:"⚠️ Внимание: бокс со сроком создатель может вернуть себе только после того, как срок истечёт. Бокс без срока вернуть нельзя никогда."});
Object.assign(window.BOX_I18N.en,{w4H:"⚠️ Warning: the creator can take back a box with a time limit only after the time limit has passed. A box without a time limit can never be taken back."});
Object.assign(window.BOX_I18N.es,{w4H:"⚠️ Atención: quien crea una caja con plazo solo puede recuperarla después de que venza el plazo. Una caja sin plazo no se puede recuperar nunca."});
Object.assign(window.BOX_I18N.fr,{w4H:"⚠️ Attention : le créateur d’une boîte avec délai ne peut la reprendre qu’une fois le délai expiré. Une boîte sans délai ne peut jamais être reprise."});
Object.assign(window.BOX_I18N.de,{w4H:"⚠️ Achtung: Eine Box mit Frist kann der Ersteller erst nach Ablauf der Frist zurückholen. Eine Box ohne Frist kann nie zurückgeholt werden."});
Object.assign(window.BOX_I18N.zh,{w4H:"⚠️ 注意：设有期限的盒子，创建者只能在期限过后取回。不设期限的盒子永远无法取回。"});
Object.assign(window.BOX_I18N.ja,{w4H:"⚠️ 注意：期限付きのボックスは、期限が過ぎてからでないと作成者は取り戻せません。期限なしのボックスは決して取り戻せません。"});

Object.assign(window.BOX_I18N.ru,{xamanMaking:"Создаём запрос в Xaman…"});
Object.assign(window.BOX_I18N.en,{xamanMaking:"Creating the Xaman request…"});
Object.assign(window.BOX_I18N.es,{xamanMaking:"Creando la solicitud en Xaman…"});
Object.assign(window.BOX_I18N.fr,{xamanMaking:"Création de la demande Xaman…"});
Object.assign(window.BOX_I18N.de,{xamanMaking:"Xaman-Anfrage wird erstellt…"});
Object.assign(window.BOX_I18N.zh,{xamanMaking:"正在创建 Xaman 请求…"});
Object.assign(window.BOX_I18N.ja,{xamanMaking:"Xaman のリクエストを作成中…"});

Object.assign(window.BOX_I18N.ru,{doneGcPw:"В боксе подарочный код. Пароль к нему отправь получателю лично, в личном сообщении. Не пиши пароль в ссылке, в QR или в открытом посте."});
Object.assign(window.BOX_I18N.en,{doneGcPw:"The box holds a gift code. Send its password to the recipient privately, in a direct message. Never put the password in a link, a QR or a public post."});
Object.assign(window.BOX_I18N.es,{doneGcPw:"La caja contiene un código de regalo. Envía su contraseña al destinatario en privado, por mensaje directo. Nunca la pongas en un enlace, un QR o una publicación abierta."});
Object.assign(window.BOX_I18N.fr,{doneGcPw:"La boîte contient un code cadeau. Envoyez son mot de passe au destinataire en privé, par message direct. Ne le mettez jamais dans un lien, un QR ou une publication publique."});
Object.assign(window.BOX_I18N.de,{doneGcPw:"In der Box ist ein Geschenkcode. Schick das Passwort dem Empfänger privat per Direktnachricht. Nie in einen Link, einen QR oder einen öffentlichen Post."});
Object.assign(window.BOX_I18N.zh,{doneGcPw:"盒子里有礼品码。请通过私信把密码单独发给收件人。不要把密码放在链接、二维码或公开帖子里。"});
Object.assign(window.BOX_I18N.ja,{doneGcPw:"ボックスにはギフトコードが入っています。パスワードは受取人にダイレクトメッセージで個別に送ってください。リンク、QR、公開投稿には絶対に書かないでください。"});

Object.assign(window.BOX_I18N.ru,{gcTokName:"Токен с подарочным кодом",tokNum:"Номер токена"});
Object.assign(window.BOX_I18N.en,{gcTokName:"Gift code token",tokNum:"Token number"});
Object.assign(window.BOX_I18N.es,{gcTokName:"Token con código de regalo",tokNum:"Número del token"});
Object.assign(window.BOX_I18N.fr,{gcTokName:"Jeton avec code cadeau",tokNum:"Numéro du jeton"});
Object.assign(window.BOX_I18N.de,{gcTokName:"Token mit Geschenkcode",tokNum:"Token-Nummer"});
Object.assign(window.BOX_I18N.zh,{gcTokName:"礼品码代币",tokNum:"代币编号"});
Object.assign(window.BOX_I18N.ja,{gcTokName:"ギフトコード付きトークン",tokNum:"トークン番号"});

Object.assign(window.BOX_I18N.ru,{sentT:"Токен-ключ передан",sentTo:"Кому",sentKeyNo:"Токен-ключ",sentBox:"Открывает бокс",sentNext:"Теперь открыть бокс может только получатель. Он войдёт на сайт через Xaman, найдёт бокс в «Мне пришли боксы» и откроет его. Ты сам этот бокс открыть уже не можешь."});
Object.assign(window.BOX_I18N.en,{sentT:"Key token sent",sentTo:"To",sentKeyNo:"Key token",sentBox:"Opens box",sentNext:"Now only the recipient can open the box. They sign in on the site with Xaman, find the box in «Boxes for me» and open it. You can no longer open this box yourself."});
Object.assign(window.BOX_I18N.es,{sentT:"Token llave enviado",sentTo:"Para",sentKeyNo:"Token llave",sentBox:"Abre la caja",sentNext:"Ahora solo el destinatario puede abrir la caja. Entra en el sitio con Xaman, encuentra la caja en «Cajas para mí» y la abre. Tú ya no puedes abrir esta caja."});
Object.assign(window.BOX_I18N.fr,{sentT:"Jeton clé envoyé",sentTo:"À",sentKeyNo:"Jeton clé",sentBox:"Ouvre la boîte",sentNext:"Désormais, seul le destinataire peut ouvrir la boîte. Il se connecte au site avec Xaman, trouve la boîte dans «Boîtes pour moi» et l’ouvre. Tu ne peux plus ouvrir cette boîte toi-même."});
Object.assign(window.BOX_I18N.de,{sentT:"Schlüssel-Token gesendet",sentTo:"An",sentKeyNo:"Schlüssel-Token",sentBox:"Öffnet Box",sentNext:"Jetzt kann nur der Empfänger die Box öffnen. Er meldet sich mit Xaman auf der Seite an, findet die Box unter «Boxen für mich» und öffnet sie. Du selbst kannst diese Box nicht mehr öffnen."});
Object.assign(window.BOX_I18N.zh,{sentT:"钥匙代币已发送",sentTo:"接收方",sentKeyNo:"钥匙代币",sentBox:"可打开礼盒",sentNext:"现在只有接收方能打开礼盒。对方用 Xaman 登录网站，在「我收到的礼盒」里找到并打开它。你自己已无法再打开这个礼盒。"});
Object.assign(window.BOX_I18N.ja,{sentT:"鍵トークンを送りました",sentTo:"送り先",sentKeyNo:"鍵トークン",sentBox:"開けられるボックス",sentNext:"これでボックスを開けられるのは受取人だけです。受取人は Xaman でサイトにログインし、「届いたボックス」から開けます。あなた自身はもうこのボックスを開けられません。"});
Object.assign(window.BOX_I18N.ru,{askPwEg:"Попросить пароль у отправителя лично, в защищённом мессенджере:"});
Object.assign(window.BOX_I18N.en,{askPwEg:"Ask the sender for the password privately, in a secure messenger:"});
Object.assign(window.BOX_I18N.es,{askPwEg:"Pide la contraseña al remitente en privado, en un mensajero seguro:"});
Object.assign(window.BOX_I18N.fr,{askPwEg:"Demande le mot de passe à l’expéditeur en privé, dans une messagerie sécurisée :"});
Object.assign(window.BOX_I18N.de,{askPwEg:"Frag den Absender privat nach dem Passwort, in einem sicheren Messenger:"});
Object.assign(window.BOX_I18N.zh,{askPwEg:"请在安全的通讯软件中私下向发送方索取密码："});
Object.assign(window.BOX_I18N.ja,{askPwEg:"安全なメッセンジャーで、送り主に個別にパスワードを聞いてください："});
Object.assign(window.BOX_I18N.ru,{"burnBtn": "Сжечь токен", "burnWarn": "Токен и подарочный код в нём пропадут навсегда, вернуть нельзя. Если код ещё нужен — сначала скопируй его. Резерв за токен вернётся на твой аккаунт.", "burnYes": "Да, сжечь — подписать в Xaman", "burnTitle": "Сжечь токен", "sigBurn": "сжечь этот токен с подарочным кодом навсегда", "burnDone": "Токен сожжён"});
Object.assign(window.BOX_I18N.en,{"burnBtn": "Burn token", "burnWarn": "The token and the gift code in it will be gone for good, this cannot be undone. If you still need the code, copy it first. The token's reserve returns to your account.", "burnYes": "Yes, burn — sign in Xaman", "burnTitle": "Burn token", "sigBurn": "burn this gift code token for good", "burnDone": "Token burned"});
Object.assign(window.BOX_I18N.es,{"burnBtn": "Quemar token", "burnWarn": "El token y su código regalo desaparecerán para siempre, no se puede deshacer. Si aún necesitas el código, cópialo antes. La reserva del token vuelve a tu cuenta.", "burnYes": "Sí, quemar — firmar en Xaman", "burnTitle": "Quemar token", "sigBurn": "quemar este token con código regalo para siempre", "burnDone": "Token quemado"});
Object.assign(window.BOX_I18N.fr,{"burnBtn": "Brûler le jeton", "burnWarn": "Le jeton et son code cadeau disparaîtront pour toujours, impossible d'annuler. Si tu as encore besoin du code, copie-le d'abord. La réserve du jeton revient sur ton compte.", "burnYes": "Oui, brûler — signer dans Xaman", "burnTitle": "Brûler le jeton", "sigBurn": "brûler ce jeton à code cadeau pour toujours", "burnDone": "Jeton brûlé"});
Object.assign(window.BOX_I18N.de,{"burnBtn": "Token verbrennen", "burnWarn": "Der Token und sein Geschenkcode sind dann für immer weg, das lässt sich nicht rückgängig machen. Wenn du den Code noch brauchst, kopiere ihn zuerst. Die Reserve des Tokens geht an dein Konto zurück.", "burnYes": "Ja, verbrennen — in Xaman signieren", "burnTitle": "Token verbrennen", "sigBurn": "diesen Geschenkcode-Token für immer verbrennen", "burnDone": "Token verbrannt"});
Object.assign(window.BOX_I18N.zh,{"burnBtn": "销毁代币", "burnWarn": "代币及其中的礼品码将永久消失，无法撤销。如果还需要该码，请先复制。代币的储备金将退回你的账户。", "burnYes": "是的，销毁 — 在 Xaman 中签名", "burnTitle": "销毁代币", "sigBurn": "永久销毁这个礼品码代币", "burnDone": "代币已销毁"});
Object.assign(window.BOX_I18N.ja,{"burnBtn": "トークンを焼却", "burnWarn": "トークンとその中のギフトコードは永久に消え、元に戻せません。コードがまだ必要なら先にコピーしてください。トークンの準備金はあなたのアカウントに戻ります。", "burnYes": "はい、焼却 — Xaman で署名", "burnTitle": "トークンを焼却", "sigBurn": "このギフトコードトークンを永久に焼却", "burnDone": "トークンを焼却しました"});
Object.assign(window.BOX_I18N.ru,{"burnKeyWarn": "Этот токен-ключ уже не открывает ни одного бокса. После сжигания он пропадёт навсегда, а резерв за него вернётся на твой аккаунт.", "sigBurnKey": "сжечь этот токен-ключ навсегда"});
Object.assign(window.BOX_I18N.en,{"burnKeyWarn": "This key token no longer opens any box. Once burned it is gone for good, and its reserve returns to your account.", "sigBurnKey": "burn this key token for good"});
Object.assign(window.BOX_I18N.es,{"burnKeyWarn": "Este token-llave ya no abre ninguna caja. Al quemarlo desaparece para siempre y su reserva vuelve a tu cuenta.", "sigBurnKey": "quemar este token-llave para siempre"});
Object.assign(window.BOX_I18N.fr,{"burnKeyWarn": "Ce jeton-clé n'ouvre plus aucune boîte. Une fois brûlé, il disparaît pour toujours et sa réserve revient sur ton compte.", "sigBurnKey": "brûler ce jeton-clé pour toujours"});
Object.assign(window.BOX_I18N.de,{"burnKeyWarn": "Dieser Schlüssel-Token öffnet keine Box mehr. Verbrannt ist er für immer weg, und seine Reserve geht an dein Konto zurück.", "sigBurnKey": "diesen Schlüssel-Token für immer verbrennen"});
Object.assign(window.BOX_I18N.zh,{"burnKeyWarn": "这个钥匙代币已不能打开任何盒子。销毁后将永久消失，其储备金退回你的账户。", "sigBurnKey": "永久销毁这个钥匙代币"});
Object.assign(window.BOX_I18N.ja,{"burnKeyWarn": "このキートークンはもうどのボックスも開けません。焼却すると永久に消え、準備金はあなたのアカウントに戻ります。", "sigBurnKey": "このキートークンを永久に焼却"});
Object.assign(window.BOX_I18N.ru,{"burntTag": "сожжён", "burntH": "Токен сожжён", "burntKeyH": "Токен-ключ сожжён", "burntNote": "Токена больше нет в сети, резерв за него освобождён.", "burntKeyNote": "Ключа больше нет в сети, резерв освобождён. Бокс остаётся в истории.", "burntKeyLine": "Токен-ключ от этого бокса сожжён."});
Object.assign(window.BOX_I18N.en,{"burntTag": "burned", "burntH": "Token burned", "burntKeyH": "Key token burned", "burntNote": "The token no longer exists on the network, its reserve is freed.", "burntKeyNote": "The key no longer exists on the network, its reserve is freed. The box stays in your history.", "burntKeyLine": "The key token of this box has been burned."});
Object.assign(window.BOX_I18N.es,{"burntTag": "quemado", "burntH": "Token quemado", "burntKeyH": "Token-llave quemado", "burntNote": "El token ya no existe en la red, su reserva queda liberada.", "burntKeyNote": "La llave ya no existe en la red, su reserva queda liberada. La caja sigue en tu historial.", "burntKeyLine": "El token-llave de esta caja ha sido quemado."});
Object.assign(window.BOX_I18N.fr,{"burntTag": "brûlé", "burntH": "Jeton brûlé", "burntKeyH": "Jeton-clé brûlé", "burntNote": "Le jeton n'existe plus sur le réseau, sa réserve est libérée.", "burntKeyNote": "La clé n'existe plus sur le réseau, sa réserve est libérée. La boîte reste dans ton historique.", "burntKeyLine": "Le jeton-clé de cette boîte a été brûlé."});
Object.assign(window.BOX_I18N.de,{"burntTag": "verbrannt", "burntH": "Token verbrannt", "burntKeyH": "Schlüssel-Token verbrannt", "burntNote": "Der Token existiert nicht mehr im Netzwerk, seine Reserve ist frei.", "burntKeyNote": "Der Schlüssel existiert nicht mehr im Netzwerk, die Reserve ist frei. Die Box bleibt in deinem Verlauf.", "burntKeyLine": "Der Schlüssel-Token dieser Box wurde verbrannt."});
Object.assign(window.BOX_I18N.zh,{"burntTag": "已销毁", "burntH": "代币已销毁", "burntKeyH": "钥匙代币已销毁", "burntNote": "该代币已不在网络中，其储备金已释放。", "burntKeyNote": "钥匙已不在网络中，储备金已释放。盒子仍保留在你的记录中。", "burntKeyLine": "此盒子的钥匙代币已被销毁。"});
Object.assign(window.BOX_I18N.ja,{"burntTag": "焼却済み", "burntH": "トークンを焼却しました", "burntKeyH": "鍵トークンを焼却しました", "burntNote": "トークンはネットワーク上から消え、リザーブが解放されました。", "burntKeyNote": "鍵はネットワーク上から消え、リザーブが解放されました。ボックスは履歴に残ります。", "burntKeyLine": "このボックスの鍵トークンは焼却済みです。"});
