import { Component, input, signal } from '@angular/core';

let nextTabsId = 0;

@Component({
  selector: 'ui-studio-tabs',
  standalone: true,
  templateUrl: './studio-tabs.html',
  styleUrl: './studio-tabs.scss',
})
export class StudioTabsComponent {
  readonly tabs = input([
    { title: 'Diseña', content: 'Empieza por una idea. Encuentra su forma.' },
    { title: 'Construye', content: 'Componentes pequeños. Posibilidades infinitas.' },
    { title: 'Publica', content: 'Tu próximo proyecto está listo para salir.' },
  ]);
  readonly active = signal(0);
  readonly instanceId = `studio-tabs-${nextTabsId++}`;
  onKey(event: KeyboardEvent, index: number): void {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % this.tabs().length;
    else if (event.key === 'ArrowLeft')
      next = (index + this.tabs().length - 1) % this.tabs().length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = this.tabs().length - 1;
    else return;
    event.preventDefault();
    this.active.set(next);
    const buttons = (
      event.currentTarget as HTMLElement
    ).parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[next]?.focus();
  }
}
