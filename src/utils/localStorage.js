export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined; // Si no hay nada en localStorage, devuelve undefined para usar el estado inicial.
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error("Could not load state", error);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (error) {
        console.error("Could not save state", error);
    }
};