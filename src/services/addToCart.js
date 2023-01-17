const PRODUCT_LOCAL = 'product_Id';
const TIMEOUT = 500;
const SUCCESS_STATUS = 'OK';

if (!JSON.parse(localStorage.getItem(PRODUCT_LOCAL))) {
  localStorage.setItem(PRODUCT_LOCAL, JSON.stringify([]));
}
const readProductCart = () => JSON.parse(localStorage.getItem(PRODUCT_LOCAL));

const saveProducts = (cartProducts) => localStorage
  .setItem(PRODUCT_LOCAL, JSON.stringify(cartProducts));

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getCartProducts = () => new Promise((resolve) => {
  const cartProducts = readProductCart();
  simulateRequest(cartProducts)(resolve);
});

export const addCart = (product) => new Promise((resolve) => {
  if (product) {
    const cartProducts = readProductCart();
    saveProducts([...cartProducts, (product)]);
  }
  simulateRequest(SUCCESS_STATUS)(resolve);
});

export const removeProduct = (product) => new Promise((resolve) => {
  const cartProducts = readProductCart();
  saveProducts(cartProducts.filter((s) => s.productId !== (product).productId));
  simulateRequest(SUCCESS_STATUS)(resolve);
});
