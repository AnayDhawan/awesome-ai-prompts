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
- [api-design-prompt.md](core-coding/api-design-prompt.md) - design a well-structured REST API with OpenAPI spec, conventions, and validation.
- [database-design-prompt.md](core-coding/database-design-prompt.md) - model a relational schema from requirements with normalization, indexes, and migration path.
- [environment-setup-prompt.md](core-coding/environment-setup-prompt.md) - bootstrap a dev environment from scratch: deps, tooling, config, first-run verification.
- [code-migration-prompt.md](core-coding/code-migration-prompt.md) **[spec]** - migrate code between frameworks/languages with behavior parity and incremental verification.

## Git & GitHub

- [git-history-surgery-prompt.md](git-github/git-history-surgery-prompt.md) - safe history editing, bisect, blame, and recovery via reflog.
- [open-source-contribution-prompt.md](git-github/open-source-contribution-prompt.md) - contribute to an OSS repo the maintainer-friendly way.
- [ci-cd-workflow-prompt.md](git-github/ci-cd-workflow-prompt.md) **[spec]** - build a verified, secure GitHub Actions pipeline.
- [dependency-upgrade-prompt.md](git-github/dependency-upgrade-prompt.md) - upgrade a dependency safely: changelog, migration, full verification.
- [good-first-issue-workflow-prompt.md](git-github/good-first-issue-workflow-prompt.md) **[spec]** - GitHub Actions workflow reserving starter issues for first-time contributors.
- [git-bisect-debug-prompt.md](git-github/git-bisect-debug-prompt.md) - use git bisect to find the exact commit that introduced a bug.
- [release-automation-prompt.md](git-github/release-automation-prompt.md) - automate versioning, tagging, changelogs, and publishing with CI.

## Code review & quality

- [pr-review-prompt.md](code-review/pr-review-prompt.md) - thorough PR review: verify claims, run checks, clear verdict, merge-ready.
- [secure-code-review-prompt.md](code-review/secure-code-review-prompt.md) - security-lens review: injection, authz, data exposure, with evidence.
- [performance-review-prompt.md](code-review/performance-review-prompt.md) - review code for performance anti-patterns with evidence and specific fixes.
- [accessibility-review-prompt.md](code-review/accessibility-review-prompt.md) - audit UI code for WCAG compliance: semantics, keyboard nav, contrast, screen readers.

## Testing & quality

- [test-writing-prompt.md](testing-quality/test-writing-prompt.md) - write tests that catch regressions, not ones that pad coverage.
- [test-driven-development-prompt.md](testing-quality/test-driven-development-prompt.md) - strict red → green → refactor discipline.
- [code-coverage-gap-prompt.md](testing-quality/code-coverage-gap-prompt.md) - find risky untested paths and cover them meaningfully.
- [e2e-test-scaffold-prompt.md](testing-quality/e2e-test-scaffold-prompt.md) - scaffold end-to-end/integration tests with realistic fixtures and CI integration.
- [mutation-testing-prompt.md](testing-quality/mutation-testing-prompt.md) - run mutation testing to validate that tests actually catch real defects.

## Docs & delivery

- [documentation-writer-prompt.md](docs-delivery/documentation-writer-prompt.md) - accurate, verified docs that match the project's voice.
- [release-notes-changelog-prompt.md](docs-delivery/release-notes-changelog-prompt.md) - turn git history into a clear, honest changelog.
- [api-documentation-prompt.md](docs-delivery/api-documentation-prompt.md) - generate OpenAPI/Swagger docs from existing code with accurate schemas.
- [readme-builder-prompt.md](docs-delivery/readme-builder-prompt.md) - build a comprehensive README from scratch: purpose, quickstart, examples.
- [inline-documentation-prompt.md](docs-delivery/inline-documentation-prompt.md) - add JSDoc/docstrings to existing code: accurate, concise, non-redundant.

## Security & performance

- [security-audit-prompt.md](security-performance/security-audit-prompt.md) **[spec]** - full-repo audit: injection, auth, secrets, dependencies, with verified findings.
- [performance-optimization-prompt.md](security-performance/performance-optimization-prompt.md) - measure-first optimization with before/after proof.
- [secrets-management-prompt.md](security-performance/secrets-management-prompt.md) - audit and remediate hardcoded secrets, set up env-based secret management.
- [load-testing-prompt.md](security-performance/load-testing-prompt.md) - design and run load/stress tests with measurable thresholds.
- [dependency-audit-prompt.md](security-performance/dependency-audit-prompt.md) - audit dependencies for vulnerabilities, license issues, and staleness.

## DevOps & deploy

- [docker-containerization-prompt.md](devops-deploy/docker-containerization-prompt.md) - small, secure, non-root container images.
- [deployment-runbook-prompt.md](devops-deploy/deployment-runbook-prompt.md) - safe deploys with preflight checks and a rollback plan.
- [infrastructure-as-code-prompt.md](devops-deploy/infrastructure-as-code-prompt.md) - Terraform/CDK with least-privilege IAM and state safety.
- [database-schema-migrations-prompt.md](devops-deploy/database-schema-migrations-prompt.md) - backward-compatible schema changes: expand, migrate, contract.
- [monitoring-observability-prompt.md](devops-deploy/monitoring-observability-prompt.md) - set up logging, metrics, and alerting with actionable dashboards.
- [incident-response-prompt.md](devops-deploy/incident-response-prompt.md) - debug a live incident or write a post-mortem with structured triage.

## Career & learning

- [code-interview-practice-prompt.md](career-learning/code-interview-practice-prompt.md) - structured interview coaching with hints on demand.
- [portfolio-project-prompt.md](career-learning/portfolio-project-prompt.md) - shape an idea into a scoped, presentable portfolio project.
- [resume-review-prompt.md](career-learning/resume-review-prompt.md) - review a technical resume: impact bullets, keyword density, honesty.
- [tech-blog-writer-prompt.md](career-learning/tech-blog-writer-prompt.md) - turn a project or technical concept into a clear, engaging blog post.

## Frontend & UI

- [component-build-prompt.md](frontend-ui/component-build-prompt.md) - build a reusable, accessible UI component with props, variants, and stories.
- [responsive-design-prompt.md](frontend-ui/responsive-design-prompt.md) - audit and implement responsive layouts: breakpoints, fluid grids, mobile-first.

## Contributing

Contributions welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a
prompt, code style, and PR guidelines.

Prompts live in individual `*-prompt.md` files, grouped in a category folder.
Each one is self-contained: an H1 title, a one-line usage note, and the prompt
block separated by `---`. Keep prompts tool-agnostic, prescriptive, and
grounded in verification. Add a one-line entry to the matching category above
(or a new category + folder) when you add a file.
