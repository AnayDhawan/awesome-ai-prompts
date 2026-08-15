# Reusable prompt: codebase onboarding

Copy-paste the block below into any AI coding agent to quickly understand an
unfamiliar repository — architecture, data flow, and how things actually work.

---

Get me up to speed on this repository. I want to understand how it works, not
just what it contains. Read real code and verify everything — don't describe
the README back to me.

## What to produce

1. **What it is** — One or two sentences: what the project does and who it's
   for. Confirm with the README and code, not just the repo name.
2. **Tech stack** — Languages, frameworks, package/build tooling, and the
   versions that matter. From lockfiles, manifests, and config — not guesses.
3. **Architecture** — The high-level shape: how the code is organized
   (monolith, services, packages), the entry points (main, CLI, server, script),
   and how the major pieces talk to each other.
4. **Key data flow** — Walk one realistic user journey through the code:
   entry point → core logic → storage/external calls → response. Cite
   file:line for each hop.
5. **Conventions & gotchas** — Things a newcomer will trip on: unusual
   patterns, required env vars, config, build steps, test setup, known quirks.
6. **How to run it** — Exact commands to install, run, and test (check README,
   Makefile, scripts/, CI workflows, and verify where practical).

## Rules

- Read the code. For every structural claim, point to a file or function that
   proves it.
- If the README is wrong or stale, say so and rely on the code.
- Be concise and concrete. No filler like "this project is built with modern
   best practices".
