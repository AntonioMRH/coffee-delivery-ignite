import styled from 'styled-components'

export const MainSection = styled.main`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 480px) {
    padding: 80px 160px 300px 160px;
  }

  header {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4px;

    h3 {
      color: ${(props) => props.theme['yellow--dark']};
      font-family: 'Baloo 2', 'serif';
      font-size: 2rem;
      font-weight: 900;
      line-height: 130%;
    }

    p {
      color: ${(props) => props.theme.subtitle};
      font-size: 1.25rem;
      line-height: 130%;
    }
  }
`

export const ContentContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 102px;
  flex-wrap: wrap;

  padding-top: 40px;

  img {
    width: 100%;
    height: 100%;
    max-width: 492px;
    max-height: 293px;
  }
`

export const LeftContainer = styled.div`
  width: 100%;
  max-width: 526px;
  height: 270px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  padding: 40px;

  /* border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(#dbac2c, #8047f8);
  border-image-slice: 1; */
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px 6px 36px;
`

type ItemVariant = 'orange' | 'yellow' | 'purple'

export interface ItemProps {
  color: ItemVariant
}

const ITEM_VARIANT = {
  orange: 'yellow--dark',
  yellow: 'yellow',
  purple: 'purple',
} as const

export const SuccessItem = styled.div<ItemProps>`
  max-height: 42px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  span {
    background-color: ${(props) => props.theme[ITEM_VARIANT[props.color]]};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const TextBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props) => props.theme.text}
  font-size: 1rem;
`
