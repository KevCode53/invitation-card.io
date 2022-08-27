const sound = document.querySelector('audio');
const cuphead = document.querySelector('.cup')


const playCuphead = () => {
  cuphead.addEventListener('click', () => {
    sound.play()
  })
}

playCuphead()

if(navigator.userAgent.match(/android/i)){ window.scrollTo(0,1); }
