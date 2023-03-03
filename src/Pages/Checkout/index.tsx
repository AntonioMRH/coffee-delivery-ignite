import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CardTitle,
  CardTitleContainer,
  CheckoutForm,
  ConfirmButton,
  LeftContainer,
  MainSection,
  PaymentButtonsContainer,
  PaymentModeButton,
  PriceLine,
  PriceResumeContainer,
  RightContainer,
  TotalPriceLine,
} from './Checkout.styles'
import BottomLeftCard from './components/BottomLeftCard'
import RightCard from './components/RightCard'
import TopLeftCard from './components/TopLeftCard'
import { defaultTheme } from '../../styles/themes/default'
import {
  AddressFormContainer,
  CEPInput,
  CityInput,
  ComplementDiv,
  NeighborhoodInput,
  StreetComplementInput,
  StreetInput,
  StreetNumberInput,
  UFInput,
} from './components/Card.styles'
import CheckoutItem, { formatPrice } from './components/CheckoutItem'
import { useContext, useState } from 'react'
import { CoffeeCtx } from '../../contexts/CoffeeCtx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

const formAddressSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe um CEP válido')
    .max(8, 'Informe um CEP válido'),
  street: zod.string().min(4, 'Informe uma endereço correto').max(64),
  number: zod.string(),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3).max(32),
  city: zod.string().min(3).max(32),
  uf: zod.string().min(2).max(2),
})

export type AddressType = zod.infer<typeof formAddressSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('Cartão de Crédito')
  const { coffeeList, totalCoffeePrice, setUserDeliveryDetails, resetOrder } =
    useContext(CoffeeCtx)
  const navigate = useNavigate()
  const { register, handleSubmit, watch } = useForm<AddressType>({
    resolver: zodResolver(formAddressSchema),
  })

  function handleSetAddress(data: AddressType) {
    const userCheckoutData = {
      ...data,
      payment: paymentMethod,
    }
    setUserDeliveryDetails(userCheckoutData)
    resetOrder()
    navigate('/success')
  }

  function handlePaymentMethodBtn(method: string) {
    setPaymentMethod(method)
  }

  const checkIfBtnIsActive = (method: string) => method === paymentMethod

  const complement = watch('complement')
  const isComplementActive = !complement

  const deliveryPrice = 3.5
  const finalPrice = totalCoffeePrice + deliveryPrice

  return (
    <MainSection>
      <header>
        <h5>Complete seu pedido</h5>
        <h5>Cafés selecionados</h5>
      </header>
      <CheckoutForm onSubmit={handleSubmit(handleSetAddress)}>
        <LeftContainer>
          <TopLeftCard>
            <CardTitleContainer>
              <MapPinLine size={22} color={defaultTheme['yellow--dark']} />
              <CardTitle>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </CardTitle>
            </CardTitleContainer>

            <AddressFormContainer>
              <CEPInput placeholder="CEP" maxLength={8} {...register('cep')} />
              <StreetInput placeholder="Rua" {...register('street')} />
              <div>
                <StreetNumberInput
                  placeholder="Número"
                  {...register('number')}
                />
                <ComplementDiv>
                  <StreetComplementInput
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  {isComplementActive && <p>Opcional</p>}
                </ComplementDiv>
              </div>
              <div>
                <NeighborhoodInput
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                <CityInput placeholder="Cidade" {...register('city')} />
                <UFInput placeholder="UF" {...register('uf')} />
              </div>
            </AddressFormContainer>
          </TopLeftCard>
          <BottomLeftCard>
            <CardTitleContainer>
              <CurrencyDollar size={22} color={defaultTheme.purple} />
              <CardTitle>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </CardTitle>
            </CardTitleContainer>
            <PaymentButtonsContainer>
              <PaymentModeButton
                selected={checkIfBtnIsActive('Cartão de Crédito')}
                type="button"
                onClick={() => handlePaymentMethodBtn('Cartão de Crédito')}
              >
                <CreditCard size={16} color={defaultTheme.purple} />
                <p>Cartão de crédito</p>
              </PaymentModeButton>
              <PaymentModeButton
                selected={checkIfBtnIsActive('Cartão de Débito')}
                type="button"
                onClick={() => handlePaymentMethodBtn('Cartão de Débito')}
              >
                <Bank size={16} color={defaultTheme.purple} />
                <p>cartão de débito</p>
              </PaymentModeButton>
              <PaymentModeButton
                selected={checkIfBtnIsActive('Dinheiro')}
                type="button"
                onClick={() => handlePaymentMethodBtn('Dinheiro')}
              >
                <Money size={16} color={defaultTheme.purple} />
                <p>dinheiro</p>
              </PaymentModeButton>
            </PaymentButtonsContainer>
          </BottomLeftCard>
        </LeftContainer>
        <RightContainer>
          <RightCard>
            {coffeeList!.length > 0 &&
              coffeeList?.map((item) => {
                return (
                  <CheckoutItem
                    name={item.name}
                    source={item.source}
                    amount={item.amount}
                    price={item.price}
                    key={item.name}
                  />
                )
              })}
            <PriceResumeContainer>
              <PriceLine>
                Total de itens <span>R$ {formatPrice(totalCoffeePrice)}</span>
              </PriceLine>
              <PriceLine>
                Entrega <span>R$ {formatPrice(deliveryPrice)}</span>
              </PriceLine>
              <TotalPriceLine>
                Total <span>R$ {formatPrice(finalPrice)}</span>
              </TotalPriceLine>
            </PriceResumeContainer>
            <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
          </RightCard>
        </RightContainer>
      </CheckoutForm>
    </MainSection>
  )
}
