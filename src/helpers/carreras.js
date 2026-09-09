import { getCollection } from 'astro:content';

const coleccionLicenciaturas = await getCollection('licenciaturas');

function getSortedNames(collection) {
    let names = [];

    collection.forEach(item => {
        names.push(item.data.titulo);
    });

    names.sort((a, b) => a.localeCompare(b));

    return names;
}

export const nombresLicenciaturas = getSortedNames(coleccionLicenciaturas);
