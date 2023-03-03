import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonsContainer,
  ItemBox,
  ItemBoxLeftSide,
  ItemBoxRightSide,
  QuantitySelectorContainer,
  RemoveButton,
  RemoveLabel,
} from './CheckoutItem.styles'
import { CoffeeCtx, CoffeeItem } from '../../../contexts/CoffeeCtx'
import { useContext } from 'react'

export function formatPrice(price: number): string {
  return price.toFixed(2).replace('.', ',')
}

const CheckoutItem = (props: CoffeeItem) => {
  const { removeSelectItem, updateCheckoutList } = useContext(CoffeeCtx)

  function handlePlusOneButton() {
    const newQty = props.amount + 1
    const newPrice = props.price + 9.9
    const updatedItem = { ...props, amount: newQty, price: newPrice }
    updateCheckoutList(updatedItem)
  }

  function handleMinusOneButton() {
    if (props.amount > 1) {
      const newQty = props.amount - 1
      const newPrice = props.price - 9.9
      const updatedItem = { ...props, amount: newQty, price: newPrice }
      updateCheckoutList(updatedItem)
    } else {
      removeSelectItem(props.name)
    }
  }
  return (
    <ItemBox>
      <ItemBoxLeftSide>
        <img src={props.source} alt="copo do café escolhido" />
        <section>
          <p>{props.name}</p>
          <ButtonsContainer>
            <QuantitySelectorContainer>
              <button onClick={() => handleMinusOneButton()}>
                <Minus size={14} weight="fill" />
              </button>
              <p>{props.amount}</p>
              <button onClick={() => handlePlusOneButton()}>
                <Plus size={14} weight="fill" />
              </button>
            </QuantitySelectorContainer>
            <RemoveButton
              onClick={() => {
                removeSelectItem(props.name)
              }}
            >
              <Trash size={16} />
              <RemoveLabel>Remover</RemoveLabel>
            </RemoveButton>
          </ButtonsContainer>
        </section>
      </ItemBoxLeftSide>
      <ItemBoxRightSide>
        <h6>R$ {formatPrice(props.price)}</h6>
      </ItemBoxRightSide>
    </ItemBox>
  )
}

export default CheckoutItem
