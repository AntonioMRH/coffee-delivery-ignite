import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  LocationContainer,
  CartContainer,
  InfoContainer,
  LogoContainer,
} from './Header.styles'
import { defaultTheme } from '../styles/themes/default'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeCtx } from '../contexts/CoffeeCtx'

export function Header() {
  const navigate = useNavigate()
  const { totalCoffeeQty, userAddress } = useContext(CoffeeCtx)

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate('/')}>
        <img src="src/assets/coffeelogo.svg" alt="Logo" />
      </LogoContainer>

      <InfoContainer>
        {userAddress.city.length > 0 ? (
          <LocationContainer>
            <MapPin size={22} weight="fill" color={defaultTheme.purple} />
            {userAddress.city}, {userAddress.uf.toUpperCase()}
          </LocationContainer>
        ) : (
          <LocationContainer>
            <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          </LocationContainer>
        )}

        <CartContainer
          value={totalCoffeeQty}
          onClick={() => (totalCoffeeQty > 0 ? navigate('/checkout') : '')}
        >
          {totalCoffeeQty > 0 && <span>{totalCoffeeQty}</span>}
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </InfoContainer>
    </HeaderContainer>
  )
}
