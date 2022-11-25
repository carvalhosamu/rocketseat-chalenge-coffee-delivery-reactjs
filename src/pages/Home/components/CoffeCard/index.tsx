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
import { CoffeCatalog } from '../../models'

const cardProductFormValidationSchema = zod.object({
  productCount: zod
    .number()
    .min(1, 'O valor informado deve ser maior que zero unidades')
    .max(99, 'O valor máximo deve possuir no máximo 99 unidades'),
})

type CardProductFormData = zod.infer<typeof cardProductFormValidationSchema>

interface CoffeCardProps {
  coffe: CoffeCatalog
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const { addNewItemOnCart } = useContext(CartContext)

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
      img: coffe.img,
      name: coffe.name,
      quantity: data.productCount,
      price: coffe.price,
    })
    reset()
  }

  return (
    <Card>
      <img src={coffe.img} alt="" />
      <TagList>
        {coffe.tags.map((tag) => {
          return <Tag key={`${coffe.id}-${tag}`}>{tag}</Tag>
        })}
      </TagList>
      <CardTitle>{coffe.name}</CardTitle>
      <CardDescription>{coffe.description}</CardDescription>
      <form action="" onSubmit={handleSubmit(handleAddProductsOnCart)}>
        <CardFooter>
          <CardPrice>
            <span>{'R$ '}</span>
            {coffe.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </CardPrice>
          <FormProvider {...cartProductForm}>
            <NumberInput
              name="productCount"
              readOnly={true}
              step={1}
              min={0}
              max={10}
            />
            <CartButtonSubmit type="submit">
              <ShoppingCartSimple size={22} weight="fill" />
            </CartButtonSubmit>
          </FormProvider>
        </CardFooter>
      </form>
    </Card>
  )
}
