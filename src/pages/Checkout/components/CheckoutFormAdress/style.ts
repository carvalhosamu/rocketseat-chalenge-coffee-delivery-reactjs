import styled from 'styled-components'

export const CheckoutForm = styled.div`
  display: grid;
  grid-template-columns: 35% auto 11%;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-template-areas:
    'zipCode . .'
    'adress adress adress'
    'number complement complement'
    'district city state';

  input {
    background-color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};
    padding: 0.75rem;
    font-size: 0.875rem;
    border-radius: 4px;
    color: ${(props) => props.theme['gray-700']};

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }
  }

  input[name='zipCode'] {
    grid-area: zipCode;
  }
  input[name='adress'] {
    grid-area: adress;
  }

  input[name='number'] {
    grid-area: number;
  }

  input[name='complement'] {
    grid-area: complement;
  }

  input[name='district'] {
    grid-area: district;
  }

  input[name='city'] {
    grid-area: city;
  }

  input[name='state'] {
    grid-area: state;
  }
`
