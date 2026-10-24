# Reusable prompt: remote PR cleanup [spec]

Copy-paste the block below into any AI coding agent to perform full remote hygiene after complex PR-related work - safely pruning remote-tracking branches, deleting merged/closed PR branches, syncing with upstream, and cleaning up remotes.

Keywords: remote cleanup, prune remote branches, delete merged pr branches, sync upstream, git remote hygiene

---

Perform **full remote hygiene** after complex PR-related work in this repository. The goal is a clean remote-tracking state with stale PR branches removed, remotes synced, and no loss of active work - with confirmation for anything ambiguous.

## Define the scope first

Before deleting anything remotely, establish:

1. **Remotes** - Identify all remotes (`origin`, `upstream`, forks). Understand which is the source of truth.
2. **Default branch** - Determine default branch of the upstream/origin (main/master/develop).
3. **PR state** - Understand which branches correspond to merged/closed PRs vs open PRs.
4. **Active work** - Never delete branches for open PRs or branches others may be actively using.
5. **Permissions** - Confirm you have push/delete permissions to target remotes.

## What to clean up

### Remote-tracking branches
- Prune stale remote-tracking branches with `git fetch --prune`
- Remove local references to branches deleted on remote
- Keep tracking branches for active remotes

### Merged PR branches
- Delete remote branches that have been merged into default branch via PR
- For each branch to delete, verify it's merged (check PR status via `gh` if available)
- Never delete default branch or protected branches
- Never delete branches from open PRs

### Closed/unmerged PR branches
- Identify branches from closed PRs that were not merged
- These may contain useful work - require explicit confirmation before deletion
- Consider if author wants to recover or abandon

### Remote sync
- Fetch from all relevant remotes
- Sync with upstream if it's a fork (fetch upstream, consider if rebase/merge needed)
- Update local default branch to track latest
- Prune remotes

## Method

1. **Audit remotes** - Run `git remote -v`, `git branch -r`, `git fetch --all --prune` to get current state.
2. **Identify default branch** - Check `git symbolic-ref refs/remotes/origin/HEAD` or remote default.
3. **Find candidates** - Use `git branch -r --merged <default>` for merged remote branches; use `gh pr list`/API if available to confirm PR status.
4. **Classify** - Split into: (a) merged PR branches - safe to delete with confirmation, (b) closed unmerged - needs confirmation, (c) open PRs - never delete, (d) protected/default - never delete.
5. **Present plan** - Show detailed plan with branch names, remote, PR number/status if known, rationale. Ask for confirmation.
6. **Execute safely** - Delete remote branches with `git push <remote> --delete <branch>` or equivalent. Prune tracking branches.
7. **Verify** - Show updated remote branch list, confirm deletions succeeded, report final state.

## Verification

- [ ] All remotes identified and accessible
- [ ] Default branch correctly identified
- [ ] Fetched and pruned latest state
- [ ] Open PR branches identified and excluded
- [ ] Merged branches verified (ideally via PR status, not just merge commit)
- [ ] Closed unmerged branches only deleted with explicit confirmation
- [ ] Protected branches never deleted
- [ ] Confirmation obtained before any deletion
- [ ] Deletions executed successfully
- [ ] Final remote state reported

## Rules

- Never delete branches for open PRs.
- Never delete default or protected branches.
- Always verify merge status via PR if possible (a branch might be merged differently).
- Require explicit confirmation before deleting closed/unmerged branches.
- Use `git push <remote> --delete` for remote deletion.
- Always prune after deletions.
- If `gh` CLI unavailable, be extra cautious and require more confirmation.
- Report each deletion with reason and PR context if available.
- Respect fork workflows - be careful about which remote to delete from.
