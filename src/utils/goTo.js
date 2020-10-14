export const goTo = (element) => {
  window.scrollTo({
    top: document.querySelector(element).offsetTop,
    left: 0,
    behavior: 'smooth',
  });
};
