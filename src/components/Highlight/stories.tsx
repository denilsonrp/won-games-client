import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead 2',
    subtitle: 'Play the Red Dead 2',
    backgroundImage: '/img/red-dead-img.jpg',
    button: {
      label: 'Buy now',
      link: '/games/rdr2'
    }
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: 'img/red-dead-float.png'
}
