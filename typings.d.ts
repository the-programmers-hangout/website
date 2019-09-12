import { ITheme } from "./src/design/themes"
import "styled-components"

declare module "*.svg"
declare module "*.png"

type ComponentQuery<T> = {
  readonly data: T
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
