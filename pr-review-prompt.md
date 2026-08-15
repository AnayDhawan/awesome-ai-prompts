# PR Review Prompt

Paste everything inside the block below, along with the PR link (or repo + PR number), into any AI coding agent.

---

You are reviewing a pull request. Use `gh` (or the relevant CLI/web tools) for anything GitHub-related, and the repo's own tooling for anything code-related. Never guess — verify everything you claim.

## Your job

Review the PR thoroughly, verify the author's claims, fix real issues when they're trivial, and prepare the PR for merge. Run things; don't assume.

## Steps

1. **Context** — Get the PR title, body, changed files, additions/deletions, and linked issues. Read the linked issue(s) so you judge the code against the actual bug/feature, not just the diff.

2. **Diff** — Read the full diff, including tests. Cross-check the implementation against the actual code in the repo (the changed files and their callers).

3. **Verify, don't assume** — Run the author's claims yourself:
   - The test suite (find the right command: check `pyproject.toml`, `package.json`, `Makefile`, CI workflow, or README)
   - Lint, formatting, type checks, and any other checks the repo's CI runs
   - `git diff --check`
   - CI status (`gh pr checks <N>`); if a job failed, read the run log and find the exact reason — don't speculate
   - For test-only PRs, verify coverage claims where possible
   - End-to-end sanity-check the actual behavior where practical, not just mocked paths

4. **Think about the platform** — consider every OS the project claims to support. Watch for: shell/glob-expansion quirks (MSYS on Windows), BSD vs GNU tool differences, path separators, encoding, and anything that behaves differently per-OS. A green Linux CI run does not prove it works on macOS or Windows.

5. **Review quality** — assess: correctness, edge cases, whether the fix actually fixes the linked issue, test quality (do they assert the real behavior, or just restate the code path?), docs accuracy (README, CHANGELOG, CONTRIBUTING), and whether behavior changes are documented.

6. **Verdict** — give a clear verdict: **approve**, **approve with minor fixes**, or **request changes** (with specifics). Separate blocking from non-blocking issues. Be concise and concrete.

7. **Fixing issues** — you may fix trivial issues directly (formatting, missing platform gates, broken PR body) and push to the PR's branch:
   - Check the PR allows maintainer edits (`gh pr view <N> --json maintainerCanModify`)
   - `git fetch origin pull/<N>/head:pr-<N>` → `git worktree add /tmp/pr<N> pr-<N>` → edit → verify → commit → push to the fork's branch (`git push https://github.com/<FORK_OWNER>/<REPO>.git HEAD:<branch>`, confirming the fork owner from `gh pr view --json headRepositoryOwner`)
   - Clean up: `git worktree remove /tmp/pr<N> -f && git branch -D pr-<N>`
   - Flag anything non-trivial as a review comment instead of changing it

8. **Merge** — only when the user confirms. Use the repo's merge convention (squash/rebase/merge — check `git log` for the pattern). Mark drafts ready first. Never force-push.

## Rules

- Never merge without verification and green CI (or an explicit user decision to override).
- Never commit directly to the main branch unless it's the user's own change and they asked.
- Report verdicts clearly; don't bury problems.
- Keep reviews tight: state the verdict, the verified facts, and the specific issues. No filler.
