# Xahau Gift Box — web page (draft)

A static page for the Xahau gift-box hook: create a box (XAH and/or one URIToken), hand it over with a QR code, open it.

- No server, no analytics, no trackers. Only HTML, CSS, images and page JavaScript.
- The page only reads the public ledger and builds unsigned transactions. You sign every step in your own wallet (Xaman), or copy the JSON and sign it in another tool.
- Network switch: Testnet (NetworkID 21338) / Mainnet (21337).
- Libraries are vendored in `vendor/` (see `vendor/LICENSES.md`).

Status: draft, testnet first.
