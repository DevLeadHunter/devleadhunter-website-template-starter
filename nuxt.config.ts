import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'

const currentDir: string = dirname(fileURLToPath(import.meta.url))

// Layer config for a DevLeadHunter website template.
// This repo is a Nuxt layer consumed by demo-host via `extends`. It knows nothing
// about the tunnel (Storyblok, PostHog, slugs, DB) — it renders a typed `SiteContent`.
export default defineNuxtConfig({
  $meta: {
    name: 'devleadhunter-website-template-starter',
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint'],

  components: [
    {
      path: join(currentDir, './app/components'),
      pathPrefix: false,
      // Only the root component is auto-registered globally (demo-host dispatches to it
      // by name). Sections are imported RELATIVELY by the root and ignored here, so two
      // templates can each have a HeroSection without colliding in demo-host's registry.
      ignore: ['**/sections/**'],
    },
  ],

  css: [join(currentDir, './app/assets/css/template.css')],

  vite: {
    plugins: [tailwindcss()],
  },
})
