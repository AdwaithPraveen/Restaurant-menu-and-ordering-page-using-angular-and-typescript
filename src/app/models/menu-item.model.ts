export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  ingredients: string[];
  isVegetarian: boolean;
  isSpicy: boolean;
  isAvailable: boolean;
}