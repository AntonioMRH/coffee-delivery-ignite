import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 112px 20px 20px 20px;

  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.card};

  img {
    width: 120px;
    height: 120px;
    position: absolute;
    top: -20px;
    margin-bottom: -12px;
  }

  h5 {
    font-family: 'Baloo 2', 'serif';
    font-size: 1.25rem;
    color: ${(props) => props.theme.subtitle};
    margin-bottom: 8px;
    font-weight: bold;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.label};
    text-align: center;
  }
`

export const BadgesContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;

  padding: 0 10.5px;
  margin-bottom: 16px;
`

export const Badge = styled.span`
  display: flex;
  align-items: center;
  max-height: 21px;
  border-radius: 100px;
  background-color: ${(props) => props.theme['yellow--light']};
  color: ${(props) => props.theme['yellow--dark']};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.625rem;
  padding: 4px 8px;
`

export const CardFooter = styled.div`
  width: 100%;
  height: 38px;
  padding: 0 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 33px;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.text};

    span {
      font-size: 1.5rem;
      font-weight: 900;
      font-family: 'Baloo 2', 'serif';
    }
  }
`
export const QuantitySelectorContainer = styled.div`
  width: 72px;
  height: 100%;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  margin-left: 23px;
  margin-right: 8px;
  padding: 8.5px 8px;

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

export const CartButton = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme['purple--dark']};
  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
