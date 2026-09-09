# Sistema de diseño — Licenciaturas Interactivas

> Contrato visual para personas y agentes que modifiquen el sitio. Actualizado: 2026-09-07.

## Propósito y fuente de verdad

El sitio combina una presencia institucional sobria con imágenes fotográficas de gran escala, alto contraste y un acento rojo para las acciones. La interfaz debe sentirse clara, contemporánea y editorial; la fotografía comunica la emoción y las superficies oscuras organizan la información.

Los tokens **ejecutables** se definen en [`src/layouts/Layout.astro`](src/layouts/Layout.astro), dentro de `:root`. Este archivo documenta su intención y las reglas para usarlos; no sustituye esa fuente de verdad. Cuando se necesite un token nuevo, se agrega primero a `:root` y luego se documenta aquí.

## Principios visuales

- **Fotografía protagonista.** Héroes y llamadas a la acción usan fotografía a sangre, con una capa oscura para proteger la legibilidad.
- **Contraste institucional.** Fondo blanco para el contenido; negro carbón para tarjetas, pie de página y bandas; texto claro sobre fondos oscuros.
- **Un solo acento.** El rojo institucional señala CTAs, indicadores y franjas de las tarjetas. No introducir colores de acento adicionales.
- **Geometría limpia.** Las tarjetas de catálogo son rectangulares; las tarjetas informativas y los botones de acción tienen bordes redondeados amplios.
- **Montserrat en todo el producto.** No combinar nuevas familias tipográficas.

## Tokens globales

### Color

| Token CSS | Valor | Uso semántico |
| --- | --- | --- |
| `--black` | `#161616` | Tinta principal sobre fondos claros. |
| `--gray-100` | `#1a1a1a` | Superficie oscura principal: tarjetas informativas, pie y bandas. |
| `--gray-300` | `#737373` | Texto secundario sobre fondo claro y animación de texto tenue. |
| `--gray-500` | `#c9c9c9` | Bordes y separadores suaves. |
| `--gray-600` | `#e8e8e8` | Gris claro de apoyo. |
| `--gray-900` | `#f2f2f2` | Texto claro sobre superficies oscuras y logotipo claro. |
| `--gray-950` | `#fff` | Blanco puro, principalmente sobre fotografía y estados de alto contraste. |
| `--red-100` | `#940124` | Estado hover/activo del acento. |
| `--red-200` | `#c10230` | Acento institucional: CTA, subrayados, franjas y foco de acción. |
| `--surface` | `#fff` | Superficie base del contenido. |
| `--surface-muted` | `#f2f2f2` | Fondo o superficie clara secundaria. |
| `--ink-muted` | `#666` | Texto de cuerpo secundario sobre fondo claro. |
| `--link-color` | `#29a9e0` | Anillo de foco accesible; no es un acento decorativo. |
| `--link-hover-color` | `#fff` | Estado de enlace sobre la navegación oscura. |

### Tipografía

Familia única: `'Montserrat Variable', Montserrat, sans-serif`, cargada por `@fontsource-variable/montserrat` en el layout.

| Token CSS | Valor | Uso recomendado |
| --- | --- | --- |
| `--text-xs` | `0.75rem` | Metadatos y texto auxiliar. |
| `--text-sm` | `0.9rem` | Navegación compacta y acciones secundarias. |
| `--text-base` | `1rem` | Cuerpo y formularios. |
| `--text-md` | `1.125rem` | Cuerpo destacado. |
| `--text-lg` | `1.25rem` | Subtítulos. |
| `--text-xl` | `1.625rem` | Encabezados menores. |
| `--text-2xl` | `2.125rem` | Encabezados de sección en móvil. |
| `--text-3xl` | `2.625rem` | Encabezados de sección. |
| `--text-4xl` | `3.5rem` | Títulos de página. |
| `--text-5xl` | `4.5rem` | Título de héroe de escritorio cuando aplique. |

Pesos establecidos:

- `300–400`: texto corriente, enlaces y navegación.
- `500–600`: etiquetas, CTA y subtítulos destacados.
- `700`: títulos de héroe y mensajes de alto impacto.

El cuerpo usa `line-height: 1.55`; los títulos usan `1.1`. No usar `font-weight` intermedio arbitrario si uno de estos pesos resuelve el caso.

### Tamaño, contenedor, bordes y sombra

