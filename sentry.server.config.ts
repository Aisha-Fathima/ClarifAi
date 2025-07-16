
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://67390add05de05ffc6642a232bc413c1@o4507975198048256.ingest.us.sentry.io/4509677434568704",

  tracesSampleRate: 1,

  debug: false,
});
