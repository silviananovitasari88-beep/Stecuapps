## Quick orientation

This repository is a class submission collection (student web exercises). Top-level organization:

- `README.md` — repository title and short description
- `Chapter01/`, `Chapter02/`, `Chapter03/` — chapter folders containing one folder per student
- Student folders follow the pattern `71425XXXXX_Name` and contain simple static websites (HTML/CSS)

Typical student deliverable (enforced by `Chapter03/README.md`):
- a `README.md` describing the work
- `index.html` (or other `.html` pages) and `style.css` (or similarly named CSS file)
- assets (images, etc.) placed in the same student folder

## Purpose for an AI coding agent
- Treat most files as static student submissions: they are examples, not a single app.
- Do not refactor or rename student folders/files unless explicitly instructed by a human reviewer.

## What to look for (concrete examples)
- See `Chapter03/714250043_zahran/External.html` for a representative page that links `style.css` with
  `<link rel="stylesheet" href="style.css">` and uses relative links for navigation.
- Use `Chapter03/README.md` to understand chapter-level requirements (each student must provide a README and at least an index + CSS).

## Common patterns and conventions (discoverable in the repo)
- Student folder naming: `71425<student-number>_<name>` — keep this exact pattern when adding or referencing folders.
- Pages are static HTML; CSS files are typically named `style.css` and referenced with a relative path.
- Many files are standalone examples — there is no single shared build, bundler, or server configuration.

## Developer workflows & agent behavior
- Preview: to test changes, open the HTML file in a browser (double-click or use a local static server). There is no project-wide build step.
- Tests: there are no automated tests present. Avoid adding sweeping changes that require large-scale validation.
- Commits: keep changes small and named clearly (e.g., `fix: update README in Chapter03/714250043_zahran` or `chore: add .github copilot instructions`).

## When an agent should modify files
- Safe edits:
  - Add repository metadata (this `.github/copilot-instructions.md`).
  - Add small helper files (linting, CONTRIBUTING) only when requested.
  - Fix obvious typos in top-level README if asked.
- Avoid:
  - Mass renaming of student folders or HTML files.
  - Rewriting student content without explicit permission.

## Useful search patterns to use when exploring
- `Chapter*/**/*.html` — find student pages
- `Chapter*/**/README.md` — read student descriptions
- `**/style.css` — locate CSS files used across folders

## Small examples for patching/changes
- To add a new student folder keep the naming scheme and include `README.md`, `index.html` and `style.css` in that folder.
- When linking between pages in the same student folder use relative links (e.g., `href="index.html"`).

## Closing notes for reviewers / next steps
- If you (the human) want the agent to standardize or add automation (a preview server, simple linter, or index of student pages), specify the scope and whether it’s allowed to modify student folders.
- Ask the agent to iterate on this document if anything seems missing or if you want stricter rules for edits.
