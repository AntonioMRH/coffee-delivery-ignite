import { CardsContainer, MainSection } from './Home.styles'
import Banner from './components/Banner'
import CoffeeCard from './components/CoffeeCard'
import Expresso from '../../assets/Expresso.svg'
import Americano from '../../assets/Americano.svg'
import ExpressoCremoso from '../../assets/ExpressoCremoso.svg'
import ExpressoGelado from '../../assets/CafeGelado.svg'
import CafeLeite from '../../assets/CafeLeite.svg'
import Latte from '../../assets/Latte.svg'
import Capuccino from '../../assets/Capuccino.svg'
import Macchiato from '../../assets/Macchiato.svg'
import Mocaccino from '../../assets/Mochaccino.svg'
import ChocolateQuente from '../../assets/ChocolateQuente.svg'
import Cubano from '../../assets/Cubano.svg'
import Havaiano from '../../assets/Havaiano.svg'
import Arabe from '../../assets/Arabe.svg'
import Irlandes from '../../assets/Irlandes.svg'

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
    source: Americano,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    source: ExpressoCremoso,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    source: ExpressoGelado,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    source: CafeLeite,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    source: Latte,
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    source: Capuccino,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    source: Macchiato,
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    source: Mocaccino,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    source: ChocolateQuente,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    source: Cubano,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    source: Havaiano,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    source: Arabe,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    source: Irlandes,
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