| Token o decisión | Valor | Uso |
| --- | --- | --- |
| `--page-width` | `1200px` | Ancho máximo de navegación, contenido y pie. |
| Gutter de escritorio | `24px` | Padding horizontal habitual de contenedores. |
| Gutter de tarjetas de oferta | `20px` | Padding de `.max-w` en el índice. |
| Radio grande | `30px` | Tarjeta de beneficios y título flotante de ficha. |
| Radio pill | `999px` | CTA y controles con forma de píldora. |
| `--shadow-lg` | `0 18px 45px rgb(0 0 0 / 18%)` | Menús flotantes y elevaciones amplias. |
| Sombra de tarjeta de beneficios | `0 3px 8px rgb(0 0 0 / 20%)` | Elevación sutil de la tarjeta oscura del índice. |

### Movimiento

La interfaz usa una pauta editorial: la reacción de controles es breve y las expansiones dan tiempo de lectura.

| Token CSS | Valor | Uso semántico |
| --- | --- | --- |
| `--motion-fast` | `160ms` | Hover, subrayados e iconos. |
| `--motion-base` | `220ms` | Menús, cambios de estado y feedback habitual. |
| `--motion-expand` | `320ms` | Acordeones, paneles y menú móvil. |
| `--motion-emphasis` | `480ms` | Transiciones de contenido con mayor énfasis. |
| `--ease-standard` | `cubic-bezier(.2, .7, .2, 1)` | Curva común de entrada y salida. |

Los carruseles hacen un fundido de `800ms` y permanecen `5.5s` por imagen. Deben pausarse fuera del viewport, con la pestaña oculta, al navegar y cuando se solicite reducir movimiento.

No crear una nueva escala de espacios o radios para una modificación aislada. Si un valor se repite en más de un componente, promoverlo a token global con un nombre semántico.

## Patrones de componentes

### Navegación

- Es fija y usa `rgb(26 26 26 / 88%)` desde el inicio; al desplazarse o abrir un menú aumenta el desenfoque sin cambiar su altura.
- El logotipo es claro y los enlaces miden `16px` en escritorio, con una variante compacta entre `900px` y `1040px`.
- El enlace activo y hover se comunican con el subrayado rojo; conservar el `aria-current` existente.
- Licenciaturas y Posgrados se presentan como dropdowns claros y flotantes en escritorio. Se abren con hover, foco o clic y no expanden el encabezado.
- Hasta `899px`, la navegación usa un menú oscuro de pantalla completa con acordeones internos. Solo esta apertura y cierre móvil anima la altura del encabezado.
- Al bajar por la página el encabezado se oculta y al subir reaparece; mientras haya un menú abierto debe permanecer visible.
- Mantener el espacio de navegación para el ancla: el layout corrige hashes con un offset de `95px`.

### Héroes fotográficos

- Imagen a todo el ancho con `object-fit: cover` y texto centrado o alineado según el componente.
- Aplicar overlay oscuro: `rgb(0 0 0 / 12%)` para los héroes institucionales; en “Nosotros” se usa un gradiente más intenso a la izquierda porque el texto se alinea allí.
- El héroe principal del índice está fijo y mide `1083px` en escritorio. Su contenido empieza después con el mismo desplazamiento para producir el parallax.
- Los títulos del héroe principal son `72px` / peso `700`; el CTA inferior usa `60px` y `72px` de interlineado en escritorio.
- Respetar `prefers-reduced-motion` en cualquier animación futura. El único efecto expresivo conservado es el reveal de “Educación a tu ritmo de vida”; las animaciones AOS no se reintroducen.

### CTA inferior con parallax

`BottomHero.astro` implementa una ventana de `350px` que revela una fotografía fija anclada al borde inferior del viewport. Esta arquitectura evita huecos al entrar al banner y conserva el parallax sin JavaScript.

- La imagen fija mide `1280px` de alto, usa `object-fit: cover` y `object-position: center`.
- El contenedor usa `clip-path: inset(0)` para recortar el hijo fijo a la ventana del banner.
- El contenido va encima del overlay de `12%` y el CTA mide `220 × 34px`.
- En móvil se desactiva la fijación: la imagen pasa a ser absoluta dentro del banner para estabilidad y rendimiento.

