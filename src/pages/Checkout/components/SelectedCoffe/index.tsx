import { zodResolver } from '@hookform/resolvers/zod'
import { Coffee, Trash } from 'phosphor-react'
import { useState, useContext, useEffect } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { NumberInput } from '../../../../components/NumberInput/Index'
import { CartContext } from '../../../../contexts/Cart'
import { CartItem } from '../../../../reducers/Cart/reducer'
import {
  Price,
  ProductActions,
  ProductContainer,
  ProductContent,
  ProductDetails,
  RemoveButton,
} from './style'

interface ProductFormData {
  cartCount: number
}

interface SelectedCoffeProps {
  product: CartItem
}

export function SelectedCoffe({ product }: SelectedCoffeProps) {
  const cartProductForm = useForm<ProductFormData>({
    defaultValues: {
      cartCount: product.quantity,
    },
  })

  const { watch } = cartProductForm
  const { updateItemQuantityOnCart } = useContext(CartContext)

  const cartCount = watch('cartCount')

  useEffect(() => {
    console.log(cartCount)
    updateItemQuantityOnCart(product.id, cartCount)
  }, [cartCount, product.id, updateItemQuantityOnCart])

  return (
    <ProductContainer>
      <FormProvider {...cartProductForm}>
        <ProductContent>
          <ProductDetails>
            <img src={product.img} alt="" />
            <div>
              <h5>{product.name}</h5>
              <ProductActions>
                <NumberInput readOnly={true} name="cartCount" />
                <RemoveButton>
                  <Trash size={16} />
                  Remover
                </RemoveButton>
              </ProductActions>
            </div>
          </ProductDetails>
          <Price>
            R${' '}
            {product.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </Price>
        </ProductContent>
      </FormProvider>
    </ProductContainer>
  )
}
