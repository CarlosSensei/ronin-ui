import { Component } from '@angular/core';
import { CheckboxComponent } from '../../components/ui/forms/checkbox/checkbox';
import { CodeExampleComponent } from '../../components/docs/code-example/code-example';
import { RadioGroupComponent } from '../../components/ui/forms/radio-group/radio-group';
import { ToggleComponent } from '../../components/ui/forms/toggle/toggle';
import { SegmentedToggleComponent } from '../../components/ui/forms/segmented-toggle/segmented-toggle';
import { RangeSliderComponent } from '../../components/ui/forms/range-slider/range-slider';
import { SelectComponent } from '../../components/ui/forms/select/select';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CheckboxComponent,
    CodeExampleComponent,
    RadioGroupComponent,
    ToggleComponent,
    SegmentedToggleComponent,
    RangeSliderComponent,
    SelectComponent
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {

  readonly checkboxCode = `
  <ui-checkbox
    label="Accept terms">
  </ui-checkbox>
  `;

  readonly radioCode = `
  <ui-radio-group
    [options]="[
      'Angular',
      'React',
      'Vue'
    ]">
  </ui-radio-group>
  `;

  readonly toggleCode = `
  <ui-toggle
    label="Enable notifications">
  </ui-toggle>
  `;

  readonly themeCode = `
  <ui-toggle
    variant="theme"
    label="Dark Mode">
  </ui-toggle>
  `;

  readonly notificationCode = `
  <ui-toggle
    variant="notification"
    label="Notifications">
  </ui-toggle>
  `;

  readonly segmentedCode = `
  <ui-segmented-toggle
    [options]="[
      'Monthly',
      'Yearly'
    ]">
  </ui-segmented-toggle>
  `;

  readonly sliderCode = `
  <ui-range-slider />
  `;

  readonly selectCode = `
  <ui-select
    [options]="[
      'Angular',
      'React',
      'Vue',
      'Svelte'
    ]">
  </ui-select>
  `;

  readonly multiSelectCode = `
  <ui-select
    [multiple]="true"
    [options]="[
      'Angular',
      'React',
      'Vue',
      'Svelte'
    ]">
  </ui-select>
  `;

}