const $ = selector => document.querySelector(selector)
const sound = document.querySelector('audio');
const cuphead = document.querySelector('.cup')

const ticket = $('.ticket');
const wrapper = $('.wrapper');

const { width, height } = wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

window.addEventListener("deviceorientation",function(event) {
  betaX = Math.round(event.beta);
  gammaY = Math.round(event.gamma);

  const rotateBeta = ((betaX - halfWidth) / halfWidth) * 10;
  const rotateGamma = ((gammX - halfWidth) / halfWidth) * 10;

  rotateBeta >= 26 ? rotateBeta = 25 : rotateBeta
  rotateGamma >= 26 ? rotateGamma = 25 : rotateGamma

  ticket.style.transform = `rotateX(${rotateBeta}deg) rotateY(${rotateGamma}deg)`

}, true);

wrapper.addEventListener('mousemove', event => {
  const { offsetX, offsetY } = event;

  const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
  const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

  rotationX >= 26 ? rotationX = 25 : rotationX
  rotationY >= 26 ? rotationY = 25 : rotationY

  console.log({rotationX, rotationY})

  ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
})

const playCuphead = () => {
  cuphead.addEventListener('click', () => {
    sound.play()
  })
}

playCuphead()

if(navigator.userAgent.match(/android/i)){ window.scrollTo(0,1); }
