export interface Slide {
  id: number
  rating: number
  description: string
  image: string
  user: string
}

export interface FetchSlidesOptions {
  shouldFail?: boolean
}
