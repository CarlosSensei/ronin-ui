import { vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { ComponentPreview } from './component-preview';
import { CATALOG } from './catalog.generated';

function preview(id: string) {
  const fixture = TestBed.configureTestingModule({ imports: [ComponentPreview] }).createComponent(
    ComponentPreview,
  );
  fixture.componentRef.setInput('componentId', id);
  fixture.detectChanges();
  return fixture;
}

describe('Catalog previews', () => {
  for (const item of CATALOG) {
    it(`renders ${item.id} with its documented selector`, () => {
      const fixture = preview(item.id);
      const selector = item.usage.match(/^<([\w-]+)/)![1];
      expect(fixture.nativeElement.querySelector(selector)).toBeTruthy();
    });
  }

  it('filters select options and keeps the chosen option', () => {
    const fixture = preview('select');
    const root: HTMLElement = fixture.nativeElement;
    root.querySelector<HTMLButtonElement>('.select-trigger')!.click();
    fixture.detectChanges();
    const search = root.querySelector<HTMLInputElement>('input[type="search"]')!;
    search.value = 'motion';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const options = root.querySelectorAll<HTMLButtonElement>('.option');
    expect(options.length).toBe(1);
    options[0].click();
    fixture.detectChanges();
    expect(root.querySelector('.select-trigger')!.textContent).toContain('Motion');
    expect(root.querySelector('.dropdown')).toBeNull();
  });

  it('selects and removes multiple values without nested buttons', () => {
    const fixture = preview('multi-select');
    const root: HTMLElement = fixture.nativeElement;
    root.querySelector<HTMLButtonElement>('.select-trigger')!.click();
    fixture.detectChanges();
    const options = root.querySelectorAll<HTMLButtonElement>('.option');
    options[0].click();
    options[1].click();
    fixture.detectChanges();
    expect(root.querySelectorAll('.chip').length).toBe(2);
    expect(root.querySelector('button button')).toBeNull();
    root.querySelector<HTMLButtonElement>('.chip button')!.click();
    fixture.detectChanges();
    expect(root.querySelectorAll('.chip').length).toBe(1);
    root
      .querySelector('.select-container')!
      .dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(root.querySelector('.dropdown')).toBeNull();
  });

  it('allows only one selected radio option', () => {
    const fixture = preview('radio');
    const radios = fixture.nativeElement.querySelectorAll(
      'input[type="radio"]',
    ) as NodeListOf<HTMLInputElement>;
    radios[0].click();
    fixture.detectChanges();
    radios[1].click();
    fixture.detectChanges();
    expect([...radios].map((radio) => radio.checked)).toEqual([false, true, false]);
  });

  it('shows and hides a typed password', () => {
    const fixture = preview('password');
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.input-action');
    input.value = 'demo-password';
    expect(input.type).toBe('password');
    button.click();
    fixture.detectChanges();
    expect(input.type).toBe('text');
    expect(input.value).toBe('demo-password');
    button.click();
    fixture.detectChanges();
    expect(input.type).toBe('password');
  });
});

describe('New component interactions', () => {
  it('opens one accordion item and lets it close', () => {
    const fixture = preview('accordion');
    const root: HTMLElement = fixture.nativeElement;
    const buttons = root.querySelectorAll<HTMLButtonElement>('button');
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true');
    buttons[1].click();
    fixture.detectChanges();
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
    expect(buttons[1].getAttribute('aria-expanded')).toBe('true');
    expect(root.querySelector('p')!.textContent).toContain('Edita los estilos');
    buttons[1].click();
    fixture.detectChanges();
    expect(root.querySelector('p')).toBeNull();
  });

  it('switches tabs with arrows, Home and End', () => {
    const fixture = preview('tabs');
    const root: HTMLElement = fixture.nativeElement;
    const tabs = root.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    for (const [index, key, expected] of [
      [0, 'ArrowRight', 1],
      [1, 'End', 2],
      [2, 'Home', 0],
      [0, 'ArrowLeft', 2],
    ] as const) {
      tabs[index].dispatchEvent(
        new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }),
      );
      fixture.detectChanges();
      expect(tabs[expected].getAttribute('aria-selected')).toBe('true');
      expect(tabs[expected].tabIndex).toBe(0);
      const panelId = tabs[expected].getAttribute('aria-controls')!;
      expect(root.querySelector<HTMLElement>('[id="' + panelId + '"]')!.hidden).toBe(false);
    }
  });

  it('reports successful and failed clipboard writes', async () => {
    const fixture = preview('copy');
    const root: HTMLElement = fixture.nativeElement;
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('navigator', { clipboard: { writeText } });
    try {
      root.querySelector<HTMLButtonElement>('button')!.click();
      await fixture.whenStable();
      fixture.detectChanges();
      expect(writeText).toHaveBeenCalledWith('npm install @angular/core');
      expect(root.querySelector('[role="status"]')!.textContent).toContain('Copiado');
      writeText.mockRejectedValueOnce(new Error('Permission denied'));
      root.querySelector<HTMLButtonElement>('button')!.click();
      await fixture.whenStable();
      fixture.detectChanges();
      expect(root.querySelector('[role="status"]')!.textContent).toContain('Selecciona el texto');
    } finally {
      vi.unstubAllGlobals();
    }
  });

  for (const item of CATALOG.filter((item) => item.category === 'Fondos')) {
    it(`passes pause state to ${item.id}`, () => {
      const fixture = preview(item.id);
      fixture.componentRef.setInput('paused', true);
      fixture.detectChanges();
      const selector = item.usage.match(/^<([\w-]+)/)![1];
      expect(fixture.nativeElement.querySelector(selector).classList.contains('paused')).toBe(true);
    });
  }
});
