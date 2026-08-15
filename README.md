# awesome-ai-prompts

![Build](https://github.com/StudentSuite/awesome-ai-prompts/actions/workflows/ci.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Stars](https://img.shields.io/github/stars/StudentSuite/awesome-ai-prompts?style=social)](https://github.com/StudentSuite/awesome-ai-prompts)

A curated list of AI prompts for Student Developers. Copy-paste any prompt
into an AI coding agent (Claude, ChatGPT, Copilot, Cursor, opencode, and
friends) to get a disciplined, senior-engineer-style workflow: verify, don't
guess; small steps; tests as guardrails.

**[★ Star on GitHub](https://github.com/StudentSuite/awesome-ai-prompts)**

Prompts marked **[spec]** are deep, multi-section specs with hard constraints
and required verification. Everything else is a focused one-pager.

## Quick Start

1. Browse the category below and pick a prompt.
2. Open its `*-prompt.md`, then copy everything after the `---` divider.
3. Paste it into your AI coding agent along with your task - it handles the rest.

That's it. Each prompt is self-contained and tool-agnostic.

## Core coding

- [feature-implementation-prompt.md](core-coding/feature-implementation-prompt.md) - build a feature end-to-end: understand, plan, implement, test, document.
- [pair-programming-session-prompt.md](core-coding/pair-programming-session-prompt.md) - interactive build loop: plan → code → explain → verify, in small confirmed steps.
- [debugging-prompt.md](core-coding/debugging-prompt.md) - systematic debugging: reproduce, isolate, root-cause, minimal fix, regression test.
- [refactoring-prompt.md](core-coding/refactoring-prompt.md) - behavior-preserving refactoring with tests as the safety net.
- [codebase-onboarding-prompt.md](core-coding/codebase-onboarding-prompt.md) - quickly understand an unfamiliar repo: stack, architecture, data flow, gotchas.
- [api-integration-prompt.md](core-coding/api-integration-prompt.md) - integrate a REST API with types, error handling, retries, and tests.

## Git & GitHub

- [git-history-surgery-prompt.md](git-github/git-history-surgery-prompt.md) - safe history editing, bisect, blame, and recovery via reflog.
- [open-source-contribution-prompt.md](git-github/open-source-contribution-prompt.md) - contribute to an OSS repo the maintainer-friendly way.
- [ci-cd-workflow-prompt.md](git-github/ci-cd-workflow-prompt.md) **[spec]** - build a verified, secure GitHub Actions pipeline.
- [dependency-upgrade-prompt.md](git-github/dependency-upgrade-prompt.md) - upgrade a dependency safely: changelog, migration, full verification.
- [good-first-issue-workflow-prompt.md](git-github/good-first-issue-workflow-prompt.md) **[spec]** - GitHub Actions workflow reserving starter issues for first-time contributors.

## Code review & quality

- [pr-review-prompt.md](code-review/pr-review-prompt.md) - thorough PR review: verify claims, run checks, clear verdict, merge-ready.
- [secure-code-review-prompt.md](code-review/secure-code-review-prompt.md) - security-lens review: injection, authz, data exposure, with evidence.

## Testing & quality

- [test-writing-prompt.md](testing-quality/test-writing-prompt.md) - write tests that catch regressions, not ones that pad coverage.
- [test-driven-development-prompt.md](testing-quality/test-driven-development-prompt.md) - strict red → green → refactor discipline.
- [code-coverage-gap-prompt.md](testing-quality/code-coverage-gap-prompt.md) - find risky untested paths and cover them meaningfully.

## Docs & delivery

- [documentation-writer-prompt.md](docs-delivery/documentation-writer-prompt.md) - accurate, verified docs that match the project's voice.
- [release-notes-changelog-prompt.md](docs-delivery/release-notes-changelog-prompt.md) - turn git history into a clear, honest changelog.

## Security & performance

- [security-audit-prompt.md](security-performance/security-audit-prompt.md) **[spec]** - full-repo audit: injection, auth, secrets, dependencies, with verified findings.
- [performance-optimization-prompt.md](security-performance/performance-optimization-prompt.md) - measure-first optimization with before/after proof.

## DevOps & deploy

- [docker-containerization-prompt.md](devops-deploy/docker-containerization-prompt.md) - small, secure, non-root container images.
- [deployment-runbook-prompt.md](devops-deploy/deployment-runbook-prompt.md) - safe deploys with preflight checks and a rollback plan.
- [infrastructure-as-code-prompt.md](devops-deploy/infrastructure-as-code-prompt.md) - Terraform/CDK with least-privilege IAM and state safety.
- [database-schema-migrations-prompt.md](devops-deploy/database-schema-migrations-prompt.md) - backward-compatible schema changes: expand, migrate, contract.

## Career & learning

- [code-interview-practice-prompt.md](career-learning/code-interview-practice-prompt.md) - structured interview coaching with hints on demand.
- [portfolio-project-prompt.md](career-learning/portfolio-project-prompt.md) - shape an idea into a scoped, presentable portfolio project.

## Contributing

Contributions welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a
prompt, code style, and PR guidelines.

Prompts live in individual `*-prompt.md` files, grouped in a category folder.
Each one is self-contained: an H1 title, a one-line usage note, and the prompt
block separated by `---`. Keep prompts tool-agnostic, prescriptive, and
grounded in verification. Add a one-line entry to the matching category above
(or a new category + folder) when you add a file.
