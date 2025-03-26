
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  category: string;
  imageSrc?: string;
  quantity?: number;
  specialInstructions?: string;
}
