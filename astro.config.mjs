// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Sentry Build',
      logo: {
        src: './src/assets/placeholder.svg',
        replacesTitle: true,
      },
      components: {
        // Use our custom logo component
        SiteTitle: './src/components/SentryLogo.astro',
      },
      social: {
        github: 'https://github.com/getsentry/sentry-build-javascript',
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
            { label: 'Getting Started with Sentry', slug: 'getting-started' },
            { label: 'Broken Academy Single Sign On (Tracing, Logs)', slug: 'troubleshooting-auth' },
            { label: 'Fixing Academy Course Search (Tracing, Logs)', slug: 'fixing-course-search' },
            { label: 'Debugging Course Enrollments (Tracing, Logs)', slug: 'debugging-enrollments' },
            { label: 'Tracing for Database queries, Queues, and Caches', slug: 'database-queues-caches' },
            { label: 'Visualizing Traces in Sentry', slug: 'visualizing-traces' },
            { label: 'Wrapping Up!', slug: 'wrapping-up' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Sentry Documentation', link: 'https://docs.sentry.io/' },
            {
              label: 'JavaScript SDK',
              link: 'https://docs.sentry.io/platforms/javascript/',
            },
            {
              label: 'Bun SDK',
              link: 'https://docs.sentry.io/platforms/javascript/guides/bun/',
            },
          ],
        },
      ],
    }),
  ],

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
