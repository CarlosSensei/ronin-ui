import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'ui-copy-chip',
  standalone: true,
  templateUrl: './copy-chip.html',
  styleUrl: './copy-chip.scss',
})
export class CopyChipComponent {
  readonly text = input('npm install @angular/core');
  readonly message = signal('');
  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.text());
      this.message.set('Copiado');
    } catch {
      this.message.set('Selecciona el texto para copiarlo');
    }
  }
}
