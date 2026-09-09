# Guía para agentes

## Contexto del proyecto

Sitio estático de Licenciaturas Interactivas construido con Astro y gestionado con pnpm. La oferta académica vive en `src/content/` y se registra mediante la Content Layer de Astro en `src/content.config.ts`.

## Comandos

Ejecutar desde la raíz del repositorio:

| Objetivo | Comando |
| --- | --- |
| Instalar dependencias | `pnpm install` |
| Desarrollo | `pnpm dev` |
| Revisar Astro y tipos | `pnpm check` |
| Generar producción | `pnpm build` |
| Previsualizar producción | `pnpm preview` |

Después de modificar código, ejecutar como mínimo `pnpm check`, `pnpm build` y `git diff --check` antes de entregar. Si el cambio solo modifica documentación, basta con `git diff --check`.

## Estructura relevante

- `src/pages/`: rutas y composición de cada página.
- `src/components/`: componentes Astro y sus estilos encapsulados.
- `src/layouts/Layout.astro`: layout base, carga de Montserrat y tokens CSS globales en `:root`.
- `src/styles/global.css`: normalización, elementos base y accesibilidad transversal.
- `src/styles/degrees.css`: estilos compartidos de fichas académicas.
- `src/content/`: contenido de licenciaturas, maestrías y doctorados.
- `public/images/`: activos visuales públicos.
- `DESIGN.md`: contrato de diseño, tokens y patrones visuales del sitio.

## Reglas de implementación

1. Antes de cambiar estilos, leer `DESIGN.md`, el componente objetivo y los tokens de `Layout.astro`.
2. Reutilizar los tokens existentes; añadir uno global solo cuando tenga uso semántico y reutilizable. Si se añade o cambia, actualizar también `DESIGN.md`.
3. Mantener Montserrat como única familia tipográfica y el rojo institucional (`--red-200`) como único acento decorativo.
4. Mantener los estilos de cada componente dentro de su archivo `.astro`. Reservar `global.css` para reglas realmente globales.
5. Usar HTML semántico, preservar textos alternativos adecuados y no eliminar `:focus-visible`, navegación por teclado ni atributos ARIA existentes.
6. No añadir AOS. Cualquier futura animación GSAP debe respetar `prefers-reduced-motion`, ser progresiva y no impedir leer o usar el contenido sin JavaScript.
7. Al modificar héroes, navegación fija o el CTA inferior con parallax, comprobar el scroll completo en escritorio y móvil; no introducir huecos visuales ni contenido cubierto.
8. Evitar dependencias nuevas salvo que sean necesarias para el requerimiento. Preferir CSS y las capacidades nativas de Astro.

## Convenciones de cambios

- No modificar contenido académico ni rutas sin una petición explícita.
- No sobrescribir cambios no relacionados que ya estén en el árbol de trabajo.
- Para cambios visuales, revisar como mínimo escritorio y un ancho móvil de `320px`.
- Mantener componentes y CSS legibles; no introducir valores mágicos repetidos si un token semántico resuelve el caso.
- Documentar en la respuesta qué se cambió y qué validación se ejecutó.
