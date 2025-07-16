import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
  images: {
      remotePatterns: [
          { hostname: 'img.clerk.com'}
      ]
  }
};

export default withSentryConfig(withSentryConfig(nextConfig, {


org: "jsmpro",
project: "jsm_converso",


silent: !process.env.CI,

widenClientFileUpload: true,


disableLogger: true,


automaticVercelMonitors: true,
}), {


org: "bmsce-nv",
project: "saas",

silent: !process.env.CI,

widenClientFileUpload: true,


disableLogger: true,


automaticVercelMonitors: true,
});