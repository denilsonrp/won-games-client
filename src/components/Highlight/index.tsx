import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  button: {
    label: string
    link: string
  }
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  button
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={button.link}>
        {button.label}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
