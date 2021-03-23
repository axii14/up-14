const ezkerra = document.getElementById('ezkerra');
const eskuma = document.getElementById('eskuma');
const titulua = document.getElementById('titulua');

window.addEventListener('scroll', () => {
  const { scrollY } = window;
  ezkerra.style.transform = `translateX(${scrollY * -0.9}px)`;
  eskuma.style.transform = `translateX(${scrollY * 1.5}px)`;
  titulua.style.transform = `translate3d(${scrollY * 0.5}px, ${scrollY * -0.8}px, 0)`;
});



