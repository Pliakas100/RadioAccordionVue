import type { Meta, StoryObj } from '@storybook/vue3'
import RadioAccordion from '../components/RadioAccordion.vue'

const meta: Meta<typeof RadioAccordion> = {
  title: 'RadioAccordion component',
  component: RadioAccordion,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof RadioAccordion>

export const Primary: Story = {
  render: (args: any) => ({
    components: { RadioAccordion },
    setup() {
      return { args }
    },
    template: '<RadioAccordion v-bind="args" />'
  }),
  args: {
    id: 1,
    title: "I'm looking to sell a property I own",
    subtitle: 'Awesome, we can get your listing published right now',
    name: 'sell',
    value: '1',
    active: false,
    modelValue: 2,
    setModelValue: () => {}
  }
}

export const Secondary: Story = {
  render: (args: any) => ({
    components: { RadioAccordion },
    setup() {
      return { args }
    },
    template: '<RadioAccordion v-bind="args" />'
  }),
  args: {
    id: 2,
    title: "I'm looking for a good deal to buy",
    subtitle: "Great! We're so glad you're here. Start browsing and happy hunting",
    name: 'buy',
    value: '2',
    active: true,
    modelValue: 2,
    setModelValue: () => {}
  }
}

export const Third: Story = {
  render: (args: any) => ({
    components: { RadioAccordion },
    setup() {
      return { args }
    },
    template: '<RadioAccordion v-bind="args" />'
  }),
  args: {
    id: 3,
    title: "I'm just exploring",
    subtitle: "No problem, we'd love to help you learn about Aloha My Home",
    name: 'explore',
    value: '3',
    active: false,
    modelValue: 2,
    setModelValue: () => {}
  }
}
