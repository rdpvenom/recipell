(function () {
  if (localStorage.getItem("cookieConsent")) return;

  const bar = document.createElement("div");
  bar.style.position = "fixed";
  bar.style.bottom = "0";
  bar.style.left = "0";
  bar.style.right = "0";
  bar.style.background = "#111827";
  bar.style.color = "#fff";
  bar.style.padding = "14px";
  bar.style.display = "flex";
  bar.style.justifyContent = "space-between";
  bar.style.alignItems = "center";
  bar.style.zIndex = "9999";
  bar.innerHTML = `
    <span style="margin-right:12px;">We use cookies to improve your experience. By using this site, you agree to our <a href="cookie-policy.html" style="color:#93c5fd;">Cookie Policy</a>.</span>
    <button id="acceptCookies" style="background:#2563eb;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;">Accept</button>
  `;
  document.body.appendChild(bar);

  document.getElementById("acceptCookies").addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    bar.remove();
  });
})();