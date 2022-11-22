import { Minus, Plus } from 'phosphor-react'
import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import { MinusButton, NumberInputContainer, PlusButton } from './style'

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function NumberInput({ onChange, ...props }: NumberInputProps) {
  const [value, setValue] = useState(props.value ? props.value : 0)
  const stepValue = props.step ? parseInt(`${props.step}`) : 1
  const inputRef = useRef<HTMLInputElement>(null)

  function handleChangeValue(event: any) {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (inputRef && inputRef.current) {
      const ref = inputRef.current
      const e = new Event('change', { bubbles: true })
      ref.addEventListener('change', handleChangeValue)
      ref.dispatchEvent(e)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  function handleClickMinusButton() {
    setValue((value) => {
      if (value === '') {
        return props.min ? props.min : 0
      }

      let newValue = parseInt(`${value}`) - stepValue
      if (props.min && newValue <= props.min) {
        newValue = props.min as number
      }
      return newValue
    })
  }

  function handleClickPlusButton() {
    setValue((value) => {
      if (value === '') {
        return props.min ? (props.min as number) + stepValue : stepValue
      }

      const newValue = parseInt(`${value}`) + stepValue
      if (props.max !== undefined && newValue >= props.max) {
        return props.max as number
      }
      return newValue
    })
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
      <input
        ref={inputRef}
        onChange={(event) => {
          handleChangeValue(event)
        }}
        type="number"
        value={value}
        {...props}
      />
      <PlusButton onClick={handleClickPlusButton} type="button">
        <Plus size={14} weight="bold" />
      </PlusButton>
    </NumberInputContainer>
  )
}
