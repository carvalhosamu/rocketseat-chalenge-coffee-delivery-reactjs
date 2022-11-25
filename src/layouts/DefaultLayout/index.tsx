import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import { CartContext } from '../../contexts/Cart'
import {
  CartButton,
  Header,
  HeaderActions,
  HeaderContainer,
  LocationButton,
} from './style'

export function DefaultLayout() {
  const { cartNumberItem } = useContext(CartContext)

  return (
    <>
      <HeaderContainer>
        <Header>
          <NavLink to="/" title="Home">
            <img src={logo} alt="" />
          </NavLink>
          <HeaderActions>
            <LocationButton>
              <MapPin size={22} weight="fill" />
              S. S. Paraíso MG
            </LocationButton>
            <NavLink to="/checkout" title="Checkout">
              <CartButton>
                <ShoppingCart size={22} weight="fill" />
                <div className="counter">{cartNumberItem}</div>
              </CartButton>
            </NavLink>
          </HeaderActions>
        </Header>
      </HeaderContainer>
      <div>
        <Outlet />
      </div>
    </>
  )
}
