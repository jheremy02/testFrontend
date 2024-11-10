export function filterArrayByAttributes(searchValue, data, attributes) {
    if (!searchValue) return data; // Si no hay valor de búsqueda, retorna el array completo

    const lowerCaseSearchValue = searchValue.toLowerCase();

    return data.filter(item =>
        attributes.some(attribute => 
            String(item[attribute]).toLowerCase().includes(lowerCaseSearchValue)
        )
    );
}

export function countElements(array) {
    
    const counts = array.reduce((acc, item) => {
        
        const existingItem = acc.find(obj => obj.id === item.id);

        if (existingItem) {
           
            existingItem.count++;
        } else {
            
            acc.push({ ...item, count: 1 });
        }

        return acc;
    }, []);

    return counts;
}

