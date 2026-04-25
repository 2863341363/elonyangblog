(function () {
  function setCursor(event) {
    document.body.style.setProperty('--cursor-x', event.clientX + 'px');
    document.body.style.setProperty('--cursor-y', event.clientY + 'px');
  }

  function burst(event) {
    var item = document.createElement('span');
    item.className = 'ey-click-burst';
    item.style.left = event.clientX + 'px';
    item.style.top = event.clientY + 'px';
    document.body.appendChild(item);
    window.setTimeout(function () {
      item.remove();
    }, 700);
  }

  window.addEventListener('pointermove', setCursor, { passive: true });
  window.addEventListener('pointerdown', burst);
})();
