// Menu Toggle para Mobile e Tablet
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = nav.querySelectorAll('a');

  // Abre e fecha o menu ao clicar no botão
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
  });

  // Fecha o menu quando clica em um link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
    });
  });

  // Fecha o menu quando clica fora dele
  document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle) {
      nav.classList.remove('open');
    }
  });
});