# Reusable prompt: CI gate diagnosis

Copy-paste the block below into any AI coding agent to find out why a CI check
failed and what to do about it - fix the code, fix the pipeline, or retry -
with log evidence for each call, not a guess and not a blind rerun.

Keywords: ci, failed check, flaky test, pipeline failure, logs, root cause, rerun

---

Diagnose why a CI check failed on `[PR number, branch, or run URL]`. The goal:
a diagnosis backed by quoted log lines, and one clear decision - fix the code,
fix the pipeline, or retry.

## Steps

1. **Get the real logs** - Pull the failing run's full log from the CI system
   (`gh run view <id> --log-failed`, or the platform's equivalent) rather than a
   pasted tail. Record the failing job, step, and exit code, and find the
   _first_ error: later ones are usually fallout. Note which other checks
   passed.
2. **Separate symptom from cause** - Quote the exact error lines. Name the
   category: assertion or compile error, missing file, timeout, network or rate
   limit, out-of-memory kill, permission or secret missing, runner or tool
   version change.
3. **Is it this change?** - Find the latest run of the same job on the default
   branch and the last green run before this one
   (`gh run list --workflow <name> --branch <branch>`). If the job fails there
   too, the failure is pre-existing: say since which run. Otherwise check
   whether the diff touches anything the failing step reads.
4. **Flake or real?** - If the evidence points at the environment (timeout,
   network, port in use, ordering), rerun only the failed job once
   (`gh run rerun <id> --failed`). Pass-on-rerun is a flake _candidate_;
   confirm it against the job's recent history
   (`gh run list --workflow <name> --limit 30 --json conclusion`). A failure
   that repeats is not a flake.
5. **Check for drift** - Compare against the last green run: runner image,
   language and tool versions, lockfile or unpinned-range changes, cache hit
   versus miss, and permissions. Fork PRs get no secrets, and some runs wait for
   approval (`action_required`) - that is not a failure.
6. **Reproduce** - Run the exact command from the failing workflow step, with
   the same versions, and show it fail the same way. If you cannot reproduce it,
   say so and name what differs.
7. **Decide and act** - State one outcome with its evidence: **fix the code**
   (the patch), **fix the pipeline** (the workflow change: pin a version, add a
   timeout, fix a cache key, split a slow job), or **retry** (and open an issue
   to track the flake). Make the change, push it, and show the new run green.

## Verification

- [ ] The failing log was read from the CI system, and the first error is
      quoted.
- [ ] The same job was checked on the default branch, with run ids, so "caused
      by this change" or "pre-existing" is shown, not assumed.
- [ ] "Flaky" is claimed only after a clean rerun and a history that shows
      intermittent failures.
- [ ] The reproduction used the workflow's own command and its output is shown.
- [ ] The fix is pushed and the new run is green, with its id or link.
- [ ] Cancelled, skipped, and `action_required` runs were not counted as
      failures or passes.

## Rules

- Never rerun a failing job over and over hoping it turns green. One targeted
  rerun is evidence; five are noise.
- Never disable, skip, or loosen a test or a gate to get a green check. Fix the
  cause, or file the flake.
- Never call a failure pre-existing without a run on the base branch that shows
  it.
- Quote log lines; do not paraphrase them.
- Do not change repository settings or secrets. Tell me the setting that needs
  changing and why.
