import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 104px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-right: 11%;
  padding-left: 11%;

  background-color: ${(props) => props.theme.background};
`
export const LogoContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const LocationContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${(props) => props.theme['purple--light']};
  color: ${(props) => props.theme['purple--dark']};
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
`

type CartContainerType = {
  value: number
}

export const CartContainer = styled.div<CartContainerType>`
  width: 38px;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['yellow--light']};
  border-radius: 6px;
  cursor: ${(props) => (props.value > 0 ? 'pointer' : 'default')};
  color: ${(props) => props.theme['yellow--dark']};

  span {
    width: 20px;
    height: 20px;
    position: absolute;

    top: -8px;
    right: -8.35px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: ${(props) => props.theme['yellow--dark']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
  }
`
export const InfoContainer = styled.div`
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`
