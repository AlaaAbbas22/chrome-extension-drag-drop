function removeInvisibleClass() {
  const inputs = document.querySelectorAll('input.invisible');
  inputs.forEach(input => {
    input.classList.remove('invisible');
    input.style.height = '50px';
    input.style.backgroundColor = 'lightblue';
  });
}

removeInvisibleClass();
const observer = new MutationObserver(() => {
  removeInvisibleClass();
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});
