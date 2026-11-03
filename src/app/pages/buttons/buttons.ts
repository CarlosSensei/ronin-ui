import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/ui/button/button';
import { CodeExampleComponent } from '../../components/docs/code-example/code-example';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonComponent, CodeExampleComponent],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss'
})
export class Buttons {

  readonly sizesCode = `
  <ui-button size="sm">
    Small
  </ui-button>

  <ui-button size="md">
    Medium
  </ui-button>

  <ui-button size="lg">
    Large
  </ui-button>
  `;

  readonly variantsCode = `
  <ui-button variant="primary">
    Primary
  </ui-button>

  <ui-button variant="secondary">
    Secondary
  </ui-button>

  <ui-button variant="outline">
    Outline
  </ui-button>

  <ui-button variant="ghost">
    Ghost
  </ui-button>

  <ui-button variant="danger">
    Danger
  </ui-button>
  `;

  readonly roundedCode = `
  <ui-button [rounded]="true">
    Rounded
  </ui-button>

  <ui-button
    variant="outline"
    [rounded]="true">
    Pill Button
  </ui-button>
  `;

  readonly loadingCode = `
  <ui-button
    variant="primary"
    [loading]="true">
    Saving...
  </ui-button>

  <ui-button
    variant="danger"
    [loading]="true">
    Deleting...
  </ui-button>
  `;

  readonly fullWidthCode = `
  <ui-button
    variant="primary"
    [fullWidth]="true">
    Continue
  </ui-button>
  `;

  readonly closeCode = `
  <ui-button variant="close">
    <i class="ri-close-line"></i>
  </ui-button>

  <ui-button variant="close-morph">
    <i class="ri-close-line"></i>
  </ui-button>
  `;

  readonly iconCode = `
  <ui-button
    variant="icon"
    colorScheme="primary">
    <i class="ri-settings-3-line"></i>
  </ui-button>

  <ui-button
    variant="icon"
    colorScheme="danger">
    <i class="ri-heart-line"></i>
  </ui-button>

  <ui-button
    variant="icon"
    colorScheme="success">
    <i class="ri-notification-3-line"></i>
  </ui-button>

  <ui-button
    variant="icon"
    colorScheme="primary">
    <i class="ri-shopping-cart-line"></i>
  </ui-button>
  `;

  readonly animatedCode = `
  <ui-button variant="animated-pulse">
    Pulse Border
  </ui-button>

  <ui-button variant="animated-neon">
    Neon Flow
  </ui-button>

  <ui-button variant="animated-energy">
    Energy Ring
  </ui-button>
  `;
}