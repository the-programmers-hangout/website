import { ITheme } from "./src/design/themes"
import "styled-components"

declare module "*.svg" {
  const content: any
  export default content
}
declare module "*.png"
declare module "*.json"

type ComponentQuery<T> = {
  readonly data: T
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
