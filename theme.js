(() => {
  const root = document.documentElement;
  let stored = null;
  try { stored = localStorage.getItem('blog-theme'); } catch (e) {}
  if (stored === 'dark' || stored === 'light') root.dataset.theme = stored;

  const isDark = () =>
    root.dataset.theme === 'dark' ||
    (!root.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    const render = () => { btn.textContent = isDark() ? 'Light mode' : 'Dark mode'; };
    btn.addEventListener('click', () => {
      const next = isDark() ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('blog-theme', next); } catch (e) {}
      render();
    });
    render();
  });
})();
