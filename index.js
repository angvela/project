// Sample product data
const products = [
  {
    name: "Matte Lipstick",
    price: 10.99,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Hydrating Cream",
    price: 18.50,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Eyebrow Pencil",
    price: 6.75,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Facial Cleanser",
    price: 14.25,
    image: "https://via.placeholder.com/150"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const viewCartBtn = document.getElementById("view-cart-btn");
  const cartOutput = document.getElementById("cart-output");

  // Render products
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;
    productCard.querySelector(".add-to-cart-btn").addEventListener("click", () => {
      addToCart(product);
    });
    productList.appendChild(productCard);
  });

  // Cart logic
  let cart = [];

  function addToCart(product) {
    cart.push(product);
    showNotification(`${product.name} added to cart!`);
  }

  function showNotification(message) {
    let notif = document.createElement("div");
    notif.className = "notification";
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => {
      notif.remove();
    }, 1500);
  }

  viewCartBtn.addEventListener("click", () => {
    cartOutput.innerHTML = "<h3>Your Cart:</h3>";

    if (cart.length === 0) {
      cartOutput.innerHTML += "<p>No items yet.</p>";
      return;
    }

    let total = 0;
    cart.forEach(item => {
      cartOutput.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
      total += item.price;
    });

    cartOutput.innerHTML += `<h4>Total: $${total.toFixed(2)}</h4>`;
  });
});