import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
	titulo: z.string(),
	resumen: z.string(),
	portada: z.string(),
	portada_alt: z.string(),
	color: z.string(),
	plan_estudios: z.array(z.object({
		titulo: z.string(),
		contenido: z.array(z.string()),
	})),
});

export const collections = {
	licenciaturas: defineCollection({
		type: 'content',
		schema: commonSchema,
	}),
	maestrias: defineCollection({
		type: 'content',
		schema: commonSchema,
	}),
	doctorados: defineCollection({
		type: 'content',
		schema: commonSchema,
	}),
};