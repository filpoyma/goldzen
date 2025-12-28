import { JewelryItem } from '../types/jewelry.types';

// Временные заглушки - замени на реальные изображения
export const jewelryItems: JewelryItem[] = [
  {
    id: '1',
    type: 'BRACELET',
    image: require('../assets/images/braslet.jpg'), // замени на изображение браслета
    title: 'BRACELET',
  },
  {
    id: '2',
    type: 'EARRINGS',
    image: require('../assets/images/earRings.jpg'), // замени на изображение сережек
    title: 'EARRINGS',
  },
  {
    id: '3',
    type: 'RING',
    image: require('../assets/images/ring.jpg'), // замени на изображение кольца
    title: 'RING',
  },
  {
    id: '4',
    type: 'NECKLACE',
    image: require('../assets/images/braslet.jpg'), // замени на изображение ожерелья
    title: 'NECKLACE',
  },
];
