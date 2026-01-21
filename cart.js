const API_URL = "https://t-shirt-backend-3.onrender.com";
const token = localStorage.getItem("token");

if (!token) {
  alert("Please login first");
  window.location.href = "login.html";
}


const cartItemsDiv = document.getElementById("cartItems");
const totalDiv = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Cart is empty</p>";
    totalDiv.innerText = "";
    return;
  }

  cart.forEach((item, index) => {
    total += Number(item.price);

    cartItemsDiv.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalDiv.innerText = "Total: ₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function checkout() {
  alert("✅ Order placed successfully!");
  localStorage.removeItem("cart");
  loadCart();
}

loadCart();
