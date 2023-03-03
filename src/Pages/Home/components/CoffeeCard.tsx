import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Badge,
  BadgesContainer,
  CardContainer,
  CardFooter,
  CartButton,
  QuantitySelectorContainer,
} from './CoffeCard.styles'
import { defaultTheme } from '../../../styles/themes/default'
import { useContext, useState } from 'react'
import { CoffeeCtx } from '../../../contexts/CoffeeCtx'

type CoffeeCardProps = {
  name: string
  description: string
  tags: string[]
  source: string
  key?: string
}

const CoffeeCard = (props: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState(1)
  const { updateCoffeeList } = useContext(CoffeeCtx)

  const handleBtnPlusOne = () => {
    setQuantity((state) => state + 1)
  }

  const handleBtnMinusOne = () => {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  const handleAddToCart = () => {
    const selectedItem = {
      name: props.name,
      source: props.source,
      amount: quantity,
      price: 9.9 * quantity,
    }
    updateCoffeeList(selectedItem)
    setQuantity(1)
  }

  return (
    <CardContainer>
      <img src={props.source} alt={props.name} />
      <BadgesContainer>
        {props.tags.map((tag) => {
          return <Badge key={props.tags.indexOf(tag)}>{tag}</Badge>
        })}
      </BadgesContainer>
      <h5>{props.name}</h5>
      <p>{props.description}</p>
      <CardFooter>
        <p>
          R$ <span>9,90</span>
        </p>

        <QuantitySelectorContainer>
          <button onClick={() => handleBtnMinusOne()}>
            <Minus size={16} weight="fill" />
          </button>
          <p>{quantity}</p>
          <button onClick={() => handleBtnPlusOne()}>
            <Plus size={16} weight="fill" />
          </button>
        </QuantitySelectorContainer>
        <CartButton onClick={() => handleAddToCart()}>
          <ShoppingCart size={19} weight="fill" color={defaultTheme.card} />
        </CartButton>
      </CardFooter>
    </CardContainer>
  )
}

export default CoffeeCard
