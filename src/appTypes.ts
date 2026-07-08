// Local replacements for gatsby / @reach/router types used across the app.

export interface AppLocation {
  pathname: string
  href?: string
  origin?: string
  search?: string
  hash?: string
}

export interface Author {
  avatar: string
  hash: string
  name: string
}
