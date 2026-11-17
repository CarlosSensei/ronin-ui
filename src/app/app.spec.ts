import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RoninLavaComponent } from './components/backgrounds/ronin-lava/ronin-lava';

describe('Portal catalog', () => {
  beforeEach(() => localStorage.clear());
  function createApp() {
    return TestBed.configureTestingModule({ imports: [App] }).createComponent(App)
      .componentInstance;
  }
  it('combines category, search and saved filters', () => {
    const app = createApp();
    app.filterBy('Botones');
    expect(app.visibleComponents().map((item) => item.id)).toEqual([
      'magnetic',
      'energy',
      'pulse',
      'neon',
      'outline',
      'cta',
      'copy',
    ]);
    app.query.set('energy');
    expect(app.visibleComponents().length).toBe(1);
    app.toggleSaved('energy');
    app.onlySaved.set(true);
    expect(app.visibleComponents()[0].id).toBe('energy');
    app.toggleSaved('energy');
    expect(app.visibleComponents()).toEqual([]);
    expect(JSON.parse(localStorage.getItem('ronin-saved')!)).toEqual([]);
  });
  it('displays actual source for the selected file', () => {
    const app = createApp();
    app.open(app.components[0]);
    app.tab.set('ts');
    expect(app.code()).toContain('export class RoninLavaComponent');
    app.tab.set('scss');
    expect(app.code()).toContain('@keyframes drift');
    app.tab.set('uso');
    expect(app.code()).toContain('<ronin-lava />');
  });
  it('opens the home background and pauses its animation', () => {
    const fixture = TestBed.configureTestingModule({ imports: [App] }).createComponent(App);
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.hero ronin-silk-aurora')).toBeTruthy();
    expect(root.querySelector('.hero ronin-lava')).toBeNull();
    root.querySelector<HTMLButtonElement>('.hero-footer button[aria-pressed]')!.click();
    fixture.detectChanges();
    expect(root.querySelector('.hero ronin-silk-aurora')!.classList.contains('paused')).toBe(true);
    root.querySelector<HTMLButtonElement>('.hero-footer button')!.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.selected()?.id).toBe('silk');
    expect(root.querySelector('.detail ronin-silk-aurora')).toBeTruthy();
  });

  it('gives each lava instance its own SVG filter', () => {
    const a = TestBed.configureTestingModule({ imports: [RoninLavaComponent] }).createComponent(
      RoninLavaComponent,
    );
    const b = TestBed.createComponent(RoninLavaComponent);
    expect(a.componentInstance.filterId).not.toBe(b.componentInstance.filterId);
    a.componentRef.setInput('paused', true);
    a.componentInstance.onPointerMove({
      pointerType: 'mouse',
      clientX: 10,
      clientY: 10,
    } as PointerEvent);
    expect(a.componentInstance.mouseX()).toBe(50);
  });
});
