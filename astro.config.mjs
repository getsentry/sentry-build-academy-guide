// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'OpenTelemetry with Sentry Workshop',
    logo: {
      src: './src/assets/placeholder.svg',
      replacesTitle: true,
    },
    components: {
      // Use our custom logo component
      SiteTitle: './src/components/SentryLogo.astro',
    },
    social: {
      github: 'https://github.com/getsentry/otel-workshop-guide',
    },
    customCss: [
      // Add our custom Sentry theme
      './src/styles/custom.css',
    ],
    sidebar: [
      {
        label: 'Workshop',
        items: [
          { label: 'Quickstart', slug: 'quickstart' },
          {
            label: 'Understanding Distributed Tracing',
            slug: 'understanding-distributed-tracing'
          },
          {
            label: 'Configure OpenTelemetry SDK',
            slug: 'configure-otel-sdk'
          },
          {
            label: 'Connect Frontend to Backend Tracing',
            slug: 'connect-frontend-backend',
          },
          {
            label: 'Debugging Common Setup Issues',
            slug: 'debugging-setup-issues',
          },
          {
            label: 'Investigating Performance Issues',
            slug: 'investigating-performance',
          },
          {
            label: 'Investigating Errors with Logs',
            slug: 'investigating-errors',
          },
          {
            label: '(Optional) Using the OTEL Collector',
            slug: 'using-otel-collector',
          },
          {
            label: 'Wrapping Up',
            slug: 'wrapping-up',
          },
        ],
      },
      {
        label: 'Resources',
        items: [
          { label: 'Sentry Documentation', link: 'https://docs.sentry.io/' },
          { label: 'Sentry OTLP Documentation', link: 'https://docs.sentry.io/concepts/otlp/' },
          {
            label: 'Distributed Tracing Concepts',
            link: 'https://docs.sentry.io/concepts/key-terms/tracing/distributed-tracing/',
          },
          {
            label: 'Trace Explorer',
            link: 'https://docs.sentry.io/product/explore/trace-explorer/',
          },
          {
            label: 'OpenTelemetry Documentation',
            link: 'https://opentelemetry.io/docs/',
          },
        ],
      },
    ],
  }), sentry()],

  // Configure Vercel adapter with specific options for assets
  adapter: vercel({
    imageService: true,
    includeFiles: [
      './src/assets/**/*',
      './src/assets/img/**/*',
      './src/assets/img/**/*.gif',
      './src/assets/sentry-glyph-light-400x367.png',
    ],
  }),
});