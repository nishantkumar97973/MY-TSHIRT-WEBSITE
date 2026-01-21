const API_URL = "https://t-shirt-backend-3.onrender.com";
async function login() {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    location.href = "index.html";
  } else {
    msg.innerText = "Login failed";
  }
}
