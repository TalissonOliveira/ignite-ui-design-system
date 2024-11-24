import { Box, Text, TextInput, TextInputProps } from '@talisson-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md',],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    }
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name'
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  }
}

export const Small: StoryObj<TextInputProps> = {
  args: {
    size: 'sm',
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  }
}
