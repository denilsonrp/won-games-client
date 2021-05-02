import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  button: {
    label: string
    link: string
  }
}

const Highlight = ({ title, subtitle, button }: HighlightProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
    <Button as="a" href={button.link}>
      {button.label}
    </Button>
  </S.Wrapper>
)

export default Highlight
