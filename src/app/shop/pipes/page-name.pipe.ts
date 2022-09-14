import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageName',
})
export default class PageNamePipe implements PipeTransform {
  transform(value: string): string {
    const splitValue = value.split('/');
    if (splitValue.length === 2) return 'SHOP';
    if (splitValue.length === 4) return 'PRODUCT DETAIL';
    return splitValue[2].toUpperCase();
  }
}