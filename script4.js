import Btn from './Btn.js'
import BtnSmall from './BtnSmall.js'

class Person {
  constructor (name) {
    this.name = name
  }
  hello () {
    console.log('hello, I am ' + this.name)
  }
}

class Coder extends Person {
  constructor (name, language) {
    super(name)
    this.language = language
  }
}

class CoderSpecific extends Coder {
  constructor (name, language, spec) {
    super(name, language)
    this.spec = spec
  }
  hello () {
    console.log('hello, I am specific ' + this.name)
  }
}

const first = new Person ('Karel')
const second = new Coder ('Franta', 'JS')
const third = new CoderSpecific('Helča', 'python', 'lala')

console.log(first, second, third)

first.hello()
second.hello()
third.hello()

const btn1 = new Btn('ahoj')
const btn2 = new BtnSmall('ahoj')
console.log(btn1, btn2)