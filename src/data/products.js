import cereal from '../img/cereal.jpg'
import cookies from '../img/cookies.jpg'
import lettuce from '../img/lettuce.jpg'
import meat from '../img/meat.jpg'
import milk from '../img/milk.jpg'
import rice from '../img/rice.jpg'

export const initialProducts = [
  {
    id: 1,
    name: 'Cereal',
    brand: 'Aurora Crunch',
    category: 'Despensa',
    description: 'Aros de cereal de colores, crujientes y listos para acompañar el desayuno con leche o yogur.',
    price: 3990,
    stock: 18,
    image: cereal,
  },
  {
    id: 2,
    name: 'Galletas',
    brand: 'Doña Miga',
    category: 'Despensa',
    description: 'Galletas horneadas con receta casera, ideales para la merienda o para compartir con un café.',
    price: 1890,
    stock: 24,
    image: cookies,
  },
  {
    id: 3,
    name: 'Lechuga',
    brand: 'Huerta Clara',
    category: 'Frescos',
    description: 'Lechuga fresca de hojas tiernas, seleccionada a diario para ensaladas y sándwiches.',
    price: 990,
    stock: 15,
    image: lettuce,
  },
  {
    id: 4,
    name: 'Carne',
    brand: 'Campo Sereno',
    category: 'Frescos',
    description: 'Cortes de carne de res frescos, ideales para la plancha, el horno o guisos de cocción lenta.',
    price: 8990,
    stock: 8,
    image: meat,
  },
  {
    id: 5,
    name: 'Leche',
    brand: 'Valle Blanco',
    category: 'Lácteos',
    description: 'Leche entera pasteurizada, de sabor suave y perfecta para el consumo diario de toda la familia.',
    price: 1150,
    stock: 30,
    image: milk,
  },
  {
    id: 6,
    name: 'Arroz',
    brand: 'Grano Real',
    category: 'Despensa',
    description: 'Arroz de grano seleccionado que queda suelto y aromático, base de innumerables recetas.',
    price: 1690,
    stock: 20,
    image: rice,
  },
]
