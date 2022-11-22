import { Coffee, Trash } from 'phosphor-react'
import { NumberInput } from '../../../../components/NumberInput/Index'
import {
  Price,
  ProductActions,
  ProductContainer,
  ProductContent,
  ProductDetails,
  RemoveButton,
} from './style'

interface CoffeSelected {
  id: string
  img: string
  title: string
  quantity: number
  price: number
}

export function SelectedCoffe() {
  const product = {
    id: '12344',
    img: 'images/Coffee.png',
    title: 'Expresso Tradicional',
    quantity: 3,
    price: 9.98,
  } as CoffeSelected

  return (
    <ProductContainer>
      <ProductContent>
        <ProductDetails>
          <img src={product.img} alt="" />
          <div>
            <h5>{product.title}</h5>
            <ProductActions>
              <NumberInput />
              <RemoveButton>
                <Trash size={16} />
                Remover
              </RemoveButton>
            </ProductActions>
          </div>
        </ProductDetails>
        <Price>R$ {product.price}</Price>
      </ProductContent>
    </ProductContainer>
  )
}
