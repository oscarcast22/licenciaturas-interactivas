import { getCollection } from 'astro:content';

const coleccionLicenciaturas = await getCollection('licenciaturas');
const coleccionMaestrias = await getCollection('maestrias');
const coleccionDoctorados = await getCollection('doctorados');

function getSortedNames(collection) {
    let names = [];

    collection.forEach(item => {
        names.push(item.data.titulo);
    });

    names.sort((a, b) => a.localeCompare(b));

    return names;
}

export const nombresLicenciaturas = getSortedNames(coleccionLicenciaturas);

export const nombresMaestrias = getSortedNames(coleccionMaestrias);

export const nombresDoctorados = getSortedNames(coleccionDoctorados);
