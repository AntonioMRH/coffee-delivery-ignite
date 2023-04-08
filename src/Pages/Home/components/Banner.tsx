import { defaultTheme } from '../../../styles/themes/default'
import {
  BannerContainer,
  BannerLeftContainer,
  BannerRightContainer,
  Item,
  ItemsList,
} from './Banner.styles'
import { Coffee, Package, Timer, ShoppingCart } from 'phosphor-react'
import FrontBanner from '../../../assets/coffeefrontpage.svg'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerLeftContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <ItemsList>
          <Item variant="orange">
            <span>
              <ShoppingCart
                size={16}
                weight="fill"
                color={`${defaultTheme.background}`}
              />
            </span>
            <p>Compra simples e segura</p>
          </Item>
          <Item variant="gray">
            <span>
              <Package
                size={16}
                weight="fill"
                color={`${defaultTheme.background}`}
              />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item variant="yellow">
            <span>
              <Timer
                size={16}
                weight="fill"
                color={`${defaultTheme.background}`}
              />
            </span>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item variant="purple">
            <span>
              <Coffee
                size={16}
                weight="fill"
                color={`${defaultTheme.background}`}
              />
            </span>
            <p>O café chega fresquinho até você</p>
          </Item>
        </ItemsList>
      </BannerLeftContainer>
      <BannerRightContainer>
        <img src={FrontBanner} alt="Copo de cafe " />
      </BannerRightContainer>
    </BannerContainer>
  )
}
export default Banner
