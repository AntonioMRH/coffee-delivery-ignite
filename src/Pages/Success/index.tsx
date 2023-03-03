import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ContentContainer,
  LeftContainer,
  MainSection,
  SuccessItem,
  TextBox,
} from './Success.styles'
import { defaultTheme } from '../../styles/themes/default'
import { useContext } from 'react'
import { CoffeeCtx } from '../../contexts/CoffeeCtx'

export function SuccessPage() {
  const { userAddress } = useContext(CoffeeCtx)
  return (
    <MainSection>
      <header>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <ContentContainer>
        <LeftContainer>
          <SuccessItem color="purple">
            <span>
              <MapPin
                weight="fill"
                size={16}
                color={`${defaultTheme.background}`}
              />
            </span>
            <TextBox>
              <p>
                Entrega em{' '}
                <b>
                  {userAddress.street}, {userAddress.number}
                </b>{' '}
                {userAddress.neighborhood} - {userAddress.city},{' '}
                {userAddress.uf}
              </p>
            </TextBox>
          </SuccessItem>
          <SuccessItem color="yellow">
            <span>
              <Timer
                weight="fill"
                size={16}
                color={`${defaultTheme.background}`}
              />
            </span>
            <TextBox>
              <p>Previsão de entrega</p> <b>20 min - 30 min </b>
            </TextBox>
          </SuccessItem>
          <SuccessItem color="orange">
            <span>
              <CurrencyDollar
                weight="fill"
                size={16}
                color={`${defaultTheme.background}`}
              />
            </span>
            <TextBox>
              <p>Pagamento na entrega</p> <b>{userAddress.payment}</b>
            </TextBox>
          </SuccessItem>
        </LeftContainer>
        <img
          src="src/assets/illustration.svg"
          alt="Homem entregando pedido em uma motocicleta"
        />
      </ContentContainer>
    </MainSection>
  )
}
