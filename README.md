# Sentry Build Workshop Guide

This repository contains the documentation and guide for the Sentry Build workshop, built using [Astro Starlight](https://starlight.astro.build).

## About the Workshop

Sentry Build is a hands-on workshop that teaches developers how to integrate Sentry into **Laravel and React** applications using a sample project called "Unborked". The workshop covers:

- Getting started with the Unborked Laravel/React project
- Installing and configuring Sentry for Laravel
- Debugging performance issues using Sentry Tracing and the Laravel Framework View
- Identifying and fixing application errors
- Understanding core Sentry features like Error Monitoring, Performance Monitoring, and Replays in the context of a full-stack application.

## Workshop Content

The workshop content, driven by the documentation site, covers modules like:

1.  **Code Breaks... So What Now** - Introduction to the "Unborked" application.
2.  **Install Sentry!** - Installation and initial Sentry configuration for Laravel.
3.  **Why...so...slow?!** - Using Sentry Tracing to debug backend performance issues.
4.  **A store that can't checkout** - Investigating and fixing frontend/backend errors affecting functionality.
5.  **Error undefined; but maybe not anymore?** - Further debugging techniques with Sentry.

## Running the Documentation Locally

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/getsentry/sentry-build-laravel.git
cd sentry-build-laravel

# Install dependencies
npm install

# Start the development server
npm run dev
```

The documentation will be available at `http://localhost:4321`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Contributing

If you'd like to contribute to this workshop, feel free to open a pull request or file an issue on the repository.

## Resources

- [Sentry Documentation](https://docs.sentry.io/)
- [Laravel SDK Documentation](https://docs.sentry.io/platforms/php/guides/laravel/)
- [React SDK Documentation](https://docs.sentry.io/platforms/javascript/guides/react/)
- [Astro Starlight Documentation](https://starlight.astro.build/)

## Components 

Scaling an image down and making it clicakble - 

```javascript
<ScaledImage 
  src="/assets/img/AlertsScreen.png" 
  alt="Alert Types in Sentry" 
  size={90}
  caption="Alert Types in Sentry" 
/>
```

Creating steps in Astro 

```javascript 
<Steps>

  1. Access the alerts screen in your Unborked mobile project 

     - Highlight issues on the left navigation screen, and select "Alerts"

  2. Delete the default alert thats been configured 

     Select the 3 dots on the right hand side and delete the default alert. Ensure you confirm the deletion. 

</Steps>
```

