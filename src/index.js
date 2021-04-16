var toggle = document.querySelector('.share .toggle')
var share = document.querySelector('.sharbox')

toggle.addEventListener('click', function() {
  this.parentNode.classList.toggle('open')
  share.style.zIndex = "1"

})