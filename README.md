# TilingByDMKR.co.uk - Preproduction Website

## Project Description

This repository contains the preproduction build for the TilingByDMKR.co.uk website. It is a modern, responsive web application designed to showcase tiling services, display a portfolio of work, and capture customer quote requests.

**Core Technologies:**
*   **Framework:** React with Vite
*   **Styling:** Tailwind CSS
*   **Backend & Auth:** Supabase
*   **Animations:** Framer Motion

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:
*   Node.js (v18 or higher)
*   npm (or yarn)
*   Git

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/HD2AI/HD2.ai_DMKR_Preproduction.git
    cd HD2.ai_DMKR_Preproduction
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    This project requires a connection to a Supabase backend. Create a `.env` file in the root directory by copying the example file:
    ```bash
    cp .env.example .env
    ```
    You will then need to populate the `.env` file with your Supabase Project URL and Anon Key.
    ```
    VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
    VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```

### Running the Application

To start the local development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the next available port).

## Key Features

*   **Component-Based Architecture:** Built with reusable React components.
*   **Dynamic Pages:** Includes a portfolio, blog, service areas, and more.
*   **Backend Integration:** Connected to Supabase for quote requests and future features.
*   **Responsive Design:** Styled with Tailwind CSS for a seamless experience on all devices.
