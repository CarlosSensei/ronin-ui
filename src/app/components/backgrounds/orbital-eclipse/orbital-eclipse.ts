import { Component, input } from '@angular/core';

@Component({
  selector: 'ronin-orbital-eclipse',
  standalone: true,
  templateUrl: './orbital-eclipse.html',
  styleUrl: './orbital-eclipse.scss',
  host: { 'aria-hidden': 'true', '[class.paused]': 'paused()' },
})
export class OrbitalEclipseComponent {
  readonly paused = input(false);
}
