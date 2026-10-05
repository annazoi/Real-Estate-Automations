// Loads shared sidebar/topbar partials and marks the active nav link.
async function includePartial(selector, url) {
  const host = document.querySelector(selector);
  if (!host) return;
  const res = await fetch(url);
  host.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    includePartial("[data-include=sidebar]", "/dashboard/partials/sidebar.html"),
    includePartial("[data-include=topbar]", "/dashboard/partials/topbar.html"),
  ]);

  const activeKey = document.body.getAttribute("data-page");
  document.querySelectorAll("[data-nav] a[data-key]").forEach((link) => {
    if (link.getAttribute("data-key") === activeKey) link.classList.add("active");
  });

  const toggle = document.querySelector("[data-sidebar-toggle]");
  const sidebar = document.querySelector(".app-sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => sidebar.classList.toggle("mobile-open"));
  }
});
