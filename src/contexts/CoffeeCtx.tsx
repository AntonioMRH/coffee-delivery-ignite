import { ReactNode, createContext, useEffect, useState } from 'react'
import { AddressType } from '../Pages/Checkout'

interface AddressInterface extends AddressType {
  payment: string
}

export interface CoffeeItem {
  name: string
  source: any
  amount: number
  price: number
}

interface CoffeeCtxType {
  coffeeList: CoffeeItem[] | undefined
  totalCoffeeQty: number
  totalCoffeePrice: number
  updateCoffeeList: (item: CoffeeItem) => void
  removeSelectItem: (coffeeName: string) => void
  updateCheckoutList: (item: CoffeeItem) => void
  userAddress: AddressInterface
  setUserDeliveryDetails: (infos: AddressInterface) => void
  resetOrder: () => void
}

export const CoffeeCtx = createContext({} as CoffeeCtxType)

const defaultAddress = {
  payment: '',
  complement: undefined,
  number: '',
  cep: '',
  street: '',
  neighborhood: '',
  city: '',
  uf: '',
}

const orderFromLocalStorage = JSON.parse(
  localStorage.getItem('@user-order:coffee-1.0.0') || '[]',
)

const addressFromLocalStorage = JSON.parse(
  localStorage.getItem('@user-address-1.0.0') || JSON.stringify(defaultAddress),
)

export function CoffeeCtxProvider({ children }: { children: ReactNode }) {
  const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>(
    orderFromLocalStorage,
  )
  const [userAddress, setUserAddress] = useState<AddressInterface>({
    ...addressFromLocalStorage,
  })

  useEffect(() => {
    localStorage.setItem('@user-order:coffee-1.0.0', JSON.stringify(coffeeList))
  }, [coffeeList])

  useEffect(() => {
    localStorage.setItem('@user-address-1.0.0', JSON.stringify(userAddress))
  }, [userAddress])

  const getIndexOfItem = (itemName: string) =>
    coffeeList.findIndex((v) => v.name === itemName)

  function addNewCoffeeItem(item: CoffeeItem) {
    setCoffeeList((state) => [...state, item])
  }

  function updateCoffeeItem(
    item: CoffeeItem,
    items: CoffeeItem[],
    idx: number,
  ) {
    const tempState = [...items]
    const tempItem = { ...tempState[idx] }
    tempItem.amount = tempItem.amount + item.amount
    tempItem.price = tempItem.price + item.price
    tempState[idx] = tempItem
    setCoffeeList(tempState)
  }

  function updateCoffeeList(item: CoffeeItem) {
    const checkIndex = getIndexOfItem(item.name)
    if (checkIndex === -1) {
      addNewCoffeeItem(item)
    } else {
      updateCoffeeItem(item, coffeeList, checkIndex)
    }
  }

  function updateCheckoutList(item: CoffeeItem) {
    const idx = getIndexOfItem(item.name)
    const tempState = [...coffeeList]
    tempState[idx] = item
    setCoffeeList(tempState)
  }

  function removeSelectItem(coffeeName: string) {
    const filteredArr = coffeeList.filter((item) => item.name !== coffeeName)
    setCoffeeList(filteredArr)
  }

  function setUserDeliveryDetails(infos: AddressInterface) {
    setUserAddress(infos)
  }

  function resetOrder() {
    setCoffeeList([])
  }

  const totalCoffeeQty =
    coffeeList.length > 0
      ? coffeeList.reduce((total, item) => {
          return total + item.amount
        }, 0)
      : 0

  const totalCoffeePrice =
    coffeeList.length > 0
      ? coffeeList.reduce((total, item) => {
          return total + item.price
        }, 0)
      : 0

  return (
    <CoffeeCtx.Provider
      value={{
        coffeeList,
        totalCoffeeQty,
        totalCoffeePrice,
        updateCoffeeList,
        removeSelectItem,
        updateCheckoutList,
        userAddress,
        setUserDeliveryDetails,
        resetOrder,
      }}
    >
      {children}
    </CoffeeCtx.Provider>
  )
}
