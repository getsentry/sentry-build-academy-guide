import * as Sentry from "@sentry/astro";

Sentry.init({
    dsn: "https://67d1f1f817977001254ca9e1cbe2f8f8@o4508130833793024.ingest.us.sentry.io/4509473743437824",

  // Adds request headers and IP for users, for more info visit: for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // Define how likely traces are sampled. Adjust this value in production,
  // or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
});
