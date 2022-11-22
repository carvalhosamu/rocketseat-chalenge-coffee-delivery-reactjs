import styled from 'styled-components'

export const ConfirmOrderContainer = styled.section`
  padding-top: 11.5rem;
  max-width: 70rem;
  margin: 0 auto;
`

export const ConfirmOrderTitle = styled.div`
  margin-bottom: 1.75rem;
  h2 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.3;
    margin-bottom: 0.25rem;
  }
  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
  }
`

export const ConfirmOrderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ConfirmOrderBox = styled.div`
  width: 47%;
  height: auto;
  background-color: ${(props) => props.theme['gray-100']};
  background-clip: padding-box;
  border: solid 1px transparent;
  position: relative;
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      102.89deg,
      ${(props) => props.theme['yellow-500']} 2.61%,
      ${(props) => props.theme['purple-500']} 98.76%
    );
  }
`

const BACKGROUND_COLORS = {
  yellow: 'yellow-500',
  darkYellow: 'yellow-700',
  purple: 'purple-500',
} as const

interface StatusProps {
  backgroundIconColor: keyof typeof BACKGROUND_COLORS
}

export const OrderItemDetail = styled.div<StatusProps>`
  display: flex;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.3;
  align-items: center;
  color: ${(props) => props.theme['gray-700']};
  svg {
    padding: 0.5rem;
    border-radius: 100px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundIconColor]]};
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`
export const OrderItemText = styled.div`
  display: flex;
  flex-direction: column;
`
