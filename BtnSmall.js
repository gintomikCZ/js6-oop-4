import Btn from './Btn.js'

export default class BtnSmall extends Btn {
  constructor (label) {
    super(label)
    this.el.classList.add('btn-small')
  }
}