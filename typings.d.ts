import { ITheme } from "./src/design/themes"
import "styled-components"

// Make props.theme fully typed against our theme shape.
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
