import { Component, input } from '@angular/core';

@Component({
  selector: 'ronin-dune-waves',
  standalone: true,
  templateUrl: './dune-waves.html',
  styleUrl: './dune-waves.scss',
  host: { 'aria-hidden': 'true', '[class.paused]': 'paused()' },
})
export class DuneWavesComponent {
  readonly paused = input(false);
}
