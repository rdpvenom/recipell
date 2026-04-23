(function () {
  if (localStorage.getItem("cookieConsentChoice")) return;

  const bar = document.createElement("div");
  bar.style.position = "fixed";
  bar.style.bottom = "0";
  bar.style.left = "0";
  bar.style.right = "0";
  bar.style.background = "#111827";
  bar.style.color = "#fff";
  bar.style.padding = "14px";
  bar.style.zIndex = "9999";
  bar.style.display = "flex";
  bar.style.flexWrap = "wrap";
  bar.style.gap = "10px";
  bar.style.justifyContent = "space-between";
  bar.innerHTML = `
    <span>This site uses cookies for analytics and advertising. Read our <a href="cookie-policy.html" style="color:#93c5fd;">Cookie Policy</a>.</span>
    <div>
      <button id="acceptCookies" style="margin-right:8px;background:#16a34a;color:#fff;border:none;padding:8px 12px;border-radius:6px;cursor:pointer;">Accept</button>
      <button id="rejectCookies" style="background:#374151;color:#fff;border:none;padding:8px 12px;border-radius:6px;cursor:pointer;">Reject</button>
    </div>
  `;
  document.body.appendChild(bar);

  document.getElementById("acceptCookies").onclick = function () {
    localStorage.setItem("cookieConsentChoice", "accepted");
    bar.remove();
  };
  document.getElementById("rejectCookies").onclick = function () {
    localStorage.setItem("cookieConsentChoice", "rejected");
    bar.remove();
  };
})();