import { Component, computed, input, signal } from '@angular/core';

export type ToggleVariant = 'switch' | 'theme' | 'theme-premium' | 'notification';

@Component({
  selector: 'ui-toggle',
  standalone: true,
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class ToggleComponent {
  readonly variant = input<ToggleVariant>('switch');
  readonly label = input('Enable feature');
  readonly checked = signal(false);

  toggle(): void {
    this.checked.update((v) => !v);
  }

  readonly classes = computed(() =>
    ['toggle', this.variant(), this.checked() ? 'checked' : ''].filter(Boolean).join(' '),
  );
}
