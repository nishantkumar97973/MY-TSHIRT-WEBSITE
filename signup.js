
const API_URL = "https://t-shirt-backend-3.onrender.com";
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const msg = document.getElementById("msg");

  if (password !== confirm) {
    msg.innerText = "Passwords do not match";
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  } else {
    msg.innerText = data.msg || "Signup failed";
  }
}
