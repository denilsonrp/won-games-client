import * as S from './styles'
import Button from 'components/Button'

export type BannerProps = {
  image: string
  title: string
  subtitle: string
  button: {
    label: string
    link: string
  }
}

const Banner = ({ image, title, subtitle, button }: BannerProps) => (
  <S.Wrapper>
    <S.Image src={image} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={button.link}>
        {button.label}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
