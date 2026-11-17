import { Component, input } from '@angular/core';
@Component({
  selector: 'ui-spotlight-card',
  standalone: true,
  templateUrl: './spotlight-card.html',
  styleUrl: './spotlight-card.scss',
})
export class SpotlightCardComponent {
  readonly title = input('Una idea brillante.');
  readonly description = input('El siguiente detalle que marca la diferencia.');
}
