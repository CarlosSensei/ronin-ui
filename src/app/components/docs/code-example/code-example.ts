import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'ui-code-example',
  templateUrl: './code-example.html',
  styleUrl: './code-example.scss',
})
export class CodeExampleComponent {
  
  readonly code = input.required<string>();

  readonly expanded = signal(false);

  readonly copied = signal(false);

  readonly buttonLabel = computed(() =>
    this.expanded() ? 'Hide Code' : 'Show Code'
  );

  toggle() {
    this.expanded.update(v => !v);
  }

  async copyCode() {
    await navigator.clipboard.writeText(this.code());

    this.copied.set(true);

    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}