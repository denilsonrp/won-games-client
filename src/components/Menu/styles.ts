import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type MenuFullProps = {
  isOpen: boolean
}

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  `}
`

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    gap: ${theme.spacings.xsmall};
    justify-content: flex-end;
  `}
`

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`
