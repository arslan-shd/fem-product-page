const btnOpen = document.getElementById("btn-open");
const navBar = document.getElementById("navbar");
const btnCart = document.getElementById("btn-cart");
const modalCart = document.getElementById("modal-cart");
const quantityCart = document.getElementById("quantity-cart");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const modalCartQuantity = document.getElementById("modal-cart-quantity");
const productPrice = document.getElementById("product-price");
const cartTotal = document.getElementById("cart-total");
const cartProductInfo = document.getElementById("cart-product-info");
const btnCheckout = document.getElementById("btn-checkout");
const cartEmptyMessage = document.getElementById("cart-empty-message");
const btnDelete = document.getElementById("btn-delete");
const btnAddToCart = document.getElementById("btn-add-to-cart");

let items = 0;

// menu toggle
btnOpen.addEventListener("click", () => {
  navBar.classList.remove("hidden");
  navBar.classList.add("flex");

  const btnClose = document.getElementById("btn-close");
  btnClose.addEventListener("click", () => {
    navBar.classList.add("hidden");
    navBar.classList.remove("flex");
  });
});

// menu toggle

// cart toggle
btnCart.addEventListener("click", () => {
  modalCart.classList.toggle("hidden");
  modalCart.classList.toggle("flex");
});

console.log(productPrice.innerText);

// cart quantity
btnPlus.addEventListener("click", () => {
  items = parseInt(quantityCart.innerText) + 1;
  quantityCart.innerText = items;
});

function deleteItems() {
  cartProductInfo.classList.add("hidden");
  cartProductInfo.classList.remove("flex");
  btnCheckout.classList.add("hidden");
  cartEmptyMessage.classList.remove("hidden");
  cartEmptyMessage.classList.add("flex");
}

btnMinus.addEventListener("click", () => {
  console.log("minus quantity");
  if (parseInt(quantityCart.innerText) > 0) {
    items = parseInt(quantityCart.innerText) - 1;
    quantityCart.innerText = items;
  }
});

btnDelete.addEventListener("click", () => {
  deleteItems();
  quantityCart.innerText = 0;
});
// cart quantity

// Add to Cart

btnAddToCart.addEventListener("click", () => {
  if (parseInt(quantityCart.innerText) === 0) {
    deleteItems();
    console.log("I ran");
    return;
  }
  modalCartQuantity.innerText = items;
  cartTotal.innerText = parseInt(productPrice.innerText) * items;
  cartProductInfo.classList.remove("hidden");
  cartProductInfo.classList.add("flex");
  btnCheckout.classList.remove("hidden");
  cartEmptyMessage.classList.add("hidden");
  cartEmptyMessage.classList.remove("flex");
});
