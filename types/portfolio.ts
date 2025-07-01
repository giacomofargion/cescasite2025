export interface PerformanceItem {
  title: string
  url: string
  year: string
  venue: string
  description: string
}

export interface CompositionItem {
  title: string
  year: string
  instrumentation: string
  description: string
  image: string
  url?: string
}

export interface FargionItem {
  title: string
  year: string
  format: string
  description: string
  image: string
  url?: string
}

export interface CarouselImage {
  src: string
  credit: string
}

export interface SocialLink {
  name: string
  icon: any
  url: string
}

export interface Section {
  title: string
  type: "text" | "links" | "composition-list" | "fargion-list" | "form"
  leftDescription: string
  description?: string
  items?: PerformanceItem[] | CompositionItem[] | FargionItem[]
}
