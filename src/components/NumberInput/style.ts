import styled from 'styled-components'

export const NumberInputContainer = styled.div`
  display: flex;

  input {
    width: 1.6rem;
    border: none;
    background-color: ${(props) => props.theme['gray-400']};
    padding: 0.5rem 0.25rem;
    text-align: center;
    font-size: 1rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      box-shadow: none;
    }
  }
`

const baseButton = styled.button`
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-400']};

  color: ${(props) => props.theme['purple-500']};
  &:focus {
    box-shadow: none;
  }
`
export const MinusButton = styled(baseButton)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 0.75rem 0.25rem 0.75rem 0.5rem;
`

export const PlusButton = styled(baseButton)`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0.75rem 0.5rem 0.75rem 0.25rem;
`
