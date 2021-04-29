import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      color: ${theme.colors.gray};
      display: block;
      font-size: ${theme.font.sizes.small};
      margin-bottom: ${theme.spacings.xxsmall};
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};
    text-align: center;
  `}
`

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`
