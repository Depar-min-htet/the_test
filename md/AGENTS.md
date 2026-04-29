# Repository Guidelines

## Project Overview

This is a **portfolio website** for Đeparminhtet® - a graphic and brand design studio. The site showcases design work including identity systems, packaging, campaign art direction, and visual storytelling.

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Backend**: PHP 8+ (strict types enabled)
- **Styling**: Custom CSS with CSS variables for theming
- **Fonts**: Google Fonts (Manrope, Playfair Display)

## Project Structure

```
Default/
├── index.html          # Main portfolio page
├── basic.php           # PHP backend (strict types)
├── css/
│   └── styles.css      # All styles with light/dark theme support
├── js/
│   └── script.js       # Vanilla JS for UI interactions
├── md/                 # Documentation
└── skill/              # Custom AI skills
```

## Key Conventions

### CSS Architecture

- CSS custom properties (variables) for theming
- Light/dark mode via `[data-theme]` attribute
- BEM-inspired class naming
- Responsive design with `clamp()` for fluid sizing

### JavaScript Patterns

- Vanilla JS, no frameworks
- Optional chaining (`?.`) for safe DOM access
- LocalStorage for theme persistence
- Event delegation for dynamic elements

### PHP Standards

- `declare(strict_types=1);` required in all PHP files
- Modern PHP 8+ features

## Build & Development

No build step required - static files served directly. For local development:

```bash
# PHP built-in server
php -S localhost:8000

# Or use XAMPP (configured in workspace)
```

## Theme System

The site supports light/dark themes:

- Default: System preference detection
- Storage: `localStorage` key `portfolio-theme`
- Toggle: Header button switches themes
- CSS: Variables in `:root` and `:root[data-theme="dark"]`

## Myanmar Language Support

This workspace includes a custom skill for Myanmar language responses. When interacting with Burmese-speaking users, respond in Myanmar script when appropriate.

## Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Focus management for modals/menus

## Design Tokens

Key CSS variables to respect:

- `--paper`: Background color
- `--ink`: Primary text color
- `--accent`: Accent color (#d93422)
- `--gold`: Gold accent (#c99b41)
- `--font-display`: Display headings
- `--font-body`: Body text

## Common Tasks

### Adding a new project card

1. Add HTML in `index.html` `.project-grid`
2. Use `.project-card` class with `data-category`
3. Add visual with `.project-visual` class
4. Include `.project-body` with type, title, description

### Adding new theme colors

1. Define in both `:root` and `:root[data-theme="dark"]`
2. Test contrast ratios
3. Update design tokens section

### PHP file creation

Always start with:

```php
<?php
declare(strict_types=1);
```

## External Links

- Portfolio email: masterBlenderr@outlook.com
- Brand: Đeparminhtet®

## Project Structure & Module Organization

This repository currently stores skill and agent guidance artifacts at the root:

- `SKILL (V2).md` contains the editable Markdown source for a portfolio website skill.
- `myanmar-language-responder.skill` is a packaged skill archive; treat it as a binary artifact unless you are intentionally rebuilding or inspecting the package.
- `GEMINI.md` is present but empty; use it only if this repository needs Gemini-specific instructions.
- `AGENTS.md` is the contributor guide for future maintainers.

There is no application source tree, test directory, or asset folder yet. If the repository grows, prefer clear top-level folders such as `skills/`, `docs/`, `assets/`, and `tests/`.

## Build, Test, and Development Commands

No build system is configured. Useful local checks are:

```powershell
Get-ChildItem -Force
```

Lists all repository files, including hidden metadata.

```powershell
Get-Content '.\SKILL (V2).md' -TotalCount 80
```

Reviews the start of the main Markdown skill file.

```powershell
rg --files
```

Shows the tracked-style file layout quickly when `ripgrep` is installed.

## Coding Style & Naming Conventions

For Markdown, use ATX headings (`#`, `##`), sentence-case section titles where practical, and short paragraphs or bullets. Keep instructions direct and action-oriented. Use fenced code blocks with language tags for commands, for example `powershell`.

Use descriptive file names. Prefer lowercase kebab-case for new skill packages or folders, such as `portfolio-website-skill/`. Existing names with spaces should be preserved unless a broader cleanup is planned.

## Testing Guidelines

There is no automated test suite. For Markdown changes, manually verify heading order, readable formatting, and that examples are copy-pasteable in PowerShell. For `.skill` artifacts, confirm the archive contents before publishing or replacing it.

## Commit & Pull Request Guidelines

This directory is not currently a Git repository, so no local commit convention is available. If Git is initialized later, use concise imperative commits such as `Add portfolio skill guidance` or `Update packaged Myanmar responder skill`.

Pull requests should include a short purpose statement, a list of changed files, and any manual validation performed. Include screenshots only when visual assets or rendered documentation are changed.

## Security & Configuration Tips

Do not commit secrets, API keys, personal credentials, or private user data in skill files. Keep packaged binary artifacts reproducible from documented source whenever possible.
