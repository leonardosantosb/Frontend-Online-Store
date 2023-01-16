export const getCategories = async () => {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const getProductsFromCategoryAndQuery = async (categoryId, query) => {
  const URL_QUERY = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(URL_QUERY);
  const data = await response.json();
  return data;
};

export async function getProductById(productId) {
  const URL_QUERY = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(URL_QUERY);
  const data = await response.json();
  return data;
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
