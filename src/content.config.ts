import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const commonSchema = z.object({
	titulo: z.string(),
	resumen: z.string(),
	portada: z.string(),
	portada_alt: z.string(),
	color: z.string(),
	rvoe: z.string(),
	plan_estudios: z.array(z.object({
		titulo: z.string(),
		contenido: z.array(z.string()),
	})),
});

export const collections = {
	licenciaturas: defineCollection({
		loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/licenciaturas' }),
		schema: commonSchema,
	}),
};
