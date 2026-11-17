import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';

let nextLavaId = 0;

/** A self-contained version of the original Ronin home background. */
@Component({
  selector: 'ronin-lava',
  standalone: true,
  templateUrl: './ronin-lava.html',
  styleUrl: './ronin-lava.scss',
  host: { 'aria-hidden': 'true', '[class.paused]': 'paused()' },
})
export class RoninLavaComponent {
  readonly paused = input(false);
  readonly interactive = input(true);
  readonly color = input('#ff9100');
  readonly mouseX = signal(50);
  readonly mouseY = signal(50);
  readonly filterId = `ronin-goo-${nextLavaId++}`;
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('window:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.interactive() || this.paused() || event.pointerType === 'touch') return;
    const bounds = this.element.nativeElement.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    this.mouseX.set(
      Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100)),
    );
    this.mouseY.set(
      Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100)),
    );
  }
}
