import { Component, input } from '@angular/core';

@Component({
  selector: 'ronin-grid-beams',
  standalone: true,
  templateUrl: './grid-beams.html',
  styleUrl: './grid-beams.scss',
  host: { 'aria-hidden': 'true', '[class.paused]': 'paused()' },
})
export class GridBeamsComponent {
  readonly paused = input(false);
}
