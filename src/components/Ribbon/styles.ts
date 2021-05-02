import styled, { DefaultTheme, css } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

import { darken } from 'polished'

const modifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &::before {
      border-right-width: 2rem;
      border-top-width: 1rem;
      top: 3.6rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    &::before {
      border-right-width: 1.5rem;
      border-top-width: 0.7rem;
      top: 2.6rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    align-items: center;
    color: ${theme.colors.white};
    display: flex;
    font-weight: ${theme.font.bold};
    position: absolute;
    top: ${theme.spacings.xsmall};

    &::before {
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-style: solid;
      content: '';
      position: absolute;
      right: 0;
    }

    ${!!color && modifiers.color(theme, color)}
    ${!!size && modifiers[size](theme)}
  `}
`
