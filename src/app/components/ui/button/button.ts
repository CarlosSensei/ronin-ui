import { Component, computed, input } from '@angular/core';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'close'
  | 'close-morph'
  | 'icon'
  | 'animated-pulse'
  | 'animated-neon'
  | 'animated-energy'
  | 'cta'
  | 'link'
  | 'troll';

export type ButtonSize =
  | 'sm'
  | 'md'
  | 'lg';

export type IconColor =
| 'default'
| 'primary'
| 'success'
| 'danger';

@Component({
  selector: 'ui-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');

  readonly size = input<ButtonSize>('md');

  readonly disabled = input(false);

  readonly loading = input(false);

  readonly fullWidth = input(false);

  readonly rounded = input(false);

  readonly colorScheme = input<IconColor>('default');

  readonly classes = computed(() =>
    [
      'ronin-button',
      this.variant(),
      this.size(),
      this.fullWidth() ? 'full-width' : '',
      this.rounded() ? 'rounded' : '',
      this.loading() ? 'loading' : '',
      this.disabled() ? 'disabled' : '',
      this.colorScheme() !== 'default' ? `icon-${this.colorScheme()}` : '',
    ]
      .filter(Boolean)
      .join(' ')
  );
}