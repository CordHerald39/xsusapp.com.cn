(() => {
  const show = () => {
    if (document.querySelector('.popup-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'popup-title');
    const previousFocus = document.activeElement;
    overlay.innerHTML = `<div class="popup-content" role="document">
      <button class="popup-close" type="button" aria-label="关闭广告">×</button>
      <span class="popup-ad-label">广告</span>
      <div class="popup-stack">
        <a class="popup-link" href="https://189.24.66.76/register?aff=DjVQGjJK" target="_blank" rel="sponsored noopener noreferrer">
          <p class="popup-title" id="popup-title">Clash 机场推荐</p>
          <img class="popup-image" src="https://free.picui.cn/free/2026/06/05/6a229370bf0c1.png" alt="Clash 机场推荐广告" loading="lazy" referrerpolicy="no-referrer">
        </a>
        <div class="popup-shop-wrap"><a class="popup-shop-btn" href="https://189.24.66.76/register?aff=DjVQGjJK" target="_blank" rel="sponsored noopener noreferrer" aria-label="打开加速器下载页面">加速器下载</a></div>
      </div>
    </div>`;
    document.body.appendChild(overlay);
    const onKey = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') {
        const controls = [...overlay.querySelectorAll('button:not([disabled]),a[href]')];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const close = () => {
      document.removeEventListener('keydown', onKey);
      overlay.remove();
      document.body.classList.remove('popup-open');
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
    overlay.querySelector('.popup-close').addEventListener('click', close);
    overlay.addEventListener('click', (event) => { if (event.target === overlay) close(); });
    document.addEventListener('keydown', onKey);
    document.body.classList.add('popup-open');
    overlay.querySelector('.popup-close').focus();
  };
  window.setTimeout(show, 1800);
})();
