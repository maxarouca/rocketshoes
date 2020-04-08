export function addToCartRequest(login) {
  return {
    type: '@cart/ADD_REQUEST',
    login,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(login) {
  return { type: '@cart/REMOVE', login };
}

export function updateAmountRequest(login, amount) {
  return { type: '@cart/UPDATE_AMOUNT_REQUEST', login, amount };
}

export function updateAmountSuccess(login, amount) {
  return { type: '@cart/UPDATE_AMOUNT_SUCCESS', login, amount };
}
