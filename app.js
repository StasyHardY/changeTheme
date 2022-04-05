
const container = document.querySelector('.container')
const text = document.querySelector('.text')

addEventListener('keyup', (event) => {
   const {key} = event
   if( key === 'e'){
      container.classList.add('dark')
      text.style.color = 'white'
      text.innerHTML = 'Press any key for change theme'
   }
   else {
      container.classList.remove('dark')
      text.style.color = 'black'
      text.innerHTML = 'Press `E` to change theme'
   }
})
