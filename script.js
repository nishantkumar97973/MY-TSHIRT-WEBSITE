const API_URL = "https://t-shirt-backend-3.onrender.com";
fetch("http://localhost:5000/api/products", {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
  .then(res => {
    if (res.status === 401) {
      // token missing / expired
      window.location.href = "login.html";
      return;
    }
    return res.json();
  })
  .then(data => {
    if (!data) return;

    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";

    data.forEach(p => {
      productsDiv.innerHTML += `
        <div class="product-card">
          <img src="${p.image}">
          <h3>${p.name}</h3>
          <p class="price">₹${p.price}</p>
          <button onclick='addToCart(${JSON.stringify(p)})'>
            Add to Cart
          </button>
        </div>
      `;
    });
  });


function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");


}
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  document.querySelector(".logout-btn")?.remove();
}

function logout() {
  localStorage.removeItem("token");
  location.href = "login.html";
}
