# Reusable prompt: dependency vulnerability triage

Copy-paste the block below into any AI coding agent to triage a list of
dependency vulnerability alerts - decide which ones actually affect this
project, pick the right fix for each, and write down why for the ones you leave.

Keywords: vulnerability triage, advisory, cve, npm audit, dependabot, osv, reachability

---

Triage the dependency vulnerability alerts for this repository, from
`[npm audit output, Dependabot or Snyk alerts, an osv-scanner report, or "run
the scanner"]`. The goal: one decision per advisory - fix now, fix soon,
mitigated, not affected, or accepted - backed by evidence from this codebase,
not by the scanner's severity label.

This differs from a dependency audit: the alerts already exist, and the work is
deciding which ones matter here and proving it.

## Steps

1. **Collect the alerts** - Use the report given, or run the repo's own scanner
   (`npm audit --json`, `pip-audit`, `osv-scanner`, `cargo audit`,
   `govulncheck`) and keep the raw output. List each advisory once: id
   (GHSA or CVE), package, installed version, fixed version, scanner severity.
   Group alerts that share a root cause.
2. **Place each package in the tree** - Ask the package manager why it is
   there (`npm explain <pkg>`, `pnpm why <pkg>`, `cargo tree -i <pkg>`,
   `pipdeptree -r -p <pkg>`). Record direct or transitive, which parent pulls it
   in, and whether it ships at runtime or is dev, build, or test only.
3. **Read the exploit conditions** - From the advisory itself, write the
   precondition in one line: which function or feature, what kind of input,
   which configuration, which platform. Many advisories only bite when a
   specific option is on or untrusted input reaches one call.
4. **Check reachability here** - Search the code and config for the vulnerable
   function or feature, and for untrusted input that could reach it. Report one
   of: reachable, used but input is trusted, not used, or cannot tell. "Cannot
   tell" is an acceptable answer; guessing is not.
5. **Pick the fix** - In order of preference: a patched version inside the
   current semver range; a patched major (list the breaking changes from its
   changelog); a parent upgrade that pulls in the fixed child; an override or
   resolution pin (and note it must be removed later); a code or config
   mitigation; replacing the package. Confirm the target version is outside the
   advisory's affected range.
6. **Record the decision** - For each advisory give the status, the evidence (the
   explain and search output), and for _not affected_ and _accepted_ also an
   owner and a review date or trigger, such as the next upgrade or the day the
   package becomes reachable. Put it where the team will see it: an issue, a
   security note, or a comment next to the scanner's ignore entry.
7. **Apply and verify** - Make the fixes, then re-run the scanner and the
   project's own test and build commands, and show the new output. Check that
   the lockfile diff contains only the intended changes.

## Verification

- [ ] The raw scanner output is saved, and every advisory has exactly one
      status.
- [ ] Each package has its dependency path and a runtime-versus-dev answer.
- [ ] Every "not affected" shows the search that proves it.
- [ ] Every accepted risk has an owner and an expiry.
- [ ] The scanner was re-run after the fixes, and tests and build pass, with
      the output shown.
- [ ] The lockfile diff was reviewed for unrelated changes.

## Rules

- Never decide on severity alone. A high rating does not make it urgent, and a
  low one does not make it safe; reachability here decides.
- Never mark an advisory "not affected" without showing the search.
- Never run `npm audit fix --force` or add `--legacy-peer-deps` to make the
  report go quiet.
- Read the changelog before a major upgrade, and run the tests after it.
- Do not add a new dependency to fix an alert until you have checked that the
  existing one has a patched release.
