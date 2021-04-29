import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    border-left: 0.5rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    margin-bottom: ${theme.spacings.medium};
    position: relative;

    &::after {
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      bottom: -0.8rem;
      content: '';
      left: 0;
      position: absolute;
      width: 5rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineBottom, lineLeft, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor)}
    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
