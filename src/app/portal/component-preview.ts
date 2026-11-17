import { Component, input } from '@angular/core';
import { RoninLavaComponent } from '../components/backgrounds/ronin-lava/ronin-lava';
import { MagneticButtonComponent } from '../components/ui/magnetic-button/magnetic-button';
import { SpotlightCardComponent } from '../components/ui/spotlight-card/spotlight-card';
import { OrbitLoaderComponent } from '../components/ui/orbit-loader/orbit-loader';
import { FlipTextComponent } from '../components/ui/flip-text/flip-text';
import { ButtonComponent } from '../components/ui/button/button';
import { ToggleComponent } from '../components/ui/forms/toggle/toggle';
import { InputComponent } from '../components/ui/inputs/input/input';
import { OtpInputComponent } from '../components/ui/inputs/otp-input/otp-input';
import { RangeSliderComponent } from '../components/ui/forms/range-slider/range-slider';
import { SegmentedToggleComponent } from '../components/ui/forms/segmented-toggle/segmented-toggle';
import { CheckboxComponent } from '../components/ui/forms/checkbox/checkbox';

import { SelectComponent } from '../components/ui/forms/select/select';
import { RadioGroupComponent } from '../components/ui/forms/radio-group/radio-group';

import { SilkAuroraComponent } from '../components/backgrounds/silk-aurora/silk-aurora';
import { OrbitalEclipseComponent } from '../components/backgrounds/orbital-eclipse/orbital-eclipse';
import { ContourFieldComponent } from '../components/backgrounds/contour-field/contour-field';
import { GridBeamsComponent } from '../components/backgrounds/grid-beams/grid-beams';
import { SoftMeshComponent } from '../components/backgrounds/soft-mesh/soft-mesh';
import { DuneWavesComponent } from '../components/backgrounds/dune-waves/dune-waves';
import { QuietAccordionComponent } from '../components/ui/quiet-accordion/quiet-accordion';
import { StudioTabsComponent } from '../components/ui/studio-tabs/studio-tabs';
import { CopyChipComponent } from '../components/ui/copy-chip/copy-chip';

@Component({
  selector: 'ronin-preview',
  standalone: true,
  imports: [
    RoninLavaComponent,
    MagneticButtonComponent,
    SpotlightCardComponent,
    OrbitLoaderComponent,
    FlipTextComponent,
    ButtonComponent,
    ToggleComponent,
    InputComponent,
    OtpInputComponent,
    RangeSliderComponent,
    SegmentedToggleComponent,
    CheckboxComponent,
    SilkAuroraComponent,
    OrbitalEclipseComponent,
    ContourFieldComponent,
    GridBeamsComponent,
    SoftMeshComponent,
    DuneWavesComponent,
    QuietAccordionComponent,
    StudioTabsComponent,
    CopyChipComponent,

    SelectComponent,
    RadioGroupComponent,
  ],
  templateUrl: './component-preview.html',
  styles: [
    ':host { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; min-height: inherit; position: relative; isolation: isolate; } .lava-label { position: relative; font-size: 38px; font-weight: 600; color: white; letter-spacing: -.06em; mix-blend-mode: overlay; pointer-events: none; }',
  ],
})
export class ComponentPreview {
  readonly componentId = input.required<string>();
  readonly paused = input(false);
}
