import Cars from './Cars.js'
import Suvs from './Suvs.js'
import Picapes from './Picapes.js'
import Sportives from './Sportives.js'
import Eletric from './Eletrics.js'


const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img')
let idx = 0

function carrossel() {
   const imgSize = document.getElementsByClassName('carrosel')[0].offsetWidth
   idx ++

   if(idx > img.length - 1){
      idx = 0
   }

   imgs.style.transform = `translateX(${-idx * imgSize}px)`
}

setInterval(carrossel, 5000)


let labels = document.getElementById('labels').addEventListener('click', (e)=>{
   
   let input = e.target
   console.log(input.id)
   
   const div = document.getElementById('Div')
   div.innerHTML = ''

   if(input.id == 'Cars'){
      div.innerHTML = Cars
   }
   if(input.id == 'Suvs'){
      div.innerHTML = Suvs
   }
   if(input.id == 'Picapes'){
      div.innerHTML = Picapes
   }
   if(input.id == 'Sportives'){
      div.innerHTML = Sportives
   }
   if(input.id == 'Eletric'){
      div.innerHTML = Eletric
   }


   
})

