import { FC } from "react"

interface ISEOProps {
  readonly description?: string
  readonly lang?: string
  readonly meta?: any[]
  readonly keywords?: string[]
  readonly title: string
  readonly subCategory?: string | null
}

/*
  Document <head> (title, meta, og/twitter tags) is now rendered by the Astro
  layout at build time, so this component is a no-op kept only so the ported
  page components can keep rendering <SEO ... /> unchanged.
*/
export const SEO: FC<ISEOProps> = () => null
