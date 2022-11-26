import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CartContext } from '../../contexts/Cart'
import {
  CheckoutFormAdress,
  CheckoutFormAdressModel,
} from './components/CheckoutFormAdress'
import { SelectedCoffe } from './components/SelectedCoffe'
import {
  CheckoutContainer,
  CheckoutFormTitle,
  CheckoutContaineBox,
  CheckoutPaymentTitle,
  MainContent,
  SideContent,
  CheckoutItensBox,
  ProductList,
  CheckoutTotal,
  SubmitButton,
} from './style'
import history from 'history/browser'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentOptions, PaymentType } from './components/PaymentOptions'
import { CheckoutRequestModel } from './models'

export function Checkout() {
  const { itens, deliveryTax, cartTotalValue } = useContext(CartContext)
  const adressFormValidationSchema = zod.object({
    zipCode: zod
      .string({ required_error: 'O campo é obrigatório' })
      .max(10, 'O valor máximo deve ser menor que 10 caracteres'),
    adress: zod
      .string({ required_error: 'O campo é obrigatório' })
      .min(3)
      .max(100, 'O valor máximo deve ser menor que 100 caracteres'),
    city: zod
      .string({ required_error: 'O campo é obrigatório' })
      .min(5)
      .max(50, 'O valor máximo deve ser menor que 50 caracteres'),
    complement: zod.string().optional(),
    district: zod
      .string({ required_error: 'O campo é obrigatório' })
      .min(5)
      .max(20, 'O valor máximo deve ser menor que 20 caracteres'),
    state: zod
      .string({ required_error: 'O campo é obrigatório' })
      .max(2, 'Infornme somente a sigla do estado'),
    number: zod.string().optional(),
  })

  const cartProductForm = useForm<CheckoutFormAdressModel>({
    resolver: zodResolver(adressFormValidationSchema),
    defaultValues: {
      adress: '',
      city: '',
      complement: '',
      district: '',
      state: '',
      number: '',
      zipCode: '',
    },
  })

  const { handleSubmit } = cartProductForm
  const [paymentType, setPaymentType] = useState(PaymentType.CREDIT_CARD)

  function handleCreateNewRequest(data: CheckoutFormAdressModel) {
    const requestData: CheckoutRequestModel = {
      adress: data,
      payment: paymentType,
      itens: itens.map((item) => {
        return {
          id: item.id,
          price: item.price,
          quantity: item.quantity,
        }
      }),
    }
    history.push('/confirm-order', requestData)
    history.go(0)
  }

  function handleChangePaymentMethod(type: PaymentType) {
    setPaymentType(type)
  }
  const totaRequestCheckout = deliveryTax + cartTotalValue

  return (
    <form onSubmit={handleSubmit(handleCreateNewRequest)}>
      <FormProvider {...cartProductForm}>
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
              <CheckoutFormAdress />
            </CheckoutContaineBox>
            <CheckoutContaineBox>
              <CheckoutPaymentTitle>
                <CurrencyDollar size={22} />
                <div>
                  <h3>Pagamento</h3>
                  <h4>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </h4>
                </div>
              </CheckoutPaymentTitle>
              <PaymentOptions onChange={handleChangePaymentMethod} />
            </CheckoutContaineBox>
          </MainContent>
          <SideContent>
            <h2>Cafés Selecionados</h2>
            <CheckoutItensBox>
              <ProductList>
                {itens.map((product) => (
                  <SelectedCoffe key={product.id} product={product} />
                ))}
              </ProductList>
              <CheckoutTotal>
                <div>
                  <span>Total de Itens</span>
                  <span>
                    R${' '}
                    {cartTotalValue.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>
                    R${' '}
                    {deliveryTax.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div>
                  <span>Total</span>
                  <span>
                    R${' '}
                    {totaRequestCheckout.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </CheckoutTotal>
              <SubmitButton type="submit">Confirmar Pedido</SubmitButton>
            </CheckoutItensBox>
          </SideContent>
        </CheckoutContainer>
      </FormProvider>
    </form>
  )
}
