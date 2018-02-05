import { HighlightDirective } from './highlight.directive';
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';


describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = null;
    const renderer: Renderer2 = null;

    const directive = new HighlightDirective(el, renderer);

    expect(directive).toBeTruthy();
  });
});
