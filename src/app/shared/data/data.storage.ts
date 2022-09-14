let idCounter = 0;

const bedItemList = [
  {
    name: 'REST bed',
    price: 659,
    imgPath: '/assets/images/collections/beds/beds-1.png',
    id: idCounter++,
  },
  {
    name: 'MINDFUL bed',
    price: 899,
    imgPath: '/assets/images/collections/beds/beds-2.png',
    id: idCounter++,
  },
  {
    name: 'CRAZY bed',
    price: 1129,
    imgPath: '/assets/images/collections/beds/beds-3.png',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP bed',
    price: 329,
    imgPath: '/assets/images/collections/beds/beds-4.png',
    id: idCounter++,
  },
];

const sheetItemList = [
  {
    name: 'REST sheet',
    price: 99,
    imgPath: '/assets/images/collections/sheets/sheets-1.png',
    id: idCounter++,
  },
  {
    name: 'MINDFUL sheet',
    price: 119,
    imgPath: '/assets/images/collections/sheets/sheets-2.png',
    id: idCounter++,
  },
  {
    name: 'CRAZY sheet',
    price: 149,
    imgPath: '/assets/images/collections/sheets/sheets-3.png',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP sheet',
    price: 49,
    imgPath: '/assets/images/collections/sheets/sheets-4.png',
    id: idCounter++,
  },
];

const pillowitemList = [
  {
    name: 'REST pillow',
    price: 49,
    imgPath: '/assets/images/collections/pillows/pillow-1.png',
    id: idCounter++,
  },
  {
    name: 'MINDFUL pillow',
    price: 69,
    imgPath: '/assets/images/collections/pillows/pillow-2.png',
    id: idCounter++,
  },
  {
    name: 'CRAZY pillow',
    price: 99,
    imgPath: '/assets/images/collections/pillows/pillow-3.png',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP pillow',
    price: 29,
    imgPath: '/assets/images/collections/pillows/pillow-4.png',
    id: idCounter++,
  },
];

const rugItemsList = [
  {
    name: 'REST rug',
    price: 69,
    imgPath: '/assets/images/collections/rugs/rugs-1.png',
    id: idCounter++,
  },
  {
    name: 'MINDFUL rug',
    price: 99,
    imgPath: '/assets/images/collections/rugs/rugs-2.png',
    id: idCounter++,
  },
  {
    name: 'CRAZY rug',
    price: 149,
    imgPath: '/assets/images/collections/rugs/rugs-3.png',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP rug',
    price: 19,
    imgPath: '/assets/images/collections/rugs/rugs-4.png',
    id: idCounter++,
  },
];

const kidItemList = [
  {
    name: 'REST chairs',
    price: 299,
    imgPath: '/assets/images/collections/kids/kids-1.png',
    id: idCounter++,
  },
  {
    name: 'MINDFUL toys',
    price: 129,
    imgPath: '/assets/images/collections/kids/kids-2.png',
    id: idCounter++,
  },
  {
    name: 'CRAZY chandeler',
    price: 489,
    imgPath: '/assets/images/collections/kids/kids-3.png',
    id: idCounter++,
  },
  {
    name: 'LOWSTEP set',
    price: 999,
    imgPath: '/assets/images/collections/kids/kids-4.png',
    id: idCounter++,
  },
];

export const collections: { [key: string]: any } = {
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
