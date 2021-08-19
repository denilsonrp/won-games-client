import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingGames: GameCardProps[]
  upcomingMoreGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingHighlight,
  upcomingGames,
  upcomingMoreGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          New
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />

        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>

        <GameCardSlider items={upcomingGames} />

        <Highlight {...upcomingHighlight} />

        <GameCardSlider items={upcomingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>

        <Highlight {...freeHighlight} />

        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
