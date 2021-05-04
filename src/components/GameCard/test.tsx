import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image: 'https://source.unsplash.com/user/willianjusten/1042x580',
  price: 'R$ 199,90'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 199,90')

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    const price = screen.getByText('R$ 199,90')

    expect(price).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
