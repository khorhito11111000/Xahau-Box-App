/* Xahau Box page config. Everything here is public: never put a secret in this file. */
window.BOX_CONFIG = {
  // TODO: Xaman API key (public "API Key" uuid from apps.xaman.dev, NOT the API secret).
  // Empty = Xaman sign-in is off and the page shows the transaction JSON to copy and sign elsewhere.
  XAMAN_API_KEY: '',
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
  IPFS_GATEWAY: 'https://ipfs.io/ipfs/',
  // Link put into QR codes. Empty = the address this page is opened from.
  APP_URL: 'https://khorhito11111000.github.io/Xahau-Box-App/'
};
