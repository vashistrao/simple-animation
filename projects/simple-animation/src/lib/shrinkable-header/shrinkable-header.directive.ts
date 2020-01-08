import { Directive, HostListener, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[saShrinkableHeader]'
})
export class ShrinkableHeaderDirective {

  @Input() shrinkAt: number;
  private fontSize: number;
  private fontSizeUnit: string;
  private intialScrollTop: number;
  private initialHeight: number;
  private initialWidth: number;
  private divElement: any;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.initialHeight = this.elRef.nativeElement.offsetHeight;
    this.initialWidth = this.elRef.nativeElement.offsetWidht;
    this.intialScrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    this.fontSize = this.elRef.nativeElement.style.fontSize.match('[0-9]*');
    this.fontSizeUnit = this.elRef.nativeElement.style.fontSize.replace(this.fontSize, '');
    this.divElement = this.renderer.createElement('div');
    this.renderer.setStyle(this.divElement, 'height', `${this.initialHeight}px`);
    //this.shrinker();
  }

  private shrinker(): void {
    let elementPosition = this.elRef.nativeElement.offsetTop || 0;
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let scrollPostion = document.documentElement.scrollTop || 0;
    let startShrinkPosition = (viewportHeight * this.shrinkAt) / 100;

    if ((scrollPostion + startShrinkPosition) >= elementPosition) {
      let moved = (scrollPostion - this.intialScrollTop);
      let toBeReduced = 0;
      let position = '';
      let newFontSize = 0;
      let viewportShrinkPosition = `${startShrinkPosition}px`;

      if (moved >= this.initialHeight) {
        toBeReduced = this.initialHeight;
        position = 'fixed';
        newFontSize = 0;
      }
      else if (moved <= 0) {
        toBeReduced = 0;
        position = 'static';
        newFontSize = this.fontSize;
      }
      else {
        toBeReduced = moved;
        position = 'fixed';
        newFontSize = ((this.initialHeight - toBeReduced) / this.initialHeight) * this.fontSize;
      }

      this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.initialHeight - toBeReduced}px`);
      this.renderer.setStyle(this.elRef.nativeElement, 'width', `${this.initialWidth}px`);
      this.renderer.setStyle(this.elRef.nativeElement, 'font-size', `${newFontSize}${this.fontSizeUnit}`);
      this.renderer.setStyle(this.elRef.nativeElement, 'position', position);
      this.renderer.setStyle(this.elRef.nativeElement, 'top', viewportShrinkPosition);

      this.renderer.insertBefore(
        this.renderer.parentNode(this.elRef.nativeElement),
        this.divElement,
        this.renderer.nextSibling(this.elRef.nativeElement));
    }
    else {
      this.renderer.setStyle(this.elRef.nativeElement, 'height', `${this.initialHeight}px`);
      this.renderer.setStyle(this.elRef.nativeElement, 'width', `${this.initialWidth}px`);
      this.renderer.setStyle(this.elRef.nativeElement, 'font-size', `${this.fontSize}${this.fontSizeUnit}`);
      this.renderer.setStyle(this.elRef.nativeElement, 'position', 'relative');
      this.renderer.setStyle(this.elRef.nativeElement, 'top', 0);
      this.intialScrollTop = scrollPostion;

      this.renderer.removeChild(
        this.renderer.parentNode(this.elRef.nativeElement), this.divElement);
    }
  }

  @HostListener('window:scroll', []) onScroll() {
    this.shrinker();
  }
}
