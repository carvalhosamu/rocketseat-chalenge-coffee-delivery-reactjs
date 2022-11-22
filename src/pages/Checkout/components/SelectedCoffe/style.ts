import styled from 'styled-components'

export const ProductContainer = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
`

export const ProductContent = styled.div`
  padding: 0.5 0.25rem;
  display: flex;
  justify-content: space-between;
`

export const ProductDetails = styled.div`
  display: flex;
  h5 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-800']};
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  img {
    margin-right: 20px;
    width: 4rem;
  }
`

export const ProductActions = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: 2rem;

  div {
    max-height: 2rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-transform: uppercase;
  background-color: ${(props) => props.theme['gray-400']};
  border: none;
  color: ${(props) => props.theme['gray-700']};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
export const Price = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};
`
