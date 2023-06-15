export interface SearchResponse {
  score: number
  show: Show
}

export interface Show {
  id: number
  url: string
  name: string
  type: Type
  language: Language | string | null
  genres: string[]
  status: Status
  runtime: number | null
  averageRuntime: number | null
  premiered: Date | string | null
  ended: Date | string | null
  officialSite: null | string
  schedule: Schedule
  rating: Rating
  weight: number
  network: Network | null
  webChannel: Network | null
  dvdCountry: null
  externals: Externals
  image: Image
  summary: null | string
  updated: number
  _links: Links
}

export interface Links {
  self: PreviousEpisode
  previousepisode?: PreviousEpisode
}

export interface PreviousEpisode {
  href: string
}

export interface Externals {
  tvrage: number | null
  thetvdb: number | null
  imdb: string
}

export interface Image {
  medium: string
  original: string | null
}

export enum Language {
  Dutch = 'Dutch',
  English = 'English',
  Mongolian = 'Mongolian'
}

export interface Network {
  id: number
  name: string
  country: Country | null
  officialSite: null | string
}

export interface Country {
  name: string
  code: string
  timezone: string
}

export interface Rating {
  average: number | null
}

export interface Schedule {
  time: string
  days: string[]
}

export enum Status {
  Ended = 'Ended'
}

export enum Type {
  Reality = 'Reality',
  Scripted = 'Scripted'
}
