#!/usr/bin/env bash
# Docs lint for awesome-ai-prompts.
# Verifies that:
#   1. every relative link in README.md resolves to a real file
#   2. every *-prompt.md follows the repo structure (H1 first line, --- separator)
#   3. prompt files live in a category folder, not at the repo root
set -uo pipefail

repo="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo" || exit 1

fail=0

# 1. README links resolve to existing files (skip external/anchor links).
while IFS= read -r link; do
  case "$link" in
    http* | '#'* | mailto:*) continue ;;
  esac
  path="${link%%#*}"
  [[ -z "$path" ]] && continue
  if [[ ! -e "$path" ]]; then
    echo "README broken link: $link"
    fail=1
  fi
done < <(grep -oE '\]\([^)]*\)' README.md | sed -E 's/^\]\(//; s/\)$//')

# 2. Prompt files follow the structure conventions.
count=0
while IFS= read -r f; do
  count=$((count + 1))
  first="$(head -n 1 "$f")"
  case "$first" in
    \#\ *) ;;
    *)
      echo "$f: first line must be an H1 title (# ...)"
      fail=1
      ;;
  esac
  if ! grep -q '^---$' "$f"; then
    echo "$f: missing --- separator before the prompt block"
    fail=1
  fi
done < <(find . -name '*-prompt.md' -not -path './.git/*' | sort)
if [[ "$count" -eq 0 ]]; then
  echo "No prompt files found"
  exit 1
fi

# 3. No prompt files at the repo root.
while IFS= read -r f; do
  if [[ "$(dirname "$f")" == "." ]]; then
    echo "Prompt file at repo root, should be in a category folder: $f"
    fail=1
  fi
done < <(find . -maxdepth 1 -name '*-prompt.md')

if [[ "$fail" -ne 0 ]]; then
  echo "check-links.sh: FAILED"
  exit 1
fi
echo "check-links.sh: OK ($count prompts, README links verified)"
