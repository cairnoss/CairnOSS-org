// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://cairnoss.github.io',
  base: process.env.BASE_PATH || '/CairnOSS-org',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
