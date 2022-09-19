export interface CollectionItem {
  name: string;
  price: number;
  imgPath: string;
  id: number;
  category: string;
  salePrice?: number;
  description?: string;
  'additional-information'?: string;
  material?: string;
}

export interface CategoryModel {
  items: CollectionItem[];
}

export interface CartItem {
  item: CollectionItem;
  quantity: number;
}
