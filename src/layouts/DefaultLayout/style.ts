import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  min-width: 100%;
  background-color: ${(props) => props.theme['gray-100']};
`

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  margin: 0 auto;
`
export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`

const baseButton = styled.button`
  border: 0;
  border-radius: 6px;

  padding: 0.5rem;

  font-size: 0.875rem;
  line-height: 1.3;

  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
`

export const LocationButton = styled(baseButton)`
  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
export const CartButton = styled(baseButton)`
  position: relative;
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }
  .counter {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 0;
    left: 100%;
    background-color: ${(props) => props.theme['yellow-700']};
    color: white;
    font-weight: 700;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
  }
`
