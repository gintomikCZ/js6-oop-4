// ES6


// const Person = function (name) {
//   this.name = name
// }

class Person {
  constructor (name) {
    this.name = name
  }
  hello () {
    return `hello, I am  ${this.name}`
  }
}

const myFriend = new Person('Karel')

console.log(myFriend) // { name: 'karel' }
console.log(myFriend.hello()) // 'Hello, I am Karel

// třídu btn
// nový btn pak vytvoříme jako new Button, umožnění umístění do DOMu

class Button {
  constructor (label) { // label - string
    this.el = document.createElement('button')
    this.el.textContent = label
    this.el.classList.add('btn')
  }
  render (parent) { // parent - html element
    parent.appendChild(this.el)
  }
}


// const getButton = (label) => {
//   const el = document.createElement('button')
//   el.textContent = label
//   el.classList.add('btn')
//   return el
// }

// document.body.appendChild(getButton('čau'))

// const tlacitko = new Button('ahoj')
// tlacitko.render(document.querySelector('.buttons'))

const div = document.createElement('div')

const tlacitko = new Button('moje krasne tlacitko')
tlacitko.render(div)

document.body.appendChild(div)
console.log(div)