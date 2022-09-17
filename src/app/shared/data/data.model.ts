export interface CollectionItem {
  name: string;
  price: number;
  imgPath: string;
  id: number;
  category: string;
  salePrice?: number;
}

export interface CategoryModel {
  items: CollectionItem[];
}

export interface CartItem {
  item: CollectionItem;
  quantity: number;
}
