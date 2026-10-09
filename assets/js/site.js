// Screenshot tabs
document.querySelectorAll('.tabs button').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tabs button').forEach(function (t) {
      t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
    });
    document.querySelectorAll('[data-panel]').forEach(function (p) {
      p.hidden = p.dataset.panel !== tab.dataset.tab;
    });
  });
});

// Click a screenshot to see it full size
document.querySelectorAll('.gallery img').forEach(function (img) {
  img.addEventListener('click', function () {
    var box = document.createElement('div');
    box.className = 'lightbox';
    var big = document.createElement('img');
    big.src = img.src;
    big.alt = img.alt;
    box.appendChild(big);
    function close() { box.remove(); document.removeEventListener('keydown', onKey); }
    function onKey(e) { if (e.key === 'Escape') close(); }
    box.addEventListener('click', close);
    document.addEventListener('keydown', onKey);
    document.body.appendChild(box);
  });
});

// Copy build commands
var copy = document.querySelector('.copy');
if (copy) {
  copy.addEventListener('click', function () {
    var text = copy.parentElement.querySelector('code').innerText;
    navigator.clipboard.writeText(text).then(function () {
      copy.textContent = 'Copied';
      setTimeout(function () { copy.textContent = 'Copy'; }, 1500);
    });
  });
}
