# Xahau Box

A static page for the official Xahau Box hook (v15): pack XAH and/or one URIToken into a gift box, hand it over by link or QR code, and open it. Live on mainnet at [xahaubox.com](https://xahaubox.com/).

The hook source, wasm and tests are in [Xahau-Box-v15](https://github.com/khorhito11111000/Xahau-Box-v15).

- No server, no custody, no analytics, no trackers. Only HTML, CSS, images and page JavaScript.
- The page reads the public ledger and builds unsigned transactions. You sign every step in your own wallet (Xaman), or copy the JSON and sign it in another tool.
- Works in a browser and as a Xaman xApp (review pending).
- Networks: Mainnet (NetworkID 21337) and Testnet (21338).
- Eight languages: English, Spanish, French, Russian, German, Chinese, Japanese, Portuguese.
- No fees. Donations only, and only if you choose to.
- Listed on [Xahau Ecosystem](https://xahau.network/ecosystem/) and [XahauExplorer DApps](https://xahauexplorer.com/dapp/241812121).
- Libraries are vendored in `vendor/` (see `vendor/LICENSES.md`).

Xahau Box is not affiliated with or endorsed by XRPL Labs or Xaman.

Support: [Discord](https://discord.gg/pku6BA5MEW) and X [@Khorhito_E_S](https://x.com/Khorhito_E_S).

## Run locally

This is a static site, with no build step. Serve the repository root over HTTP (for example `python3 -m http.server`) and open it in a browser. Opening `index.html` as a file may fail for some features.

## Verification

See [docs/VERIFICATION.md](docs/VERIFICATION.md) for the hook PACK verification results.

## License

The code is licensed under PolyForm Noncommercial 1.0.0, see [LICENSE](LICENSE). The name, logo and images are not covered, see [TRADEMARKS.md](TRADEMARKS.md). Libraries in `vendor/` keep their own licenses.
