<div align="center">

<img src="https://img.shields.io/badge/zeight-store-6366f1?style=for-the-badge&logoColor=white" alt="Zeight Store"/>

# 🛍️ Zeight Store

**Modern e-commerce frontend built with TypeScript**

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

[Overview](#overview) · [Features](#features) · [Getting Started](#getting-started) · [Screenshots](#screenshots) · [Contributing](#contributing)

</div>

---

## Overview

Zeight Store is a responsive, modern e-commerce web application. It connects to the [Zeight Backend](https://github.com/akalankawijesing/zeight-backend) API to deliver a complete shopping experience — from product browsing to checkout.

> 🔗 **Live Demo:** [Coming Soon](#)

## Features

- 🛒 **Product Catalog** — Browse and filter products with ease
- 🔍 **Search** — Real-time product search functionality
- 🛍️ **Cart Management** — Add, remove, and update cart items
- 👤 **User Authentication** — Register, login, and manage your account
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Fast & Lightweight** — Optimized build for production

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | TypeScript |
| Styling | CSS / Tailwind |
| API | REST (Zeight Backend) |
| Build | Vite / Webpack |

## Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/akalankawijesing/zeight-store.git
cd zeight-store

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### Running the App

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Screenshots

| Page | Preview |
|------|---------|
| Home | *(screenshot)* |
| Product | *(screenshot)* |
| Cart | *(screenshot)* |

> Add screenshots to `/screenshots` folder and update this table.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── services/       # API calls
├── store/          # State management
├── types/          # TypeScript interfaces & types
└── utils/          # Helper functions
```

## Related

- 🔗 [Zeight Backend](https://github.com/akalankawijesing/zeight-backend) — API server

## Contributing

Pull requests are welcome! Open an issue first to discuss major changes.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/akalankawijesing">Akalanka Wijesing</a>
</div>
