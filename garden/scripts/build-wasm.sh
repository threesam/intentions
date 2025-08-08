#!/usr/bin/env bash
set -euo pipefail
DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
ROOT="$(dirname "$DIR")"
CRATE_DIR="$ROOT/wasm-life"

if ! command -v wasm-pack >/dev/null 2>&1; then
  echo "wasm-pack not found; skipping wasm build (JS fallback will be used)." >&2
  exit 0
fi

if [ -d "$CRATE_DIR" ]; then
  (cd "$CRATE_DIR" && wasm-pack build --target web --release --out-dir "$ROOT/static/wasm" )
  echo "WASM built to static/wasm" >&2
else
  echo "No wasm-life crate found; skipping." >&2
fi