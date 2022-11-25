import { Controller, useFormContext } from 'react-hook-form'
import { CheckoutForm } from './style'
import InputMask from 'react-input-mask'

export interface CheckoutFormAdressModel {
  zipCode: string
  adress: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}
export function CheckoutFormAdress() {
  const { register } = useFormContext()
  return (
    <CheckoutForm>
      <InputMask
        mask="99.999-999"
        type="text"
        {...register('zipCode')}
        placeholder="CEP"
      />
      <input type="text" placeholder="Endereço" {...register('adress')} />
      <input type="text" placeholder="Número" {...register('number')} />
      <input
        type="text"
        placeholder="Complemento"
        {...register('complement')}
      />
      <input type="text" placeholder="Bairro" {...register('district')} />
      <input type="text" placeholder="Cidade" {...register('city')} />
      <input type="text" placeholder="UF" {...register('state')} />
    </CheckoutForm>
  )
}
