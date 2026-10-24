# Reusable prompt: secrets scanning response

Copy-paste the block below into any AI coding agent to respond to a secret that
was committed or leaked - contain it first, then scope the exposure, clean up,
and make a repeat harder.

Keywords: leaked secret, credential rotation, git history, incident, gitleaks, push protection

---

A secret has been exposed in this repository: `[what kind it is - never paste
the value - where it was found, and roughly when]`. The goal: make it unusable,
find out whether it was used, remove it from every place that still holds it,
and prevent a repeat.

Never print, echo, or commit the secret value at any point. Refer to it by type,
and at most its last four characters.

## Steps

1. **Contain first** - Revoking or rotating the credential at its provider comes
   before any git cleanup, because history rewriting does not make an exposed
   secret safe: assume anything that was public, even briefly, was copied. You
   cannot rotate it yourself, so tell me exactly what to rotate and in what
   order (create the new credential, deploy it, then revoke the old one so
   nothing breaks), and wait for my confirmation before going on.
2. **Find every copy** - Search the current tree, all branches and tags, pull
   request refs (`refs/pull/*`), forks, releases and their assets, package
   registries and archives, CI logs and artifacts, issues and comments, and
   local `.env` or build output. Use a scanner (`gitleaks detect`,
   `trufflehog git file://.`) and `git log --all -S<pattern>`, using a pattern
   rather than the value where you can.
3. **Assess use** - List what I should check in the provider's audit or usage
   logs for the whole exposure window: calls from unfamiliar addresses, unusual
   volume, and new resources or keys created. Say what a clean result looks
   like. Do not state "no misuse" without a log I have shown you.
4. **Plan the history rewrite** - Only after rotation. Write the plan: the tool
   (`git filter-repo`, not `filter-branch`), the exact paths or replace rules, a
   fresh mirror clone as backup, every ref it touches, and the fact that all
   affected commit SHAs change. Show it and wait for my go. Afterwards:
   force-push branches and tags, ask the git host to purge cached views and
   dangling or pull-request refs for the old SHAs, tell fork owners and
   contributors to re-clone, and delete or republish affected releases and
   packages.
5. **Prevent a repeat** - Add secret scanning to CI and push protection on the
   host, a pre-commit hook, `.env` in `.gitignore` with a placeholder-only
   `.env.example`, and short-lived, least-privilege credentials where the
   provider supports them.
6. **Write the incident record** - When it was found, the kind of secret, the
   exposure window, where copies lived, who rotated it and when, the evidence for
   or against misuse, and what now prevents a repeat. Leave the secret out.

## Verification

- [ ] The old credential is revoked (a call using it now fails) and the new one
      works in production.
- [ ] The scan covered branches, tags, pull request refs, releases, CI logs, and
      registries, with the scanner output shown.
- [ ] After the rewrite, `git log --all -S<pattern>` returns nothing, with the
      output shown.
- [ ] The rewrite ran on a fresh mirror clone and a backup exists.
- [ ] Contributors and fork owners were told to re-clone.
- [ ] The incident record and every message you wrote contain no secret value.

## Rules

- Rotate before you rewrite. Never the other way round.
- Never paste a secret into chat, a log, a commit message, an issue, or the
  incident record.
- Never force-push or delete a release without my explicit go.
- Never call the leak harmless because the repository is private or the
  exposure was short.
- When you cannot verify something yourself, say what I need to check and where.
