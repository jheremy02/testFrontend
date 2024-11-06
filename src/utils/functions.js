export function filterArrayByAttributes(searchValue, data, attributes) {
    if (!searchValue) return data; // Si no hay valor de búsqueda, retorna el array completo

    const lowerCaseSearchValue = searchValue.toLowerCase();

    return data.filter(item =>
        attributes.some(attribute => 
            String(item[attribute]).toLowerCase().includes(lowerCaseSearchValue)
        )
    );
}