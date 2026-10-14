function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, qty) {
  if (qty <= 0 || qty > product.stock) throw new RangeError("Wrong quantity");
  const existing = cart.find((p) => (p.id = product.id));
  if (existing) {
    existing.quantity += Number(qty);
    return [existing];
  }
  const item = { ...product, quantity: qty };
  cart.push(item);
  return [item];
}

function changeQuantity(cart, id, qty) {
  return notImplemented();
}

function removeFromCart(cart, id) {
  return notImplemented();
}

function calculateCartSubtotal(cart) {
  return notImplemented();
}

function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
