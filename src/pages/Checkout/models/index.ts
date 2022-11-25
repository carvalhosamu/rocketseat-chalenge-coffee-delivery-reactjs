import { CheckoutFormAdressModel } from '../components/CheckoutFormAdress'
import { PaymentType } from '../components/PaymentOptions'

export interface CheckoutProductRequestModel {
  id: string
  price: number
  quantity: number
}

export interface CheckoutRequestModel {
  adress: CheckoutFormAdressModel
  payment: PaymentType
  itens: CheckoutProductRequestModel[]
}
