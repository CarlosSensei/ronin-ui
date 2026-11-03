import { Component, computed, input, signal } from '@angular/core';

export type InputVariant =
  | 'default'
  | 'filled'
  | 'search'
  | 'password';

export type InputState =
  | 'default'
  | 'success'
  | 'error';

@Component({
  selector: 'ui-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {

  readonly placeholder = input('Enter text...');
  readonly variant = input<InputVariant>('default');
  readonly disabled = input(false);
  readonly state = input<InputState>('default');
  readonly showPassword = signal(false);
  readonly classes = computed(() =>
    [
      'ronin-input',
      this.variant(),
      this.state(),
    ].filter(Boolean)
    .join(' ')
  );

  togglePassword(): void {
    this.showPassword.update(value => !value);
  }
}