# Licenciaturas Interactivas

Sitio estático construido con Astro.

## Requisitos

- Node.js 22.12.0 o posterior
- pnpm 10.28.2 o posterior

La versión de pnpm queda fijada en `package.json` mediante el campo `packageManager`.

## Comandos

| Comando | Acción |
| --- | --- |
| `pnpm install` | Instala las dependencias conforme a `pnpm-lock.yaml`. |
| `pnpm dev` | Inicia el servidor de desarrollo. |
| `pnpm check` | Revisa tipos y componentes Astro. |
| `pnpm build` | Genera la versión de producción en `dist/`. |
| `pnpm preview` | Sirve localmente el resultado de producción. |

El contenido de la oferta académica se encuentra en `src/content/` y se registra con la Content Layer actual de Astro en `src/content.config.ts`.
