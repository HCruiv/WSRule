document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Simulasi user login
  const users = {
    "admin@pertamina.com": { password: "admin123", role: "admin" },
    "hc@pertamina.com": { password: "hc123", role: "hc" },
    "atasan@pertamina.com": { password: "atasan123", role: "atasan" }
  };

  if (users[email] && users[email].password === password) {
    const role = users[email].role;

    if (role === "admin") {
      window.location.href = "admin/dashboard.html";
    } else if (role === "hc") {
      window.location.href = "hc/dashboard.html";
    } else if (role === "atasan") {
      window.location.href = "atasan/dashboard.html";
    }
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
});
