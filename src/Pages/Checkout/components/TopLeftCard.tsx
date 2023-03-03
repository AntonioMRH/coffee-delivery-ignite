import { ReactNode } from 'react'
import { TopLeftCardContainer } from './Card.styles'

const TopLeftCard = ({ children }: { children?: ReactNode }) => {
  return <TopLeftCardContainer>{children}</TopLeftCardContainer>
}

export default TopLeftCard
