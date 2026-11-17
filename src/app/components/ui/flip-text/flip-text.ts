import { Component, input } from '@angular/core';
@Component({
  selector: 'ui-flip-text',
  standalone: true,
  templateUrl: './flip-text.html',
  styleUrl: './flip-text.scss',
})
export class FlipTextComponent {
  readonly text = input('Make it move.');
}
