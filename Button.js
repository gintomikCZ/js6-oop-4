export default class Button {
  constructor(label, callBack = null) {
    this.el = document.createElement('button')
    this.el.textContent = label
    this.el.classList.add('btn')
    this.el.classList.add(label === '='
      ? 'bg-red'
      : !isNaN(label) || label === '.'
        ? 'bg-grey'
        : 'bg-yellow'
    )
    if(callBack) {
      this.el.addEventListener('click', callBack)
    }
  }

  render (parent) {
    parent.appendChild(this.el)
  }
}