/* Xahau Box page config. Everything here is public: never put a secret in this file. */
window.BOX_CONFIG = {
  // Xaman API key: the public "API Key" uuid from apps.xaman.dev (NOT the API secret). Bound to this page's origin in the Xaman console.
  // Empty = Xaman sign-in is off and the page shows the transaction JSON to copy and sign elsewhere.
  XAMAN_API_KEY: '782fc8c3-44dc-495e-8cf7-637b277aef46',
  // TODO: exact Evergram link (placeholder until confirmed).
  EVERGRAM_URL: 'https://evergram.app',
  DEFAULT_NETWORK: 'testnet',
  NETWORKS: {
    testnet: { label: 'Testnet', networkId: 21338, rpc: 'https://xahau-test.net', explorerTx: 'https://test.xahauexplorer.com/en/tx/' },
    mainnet: { label: 'Mainnet', networkId: 21337, rpc: 'https://xahau.network', explorerTx: 'https://xahauexplorer.com/en/tx/' }
  },
  // Hook state namespace used by the box hook ("tgs" padded to 32 bytes).
  HOOK_NAMESPACE: '7467730000000000000000000000000000000000000000000000000000000000',
  LEDGER_FALLBACK_SECONDS: 3.5, // seconds per ledger until the real average is measured (expiry + countdowns)
  LEDGER_POLL_MS: 4000, // how often the live ledger counter asks the network
  // Hook accounts whose public history feeds the home-page box statistics (per network; empty = block hidden).
  STATS_HOOKS: { mainnet: ['rNHBiY7RQhmAviL8cj56maSiHMyYPJvzW6'], testnet: ['rNHBiY7RQhmAviL8cj56maSiHMyYPJvzW6', 'rHAmJ833h2Z2VuWswF2tka1AcwJNpnhQQN', 'r446GZFxipgC8K3S28BssApUrpPx35hpXz', 'rfK6VKiaMW21UNv84VsMVMJN1xfNPx9ZWA'] },
  // Link put into QR codes. Empty = the address this page is opened from.
  APP_URL: 'https://xahaubox.com/'
};
