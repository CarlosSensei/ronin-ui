# Ronin UI — Interfaces con carácter

Portal de componentes construido en **Angular 22**. Esta versión sustituye la aplicación anterior de Ronin UI e incluye un catálogo interactivo con código fuente, favoritos y fondos animados.

## Ejecutar

Node.js 24 LTS (24.15 o posterior) y npm 11.

```bash
npm ci
npm start
```

Abre http://localhost:4200.

```bash
npm run build
npm test -- --watch=false
```

Salida para hosting estático: `dist/ronin-ui/browser`.

Para alojarlo en GitHub Pages bajo `/ronin-ui/`:

```bash
npm run build -- --base-href /ronin-ui/
```

## Qué incluye

- 31 demos de componentes y variantes con previews reales, categorías y búsqueda combinable.
- Favoritos locales en el navegador.
- Ficha de componente con preview, fondo claro/oscuro y vistas de uso, HTML, SCSS, TypeScript y tokens.
- Copia al portapapeles y descarga individual de archivos.
- Código fuente generado automáticamente a partir de los mismos archivos que utiliza la demo.
- Navegación responsive y preferencias de movimiento reducido.

El portal es una aplicación estática: no incluye cuentas, pagos, backend ni almacenamiento compartido. Los favoritos no se sincronizan entre dispositivos. Los formularios originales mantienen estado interno y necesitan conectar su API a los formularios de tu aplicación si deseas utilizarlos para capturar datos.

## Estructura y responsabilidades

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `src/app/app.ts` | Estado del portal: filtros, selección, favoritos y exportación |
| `src/app/app.html` | Shell, catálogo y ficha de detalle |
| `src/app/portal/component-preview.*` | Renderiza el componente real, sin iframe ni HTML inyectado |
| `scripts/generate-catalog.mjs` | Metadatos y generación de snippets desde archivos reales |
| `src/app/portal/catalog.generated.ts` | Archivo generado; no editar a mano |
| `src/app/portal/tokens.generated.ts` | Tokens generados para la vista de código |
| `src/app/components/` | Componentes reutilizables con TS, HTML y SCSS separados |
| `src/component-tokens.scss` | Tokens de diseño heredados de Ronin |
| `src/styles.scss` | Diseño del portal, retícula y estilos responsive |

`npm start`, `npm run build` y `npm test` regeneran el catálogo automáticamente. Si cambias un componente con el servidor ya iniciado, ejecuta `npm run catalog` para actualizar también su código visible.

## Fondos y nuevos componentes

El inicio utiliza **Silk Aurora**, un fondo negro con velos de luz champán. Su enlace abre la ficha del componente y su botón de pausa detiene la animación.

El catálogo ofrece siete fondos: Silk Aurora, Ronin Lava, Orbital Eclipse, Contour Field, Grid Beams, Soft Mesh y Dune Waves. Los seis nuevos son implementaciones propias en Angular, inspiradas en las familias visuales de https://www.gassierconsulting.com/componentes/fondos; no requieren canvas, paquetes de animación ni recursos externos. Contour Field responde al puntero. Todos los nuevos fondos incluyen `paused` y soporte local para `prefers-reduced-motion`.

```ts
import { SilkAuroraComponent } from './components/backgrounds/silk-aurora/silk-aurora';
// Añade SilkAuroraComponent a los imports del componente padre.
```

```html
<section class="hero">
  <ronin-silk-aurora [paused]="false" />
  <div class="content">Tu contenido</div>
</section>
```

```scss
.hero { position: relative; min-height: 500px; overflow: hidden; }
.content { position: relative; z-index: 1; }
```

Ronin Lava conserva sus inputs `paused`, `interactive` y `color`, e identificadores SVG independientes.

También se incluyen Quiet Accordion (apertura exclusiva), Studio Tabs (flechas, Home y End) y Copy Chip (copia al portapapeles y confirmación de resultado). Los tres admiten contenido configurable mediante inputs y usan estilos propios.

## Integrar un componente

1. Copia sus archivos `.ts`, `.html` y `.scss`, conservando nombres y rutas relativas.
2. Importa su clase en el componente padre y añádela al array `imports`.
3. Pega el selector del apartado «Cómo usarlo» en tu template.
4. Para los componentes originales, copia los tokens de la pestaña TOKENS a tu stylesheet global. Los nuevos fondos, Quiet Accordion, Studio Tabs, Copy Chip, Magnetic CTA, Spotlight Card, Orbit Loader y Flip Text tienen estilos propios.
5. Los formularios y botones originales que usan iconos requieren `remixicon`: instala el paquete y añade `remixicon/fonts/remixicon.css` a tus estilos globales. El portal ya lo incluye.

No se inyecta HTML arbitrario. Los snippets se muestran mediante interpolación de texto de Angular. La copia al portapapeles requiere localhost o HTTPS; si el navegador la bloquea, se puede seleccionar el código o descargar el archivo.

## Añadir un componente al catálogo

1. Crea una carpeta dentro de `src/app/components/` con TS, HTML y SCSS.
2. Regístralo en `scripts/generate-catalog.mjs` con un identificador, categoría y ejemplo de uso.
3. Importa la clase en `component-preview.ts` y añade su caso en `component-preview.html`.
4. Ejecuta `npm run catalog`.

## Notas de diseño

Interfaz oscura, ámbar y tonos suaves, catálogo visual y previews interactivas. Referencias conceptuales aportadas por el usuario: Annnimate, Code and Chill y Uiverse. Amicro no pudo inspeccionarse por una respuesta 403. No se ha copiado código ni recursos de estas referencias.

DM Sans y Space Grotesk se solicitan a Google Fonts y cuentan con alternativas sans-serif. No se hacen llamadas a los servicios de las referencias. El catálogo incluye Select con búsqueda, Multi Select, Radio Group, botones Pulse, Neon, Outline y CTA, e inputs Search, Password y Filled del repositorio original.
