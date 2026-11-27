# CLAUDE.md

## Tech Stack
- Plain HTML, CSS, and JavaScript only.
- No frameworks, no build step. Files open directly in a browser.

## Project Structure
The repository is nearly empty for now. As it grows, keep things simple:
- `index.html` — the home page (top level)
- `css/` — stylesheets
- `js/` — scripts (`theme.js` is the light/dark toggle)
- `tools/` — one HTML page per tool (`voltage-divider.html` is the first tool)
- `assets/` — images and other static files

Update this section whenever the structure changes.

## Key Requirements
1. Every page must be responsive and work on desktop, tablet, and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Feature Plan
A portal where visitors try small web tools. Audience: Electrical Engineering students and hobbyists.

### Portal structure
- **Homepage (`index.html`):** portal title, a short intro, and a grid of tool cards. Each card has a name, a one-line description, and a link.
- **Opening a tool:** the visitor clicks a tool card. Each tool lives on its own page in `tools/` (for example `tools/voltage-divider.html`).
- **Getting back:** every tool page has a "Back to all tools" link to `index.html`, plus the portal title in the header, which also links home.
- **Adding a tool later:** (1) add a page in `tools/`, (2) add its script in `js/`, (3) add one card to the grid in `index.html`. Nothing else changes.
- **Shared on every page:** `css/style.css` (layout and theme colors) and `js/theme.js` (light/dark toggle).

### Phases
**Phase 1 — Portal plus its first tool (done)**
- [x] Portal shell: homepage, shared CSS, light/dark toggle, and a tool card that opens its tool page and returns via "Back to all tools". Styling is simple and neutral; the visual design is chosen later.
- [x] Replace the placeholder with the voltage divider calculator (`tools/voltage-divider.html`, `js/voltage-divider.js`): in = input voltage, R1, R2 (Ω, kΩ, MΩ); out = output voltage and divider ratio, with friendly checks for bad input.
- Throughout: responsive layout and good contrast in both themes.

**Phase 2 — More tools (not planned in detail yet)**
- Add further EE tools one at a time, using the steps above.

**Phase 3 — Polish (not planned in detail yet)**
- Ideas to decide later, such as tool search or categories once there are many tools.

## Rules for Claude
- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess when something is unclear.
