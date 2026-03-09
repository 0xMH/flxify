# Flxify

[![CI](https://github.com/ahmedeltaweel/flxify/actions/workflows/ci.yml/badge.svg)](https://github.com/ahmedeltaweel/flxify/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/flxify.flxify)](https://marketplace.visualstudio.com/items?itemName=flxify.flxify)

A web-based developer text utility tool with **110 executable scripts** accessible via a command palette. Paste text, run a script, get transformed output. Think "Swiss Army knife for text transformations."

**Try it:** [flxify.dev](https://flxify.dev)

## Features

- **110 scripts** for JSON formatting, Base64 encoding, hashing, case conversion, sorting, and more
- **Command palette** (Cmd/Ctrl+B) with fuzzy search
- **Syntax highlighting** with automatic language detection (JSON, HTML, CSS, Python, YAML, SQL, etc.)
- **Works offline** after first load — no server required, works from `file://` URLs
- **100% client-side** — your data never leaves your browser
- **VS Code extension** with the same 110 scripts

## Quick Start

### Web

Visit [flxify.dev](https://flxify.dev), paste your text, and press **Cmd/Ctrl+B** to open the command palette.

### VS Code

Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=flxify.flxify), then run **Flxify: Run Script** from the command palette.

### Local Development

```bash
git clone https://github.com/ahmedeltaweel/flxify.git
cd flxify
npm install
npm run build    # generates app.js + tool pages
npm test         # runs 700+ tests
```

Open `index.html` in a browser — no web server needed.

## How Scripts Work

Every script receives a `BoopState` object. The `state.text` property automatically handles selection vs full-document mode:

```javascript
/**
  {
    "api": 1,
    "name": "My Script",
    "description": "What it does",
    "author": "Your Name",
    "icon": "icon-name",
    "tags": "search,terms"
  }
**/

function main(state) {
  state.text = state.text.toUpperCase();
}
```

### Script Patterns

**Transform text:**
```javascript
function main(state) {
  state.text = state.text.split('').reverse().join('');
}
```

**Report info without modifying text:**
```javascript
function main(state) {
  state.postInfo(state.text.length + ' characters');
}
```

**Generate new content:**
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

**Handle errors:**
```javascript
function main(state) {
  try {
    state.text = JSON.stringify(JSON.parse(state.text), null, 2);
  } catch (e) {
    state.postError("Invalid JSON");
  }
}
```

## Available Scripts

See [SCRIPTS.md](SCRIPTS.md) for a complete reference of all 110 scripts organized by category.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding scripts, writing tests, and submitting pull requests.

## License

[MIT](LICENSE)
