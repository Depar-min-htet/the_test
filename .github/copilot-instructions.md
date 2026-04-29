# GitHub Copilot Instructions

## Language Preference

**Default**: English  
**Myanmar Support**: Respond in Myanmar (Burmese) language when:

- User initiates conversation in Myanmar script
- User explicitly requests Myanmar language
- Context suggests Myanmar language is preferred

See [`skill/myanmar-language-responder.skill`](../skill/myanmar-language-responder.skill) for detailed Myanmar language handling patterns.

## Project-Specific Guidelines

### Portfolio Website Development

This is a static portfolio website for **Đeparminhtet®** design studio. Key considerations:

1. **No Build Step**: Files are served directly - no bundlers or preprocessors
2. **Vanilla Stack**: HTML, CSS, JavaScript only - no frameworks
3. **PHP Backend**: All PHP files must use `declare(strict_types=1);`
4. **Theme System**: Respect light/dark mode CSS variables
5. **Accessibility**: Maintain ARIA labels and keyboard navigation

### Code Style

- **CSS**: Use CSS custom properties, BEM-inspired naming
- **JS**: ES6+, optional chaining, no frameworks
- **HTML**: Semantic structure, ARIA attributes
- **PHP**: Strict types, modern PHP 8+ features

### File Organization

- `index.html` - Main portfolio page
- `css/styles.css` - All styles
- `js/script.js` - All interactions
- `basic.php` - PHP backend entry point

## Documentation

- [`md/AGENTS.md`](../md/AGENTS.md) - Comprehensive repository guidelines
- [`skill/SKILL (V2).md`](<../skill/SKILL%20(V2).md>) - Custom skill definitions

## External Resources

- Google Fonts: Manrope, Playfair Display
- Email: masterBlenderr@outlook.com
- Brand: Đeparminhtet®
