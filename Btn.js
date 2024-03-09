export default class Btn {
  constructor (label, size = null) {
    this.el = document.createElement('button')
    if (size) {
      this.el.classList.add('btn-' + size)
    }
  }
  onClick (cb) {
    this.el.addEventListener('click', cb)
  }
  render(par) {
    par.appendChild(this.el)
  }
  static getAllButtons () {
    return Array.from(document.getElementsByTagName('button'))
  }
}


const btn1 = newBtn('ahoj')
btn1.onClick(() => { console.log('lolo')})

const allButtons = Btn.getAllButtons()