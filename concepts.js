// concepts.js — ONLY for concepts.html
document.addEventListener("DOMContentLoaded", () => {

  // --- Safety: only run on the concepts page (case-insensitive)
  const path = window.location.pathname || "";
  if (!/concepts\.html$/i.test(path.split("/").pop())) {
    // not on concepts.html — do nothing
    return;
  }

  // Debug helper (remove in production if you want)
  function log(...args) {
    try { console.debug("[concepts.js]", ...args); } catch(e) {}
  }
  log("concepts.js loaded on", window.location.pathname);

  // Use event delegation so we don't rely on .want-concept being present at binding time
  document.body.addEventListener("click", (ev) => {
    const btn = ev.target.closest && ev.target.closest(".want-concept");
    if (!btn) return; // not a concept button click

    ev.preventDefault(); // prevent default link/button behavior — safe guard

    const code = btn.dataset && btn.dataset.code;
    if (!code) {
      log("clicked want-concept but no data-code found", btn);
      return;
    }

    log("want-concept clicked:", code);

    // Build the funnel URL for the concepts funnel page — start at Q1
    const funnelURL = `https://doctoc30.github.io/Driving-School-Web-Design-/pages/concepts-funnel.html?code=${encodeURIComponent(code)}&step=Q1`;

    // Redirect (use location.assign so back-button behaves normally)
    window.location.assign(funnelURL);
  });
});
