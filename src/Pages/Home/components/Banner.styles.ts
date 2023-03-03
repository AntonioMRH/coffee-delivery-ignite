import styled from 'styled-components'

export const BannerContainer = styled.article`
  width: 100vw;
  height: 544px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 92px 160px;

  background-color: ${(props) => props.theme.background};
  background-image: url('src/assets/background.svg');
`
export const BannerLeftContainer = styled.section`
  width: 100%;
  max-width: 588px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 66px;

  div {
    h1 {
      font-size: 3rem;
      line-height: 130%;
      font-family: 'Baloo 2', 'serif';
      color: ${(props) => props.theme.title};
      font-weight: 900;
    }

    p {
      font-size: 1.25rem;
      line-height: 130%;
      font-family: 'roboto', 'serif';
      color: ${(props) => props.theme.subtitle};
    }
  }
`

export const ItemsList = styled.ul`
  width: 100%;
  height: 84px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px 40px;

  list-style-type: none;
`
type ItemVariant = 'orange' | 'yellow' | 'purple' | 'gray'

export interface ItemProps {
  variant: ItemVariant
}

const ITEM_VARIANT = {
  orange: 'yellow--dark',
  yellow: 'yellow',
  gray: 'text',
  purple: 'purple',
} as const

export const Item = styled.li<ItemProps>`
  display: flex;
  min-width: 231px;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  p {
    font-size: 1rem;
    font-family: 'roboto', 'serif';
    color: ${(props) => props.theme.text};
  }

  span {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme[ITEM_VARIANT[props.variant]]};
  }
`

export const BannerRightContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 476px;
  display: flex;
  align-items: center;
  justify-content: center;
`
