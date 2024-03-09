// +78 = // chyba
// 78 = //chyba
// 6+8 = // výsledek
// tlačítka: 1, ....0, +, -, *, /, =, ., C
// C - vymaže display
// = - zobrazí výsledek na display nebo text 'error'
// ostatní tlačítka jen přidají svůj string k displayi

// display, C
// 1, 2, 3, +
// 4, 5, 6, -
// 7, 8, 9, *
// ., 0, =, /
import Button from './Button.js'

const calculator = document.querySelector('.calculator')

const display = document.createElement('div')
display.classList.add('display')
calculator.appendChild(display)
display.clearVar = false

const person = {
  first: 'Adam'
}

const calculate = () => {
  // Mapa operací
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }

  // const obj = {
  //   '1': 'jijo',
  //   2: 'kopkop',
  //   673556: 'fhdjskhsdfk'
  // }
  // obj['2']
  // zkoumat display.textContent
  // musí obsahovat jeden operátor (+, -, *, /)
  // musí být něco před operátorem - číslo
  // musí být něco za operátorem - číslo
  // pokud budeme dělit, tak to za operátorem nesmí být nula
  // pokud selžou tyhle podmínky - zobrazíme ERROR
  // jinak zobrazíme výsledek

  // regulární výrazy - replace - všechny číslice a des. tečku nahradíme ''
  const operator = display.textContent.replace(/[0-9.]/g, '')
  if (operator.length !== 1) {
    display.textContent = 'error'
    display.clearVar = true
    return
  }
  // '256*789' => ['256', '789']
  const splited = display.textContent.split(operator)
  const re = /^\d*.?\d*$/
  if (!re.test(splited[0]) || !re.test(splited[1])) {
    display.textContent = 'error'
    display.clearVar = true
    return
  }
  if (operator === '/' && !Number(splited[1])) {
    display.textContent = 'error'
    display.clearVar = true
    return
  }
  display.textContent = operations[operator](Number(splited[0]), Number(splited[1]))
  display.clearVar = true

}

// const onClickFn = (e) => {
//   if (display.textContent === 'error') {
//     display.textContent = ''
//   }
//   if (e.target.textContent === 'C') {
//     display.textContent = ''
//   } else if (e.target.textContent === '=') {
//     calculate()
//   } else {
//     display.textContent += e.target.textContent
//   }
// }

const actions = {
  'C': () => display.textContent = '',
  '=': () => calculate(),
  'default': text => display.textContent += text
}

const onClickFn = (e) => {
  if (display.clearVar) {
    display.textContent = ''
    display.clearVar = false
  }
  const action = actions[e.target.textContent] || actions['default']
  action(e.target.textContent)
};




const labels = ['C', 1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '=', '/']
labels.forEach(label => {
  const btn = new Button(label, onClickFn)
  btn.render(calculator)
})


// numbers - šedá
// = - červenou
// ostatní - žlutou
// const obj = {
//   "=": 'red',
//   'C': 'yellow',
//   '+': 'yellow',
//   '*': 'yellow',
//   '/': 'yellow',
//   '-': 'yellow'
// }
// labels.forEach((label) => {
//   const btn = document.createElement('btn')
//   btn.textContent = label
//   btn.classList.add('btn')
//   // if (!isNaN(label) || label === '.') {
//   //   btn.classList.add('bg-grey')
//   // } else {
//   //   btn.classList.add('bg-blue')
//   // }
//   btn.classList.add(label === '='
//     ? 'bg-red'
//     : !isNaN(label) || label === '.'
//       ? 'bg-grey'
//       : 'bg-yellow'
//   )

//   calculator.appendChild(btn)
// })

