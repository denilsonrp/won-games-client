import * as S from './styles'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

export type BannerProps = {
  image: string
  title: string
  subtitle: string
  button: {
    label: string
    link: string
  }
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Banner = ({
  image,
  title,
  subtitle,
  button,
  ribbon,
  ribbonColor,
  ribbonSize
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

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
