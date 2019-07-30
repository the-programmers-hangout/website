const FONT_OXYGEN = "Oxygen, sans-serif"
const FONT_MONTSERRAT = "Montserrat, sans-serif"

export const BASE_FONT_SIZE = 18
export const BASE_LINE_HEIGHT = 25
export const MODULAR_SCALE = 1.1487

function modularFontSize(power: number) {
  return BASE_FONT_SIZE * Math.pow(MODULAR_SCALE, power)
}

export function modularScale(power: number) {
  const fontSize = modularFontSize(power)

  // attempt to fit line-height a little larger than font-size
  const paddedLineHeight = fontSize * 1.1
  const lineHeight =
    paddedLineHeight - (paddedLineHeight % BASE_LINE_HEIGHT) + BASE_LINE_HEIGHT

  return {
    fontSize,
    lineHeight,
  }
}

export const fontFamily = {
  header: FONT_MONTSERRAT,
  body: FONT_OXYGEN,
}

export default fontFamily
