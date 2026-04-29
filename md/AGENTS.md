# Repository Guidelines

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
