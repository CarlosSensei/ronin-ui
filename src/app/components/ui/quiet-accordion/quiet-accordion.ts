import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'ui-quiet-accordion',
  standalone: true,
  templateUrl: './quiet-accordion.html',
  styleUrl: './quiet-accordion.scss',
})
export class QuietAccordionComponent {
  readonly items = input([
    {
      title: '¿Cómo lo integro?',
      content: 'Copia los tres archivos y añade el componente a tus imports.',
    },
    {
      title: '¿Puedo personalizarlo?',
      content: 'Sí. Edita los estilos y los textos para adaptarlos a tu proyecto.',
    },
    {
      title: '¿Necesita dependencias?',
      content: 'Solo Angular. Los estilos están incluidos en el componente.',
    },
  ]);
  readonly active = signal<number | null>(0);
  toggle(index: number): void {
    this.active.update((current) => (current === index ? null : index));
  }
}
