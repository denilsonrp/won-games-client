import { Story, Meta } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const Slide = styled.div`
  background-color: gray;
  border: 0.1rem solid red;
  color: white;
  padding: 10rem 0;
  text-align: center;
  width: 30rem;
`

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Horizontal: Story = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)