`DegreeContactBanner.astro`, usado en las fichas académicas, mantiene una variante de este patrón: la capa fija mide `668px` en escritorio. En móvil, la imagen se amplía `32px` dentro de la ventana y se desplaza durante el scroll mediante una animación CSS progresiva; el encuadre queda completo aunque la animación no esté disponible o se reduzca el movimiento.

No sustituir este patrón por `background-attachment: fixed`, offsets calculados con scroll o una imagen absoluta respecto al documento: esas aproximaciones generan saltos, franjas vacías o pierden el efecto deseado.

### Tarjeta de beneficios del índice

- Se superpone al límite inferior del héroe mediante `--home-card-overlap: 134px` (`60px` en móvil).
- Superficie `--gray-100`, radio `30px`, tres columnas en escritorio y una columna en móvil.
- Títulos de `16px` con peso `600`; cuerpo de `16px`, interlineado `19px`, texto justificado.

### Tarjetas de oferta académica

- Ancho máximo `994px`; fotografía de `451px` de alto en escritorio y `270px` en móvil.
- La foto lleva overlay negro al `42%` excepto en la banda inferior.
- La banda inferior es `--gray-100`, altura `84px` (móvil `64px`) y título de `45px` (móvil `32px`).
- La franja roja mide `15px` (móvil `10px`) y alterna de lado entre tarjetas.
- Las listas desplegables conservan semántica de enlace y no deben depender solo de hover para poder abrirse.

### Formularios, acordeones y foco

- Usar `--surface` para campos, `--gray-500` para bordes y `--red-200` para acciones principales.
- Conservar `:focus-visible` global: contorno `3px solid var(--link-color)` con `3px` de separación.
- Nunca eliminar el foco visible ni reducir el contraste del texto por razones decorativas.

## Responsive y accesibilidad

- El ancho mínimo soportado es `320px`.
- El breakpoint principal de composición es `800px`: columnas pasan a una sola columna, héroes reducen altura y el CTA inferior deja de usar una capa fija.
- Mantener texto fluido en pantallas pequeñas con las reglas ya presentes; no fijar anchos que provoquen desplazamiento horizontal.
- Las imágenes decorativas llevan `alt=""`; las imágenes que comunican contenido requieren un texto alternativo específico.
- Usar HTML semántico antes de añadir ARIA. Si se modifica navegación, acordeones o controles, verificar teclado, foco y lector de pantalla.

## Reglas operativas para agentes

1. **Leer antes de editar.** Revisar el componente objetivo, `Layout.astro`, `global.css` y este documento antes de introducir estilos nuevos.
2. **Reutilizar antes de inventar.** Usar los tokens existentes. Un literal de color, radio, sombra o tipografía nuevo necesita una razón de diseño y, si es reutilizable, un token semántico en `:root`.
3. **Mantener la fuente de verdad.** Si cambia un token, actualizar en la misma modificación `Layout.astro` y la tabla correspondiente de este archivo. No declarar tokens globales dentro de un componente.
4. **Limitar el alcance.** Los estilos de componente permanecen encapsulados en su `.astro`; `global.css` se reserva para normalización, elementos base y accesibilidad transversal.
5. **Movimiento con intención.** No añadir AOS. Las transiciones reutilizan los tokens de movimiento; una animación GSAP debe ser progresiva, funcionar sin JavaScript, respetar `prefers-reduced-motion`, limpiarse al cambiar de ruta y no bloquear contenido ni interacción.
6. **Verificar.** Tras cambios visuales ejecutar como mínimo `pnpm check`, `pnpm build` y `git diff --check`. Revisar escritorio y móvil, estados hover/focus y, si interviene una imagen fija, su entrada y salida durante el scroll.

## Lista de verificación de revisión visual

- [ ] Se emplean tokens existentes y no hay colores/valores repetidos sin justificar.
- [ ] Montserrat se mantiene como única familia tipográfica.
- [ ] La jerarquía usa negro, blanco y rojo institucional de forma consistente.
- [ ] El contenido no queda cubierto por la navegación fija ni hay scroll horizontal a 320px.
- [ ] Las fotos de héroe conservan overlay y legibilidad del texto.
- [ ] Los CTA siguen siendo rojos, de alto contraste y navegables por teclado.
- [ ] El parallax inferior no muestra franjas en blanco al entrar o salir de la sección.
- [ ] No se han añadido dependencias ni animaciones AOS.
