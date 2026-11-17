import { Component, input, signal } from '@angular/core';
@Component({
  selector: 'ui-magnetic-button',
  standalone: true,
  templateUrl: './magnetic-button.html',
  styleUrl: './magnetic-button.scss',
})
export class MagneticButtonComponent {
  readonly label = input('Explore more');
  readonly offset = signal('translate(0px, 0px)');
  move(event: PointerEvent): void {
    if (event.pointerType === 'touch' || matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.2;
    this.offset.set(`translate(${x}px, ${y}px)`);
  }
  reset(): void {
    this.offset.set('translate(0px, 0px)');
  }
}
