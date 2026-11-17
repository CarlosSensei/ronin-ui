import { Component, input } from '@angular/core';

@Component({
  selector: 'ronin-silk-aurora',
  standalone: true,
  templateUrl: './silk-aurora.html',
  styleUrl: './silk-aurora.scss',
  host: { 'aria-hidden': 'true', '[class.paused]': 'paused()' },
})
export class SilkAuroraComponent {
  readonly paused = input(false);
}
