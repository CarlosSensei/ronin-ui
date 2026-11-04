import {
  Component,
  signal,
} from '@angular/core';

@Component({
  selector: 'ui-range-slider',
  standalone: true,
  templateUrl: './range-slider.html',
  styleUrl: './range-slider.scss',
})
export class RangeSliderComponent {

  readonly value =
    signal(50);

  onInput(event: Event): void {

    const target =
      event.target as HTMLInputElement;

    this.value.set(
      Number(target.value)
    );

  }

}