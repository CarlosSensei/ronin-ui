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

## Integrar un componente

1. Copia sus archivos `.ts`, `.html` y `.scss`, conservando nombres y rutas relativas.
2. Importa su clase en el componente padre y añádela al array `imports`.
3. Pega el selector del apartado «Cómo usarlo» en tu template.
4. Para los componentes originales, copia los tokens de la pestaña TOKENS a tu stylesheet global. Los nuevos fondos, Quiet Accordion, Studio Tabs, Copy Chip, Magnetic CTA, Spotlight Card, Orbit Loader y Flip Text tienen estilos propios.
5. Los formularios y botones originales que usan iconos requieren `remixicon`: instala el paquete y añade `remixicon/fonts/remixicon.css` a tus estilos globales. El portal ya lo incluye.

No se inyecta HTML arbitrario. Los snippets se muestran mediante interpolación de texto de Angular. La copia al portapapeles requiere localhost o HTTPS; si el navegador la bloquea, se puede seleccionar el código o descargar el archivo.
