function scrollToY(end) {
  var start = window.scrollY, t0 = performance.now();
  (function step(now) {
    var p = Math.min((now - t0) / 1000, 1);
    window.scrollTo(0, start + (end - start) * p);
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
  navLinks.classList.add('open');
  scrollToY(navLinks.offsetTop);
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    scrollToY(document.querySelector(link.getAttribute('href')).offsetTop);
  });
});

document.querySelectorAll('.back-up').forEach(function (btn) {
  btn.addEventListener('click', function () {
    scrollToY(navLinks.offsetTop);
  });
});