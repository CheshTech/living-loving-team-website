import { css } from "styled-components"

export const Colors = {
  fawn: "#d4ae7a",
  offWhite: "#fcf9f6",
  green: "#1a7c7a",
  lightGrey: "#d3e9d6",
  grey: "#919da8",
  black: "#020202",
}

export const Fonts = {
  goldenBook: `Goldenbook, sans-serif`,
  sofiaBold: `SofiaBold, sans-serif`,
  sofiaLight: `SofiaLight, sans-serif`,
}

export const Responsive = {
  sm: (...args) => css`
    @media (min-width: 320px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: 767px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `,
  xlg: (...args) => css`
    @media (min-width: 1400px) {
      ${css(...args)};
    }
  `,
}
