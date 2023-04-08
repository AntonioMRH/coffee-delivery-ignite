import { CardsContainer, MainSection } from './Home.styles'
import Banner from './components/Banner'
import CoffeeCard from './components/CoffeeCard'
import Expresso from '../../assets/Expresso.svg'

const coffeeList = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    source: Expresso,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    source: 'src/assets/Americano.svg',
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    source: 'src/assets/ExpressoCremoso.svg',
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    source: 'src/assets/CafeGelado.svg',
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    source: 'src/assets/CafeLeite.svg',
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    source: 'src/assets/Latte.svg',
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    source: 'src/assets/Capuccino.svg',
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    source: 'src/assets/Macchiato.svg',
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    source: 'src/assets/Mochaccino.svg',
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    source: 'src/assets/ChocolateQuente.svg',
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    source: 'src/assets/Cubano.svg',
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    source: 'src/assets/Havaiano.svg',
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    source: 'src/assets/Arabe.svg',
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    source: 'src/assets/Irlandes.svg',
  },
]

export function Home() {
  return (
    <>
      <Banner />
      <MainSection>
        <h3>Nossos cafés</h3>
        <CardsContainer>
          {coffeeList.map((item) => {
            return (
              <CoffeeCard
                name={item.name}
                key={item.name}
                description={item.description}
                source={item.source}
                tags={item.tags}
              />
            )
          })}
        </CardsContainer>
      </MainSection>
    </>
  )
}
