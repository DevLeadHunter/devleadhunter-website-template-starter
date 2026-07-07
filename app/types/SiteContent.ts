/**
 * Shared content contract between a template and the DevLeadHunter tunnel.
 *
 * ⚠️ TEMPORARY local copy. Phase 2 of the templates migration extracts this into the
 * `@devleadhunter/website-content` package (see TEMPLATES_ARCHITECTURE.md in the main repo).
 * Once that package exists, replace the body of this file with a single re-export so every
 * template shares ONE source of truth and this type never drifts:
 *
 *   export type {
 *     SiteContent,
 *     SiteContentService,
 *     SiteContentReview,
 *     SiteContentFaqItem,
 *     SiteContentGalleryImage,
 *     SiteContentOpeningHours,
 *     SiteContentPalette,
 *   } from '@devleadhunter/website-content'
 *   export { emptySiteContent } from '@devleadhunter/website-content'
 *
 * Golden rule: every key is optional — an empty/absent key hides its section.
 */

export interface SiteContentPalette {
  primary?: string
  secondary?: string
  accent?: string
}

export interface SiteContentService {
  title?: string
  description?: string
  icon?: string
}

export interface SiteContentReview {
  author?: string
  rating?: number
  text?: string
}

export interface SiteContentFaqItem {
  question?: string
  answer?: string
}

export interface SiteContentGalleryImage {
  url?: string
  alt?: string
}

export interface SiteContentOpeningHours {
  day?: string
  hours?: string
}

export interface SiteContent {
  businessName?: string
  phone?: string
  email?: string
  city?: string
  area?: string
  subtitle?: string
  palette?: SiteContentPalette

  services?: SiteContentService[]
  reviews?: SiteContentReview[]
  faq?: SiteContentFaqItem[]
  gallery?: SiteContentGalleryImage[]
  zones?: string[]
  openingHours?: SiteContentOpeningHours[]
}

/**
 * Build an empty SiteContent (every section hidden). Handy as a default or in tests.
 * @returns {SiteContent} An empty content object.
 */
export function emptySiteContent(): SiteContent {
  return {}
}
