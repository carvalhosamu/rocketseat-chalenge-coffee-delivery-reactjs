import { Minus, Plus } from 'phosphor-react'
import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useFormContext } from 'react-hook-form'
import { MinusButton, NumberInputContainer, PlusButton } from './style'

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function NumberInput(props: NumberInputProps) {
  const stepValue = props.step ? parseInt(`${props.step}`) : 1
  const { register, setValue, watch } = useFormContext()

  const value = watch(props.name as string)
  function handleClickMinusButton() {
    let newValue

    if (value === '') {
      newValue = props.min
    }

    newValue = parseInt(value) - stepValue
    // in cases on props.min equal to zero a condition props.min is false
    // to fix a problem i use (props.min !== undefined)
    if (props.min !== undefined && newValue < props.min) {
      newValue = props.min as number
    }
    setValue(props.name as string, newValue)
  }

  function handleClickPlusButton() {
    let newValue
    if (value === '') {
      newValue = props.min ? props.min : 0
    }
    newValue = parseInt(value) + stepValue
    if (props.max !== undefined && newValue > props.max) {
      newValue = props.max as number
    }
    setValue(props.name as string, newValue)
  }

  return (
    <NumberInputContainer>
      <MinusButton
        onClick={(event) => {
          handleClickMinusButton()
        }}
        type="button"
      >
        <Minus size={14} weight="bold" />
      </MinusButton>
      <input type="number" {...props} {...register(props.name as string)} />
      <PlusButton onClick={handleClickPlusButton} type="button">
        <Plus size={14} weight="bold" />
      </PlusButton>
    </NumberInputContainer>
  )
}
