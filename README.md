# Sentry Build Workshop Guide

This repository contains the documentation and guide for the **Fullstack Performance and Debugging** workshop, built using [Astro Starlight](https://starlight.astro.build).

## About the Workshop

Sentry Build is a comprehensive hands-on workshop that teaches developers how to implement complete observability in **Vite + React + React Router 7 frontend** and **Node.js backend** JavaScript applications. The workshop covers:

- Setting up distributed tracing across fullstack JavaScript applications
- Implementing custom metrics and performance monitoring
- Instrumenting databases, queues, and caches for complete visibility
- Creating actionable alerts and dashboards
- Using Sentry's visualization tools for debugging and optimization
- Best practices for production-ready observability

## Workshop Content

The workshop content is organized into 4 comprehensive modules:

1. **Getting Started with Tracing and Logs** - Set up Sentry tracing and logging in your Vite frontend and Bun backend application.
2. **Instrumenting Span Attributes, Metrics, and Alerts** - Learn to add custom spans, attributes, and metrics to track your application's behavior.
3. **Tracing Database, Queues, and Caches** - Instrument database queries, background jobs, and caching layers for complete visibility.
4. **Visualizing Traces in Sentry** - Master Sentry's trace visualization tools to debug performance issues and optimize your application.

## Running the Documentation Locally

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (recommended; Node.js ≥16.13 includes Corepack to enable pnpm)
- A [Sentry account](https://sentry.io/signup/)

### Installation

```bash
# Clone the repository
git clone https://github.com/getsentry/sentry-build-academy-guide.git
cd sentry-build-academy-guide

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The documentation will be available at `http://localhost:4321`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Contributing

If you'd like to contribute to this workshop, feel free to open a pull request or file an issue on the repository.

## Workshop Technologies

This workshop uses modern JavaScript technologies:

- **Frontend**: Vite + React + React Router 7 with Sentry browser SDK
- **Backend**: Node.js runtime with Sentry Node.js SDK
- **Database**: SQLite with custom instrumentation
- **Documentation**: Astro Starlight

## Resources

- [Sentry Documentation](https://docs.sentry.io/)
- [JavaScript SDK Documentation](https://docs.sentry.io/platforms/javascript/)
- [Node.js SDK Documentation](https://docs.sentry.io/platforms/javascript/guides/node/)
- [React SDK Documentation](https://docs.sentry.io/platforms/javascript/guides/react/)
- [React Router Documentation](https://reactrouter.com/)
- [Astro Starlight Documentation](https://starlight.astro.build/)

## Astro Starlight Components Used

This workshop uses several Astro Starlight components for enhanced learning:

### Images

```markdown
![Description](/src/assets/img/ImageName.png)
```

### Steps Component

````markdown
import { Steps } from '@astrojs/starlight/components';

<Steps>
  1. **Install Sentry SDK**

     ```bash
     bun add @sentry/bun
     ```

2.  **Configure Sentry**

         Create your configuration file...

    </Steps>
````

### Card Grid Component

```markdown
import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
  <Card title="Module 1" icon="rocket">
    Description of the module content.
  </Card>
</CardGrid>
```

### Callout Components

```markdown
:::tip[Pro Tip]
Your helpful tip content here.
:::

:::note[Important]
Important information to note.
:::

:::caution[Warning]
Warning about potential issues.
:::
```
