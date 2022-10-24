import { CategoryModel } from './data.model';

let idCounter = 0;

const bedItemList = [
  {
    name: 'REST bed',
    price: 659,
    images: [
      '/assets/images/collections/beds/beds-1.png',
      '/assets/images/collections/beds/additional-bed-1.jpg',
      '/assets/images/collections/beds/additional-bed-2.jpg',
      '/assets/images/collections/beds/additional-bed-3.jpg',
    ],
    category: 'beds',
    id: idCounter++,
    salePrice: 499,
    description: 'Very Amazing bed',
    'additional-information': 'Super soft',
    material: 'Gobelen',
  },
  {
    name: 'MINDFUL bed',
    price: 899,
    images: [
      '/assets/images/collections/beds/beds-2.png',
      '/assets/images/collections/beds/additional-bed-1.jpg',
      '/assets/images/collections/beds/additional-bed-2.jpg',
      '/assets/images/collections/beds/additional-bed-3.jpg',
    ],
    category: 'beds',
    id: idCounter++,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
  {
    name: 'CRAZY bed',
    price: 1129,
    images: [
      '/assets/images/collections/beds/beds-3.png',
      '/assets/images/collections/beds/additional-bed-1.jpg',
      '/assets/images/collections/beds/additional-bed-2.jpg',
      '/assets/images/collections/beds/additional-bed-3.jpg',
    ],
    category: 'beds',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP bed',
    price: 329,
    images: [
      '/assets/images/collections/beds/beds-4.png',
      '/assets/images/collections/beds/additional-bed-1.jpg',
      '/assets/images/collections/beds/additional-bed-2.jpg',
      '/assets/images/collections/beds/additional-bed-3.jpg',
    ],
    category: 'beds',
    id: idCounter++,
  },
];

const sheetItemList = [
  {
    name: 'REST sheet',
    price: 99,
    images: ['/assets/images/collections/sheets/sheets-1.png'],
    category: 'sheets',
    id: idCounter++,
  },
  {
    name: 'MINDFUL sheet',
    price: 119,
    images: ['/assets/images/collections/sheets/sheets-2.png'],
    category: 'sheets',
    id: idCounter++,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
  {
    name: 'CRAZY sheet',
    price: 149,
    images: ['/assets/images/collections/sheets/sheets-3.png'],
    category: 'sheets',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP sheet',
    price: 49,
    images: ['/assets/images/collections/sheets/sheets-4.png'],
    category: 'sheets',
    id: idCounter++,
    salePrice: 19,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
];

const pillowitemList = [
  {
    name: 'REST pillow',
    price: 49,
    images: [
      '/assets/images/collections/pillows/pillow-1.png',
      '/assets/images/collections/pillows/additonal-pillow-1.jpg',
      '/assets/images/collections/pillows/additonal-pillow-2.jpg',
    ],
    category: 'pillows',
    id: idCounter++,
  },
  {
    name: 'MINDFUL pillow',
    price: 69,
    images: ['/assets/images/collections/pillows/pillow-2.png'],
    category: 'pillows',
    id: idCounter++,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
  {
    name: 'CRAZY pillow',
    price: 99,
    images: [
      '/assets/images/collections/pillows/pillow-3.png',
      '/assets/images/collections/pillows/additonal-pillow-1.jpg',
      '/assets/images/collections/pillows/additonal-pillow-2.jpg',
    ],
    category: 'pillows',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP pillow',
    price: 29,
    images: [
      '/assets/images/collections/pillows/pillow-4.png',
      '/assets/images/collections/pillows/additonal-pillow-2.jpg',
    ],
    category: 'pillows',
    id: idCounter++,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
];

const rugItemsList = [
  {
    name: 'REST rug',
    price: 69,
    images: [
      '/assets/images/collections/rugs/rugs-1.png',
      '/assets/images/collections/rugs/additional-rug.jpg',
    ],
    category: 'rugs',
    id: idCounter++,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
  {
    name: 'MINDFUL rug',
    price: 99,
    images: [
      '/assets/images/collections/rugs/rugs-2.png',
      '/assets/images/collections/rugs/additional-rug-1.jpg',
    ],
    category: 'rugs',
    id: idCounter++,
  },
  {
    name: 'CRAZY rug',
    price: 149,
    images: ['/assets/images/collections/rugs/rugs-3.png'],
    category: 'rugs',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP rug',
    price: 19,
    images: ['/assets/images/collections/rugs/rugs-4.png'],
    category: 'rugs',
    id: idCounter++,
    salePrice: 9,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
];

const kidItemList = [
  {
    name: 'REST chairs',
    price: 299,
    images: [
      '/assets/images/collections/kids/kids-1.png',
      '/assets/images/collections/beds/additional-bed-1.jpg',
    ],
    category: 'kids',
    id: idCounter++,
  },
  {
    name: 'MINDFUL toys',
    price: 129,
    images: [
      '/assets/images/collections/kids/kids-2.png',
      '/assets/images/collections/rugs/additional-rug.jpg',
    ],
    category: 'kids',
    id: idCounter++,
    salePrice: 89,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
  {
    name: 'CRAZY chandeler',
    price: 489,
    images: ['/assets/images/collections/kids/kids-3.png'],
    category: 'kids',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP set',
    price: 999,
    images: ['/assets/images/collections/kids/kids-4.png'],
    category: 'kids',
    id: idCounter++,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'additional-information': 'Im not sure',
    material: 'Plastic',
  },
];

export const collections: { [key: string]: CategoryModel } = {
  beds: {
    items: bedItemList,
  },
  pillows: {
    items: pillowitemList,
  },
  sheets: {
    items: sheetItemList,
  },
  rugs: {
    items: rugItemsList,
  },
  kids: {
    items: kidItemList,
  },
};
