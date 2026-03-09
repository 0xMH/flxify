# Contributing to Flxify

Thanks for your interest in contributing! This guide covers adding scripts, writing tests, and submitting pull requests.

## Setup

```bash
git clone https://github.com/ahmedeltaweel/flxify.git
cd flxify
npm install
```

Verify everything works:

```bash
npm run validate   # runs tests, builds app.js, checks syntax
```

## Adding a New Script

### 1. Create the script file

Create a `.js` file in `scripts/` with a metadata block and `main()` function:

```javascript
/**
  {
    "api": 1,
    "name": "My Script Name",
    "description": "Short description of what it does",
    "author": "Your Name",
    "icon": "icon-name",
    "tags": "comma,separated,search,terms"
  }
**/

function main(state) {
  state.text = state.text.toUpperCase(); // your transform here
}
```

**Naming convention:** Use PascalCase for the filename (e.g., `FormatJSON.js`, `Base64Encode.js`).

### 2. Understand the BoopState API

Every script's `main()` function receives a `state` object with:

| Property/Method | Description |
|----------------|-------------|
| `state.text` | Read/write. If text is selected, operates on selection; otherwise operates on full document |
| `state.fullText` | Read/write. The entire editor content |
| `state.selection` | Read/write. The selected text (null if nothing selected) |
| `state.isSelection` | Read-only. Whether text is currently selected |
| `state.postError(msg)` | Display an error message |
| `state.postInfo(msg)` | Display an info message |
| `state.insert(text)` | Insert text at cursor position |

### 3. Script patterns

**Transform script** (most common):
```javascript
function main(state) {
  state.text = state.text.split('').reverse().join('');
}
```

**Info-only script** (reports without modifying):
```javascript
function main(state) {
  state.postInfo(state.text.length + ' characters');
}
```

**Generator script** (creates new content):
```javascript
function main(state) {
  var result = generateSomething();
  if (state.isSelection) {
    state.text = result;
  } else {
    state.insert(result);
  }
}
```

### 4. Using library modules

Seven library modules are available via `require()`:

| Module | Usage |
|--------|-------|
| `@flxify/base64` | `const { encode, decode } = require('@flxify/base64')` |
| `@flxify/hashes` | `const Hashes = require('@flxify/hashes')` |
| `@flxify/he` | `const { encode, decode } = require('@flxify/he')` |
| `@flxify/js-yaml` | `const yaml = require('@flxify/js-yaml')` |
| `@flxify/lodash.boop` | `const { camelCase, kebabCase } = require('@flxify/lodash.boop')` |
| `@flxify/papaparse` | `const Papa = require('@flxify/papaparse.js')` |
| `@flxify/vkBeautify` | `const vkbeautify = require('@flxify/vkBeautify')` |

### 5. Add to SEO categories

Edit `seo-data.json`:
- Add the script key (filename without `.js`) to the appropriate category in `_categories`
- Optionally add custom SEO metadata in `_customMeta`

### 6. Build and test

```bash
npm run build    # regenerates app.js + tool pages
npm test         # runs all tests
```

### 7. Add tests

Create a test file in `tests/scripts/specific/` if your script has testable behavior:

```javascript
const { createRequire, loadScript } = require('../../helpers/script-loader');
const { MockBoopState } = require('../../helpers/mock-state');

const requireShim = createRequire();

describe('My Script', () => {
  const script = loadScript('MyScript.js');

  it('transforms input correctly', () => {
    const state = new MockBoopState('input text');
    script.execute(requireShim, state);
    expect(state.fullText).toBe('expected output');
  });
});
```

### 8. Sync to VS Code extension

```bash
cp scripts/MyScript.js vscode-extension/src/scripts/
```

## Pull Request Process

1. Fork the repository and create a feature branch
2. Make your changes
3. Run `npm run validate` — all tests must pass, build must succeed
4. Submit a PR with a clear description

### PR checklist

- [ ] Script has valid metadata (api, name, description, icon, tags)
- [ ] Script handles empty input without crashing
- [ ] Script uses `state.postError()` for user errors (not unhandled throws)
- [ ] Script is added to a category in `seo-data.json`
- [ ] Tests added for non-trivial logic
- [ ] `npm run validate` passes

## Code Style

- **No strict mode.** The generated `app.js` does not use `'use strict'` because some scripts rely on non-strict behavior.
- **Use `var` or `let`/`const`.** Both work. Existing scripts use a mix.
- **Use `state.postError()` for user-facing errors.** Don't let scripts throw unhandled exceptions on bad input.
- **Generator scripts must use `state.insert()`.** See the generator pattern above.

## Project Structure

| Path | Description |
|------|-------------|
| `scripts/*.js` | Source scripts (auto-discovered at build) |
| `scripts/lib/*.js` | Library modules (auto-discovered at build) |
| `build_app.js` | Build script — generates app.js + SEO pages |
| `app.js` | Generated bundle (do not edit directly) |
| `index.html` | Main page with CodeMirror editor |
| `seo-data.json` | Category mappings + custom SEO metadata |
| `tools/` | Generated SEO pages (do not edit directly) |
| `tests/` | Test suite |
| `vscode-extension/` | VS Code extension (separate project) |
