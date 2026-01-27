import * as Sentry from "@sentry/node";
import 'dotenv/config'
// Ensure to call this before importing any other modules!
Sentry.init({
    dsn: process.env.SENTRY_DSN = "https://f300612c3e454a6446fb0f7e2e1a1b29@o4510776499961856.ingest.de.sentry.io/4510776562221136",

    // Add Tracing by setting tracesSampleRate
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});