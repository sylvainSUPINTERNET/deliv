import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';


// https://www.npmjs.com/package/auth-astro

// Consider to use callback url such as describe in the doc ! ( must contains provider name in the callback uri ! by default, could be overrided)

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  trustHost: true,
  session: {jwt: true},
});