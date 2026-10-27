# Verification results (2026-10-27)

**What was checked:** the PACK command of the box hook (v14), the command that creates a box. Checked by bounded model checking with CBMC, using reduced table sizes (up to 3 objects, 3 fields, 3 hashes, 4 old state records). The check also covers the balance accounting (how much XAH and how many tokens are locked under boxes).

**Results**

| Check | Result |
|---|---|
| PACK variants (signed link / key token × URIToken, XAH, URIToken+XAH) | 6 of 6 proven |
| Deliberately broken hook versions (no exists check, no owner check, wrong box status, balance not updated) | 4 of 4 caught |
| Real bugs found in v14 | none |

**Assumption:** two different 256-bit hashes never collide (practically impossible).

**Note for v15 (hardening only, not exploitable):** PACK does not reject a token ID equal to the box's own internal state keys. This could only matter with a hash collision.

These are bounded proofs under a model of the host, not a full audit.


## Credits

The check was done with [xahc-prover](https://github.com/Hugegreencandle/xahc-prover) by [@Cryptocrazy589](https://x.com/Cryptocrazy589) (GitHub: [Hugegreencandle](https://github.com/Hugegreencandle), see also [xahc](https://github.com/Hugegreencandle/xahc)), extended for the box hook, with CBMC under the hood. Thank you! He did not review or endorse these specific results; any errors are ours.
