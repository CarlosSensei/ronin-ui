import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  input,
  signal,
  computed
} from '@angular/core';

@Component({
  selector: 'ui-select',
  standalone: true,
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class SelectComponent {

    @ViewChild('selectTrigger')
    triggerRef!: ElementRef<HTMLButtonElement>;

    readonly options = input<string[]>([]);
    readonly placeholder = input('Select an option');
    readonly open = signal(false);
    readonly selected = signal('');
    readonly openUpwards = signal(false);
    readonly searchTerm = signal('');
    readonly multiple = input(false);
    readonly selectedItems = signal<string[]>([]);

    toggle(): void {

        if (this.triggerRef) {

        const rect =
            this.triggerRef.nativeElement.getBoundingClientRect();

        const spaceBelow =
            window.innerHeight - rect.bottom;

        const estimatedDropdownHeight = 220;

        this.openUpwards.set(
            spaceBelow < estimatedDropdownHeight
        );

        }

        this.open.update(v => !v);
    }

    toggleOption(option: string): void {

        const current =
            this.selectedItems();

        const alreadySelected =
            current.includes(option);

        if (alreadySelected) {

            this.selectedItems.set(
            current.filter(
                item => item !== option
            )
            );

        } else {

            this.selectedItems.set([
            ...current,
            option,
            ]);

        }

    }


    select(option: string): void {

        if (this.multiple()) {

            this.toggleOption(option);

            return;
        }

        this.selected.set(option);

        this.searchTerm.set('');

        this.open.set(false);

    }

    @HostListener('document:click')
    close(): void {
        this.open.set(false);
    }

    readonly filteredOptions = computed(() => {

        const search =
            this.searchTerm().toLowerCase();

        return this.options().filter(
            option =>
            option
                .toLowerCase()
                .includes(search)
        );

    });

    onSearch(event: Event): void {

        const input =
            event.target as HTMLInputElement;

        this.searchTerm.set(
            input.value
        );

    }



}