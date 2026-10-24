# Reusable prompt: local PR cleanup [spec]

Copy-paste the block below into any AI coding agent to perform full local hygiene after complex PR-related work - safely removing stale branches, worktrees, stashes, and build artifacts without losing uncommitted work or breaking your working tree.

Keywords: local cleanup, prune branches, worktree cleanup, stash cleanup, post pr cleanup, git hygiene

---

Perform **full local hygiene** after complex PR-related work in this repository. The goal is a clean, safe local state with no orphaned branches, worktrees, stashes, or build artifacts - without deleting anything that is unmerged, uncommitted, or actively in use.

## Define the scope first

Before deleting anything, establish:

1. **Current state** - Identify the current branch, uncommitted changes (staged/unstaged), stashes, worktrees, and recent PR branches.
2. **Safety boundaries** - Never delete the current branch, branches with unpushed commits that aren't clearly merged, stashes that contain unique work without confirmation, or worktrees currently in use.
3. **Upstream tracking** - Understand which branches track remotes and which have been merged into main/master/develop.
4. **Build artifacts** - Identify caches/build outputs (node_modules, dist, build, .next, target, **pycache**, etc.) that can be safely removed.

## What to clean up

### Branches

- Delete local branches that have been merged into the default branch (main/master/develop)
- Delete local branches whose upstream remote branches have been deleted (gone)
- Never delete protected branches (main, master, develop, trunk, release/\*)
- Never delete the currently checked out branch

### Worktrees

- List all git worktrees with `git worktree list`
- Remove worktrees that are no longer needed (merged PRs, completed work)
- Never remove the main worktree or worktrees with uncommitted changes without explicit confirmation
- Prune stale worktree references

### Stashes

- Review all stashes (`git stash list`) with context
- Identify stashes that are old and likely obsolete (from completed PRs)
- Drop stashes only with confirmation or if clearly from merged work
- Never drop stashes with unique uncommitted work without explicit approval

### Local files and artifacts

- Remove build outputs and caches that are safe to regenerate (dist/, build/, .next/, out/, target/, **pycache**/, .pytest_cache/, coverage/)
- Remove node_modules only if explicitly requested or if disk space critical and can be reinstalled
- Remove .DS_Store and other OS artifacts
- Clear temporary files in tmp/ only if clearly generated artifacts

## Method

1. **Audit first** - Run `git status`, `git branch -a`, `git worktree list`, `git stash list`, `git remote -v`. Create a full inventory.
2. **Identify safe targets** - Determine merged branches via `git branch --merged <default-branch>`, find gone upstream branches, identify stale worktrees.
3. **Present plan** - Show a clear plan of what will be deleted with rationale. Group by category (branches, worktrees, stashes, files).
4. **Get confirmation** - For anything destructive, especially stashes with unique content or large artifacts, ask for confirmation before proceeding.
5. **Execute safely** - Delete in order: worktrees first (if any), then branches, then stashes, then files. Use safe commands (`git branch -d` not `-D` unless necessary and justified).
6. **Verify** - After cleanup, show final state. Confirm no uncommitted work lost, no protected branches deleted.

## Verification

- [ ] Audited full local state (status, branches, worktrees, stashes, remotes)
- [ ] Identified default branch correctly
- [ ] Only merged/gone branches targeted for deletion (verified with evidence)
- [ ] Protected branches never deleted
- [ ] Current branch never deleted
- [ ] Worktrees with uncommitted changes not deleted without confirmation
- [ ] Stashes reviewed; unique work not dropped without confirmation
- [ ] Build artifacts identified as regenerable before deletion
- [ ] No uncommitted changes lost
- [ ] Final state reported clearly

## Rules

- Never delete without showing what and why first.
- Never use `git branch -D` on merged branches when `-d` works; only force delete with clear justification.
- Never touch branches that aren't clearly merged or have gone upstream without confirmation.
- Never delete stashes blindly - inspect with `git stash show -p` if unclear.
- Never remove node_modules or large dependencies without explicit confirmation.
- Always preserve uncommitted work - if unsure, stop and ask.
- Be conservative: when in doubt, don't delete.
- Report everything clearly with counts.
