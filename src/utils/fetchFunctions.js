export const fetchProductsList = async (item) => {
  if (!item) throw new Error('Termo de busca não informado');
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error(error)
  }
};

export const fetchProductByID = async (baseId) => {
  if (!baseId) throw new Error('ID de busca não informado');
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${baseId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
  }
};