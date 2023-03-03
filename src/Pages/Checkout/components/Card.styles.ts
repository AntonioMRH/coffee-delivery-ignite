import styled from 'styled-components'

const CardBaseStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.card};
`

export const BottomLeftCardContainer = styled(CardBaseStyle)`
  height: 207px;
  gap: 32px;
`

export const RightCardContainer = styled(CardBaseStyle)`
  height: 100%;
  border-radius: 6px 44px 6px 44px;
  gap: 24px;
`
export const TopLeftCardContainer = styled(CardBaseStyle)`
  height: 372px;
  gap: 32px;

  form {
    width: 100%;
    height: 100%;
  }
`

export const AddressFormContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;

  div {
    width: 100%;
    display: flex;

    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    flex-wrap: wrap;
  }
`

const BaseInput = styled.input`
  height: 42px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.button};
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  padding: 12px;

  &::-webkit-input-placeholder: {
    color: ${(props) => props.theme.label};
  }

  &::-moz-placeholder: {
    color: ${(props) => props.theme.label};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow--dark']};
  }
`
export const CEPInput = styled(BaseInput)`
  width: 200px;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
`
export const StreetNumberInput = styled(BaseInput)`
  width: 200px;
`
export const StreetComplementInput = styled(BaseInput)`
  flex: 1;
`
export const NeighborhoodInput = styled(BaseInput)`
  width: 200px;
`
export const CityInput = styled(BaseInput)`
  flex: 1;
`
export const UFInput = styled(BaseInput)`
  width: 60px;
`
export const ComplementDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    position: absolute;
    right: 12px;
    top: 13px;
    font-size: 12px;
    font-style: italic;
    color: ${(props) => props.theme.label};
  }
`
