# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro Starlight documentation site for the Sentry Build Academy workshop. The site teaches developers how to implement comprehensive observability with Sentry in fullstack JavaScript applications using Vite (frontend) and Bun (backend).

## Development Commands

- `npm run dev` or `npm start` - Start development server (localhost:4321)
- `npm run build` - Build for production (outputs to ./dist/)
- `npm run preview` - Preview production build locally
- `npm install` - Install dependencies

## Architecture

**Framework**: Astro with Starlight integration for documentation theming
**Content**: MDX files in `/src/content/docs/` with structured workshop modules
**Deployment**: Vercel adapter configured for production deployment

## Workshop Content Structure

The workshop is organized into 4 main topic areas focused on fullstack JavaScript performance and debugging:

1. **Getting Started with Tracing and Logs** (`/tracing-logs/`)
   - Setting up Sentry in Vite React frontend
   - Configuring Sentry in Bun backend
   - Understanding distributed tracing concepts
   - Creating basic spans and structured logging

2. **Instrumenting Span Attributes, Metrics, and Alerts** (`/instrumentation/`)
   - Adding custom attributes to spans
   - Implementing custom metrics for business KPIs
   - Setting up performance and error alerts
   - Advanced frontend and backend instrumentation patterns

3. **Tracing for Database queries, Queues, and Caches** (`/database-queues-caches/`)
   - Database query instrumentation with detailed performance metrics
   - Background job and queue monitoring
   - Cache hit rate and performance tracking
   - Repository pattern implementation with tracing

4. **Visualizing Traces in Sentry** (`/visualizing-traces/`)
   - Using Sentry's waterfall charts and trace analysis
   - Creating custom dashboards and alerts
   - Performance debugging workflows
   - Advanced filtering and query techniques

## Technology Focus

The workshop specifically covers:
- **Frontend**: Vite + React with Sentry browser SDK
- **Backend**: Bun runtime with Sentry Bun SDK
- **Database**: SQLite with custom instrumentation patterns
- **Observability**: Distributed tracing, custom metrics, structured logging
- **Performance**: End-to-end monitoring and optimization techniques

## Key Configuration Files

- `astro.config.mjs` - Starlight theme with updated navigation for JavaScript workshop
- `src/content.config.ts` - Content collections schema using Zod validation
- Custom CSS in `/src/styles/` for Sentry-specific styling
- External links configured for JavaScript/Bun Sentry documentation

## Content Guidelines

- All examples use modern JavaScript (ES modules, async/await)
- Code samples focus on Vite and Bun-specific implementations
- Workshop assumes familiarity with React and Node.js concepts
- Emphasis on practical, production-ready instrumentation patterns