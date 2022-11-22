import { ShoppingCartSimple } from 'phosphor-react'
import { ChangeEvent, useContext, useState } from 'react'
import { NumberInput } from '../../../../components/NumberInput/Index'
import { CartContext } from '../../../../contexts/Cart'
import {
  Card,
  CardDescription,
  CardFooter,
  CardPrice,
  CardTitle,
  CartButtonSubmit,
  Tag,
  TagList,
} from './style'

export interface CoffeCatalog {
  id: string
  img: string
  title: string
  description: string
  tags: string[]
  price: string
}

export function CoffeCard() {
  const { addNewItemOnCart } = useContext(CartContext)

  const coffe = {
    id: '12344',
    img: 'images/Coffee.png',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    tags: ['Tradicional', 'Com Leite', 'Gelado'],
  } as CoffeCatalog

  const [cartCount, setCartCount] = useState(0)

  function handleChangeCombo(event: ChangeEvent<HTMLInputElement>) {
    setCartCount(event.target.value === '' ? 0 : parseInt(event.target.value))
  }

  function handleSubmit() {
    addNewItemOnCart({
      id: coffe.id,
      imageUrl: coffe.img,
      name: coffe.title,
      quantity: 1,
    })
  }

  return (
    <Card>
      <img src="images/Coffee.png" alt="" />
      <TagList>
        {coffe.tags.map((tag) => {
          return <Tag key={`${coffe.id}-${tag}`}>{tag}</Tag>
        })}
      </TagList>
      <CardTitle>{coffe.title}</CardTitle>
      <CardDescription>{coffe.description}</CardDescription>
      <CardFooter>
        <CardPrice>
          <span>{'R$ '}</span>
          {coffe.price}
        </CardPrice>
        <NumberInput step={1} min={1} onChange={handleChangeCombo} max={10} />
        <CartButtonSubmit onClick={handleSubmit}>
          <ShoppingCartSimple size={22} weight="fill" />
        </CartButtonSubmit>
      </CardFooter>
    </Card>
  )
}
