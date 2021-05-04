import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    price: 'R$ 199,90',
    promotionalPrice: 'R$ 149,90'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
