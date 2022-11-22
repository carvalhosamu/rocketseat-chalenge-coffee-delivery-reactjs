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

export function ConfirmOrder() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
            </OrderItemText>
          </OrderItemDetail>
        </ConfirmOrderBox>
        <img src={deliveryIllustration} alt="" />
      </ConfirmOrderContent>
    </ConfirmOrderContainer>
  )
}
