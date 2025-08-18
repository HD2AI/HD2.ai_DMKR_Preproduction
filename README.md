# DMKR.co.uk - Preproduction Website

## Project Overview

Welcome to the preproduction repository for DMKR.co.uk, a leading provider of professional tiling services. This repository serves as a staging ground for new features, design updates, and content revisions before they are deployed to our live production environment. Our goal is to deliver exceptional tiling solutions, and this platform allows us to refine our digital presence with precision and style.

The website is a modern, responsive single-page application (SPA) designed to showcase our portfolio, expertise, and client testimonials, while providing an intuitive way for potential clients to request quotes and get in touch.

## Technologies Used

This project leverages a robust and modern tech stack to ensure performance, scalability, and developer efficiency:

*   **React:** A declarative, component-based JavaScript library for building user interfaces.
*   **Vite:** A lightning-fast build tool and development server, significantly improving the development experience.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs without leaving your HTML.
*   **React Router DOM:** For declarative routing within the application, managing navigation between different pages and sections.
*   **Framer Motion:** A production-ready motion library for React, enabling fluid and engaging animations.
*   **Supabase:** An open-source Firebase alternative, used here for backend services including authentication and database management (for quote requests).

## Getting Started

Follow these steps to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your system:

*   **Node.js:** (LTS version recommended) - JavaScript runtime environment.
*   **npm** or **Yarn:** Package managers for Node.js.
*   **Git:** Version control system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/HD2AI/HD2.ai_DMKR_Preproduction.git
    cd HD2.ai_DMKR_Preproduction
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use yarn
    # yarn install
    ```
3.  **Environment Variables:**
    Create a `.env` file in the root of the project by copying the provided example. This file will store sensitive information like API keys.
    ```bash
    cp .env.example .env
    ```
    Populate `.env` with your Supabase project URL and anonymous key:
    ```
    VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
    VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```
    You can find these credentials in your Supabase project settings under "API".

### Running the Application

To start the local development server:

```bash
npm run dev
# or if you use yarn
# yarn dev
```
(Note: The `npm start` script might be configured for production builds. Use `npm run dev` for local development.)

The application should now be accessible in your browser, typically at `http://localhost:5173/` or a similar address indicated in your terminal.

## Developer Login Insights

This section is crucial for developers working with user authentication and permissions within the DMKR.co.uk application, which uses **Supabase Authentication**.

*   **Authentication Flow:** The primary authentication method implemented is email and password. The relevant logic for user sign-up, sign-in, and session management can be found in `src/lib/supabaseClient.js` and integrated into components like `src/pages/LoginPage.jsx`.
*   **Default Credentials (for Testing):**
    **WARNING:** For security reasons, sensitive default credentials are **NOT** hardcoded or committed to this repository. For local development and testing purposes, you should:
    *   Create test user accounts directly within your Supabase project's Authentication dashboard.
    *   Alternatively, securely obtain test credentials from a designated internal password manager or a team lead.
    *   Ensure any credentials used in your local `.env` file are for development purposes only and never exposed publicly.
*   **Accessing Different User Roles/Permissions:** If the application implements different user roles (e.g., admin, client, public), you can test these roles by:
    *   Creating multiple test users in Supabase with different metadata or roles.
    *   Implementing a local mock authentication service that can simulate different user contexts.
    *   Refer to the Supabase documentation for detailed guidance on managing user metadata and RLS (Row Level Security).
*   **Supabase Client Setup:** The Supabase client is initialized in `src/lib/supabaseClient.js`. Ensure your `.env` variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) are correctly set up to connect to your development Supabase project.

## Project Structure

A brief overview of the main directories and their contents:

*   `public/`: Static assets like images and the favicon.
*   `src/`: Main application source code.
    *   `src/components/`: Reusable UI components (e.g., Navbar, Footer, CTA).
    *   `src/lib/`: Utility functions and client configurations (e.g., `supabaseClient.js`, `utils.js`).
    *   `src/pages/`: Top-level page components for different routes (e.g., HomePage, PortfolioPage, BlogPage).
    *   `src/index.css`: Global Tailwind CSS imports and custom styles.
    *   `src/main.jsx`: Main entry point for the React application.
    *   `src/App.jsx`: Defines application routes.
*   `vite.config.js`: Vite build tool configuration.
*   `tailwind.config.js`: Tailwind CSS configuration.
*   `postcss.config.js`: PostCSS configuration.

## Contributing

We welcome contributions! If you find a bug or have a feature request, please open an issue first. For major changes, please discuss your ideas with the team.

## License

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.
