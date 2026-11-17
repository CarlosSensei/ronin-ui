import { Component, input, signal } from '@angular/core';

let nextRadioGroupId = 0;

@Component({
  selector: 'ui-radio-group',
  standalone: true,
  templateUrl: './radio-group.html',
  styleUrl: './radio-group.scss',
})
export class RadioGroupComponent {
  readonly groupName = `ronin-radio-${nextRadioGroupId++}`;
  readonly label = input('Elige una opción');

  readonly options = input<string[]>([]);

  readonly selected = signal('');

  select(option: string): void {
    this.selected.set(option);
  }
}
