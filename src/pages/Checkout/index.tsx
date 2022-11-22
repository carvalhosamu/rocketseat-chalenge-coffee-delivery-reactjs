import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { SelectedCoffe } from './components/SelectedCoffe'
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormTitle,
  CheckoutContaineBox,
  CheckoutPaymentTitle,
  PaymentOptions,
  PaymentOption,
  MainContent,
  SideContent,
  CheckoutItensBox,
  ProductList,
  CheckoutTotal,
  SubmitButton,
} from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <MainContent>
        <h2>Complete seu pedido</h2>
        <CheckoutContaineBox>
          <CheckoutFormTitle>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <h4>Informe o endereço onde deseja receber seu pedido</h4>
            </div>
          </CheckoutFormTitle>
          <CheckoutForm>
            <input name="cep" id="cep" type="text" placeholder="CEP" />
            <input
              name="deliveryAdress"
              id="deliveryAdress"
              type="text"
              placeholder="Endereço"
            />
            <input
              name="deliveryAdressNumber"
              id="deliveryAdressNumber"
              type="text"
              placeholder="Número"
            />
            <input
              name="deliveryAdressComplement"
              type="text"
              placeholder="Complemento"
            />
            <input
              name="deliveryAdressDistrict"
              type="text"
              placeholder="Bairro"
            />
            <input name="deliveryAdressCity" type="text" placeholder="Cidade" />
            <input name="deliveryAdressState" type="text" placeholder="UF" />
          </CheckoutForm>
        </CheckoutContaineBox>
        <CheckoutContaineBox>
          <CheckoutPaymentTitle>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <h4>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h4>
            </div>
          </CheckoutPaymentTitle>
          <PaymentOptions>
            <PaymentOption selected={true}>
              <CreditCard size={19} />
              Cartão de Crédito
            </PaymentOption>
            <PaymentOption selected={false}>
              <Bank size={19} />
              Cartão de Débito
            </PaymentOption>
            <PaymentOption selected={false}>
              <Money size={19} />
              Dinheiro
            </PaymentOption>
          </PaymentOptions>
        </CheckoutContaineBox>
      </MainContent>
      <SideContent>
        <h2>Cafés Selecionados</h2>
        <CheckoutItensBox>
          <ProductList>
            <SelectedCoffe />
            <SelectedCoffe />
          </ProductList>
          <CheckoutTotal>
            <div>
              <span>Total de Itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </CheckoutTotal>
          <NavLink to="/confirm-order">
            <SubmitButton>Confirmar Pedido</SubmitButton>
          </NavLink>
        </CheckoutItensBox>
      </SideContent>
    </CheckoutContainer>
  )
}
