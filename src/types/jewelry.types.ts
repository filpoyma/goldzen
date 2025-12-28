export type JewelryType = 'BRACELET' | 'EARRINGS' | 'RING' | 'NECKLACE';

export interface JewelryItem {
  id: string;
  type: JewelryType;
  image: any; // require() для изображения
  title: string;
}

