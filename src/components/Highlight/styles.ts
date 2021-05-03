import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    padding: ${theme.spacings.xsmall};
    text-align: right;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    align-self: end;
    grid-area: floatImage;
    max-height: 23rem;
    max-width: 100%;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage }) => css`
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    display: grid;
    grid-template-areas: 'floatImage content';
    grid-template-columns: 1.3fr 2fr;
    height: 23rem;
    position: relative;

    &::after {
      background-color: rgba(0, 0, 0, 0.6);
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`
