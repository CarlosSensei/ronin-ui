import { Component, computed, signal } from '@angular/core';
import { SilkAuroraComponent } from './components/backgrounds/silk-aurora/silk-aurora';
import { ComponentPreview } from './portal/component-preview';
import { CATALOG } from './portal/catalog.generated';
import { COMPONENT_TOKENS } from './portal/tokens.generated';

type CodeTab = 'uso' | 'html' | 'scss' | 'ts' | 'tokens';
type CatalogItem = (typeof CATALOG)[number];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SilkAuroraComponent, ComponentPreview],
  templateUrl: './app.html',
})
export class App {
  readonly components = CATALOG;
  readonly heroBackground = CATALOG.find((item) => item.id === 'silk')!;
  readonly categories = [
    'Todos',
    'Botones',
    'Fondos',
    'Tarjetas',
    'Texto',
    'Inputs',
    'Formularios',
    'Loaders',
  ];
  readonly category = signal('Todos');
  readonly query = signal('');
  readonly selected = signal<CatalogItem | null>(null);
  readonly tab = signal<CodeTab>('uso');
  readonly tabs: CodeTab[] = ['uso', 'html', 'scss', 'ts', 'tokens'];
  readonly mobileMenu = signal(false);
  readonly paused = signal(false);
  readonly message = signal('');
  readonly saved = signal<string[]>(this.readSaved());
  readonly onlySaved = signal(false);
  readonly surface = signal<'dark' | 'light'>('dark');
  readonly visibleComponents = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    return this.components.filter(
      (item) =>
        (this.category() === 'Todos' || item.category === this.category()) &&
        (!this.onlySaved() || this.saved().includes(item.id)) &&
        `${item.name} ${item.category} ${item.description}`.toLocaleLowerCase().includes(query),
    );
  });
  readonly code = computed(() => {
    const item = this.selected();
    if (!item) return '';
    if (this.tab() === 'tokens') return COMPONENT_TOKENS;
    if (this.tab() === 'uso') {
      return `// 1. Copia los tres archivos del componente a tu proyecto.\n// 2. Añade ${item.className} a los imports de tu componente padre.\n// 3. Usa el selector en tu template:\n\n${item.usage}`;
    }
    return item.files[this.tab() as 'html' | 'scss' | 'ts'];
  });

  count(category: string): number {
    return this.components.filter((item) => category === 'Todos' || item.category === category)
      .length;
  }
  filterBy(category: string): void {
    this.category.set(category);
    this.selected.set(null);
    this.mobileMenu.set(false);
    this.onlySaved.set(false);
  }
  open(item: CatalogItem): void {
    this.selected.set(item);
    this.tab.set('uso');
    this.message.set('');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  search(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }
  toggleSaved(id: string): void {
    this.saved.update((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    );
    try {
      localStorage.setItem('ronin-saved', JSON.stringify(this.saved()));
    } catch {
      this.message.set('Favoritos disponibles durante esta sesión.');
    }
  }
  async copyCode(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code());
      this.message.set('Código copiado.');
    } catch {
      this.message.set('No se pudo copiar. Selecciona el código y usa Ctrl/Cmd + C.');
    }
  }
  downloadFile(): void {
    const item = this.selected();
    if (!item) return;
    const extension = this.tab() === 'uso' ? 'txt' : this.tab() === 'tokens' ? 'scss' : this.tab();
    const blob = new Blob([this.code()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.path.split('/').pop()}.${extension}`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  private readSaved(): string[] {
    try {
      const value: unknown = JSON.parse(localStorage.getItem('ronin-saved') ?? '[]');
      return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : [];
    } catch {
      return [];
    }
  }
}
