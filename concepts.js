// JS for concepts.html
document.addEventListener("DOMContentLoaded", () => {
  // Add click listener for "I want this concept"
  document.body.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".want-concept");
    if (!btn) return;

    const code = btn.dataset.code;
    if (!code) return;

    // Redirect to concepts-funnel.html starting from Q1
    const funnelURL = `https://doctoc30.github.io/Driving-School-Web-Design-/pages/concepts-funnel.html?code=${encodeURIComponent(code)}&step=Q1`;
    window.location.href = funnelURL;
  });
});
