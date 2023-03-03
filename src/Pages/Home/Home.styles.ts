import styled from 'styled-components'

export const MainSection = styled.main`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 54px;

  @media (min-width: 480px) {
    padding: 30px 160px 157px 160px;
  }

  h3 {
    color: ${(props) => props.theme.subtitle};
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Baloo 2', 'serif';
  }
`

export const CardsContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px 32px;

  background-color: ${(props) => props.theme.background};
`
