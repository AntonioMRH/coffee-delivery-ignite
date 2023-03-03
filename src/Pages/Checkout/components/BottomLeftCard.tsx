import { ReactNode } from 'react'
import { BottomLeftCardContainer } from './Card.styles'

const BottomLeftCard = ({ children }: { children?: ReactNode }) => {
  return <BottomLeftCardContainer>{children}</BottomLeftCardContainer>
}

export default BottomLeftCard
