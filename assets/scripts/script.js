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
   
   
})

