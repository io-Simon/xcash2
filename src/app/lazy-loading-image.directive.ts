
import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appLazyLoadingImage]'
})
export class LazyLoadingImageDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setAttribute(this.el.nativeElement, 'src', this.el.nativeElement.dataset.src);
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
