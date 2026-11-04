import {
  Component,
  input,
  signal,
  effect
} from '@angular/core';

@Component({
    selector: 'ui-segmented-toggle',
    standalone: true,
    templateUrl: './segmented-toggle.html',
    styleUrl: './segmented-toggle.scss',
})
export class SegmentedToggleComponent {

    readonly options = input<string[]>([]);
    readonly selected = signal('');

    constructor() {

        effect(() => {

            const first = this.options()[0];

            if (first && !this.selected()) {
            this.selected.set(first);
            }

        });

    }

    ngOnInit() {

        const first = this.options()[0];

        if (first) {
            this.selected.set(first);
        }
    }


    selectedIndex = signal(0);

    select(index: number): void {

        this.selectedIndex.set(index);

        const option = this.options()[index];

        if (option) {
            this.selected.set(option);
        }
    }
}