import styled, { css } from 'styled-components'

export const MainSection = styled.main`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (min-width: 480px) {
    padding: 40px 160px 240px 160px;
  }

  header {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 502px;
    flex-wrap: wrap;

    h5 {
      color: ${(props) => props.theme.subtitle};
      font-size: 1.125rem;
      font-weight: 700;
      font-family: 'Baloo 2', 'serif';
    }
  }
`

export const CheckoutForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  flex-wrap: wrap;
`
export const LeftContainer = styled.section`
  height: 591px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;

  @media (min-width: 768px) {
    width: 640px;
  }
`
export const RightContainer = styled.section`
  min-height: 226px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 768px) {
    width: 448px;
  }
`

export const CardTitleContainer = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`

export const CardTitle = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.subtitle};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.text};
  }
`
export const PaymentButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`
interface PaymentButtonProps {
  selected?: boolean
}

export const PaymentModeButton = styled.button<PaymentButtonProps>`
  min-width: 178px;
  height: 51px;
  padding: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme.purple}`
      : '0px solid transparent'};
  color: ${(props) => props.theme.text};
  background-color: ${(props) =>
    props.selected
      ? `${props.theme['purple--light']}`
      : `${props.theme.button}`};
  border-radius: 6px;

  p {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
  }

  ${(props) =>
    !props.selected &&
    css`
      &:hover {
        background-color: ${(props) => props.theme.hover};
        color: ${(props) => props.theme.subtitle};
      }
    `}
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;
  border: 0px solid transparent;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['yellow--dark']};
  }
`

export const PriceResumeContainer = styled.div`
  width: 100%;
  min-height: 92px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`

const BasePriceParagraphLine = styled.p`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PriceLine = styled(BasePriceParagraphLine)`
  color: ${(props) => props.theme.text};
  font-size: 0.875rem;
  span {
    font-size: 1rem;
  }
`

export const TotalPriceLine = styled(BasePriceParagraphLine)`
  color: ${(props) => props.theme.subtitle};
  font-size: 1.25rem;
  font-weight: 700;
  span {
    font-size: 1.25rem;
  }
`
