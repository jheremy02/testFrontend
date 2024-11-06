// utils/localStorage.js

const EXPIRATION_TIME = 60 * 60 * 1000; // 1 hora en milisegundos

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) return undefined;

    const { state, timestamp } = JSON.parse(serializedState);
    const currentTime = new Date().getTime();

    // Verificar si el tiempo de expiración ha pasado
    if (currentTime - timestamp > EXPIRATION_TIME) {
      localStorage.removeItem('reduxState'); // Limpia los datos expirados
      return undefined; // Retorna undefined para usar el estado inicial
    }

    return state; // Devuelve el estado si aún no ha expirado
  } catch (error) {
    console.error("Could not load state", error);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      state,
      timestamp: new Date().getTime() // Guardar la marca de tiempo actual
    });
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.error("Could not save state", error);
  }
};
