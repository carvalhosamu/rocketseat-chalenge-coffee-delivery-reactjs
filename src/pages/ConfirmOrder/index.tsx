import {
  ConfirmOrderBox,
  ConfirmOrderContainer,
  ConfirmOrderContent,
  ConfirmOrderTitle,
  OrderItemDetail,
  OrderItemText,
} from './style'

import deliveryIllustration from '../../assets/IllustrationConfirmOrder.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'

import history from 'history/browser'
import { CartContext } from '../../contexts/Cart'

export function ConfirmOrder() {
  const location = useLocation()
  const { resetCart } = useContext(CartContext)

  useEffect(() => {
    resetCart()
  }, [resetCart])

  return (
    <ConfirmOrderContainer>
      <ConfirmOrderTitle>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </ConfirmOrderTitle>
      <ConfirmOrderContent>
        <ConfirmOrderBox>
          <OrderItemDetail backgroundIconColor="purple">
            <MapPin size={32} weight="fill" />
            <OrderItemText>
              <span>
                Entrega em{' '}
                <strong>
                  {location.state.adress.adress}, {location.state.adress.number}
                  {location.state.adress.complement
                    ? ` - ${location.state.adress.complement}`
                    : ''}
                </strong>
              </span>
              <span>
                {location.state.adress.district} - {location.state.adress.city},{' '}
                {location.state.adress.state}
              </span>
            </OrderItemText>
          </OrderItemDetail>
          <OrderItemDetail backgroundIconColor="yellow">
            <Timer size={32} weight="fill" />
            <OrderItemText>
              <span>Previsão de entrega</span>
              <strong> 20 min - 30 min</strong>
            </OrderItemText>
          </OrderItemDetail>
          <OrderItemDetail backgroundIconColor="darkYellow">
            <CurrencyDollar size={32} />
            <OrderItemText>
              <span>Pagamento na entrega</span>
              <strong>{location.state.payment}</strong>
            </OrderItemText>
          </OrderItemDetail>
        </ConfirmOrderBox>
        <img src={deliveryIllustration} alt="" />
      </ConfirmOrderContent>
    </ConfirmOrderContainer>
  )
}
