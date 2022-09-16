import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[clickOutside]',
})
export default class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();

  documentClick$$!: Subscription;
  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.documentClick$$ = fromEvent(this.document, 'click')
      .pipe(
        filter((e: any) => {
          return !this.isInside(e.target as HTMLElement);
        })
      )
      .subscribe(() => {
        this.clickOutside.emit();
      });
  }

  isInside(elementToCheck: HTMLElement): boolean {
    if (elementToCheck.classList.contains('product-img')) return false;
    if (elementToCheck.classList.contains('trashcan-img')) return true;
    if (elementToCheck.classList.contains('dropdown-item')) return false;
    return (
      elementToCheck === this.element.nativeElement ||
      this.element.nativeElement.contains(elementToCheck)
    );
  }
  ngOnDestroy(): void {
    this.documentClick$$.unsubscribe();
  }
}
