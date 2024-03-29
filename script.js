document.addEventListener("DOMContentLoaded", function(event) {
  const nav = document.querySelector('#nav');
  const topOfNav = nav.offsetTop;

  function fixNav(e) {
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    }else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
});
