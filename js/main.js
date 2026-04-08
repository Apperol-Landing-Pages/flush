  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  
const form = document.querySelector('.contact-form');
const modal = document.getElementById('successModal');
const modalBtn = document.getElementById('modalOk');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      modal.classList.add('active');
    } else {
      alert('Error sending message');
    }
  } catch (error) {
    alert('Network error');
  }
});

modalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  form.reset(); 
});
