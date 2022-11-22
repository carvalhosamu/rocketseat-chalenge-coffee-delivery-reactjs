import styled from 'styled-components'
import backgroundBanner from '../../assets/BackgroundBanner.png'

export const Banner = styled.div`
  background-image: url(${backgroundBanner});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-position: top;
  margin: 0 auto;
  max-width: 100vw;
  resize: both;
`

export const BannerContent = styled.div`
  padding: 12.25rem 0 7rem;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  gap: 3.5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.01rem;
  }
`

export const BannerDetails = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`

const BACKGROUND_COLORS = {
  yellow: 'yellow-500',
  darkYellow: 'yellow-700',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface StatusProps {
  backgroundIconColor: keyof typeof BACKGROUND_COLORS
}

export const BannerDetail = styled.div<StatusProps>`
  display: flex;
  gap: 0.75rem;
  color: ${(props) => props.theme['gray-700']};
  align-items: center;
  svg {
    background-color: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundIconColor]]};
    color: white;
    padding: 0.5rem 0.3rem;
    border-radius: 99px;
  }
`

export const ProductSection = styled.div`
  padding: 2rem 0;
  max-width: 70rem;
  margin: 0 auto;
  h2 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-800']};
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.3;
    margin-bottom: 3.375rem;
  }
`
export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;
`
