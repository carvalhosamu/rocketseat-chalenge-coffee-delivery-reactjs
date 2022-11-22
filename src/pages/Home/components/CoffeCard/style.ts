import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
    max-width: 7.5rem;
  }
`
export const TagList = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0 1.25rem;
`

export const Tag = styled.div`
  background-color: ${(props) => props.theme['yellow-300']};
  border-radius: 99px;
  padding: 0.32rem 0.5rem;

  color: ${(props) => props.theme['yellow-700']};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  width: fit-content;
`
export const CardTitle = styled.h4`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme['gray-800']};
`
export const CardDescription = styled.p`
  color: ${(props) => props.theme['gray-600']};
  font-size: 0.875rem;
  padding: 0 1.25rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 2.1rem;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`

export const CardPrice = styled.div`
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 900;
  margin-right: 1.2rem;
  color: ${(props) => props.theme['gray-700']};
  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`
export const CartButtonSubmit = styled.button`
  margin-left: 0.5rem;
  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};
  padding: 0.5rem 0.5rem;
  border: 0;
  border-radius: 6px;
  line-height: 1;
  max-height: 38px;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
