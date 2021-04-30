import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  image: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  button: {
    label: 'Buy now',
    link: '/games/defy-death'
  }
}

describe('<Banner />', () => {
  it('should render the banner title', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the banner subtitle', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
  })

  it('should render the banner image', () => {
    renderWithTheme(<Banner {...props} />)

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )
  })
})
