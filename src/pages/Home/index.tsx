import {
  Banner,
  BannerContent,
  BannerDetail,
  BannerDetails,
  ProductList,
  ProductSection,
} from './styled'
import bannerImage from '../../assets/BannerImage.png'
import { CoffeCard } from './components/CoffeCard'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CoffeCatalog } from './models'
import { getProducts } from './services'

export function Home() {
  const [coffes, setCoffes] = useState<CoffeCatalog[]>([])
  useEffect(() => {
    setCoffes(getProducts())
  }, [])

  return (
    <>
      <Banner>
        <BannerContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <BannerDetails>
              <BannerDetail backgroundIconColor="darkYellow">
                <ShoppingCart size={32} weight="fill" />
                Compra simples e segura
              </BannerDetail>
              <BannerDetail backgroundIconColor="gray">
                <Timer size={32} weight="fill" />
                Embalagem mantém o café intacto
              </BannerDetail>
              <BannerDetail backgroundIconColor="yellow">
                <Package size={32} weight="fill" />
                Entrega rápida e rastreada
              </BannerDetail>
              <BannerDetail backgroundIconColor="purple">
                <div>
                  <Coffee size={32} weight="fill" />
                </div>
                O café chega fresquinho até você
              </BannerDetail>
            </BannerDetails>
          </div>
          <img src={bannerImage} alt="" />
        </BannerContent>
      </Banner>
      <ProductSection className="wrapper">
        <h2>Nossos Cafés</h2>
        <ProductList>
          {coffes.map((c) => (
            <CoffeCard coffe={c} key={c.id} />
          ))}
        </ProductList>
      </ProductSection>
    </>
  )
}
