window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
      preloader.style.display = 'none'; // Hide after a delay
  }, 3000); // Adjust the delay as needed
});