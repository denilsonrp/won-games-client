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

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
