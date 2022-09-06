export interface CollectionItem {
  name: string;
  price: number;
  imgPath: string;
}

export interface CategoryModel {
  name: CollectionItem[];
}
