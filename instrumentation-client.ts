

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1964c0b74e587189c8fbe41627de0a79@o4506876178464768.ingest.us.sentry.io/4509366354247680",

  integrations: [
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1,

  
  replaysSessionSampleRate: 0.1,

  replaysOnErrorSampleRate: 1.0,

  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;