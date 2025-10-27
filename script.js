const container = document.querySelector('.projects-scroll');
document.querySelector('.scroll-btn.right').onclick = () => {
  container.scrollBy({ left: 270, behavior: 'smooth' });
};
document.querySelector('.scroll-btn.left').onclick = () => {
  container.scrollBy({ left: -270, behavior: 'smooth' });
};
