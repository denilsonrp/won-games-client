import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineBottom?: boolean
  lineLeft?: boolean
}

const Heading = ({
  children,
  color = 'black',
  lineBottom = false,
  lineLeft = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading
