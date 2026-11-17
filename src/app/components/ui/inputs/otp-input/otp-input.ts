import { Component, ElementRef, QueryList, ViewChildren, signal } from '@angular/core';

@Component({
  selector: 'ui-otp-input',
  standalone: true,
  templateUrl: './otp-input.html',
  styleUrl: './otp-input.scss',
})
export class OtpInputComponent {
  readonly digits = signal(['', '', '', '', '', '']);

  @ViewChildren('otpField')
  fields!: QueryList<ElementRef<HTMLInputElement>>;

  onInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '');
    const next = [...this.digits()];

    next[index] = value.slice(-1);

    this.digits.set(next);

    if (value && index < this.fields.length - 1) {
      this.fields.toArray()[index + 1].nativeElement.focus();
    }
  }

  onKeyDown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.digits()[index] && index > 0) {
      this.fields.toArray()[index - 1].nativeElement.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();

    const pastedText = event.clipboardData?.getData('text').replace(/\D/g, '').slice(0, 6);

    if (!pastedText) {
      return;
    }

    const next = ['', '', '', '', '', ''];

    pastedText.split('').forEach((digit, index) => {
      next[index] = digit;
    });

    this.digits.set(next);

    const focusIndex = Math.min(pastedText.length, this.fields.length) - 1;

    this.fields.toArray()[focusIndex].nativeElement.focus();
  }
}
