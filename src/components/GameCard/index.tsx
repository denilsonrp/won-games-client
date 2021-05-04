import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import * as S from './styles'

export type GameCardProps = {
  developer: string
  image: string
  price: string
  promotionalPrice?: string
  title: string
}

const GameCard = ({
  developer,
  image,
  price,
  promotionalPrice,
  title
}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={image} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button">
        <FavoriteBorder aria-label="Add to wishlist" />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
