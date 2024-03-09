// musíme nastavit na oba buttonky eventlistenery
// event listener bude funkce - buď přičte k contentu divu 1 nebo ji odečte

// const btnPlus = document.querySelector('.btn-container button')

function changeNumber(e) {
  const div = document.querySelector('.number')
  // if (e.target.textContent === 'plus') {
  //   div.textContent++
  // } else {
  //   div.textContent --
  // }
  div.textContent = e.target.textContent === 'plus'
    ? parseInt(div.textContent, 10) + 1
    : e.target.textContent === 'nějaké jiné tlačítko'
      ? 'jiná hodnota'
      : parseInt(div.textContent, 10) - 1
}
// NOdeList
Array.from(document.querySelectorAll('.btn-container button')).forEach(btn => {
  btn.addEventListener('click', changeNumber)
})

// btnPlus.addEventListener('click', () => {
//   const div = document.querySelector('.number')
//   div.textContent++
// })



// const btnMinus = document.querySelector('.btn-container button:nth-child(2)')
// btnMinus.addEventListener('click', () => {
//   const div = document.querySelector('.number')
//   div.textContent--
// })
