import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingGames: [gamesMock[0]],
  upcomingMoreGames: [gamesMock[0]],
  freeHighlight: highlightMock,
  freeGames: [gamesMock[0]]
}

describe('<Home />', () => {
  it('should render menu', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })
})
