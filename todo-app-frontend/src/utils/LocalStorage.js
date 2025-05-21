export const saveToLocalStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Erro ao salvar no Local Storage:", error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return undefined; // Retorna undefined se a chave não existir
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Erro ao carregar do Local Storage:", error);
    return undefined; // Retorna undefined em caso de erro
  }
};