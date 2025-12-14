"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const catalog = [
    { id: "novaphone", title: "NovaPhone", cost: 7999.99, img: "assets/images/novaphone.jpg" },
    { id: "hyperbook", title: "HyperBook", cost: 10499.99, img: "assets/images/hyperbook.jpg" },
    { id: "lumina", title: "Lumina", cost: 12499.99, img: "assets/images/lumina.jpg" },
    { id: "aerosound", title: "AeroSound", cost: 2999.99, img: "assets/images/aerosound.jpg" },
    { id: "chronos", title: "Chronos", cost: 4499.99, img: "assets/images/chronos.jpg" },
    { id: "omniscreen", title: "OmniScreen", cost: 23999.99, img: "assets/images/omniscreen.jpg" }
  ];

  let cart = [];
  let wish = [];

  let cartList = document.querySelector(".cart ul");
  let cartSum = document.querySelector(".cart p span");
  let wishList = document.querySelector(".wishlist ul");
  let wishSum = document.querySelector(".wishlist p span");

  document.addEventListener("click", e => {

    let cartTrigger = e.target.closest(".product-cart");
    if (cartTrigger) {
      let key = cartTrigger.dataset.productId;
      let product = catalog.find(p => p.id === key);
      let stored = cart.find(p => p.id === key);

      stored ? stored.qty++ : cart.push({ ...product, qty: 1 });
      showCart();
    }

    let wishTrigger = e.target.closest(".product-wishlist");
    if (wishTrigger) {
      let key = wishTrigger.dataset.productId;
      let product = catalog.find(p => p.id === key);
      let index = wish.findIndex(p => p.id === key);

      if (index > -1) {
        wish.splice(index, 1);
        wishTrigger.classList.remove("active");
      } else {
        wish.push(product);
        wishTrigger.classList.add("active");
      }

      showWish();
    }

    if (e.target.classList.contains("remove")) {
      cart = cart.filter(p => p.id !== e.target.dataset.id);
      showCart();
    }

    if (e.target.classList.contains("wish-remove")) {
      let key = e.target.dataset.id;
      wish = wish.filter(p => p.id !== key);
      document.querySelector(`.product-wishlist[data-product-id="${key}"]`)?.classList.remove("active");
      showWish();
    }

  });

  function showCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      total += item.cost * item.qty;

      let li = document.createElement("li");
      li.className = "cart-item";

      li.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="cart-thumb">
        <span>${item.title} × ${item.qty}</span>
        <span>€ ${(item.cost * item.qty).toFixed(2)}</span>
        <button class="remove" data-id="${item.id}">❌</button>
      `;

      cartList.appendChild(li);
    });

    cartSum.textContent = total.toFixed(2);
  }

  function showWish() {
    wishList.innerHTML = "";
    let total = 0;

    wish.forEach(item => {
      total += item.cost;

      let li = document.createElement("li");
      li.className = "wish-item";

      li.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="cart-thumb">
        <span>${item.title}</span>
        <span>€ ${item.cost.toFixed(2)}</span>
        <button class="wish-remove" data-id="${item.id}">❌</button>
      `;

      wishList.appendChild(li);
    });

    wishSum.textContent = total.toFixed(2);
  }

});
