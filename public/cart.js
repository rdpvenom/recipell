function renderCart() {
  const container = document.getElementById("cartContainer");
  const totalEl = document.getElementById("total");
  if (!container || !totalEl) return;

  const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.textContent = "";
    return;
  }

  let total = 0;
  container.innerHTML = cart.map((item, index) => {
    total += item.price * item.qty;
    return `
      <div style="display:flex;gap:12px;align-items:center;border:1px solid #e5e7eb;border-radius:10px;padding:10px;margin-bottom:10px;background:#fff;">
        <img src="${item.image}" alt="${item.name}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;">
        <div style="flex:1;">
          <h3 style="margin:0;">${item.name}</h3>
          <p style="margin:4px 0;color:#6b7280;">Size: ${item.size}</p>
          <p style="margin:0;"><strong>$${item.price.toFixed(2)}</strong></p>
        </div>
        <button onclick="removeItem(${index})" style="background:#dc2626;color:white;border:none;padding:8px 10px;border-radius:6px;cursor:pointer;">Remove</button>
      </div>
    `;
  }).join("");

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
  cart.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  localStorage.removeItem("cartItems");
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);