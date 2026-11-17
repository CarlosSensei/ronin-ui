import { Component, input } from '@angular/core';

@Component({
  selector: 'ronin-soft-mesh',
  standalone: true,
  templateUrl: './soft-mesh.html',
  styleUrl: './soft-mesh.scss',
  host: { 'aria-hidden': 'true', '[class.paused]': 'paused()' },
})
export class SoftMeshComponent {
  readonly paused = input(false);
}
