import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageName',
})
export default class PageNamePipe implements PipeTransform {
  transform(value: string): string {
    const splitValue = value.split('/');
    splitValue.shift();
    if (splitValue.length === 1) {
      if (splitValue[0] === 'collections') return 'SHOP';
      return splitValue[0].split('-').join(' ').toUpperCase();
    }
    if (splitValue.length === 3) return 'PRODUCT DETAIL';
    return splitValue[1].toUpperCase();
  }
}
