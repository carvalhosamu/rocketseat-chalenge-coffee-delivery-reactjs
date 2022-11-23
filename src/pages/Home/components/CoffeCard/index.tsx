import { ShoppingCartSimple } from 'phosphor-react'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { NumberInput } from '../../../../components/NumberInput/Index'
import { CartContext } from '../../../../contexts/Cart'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
import { FormProvider, useForm } from 'react-hook-form'

export interface CoffeCatalog {
  id: string
  img: string
  title: string
  description: string
  tags: string[]
  price: string
}

const cardProductFormValidationSchema = zod.object({
  productCount: zod
    .number()
    .min(1, 'O valor informado deve ser maior que zero unidades')
    .max(99, 'O valor máximo deve possuir no máximo 99 unidades'),
})

type CardProductFormData = zod.infer<typeof cardProductFormValidationSchema>

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

  const cartProductForm = useForm<CardProductFormData>({
    resolver: zodResolver(cardProductFormValidationSchema),
    defaultValues: {
      productCount: 0,
    },
  })

  const { handleSubmit, reset } = cartProductForm

  function handleAddProductsOnCart(data: CardProductFormData) {
    addNewItemOnCart({
      id: coffe.id,
      imageUrl: coffe.img,
      name: coffe.title,
      quantity: data.productCount,
    })
    reset()
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
      <form action="" onSubmit={handleSubmit(handleAddProductsOnCart)}>
        <CardFooter>
          <CardPrice>
            <span>{'R$ '}</span>
            {coffe.price}
          </CardPrice>
          <FormProvider {...cartProductForm}>
            <NumberInput name="productCount" step={1} min={0} max={10} />
            <CartButtonSubmit type="submit">
              <ShoppingCartSimple size={22} weight="fill" />
            </CartButtonSubmit>
          </FormProvider>
        </CardFooter>
      </form>
    </Card>
  )
}
