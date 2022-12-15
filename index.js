
const container = document.getElementById('container');
const colors = ['#F0FF42', '#EA047E', '#2192FF', '#FF1E1E', '#5800FF', '#A91079', '#FFCD38', '#00FFAB', '#FF5403', '#FF00E4', '#480032', '#F5F7B2', '#F85959'];
const SQUARES = 500


for(let i = 0; i < SQUARES ; i++){
  const square = document.createElement('div')
  square.classList.add('square')


  square.addEventListener('mouseover' , () => setColor(square))


  square.addEventListener('mouseout' , () => removeColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = ` 0 0 2px ${color} ,  0  0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}


function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}