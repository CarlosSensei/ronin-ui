import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class CheckboxComponent {
  readonly label = input('Checkbox');

  readonly disabled = input(false);

  readonly checked = signal(false);

  readonly classes = computed(() =>
    ['checkbox-box', this.checked() ? 'checked' : '', this.disabled() ? 'disabled' : '']
      .filter(Boolean)
      .join(' '),
  );

  toggle(): void {
    if (this.disabled()) {
      return;
    }

    this.checked.update((value) => !value);
  }
}
