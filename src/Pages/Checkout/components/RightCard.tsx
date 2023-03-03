import { ReactNode } from 'react'
import { RightCardContainer } from './Card.styles'

const RightCard = ({ children }: { children?: ReactNode }) => {
  return <RightCardContainer>{children}</RightCardContainer>
}

export default RightCard
