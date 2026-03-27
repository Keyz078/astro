---
title: Preview: Markdown & Code
description: Demo note showing headings, lists, code blocks, and other elements for previewing the theme layout.
date: 2026-03-27T12:00:00+07:00
tags:
  - demo
  - preview
  - notes
cover: /images/pso2ngs.png
---

# H1 — Preview Heading

This is a preview note used to check typography and card layout for the site.

## H2 — Secondary Heading

A short paragraph explaining the purpose of this note. Use inline code like `const x = 1` to test monospace styles.

### H3 — Smaller Section

- Bullet list item one
- Bullet list item two
  - nested item

#### H4 — Smallest Heading

> Blockquote example — useful for quoting references or short notes.

---

### Code block (JavaScript)

```js
// Example: debounce utility
function debounce(fn, wait = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

export default debounce;
```

### Inline code and preformatted

Use `npm run dev` to run the local preview.

```
# Sample shell block
$ npm install
$ npm run dev
```

### Table

| Column A | Column B |
| --- | --- |
| one | two |
| three | four |


End of preview note.
