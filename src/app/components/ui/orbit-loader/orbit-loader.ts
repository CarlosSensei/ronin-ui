import { Component, input } from '@angular/core';
@Component({
  selector: 'ui-orbit-loader',
  standalone: true,
  templateUrl: './orbit-loader.html',
  styleUrl: './orbit-loader.scss',
})
export class OrbitLoaderComponent {
  readonly label = input('Preparando algo bueno');
}
