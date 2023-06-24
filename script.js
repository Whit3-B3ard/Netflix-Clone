window.addEventListener('scroll', function() {
  var body = document.body;
  var header = document.querySelector('.netflix-header');

  if (window.scrollY > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});
