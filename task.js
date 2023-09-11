const prev = document.querySelector('.slider__arrow_prev')
const next = document.querySelector('.slider__arrow_next')

const array = document.querySelectorAll('.slider__item')
console.log(prev)
console.log(next)
console.log(array)
let i = 1

prev.onclick = () => {
    console.log(i)
    if (i == array.length){i = array.length-1}
    if (i === 0){
        array[0].classList.remove('slider__item_active')
        array[array.length-1].classList.add('slider__item_active')
        i = array.length-1
    }
    else{
        console.log(i)
        array[i].classList.remove('slider__item_active')
        array[i-1].classList.add('slider__item_active')
        i = i-1
      }
}

next.onclick = () => {
    if (i===0){i = 1}
    if (i <= array.length-1){
    array[i].classList.add('slider__item_active')
    array[i-1].classList.remove('slider__item_active')
    i = i+1
    }
    else { 
        i = 0
        array[array.length-1].classList.remove('slider__item_active')
        array[0].classList.add('slider__item_active')
    }
    
}
