import { ComponentProps } from 'react'
import { styled } from '../styles'

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$white',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300'
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

TextArea.displayName = 'TextArea'