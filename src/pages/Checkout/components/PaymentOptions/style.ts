import styled from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export interface PaymentOptionProps {
  selected?: boolean
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  background-color: ${(props) => {
    if (props.selected) {
      return props.theme['purple-300']
    }
    return props.theme['gray-400']
  }};
  padding: 1rem 0.75rem;
  flex: 1;

  border-radius: 6px;
  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-700']};
  border: 1px solid
    ${(props) => {
      if (props.selected) {
        return props.theme['purple-500']
      }
      return props.theme['gray-400']
    }};
  text-transform: uppercase;

  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: flex-start;
  svg {
    padding: 1.5px 0;
    color: ${(props) => props.theme['purple-500']};
  }

  &:focus {
    box-shadow: none;
  }
`
