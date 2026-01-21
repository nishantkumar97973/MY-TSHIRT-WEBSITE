const API_URL = "https://t-shirt-backend-3.onrender.com";



const api = "http://localhost:5000/api/products";

// LOAD PRODUCTS
function loadProducts() {
  fetch(api)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("productList");
      list.innerHTML = "";

      data.forEach(p => {
        list.innerHTML += `
          <div style="border:1px solid #ccc; padding:10px; margin:10px">
            <b>${p.name}</b> - ₹${p.price}
            <br>
            <button onclick="editProduct('${p._id}', '${p.name}', ${p.price})">✏️ Edit</button>
            <button onclick="deleteProduct('${p._id}')">🗑️ Delete</button>
          </div>
        `;
      });
    });
}

// ADD PRODUCT
document.getElementById("productForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const product = {
    name: name.value,
    price: price.value,
    image: image.value,
    description: description.value
  };

  fetch(api + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  }).then(() => {
    this.reset();
    loadProducts();
  });
});

// DELETE
function deleteProduct(id) {
  fetch(api + "/" + id, { method: "DELETE" })
    .then(() => loadProducts());
}

// EDIT (simple prompt based)
function editProduct(id, oldName, oldPrice) {
  const name = prompt("New name:", oldName);
  const price = prompt("New price:", oldPrice);

  fetch(api + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price })
  }).then(() => loadProducts());
}

// INITIAL LOAD
loadProducts();
