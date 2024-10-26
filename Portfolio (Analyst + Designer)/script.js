// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Highlight current section in the navbar
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Responsive Navbar Toggle for Mobile Devices
const toggleMenu = document.createElement('div');
toggleMenu.className = 'toggle-menu';
toggleMenu.innerHTML = '&#9776;'; // hamburger icon

document.querySelector('nav').insertBefore(toggleMenu, navLinks[0]);

toggleMenu.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('active');
});

// Close the menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav ul').classList.remove('active');
  });
});
