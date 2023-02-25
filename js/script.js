'use strict'

const box = document.querySelector('#box')
const buttons= document.querySelectorAll('button')
const circles= document.querySelectorAll('.circle')
const circle= document.querySelector('.circle')
const hearts =document.querySelectorAll('.heart')
const circleWrapper= document.querySelector('.circle__wrapper')

box.style.cssText=' background-color:green; width:100px; height:100px; '



buttons[3].style.backgroundColor='aqua'

circles[1].style.backgroundColor='yellow'

circle.style.backgroundColor='yellow'

for(let i=0; i<=hearts.length; i++){
  hearts[i].style.backgroundColor='green'
}

hearts.forEach((item)=>{
  item.style.backgroundColor='aqua'
})

const btn =document.createElement('button')
document.body.append(btn)


const myCircle= document.createElement('div')

circleWrapper.before(myCircle)

myCircle.classList.add('circle')

const myCircle2=document.createElement('div')

circles[0].before(myCircle2)
myCircle2.classList.add('circle')

const myCircle3 = document.createElement('div')
circleWrapper.after(myCircle3)
myCircle3.classList.add('circle')

const myCircle4 = document.createElement('div')
circles[3].after(myCircle4)
myCircle4.classList.add('circle')


circles[3].remove()
circles[1].replaceWith(myCircle2)

myCircle2.innerHTML='B'
myCircle4.innerHTML= '<b>C</b>'
myCircle3.textContent='<P>o</P>'

circleWrapper.insertAdjacentHTML("beforebegin","<pre>Jasur</pre>")














// // old way

// // const box =document.getElementById("box");
// // //console.log(box)


// // const button = document.getElementsByTagName("button")[3]
// // console.log(button)

// // const cls= document.getElementsByClassName("circle")[2]

// // console.log(cls)


// // new way

// const box =document.querySelector('#box')
// //console.log(box)

// const button= document.querySelector('button')
// //console.log(button)

// const buttons= document.querySelectorAll('button')
// //console.log(buttons)

// const circle =document.querySelector('.circle')
// //console.log(circle)

// const circles =document.querySelectorAll('.circle')
// //console.log(circles)

// buttons.forEach(function(itm){

//   //console.log(itm )
// })

// circles.forEach(function(item){
//  // console.log(item)
// })

// const wrapper =document.querySelector('.wrapper')
// console.log(wrapper)

// const hearts =wrapper.querySelectorAll('.heart')
// console.log(hearts)






























































// const box = document.querySelector('#box')
// const buttons = document.querySelectorAll('button')
// const circles = document.querySelectorAll('.circle')
// const circle = document.querySelector('.circle')
// const hearts = document.querySelectorAll('.heart')
// const circleWrapper = document.querySelector('.circle__wrapper')

// box.style.cssText = 'background-color: red; width: 100px; height: 100px'

// buttons[0].style.width = '100px'
// circles[1].style.backgroundColor = 'yellow'
// circle.style.backgroundColor = 'yellow'

// // for (let i = 0; i < hearts.length; i++) {
// //   hearts[i].style.backgroundColor = 'green'
// // }

// // hearts.forEach((item) => {
// //   item.style.backgroundColor = 'gray'
// // })

// const btn = document.createElement('button')
// // const text = document.createTextNode('I am text')

// document.body.append(btn)

// const myCircle = document.createElement('div')

// myCircle.classList.add('circle')

// // circleWrapper.append(myCircle)
// // circleWrapper.before(myCircle)
// // circleWrapper.after(myCircle)
// // circles[0].after(myCircle)
// // circles[1].remove()
// // circles[1].replaceWith(myCircle)
// // circleWrapper.append(myCircle)
// // myCircle.innerHTML = '<pre>E</pre>'
// // myCircle.textContent = 'E'
// // circleWrapper.insertAdjacentHTML('beforeend', '<pre>E</pre>')
