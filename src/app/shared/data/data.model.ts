export interface CollectionItem {
  name: string;
  price: number;
  imgPath: string;
  id: number;
  category: string;
  quantity?: number;
}

export interface CategoryModel {
  name: CollectionItem[];
}

export interface CartItem {
  item: CollectionItem;
  quantity: number;
}
