import { Component, input, signal, inject, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'ronin-contour-field',
  standalone: true,
  templateUrl: './contour-field.html',
  styleUrl: './contour-field.scss',
  host: { 'aria-hidden': 'true', '[class.paused]': 'paused()' },
})
export class ContourFieldComponent {
  readonly paused = input(false);

  readonly rings = Array.from({ length: 15 }, (_, i) => i);
  readonly x = signal(0);
  readonly y = signal(0);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (
      this.paused() ||
      event.pointerType === 'touch' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const rect = this.element.nativeElement.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    this.x.set(((event.clientX - rect.left) / rect.width - 0.5) * 20);
    this.y.set(((event.clientY - rect.top) / rect.height - 0.5) * 20);
  }
  @HostListener('pointerleave')
  reset(): void {
    this.x.set(0);
    this.y.set(0);
  }
}
