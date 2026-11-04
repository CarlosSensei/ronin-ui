import { Component } from '@angular/core';
import { InputComponent } from '../../components/ui/inputs/input/input';
import { CodeExampleComponent } from '../../components/docs/code-example/code-example';
import { OtpInputComponent } from '../../components/ui/inputs/otp-input/otp-input';

@Component({
  imports: [InputComponent, CodeExampleComponent, OtpInputComponent],
  selector: 'app-inputs',
  standalone: true,
  styleUrl: './inputs.scss',
  templateUrl: './inputs.html',
})
export class Inputs {

  readonly searchCode = `
  <ui-input
    variant="search"
    placeholder="Search components..." />
  `;

  readonly defaultCode = `
  <ui-input />
  `;

  readonly filledCode = `
  <ui-input variant="filled" />
  `;

  readonly disabledCode = `
  <ui-input [disabled]="true" />
  `;

  readonly passwordCode = `
  <ui-input
    variant="password"
    placeholder="Password" />
  `;

  readonly successCode = `
  <ui-input
    state="success"
    placeholder="Email validated" />
  `;

  readonly errorCode = `
  <ui-input
    state="error"
    placeholder="Email invalid" />
  `;

  readonly floatingCode = `
  <ui-input
    variant="floating"
    label="Email" />
  `;

  readonly otpCode = `
  <ui-otp-input />
  `;
}
