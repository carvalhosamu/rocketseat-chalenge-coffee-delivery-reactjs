import produce from 'immer'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { useState } from 'react'
import { PaymentOption, PaymentOptionsContainer } from './style'

export enum PaymentType {
  CREDIT_CARD = 'Cartão de Crédito',
  MONEY = 'Dinheiro',
  DEBIT_CARD = 'Cartão de Débito',
}

interface PaymentOptionModel {
  type: PaymentType
  selected: boolean
}

interface PaymentOptionsProps {
  onChange: (paymentType: PaymentType) => void
}

export function PaymentOptions({ onChange }: PaymentOptionsProps) {
  const [options, setOptions] = useState<PaymentOptionModel[]>([
    {
      selected: true,
      type: PaymentType.CREDIT_CARD,
    },
    {
      selected: false,
      type: PaymentType.MONEY,
    },
    {
      selected: false,
      type: PaymentType.DEBIT_CARD,
    },
  ])

  function handleClickOption(paymentType: PaymentType) {
    setOptions(
      produce(options, (draft) => {
        draft = draft.map((option) => {
          option.selected = false
          return option
        })
        const selectedIndex = options.findIndex((c) => c.type === paymentType)
        draft[selectedIndex].selected = true
      }),
    )
    onChange(paymentType)
  }

  return (
    <PaymentOptionsContainer>
      <PaymentOption
        type="button"
        selected={
          options.find((c) => c.type === PaymentType.CREDIT_CARD)?.selected
        }
        onClick={() => handleClickOption(PaymentType.CREDIT_CARD)}
      >
        <CreditCard size={19} />
        Cartão de Crédito
      </PaymentOption>
      <PaymentOption
        type="button"
        selected={
          options.find((c) => c.type === PaymentType.DEBIT_CARD)?.selected
        }
        onClick={() => handleClickOption(PaymentType.DEBIT_CARD)}
      >
        <Bank size={19} />
        Cartão de Débito
      </PaymentOption>
      <PaymentOption
        type="button"
        selected={options.find((c) => c.type === PaymentType.MONEY)?.selected}
        onClick={() => handleClickOption(PaymentType.MONEY)}
      >
        <Money size={19} />
        Dinheiro
      </PaymentOption>
    </PaymentOptionsContainer>
  )
}
