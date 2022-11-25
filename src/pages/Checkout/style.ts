import styled from 'styled-components'
export const CheckoutContainer = styled.div`
  padding-top: 9rem;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  gap: 2rem;

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    margin-bottom: 15px;
  }
`

export const MainContent = styled.main`
  width: calc(60% - 2rem);
`

export const SideContent = styled.div`
  min-width: 40%;
`

export const CheckoutContaineBox = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 6px;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`
const BaseTitleBox = styled.div`
  display: flex;
  gap: 0.5rem;
  line-height: 1.3;
  margin-bottom: 2rem;

  h3 {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 0.125;
  }
  h4 {
    color: ${(props) => props.theme['gray-700']};
    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const CheckoutFormTitle = styled(BaseTitleBox)`
  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const CheckoutPaymentTitle = styled(BaseTitleBox)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CheckoutItensBox = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`

export const ProductList = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`
export const CheckoutTotal = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 0.75rem;
      color: ${(props) => props.theme['gray-700']};
      font-size: 0.875rem;
      line-height: 1.3;

      span {
        :last-child {
          font-size: 1rem;
        }
      }
    }

    &:last-child {
      color: ${(props) => props.theme['gray-800']};
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.875rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  transition: background-color 0.1s;
  border: none;
  width: 100%;
`
