import { CoffeCatalog } from '../models'

const coffes: Array<CoffeCatalog> = [
  {
    id: '1',
    img: 'images/Coffee.png',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 9.9,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    price: 9.9,
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: 'images/Coffee-4.png',
    tags: ['Tradicional'],
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    price: 9.9,
    description: 'Café expresso tradicional com espuma cremosa',
    img: 'images/Coffee-8.png',
    tags: ['Tradicional'],
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    price: 9.9,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: 'images/Coffee-11.png',
    tags: ['Tradicional', 'Gelado'],
  },

  {
    id: '5',
    name: 'Café com Leite',
    price: 9.9,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: 'images/Coffee-1.png',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: 'images/Coffee-5.png',
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: '7',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: 'images/Coffee-9.png',
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: '8',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: 'images/Coffee-12.png',
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
  },

  {
    id: '9',
    name: 'Mocaccino',
    price: 9.9,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: 'images/Coffee-2.png',
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    price: 9.9,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: 'images/Coffee-6.png',
    tags: ['Especial', 'Com Leite'],
  },
  {
    id: '11',
    name: 'Cubano',
    price: 9.9,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: 'images/Coffee-10.png',
    tags: ['Especial', 'Alcoólico', 'Com Leite'],
  },
  {
    id: '12',
    name: 'Havaiano',
    price: 9.9,
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: 'images/Coffee-13.png',
    tags: ['Especial'],
  },

  {
    id: '13',
    name: 'Árabe',
    price: 9.9,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: 'images/Coffee-3.png',
    tags: ['Especial'],
  },
  {
    id: '14',
    name: 'Irlandês',
    price: 9.9,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: 'images/Coffee-7.png',
    tags: ['Especial', 'Alcoólico'],
  },
]

export const getProducts = () => {
  return coffes
}
