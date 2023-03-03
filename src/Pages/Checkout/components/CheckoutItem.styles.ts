import styled from 'styled-components'

export const ItemBox = styled.div`
  width: 100%;
  height: 105px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.button};
  h6 {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: bold;
  }
`

export const ItemBoxLeftSide = styled.div`
  flex: 1;
  width: 100%;
  min-height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme.subtitle};
    }
  }
`

export const ItemBoxRightSide = styled.div`
  height: 100%;
  width: fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 8px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  min-width: 171px;
  height: 32px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`
export const QuantitySelectorContainer = styled.div`
  width: 72px;
  height: 100%;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
  padding: 5.5px 8px;

  background-color: ${(props) => props.theme.button};

  p {
    color: ${(props) => props.theme.title};
    font-size: 1rem;
  }

  button {
    border: none;
    width: 14ox;
    height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;

    color: ${(props) => props.theme['purple--dark']};
    &:hover {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const RemoveButton = styled.button`
  width: 91px;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 6px;
  gap: 4px;
  border: none;
  padding: 6.5px 8px;

  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.purple};

  &:hover {
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme['purple--dark']};
  }
`

export const RemoveLabel = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 160%;

  &:hover {
    color: ${(props) => props.theme.subtitle};
  }
`
