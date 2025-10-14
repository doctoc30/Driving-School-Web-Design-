document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".want-concept");
    if (!btn) return;

    const code = btn.dataset.code;
    if (!code) return;

    // ✅ Redirect to funnel page (not index)
    const funnelURL = `https://doctoc30.github.io/Driving-School-Web-Design-/pages/concepts-funnel.html?code=${encodeURIComponent(code)}&step=Q1`;
    window.location.href = funnelURL;
  });
});
