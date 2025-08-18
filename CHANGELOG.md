# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2023-10-27

### Added
- **Blog Functionality:** Implemented `BlogPage` and `BlogPostPage` to display articles and insights.
- **Blog Link in Navbar:** Added a link to the Blog in the main navigation for easy access.
- **Vibrant Placeholder Images:** Replaced all missing or generic images with high-quality, in-situ placeholders from Unsplash to create a complete and professional look across the site.

### Changed
- **Updated `README.md`:** Overhauled the README with a more professional structure, including a project description, technology stack, and clear setup instructions.
- **Improved `CareersPage` CTA:** Changed the button text from "Submit Your Interest" to "Contact Us" for better clarity.
- **Vite Configuration:** Removed the restrictive `Cross-Origin-Embedder-Policy` header to fix image loading issues from external domains. Set `host: true` for better development accessibility.

### Fixed
- **Critical Rendering Bugs:**
    - Resolved a white screen issue caused by an invalid import of the deleted `TeamPage` in `App.jsx`.
    - Fixed a syntax error (`_useState` instead of `= useState`) in `Navbar.jsx` that was preventing the app from rendering.
- **Image Display Errors:**
    - Corrected a widespread issue where `class` was used instead of the JSX `className` in `img` tags, preventing images from rendering correctly. This was fixed across all affected pages and components (PortfolioPage, BlogPage, BlogPostPage, Testimonials, Navbar, Hero, AboutPage).
    - Fixed bugs in the `PortfolioPage` and `BlogPage` where all items were displaying the same placeholder image instead of their unique, assigned images.
- **Broken Links:**
    - Removed the link to the deleted "Our Team" page from the `Navbar` and `Footer` to prevent 404 errors.

### Removed
- **`TeamPage.jsx`:** Deleted the `TeamPage` component and its associated routes as requested.
