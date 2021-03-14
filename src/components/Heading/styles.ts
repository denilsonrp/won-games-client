import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    border-left: 0.5rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.spacings.medium};
    position: relative;

    &::after {
      border-bottom: 0.5rem solid ${theme.colors.primary};
      bottom: -0.8rem;
      content: '';
      left: 0;
      position: absolute;
      width: 5rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineBottom, lineLeft }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineBottom && wrapperModifiers.lineBottom(theme)}

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
  `}
`
