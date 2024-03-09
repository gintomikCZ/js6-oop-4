// const global = 'něco'

// const ar = Array.from(arg) // statická metoda
// const ar1 = [1, 2, 3]
// ar1.forEach(() => {}) // prototypální metoda

class Person {
  static genericHello () {
    return 'Hello';
  }
}

// const adam = new Person()
// adam.genericHello()

console.log(Person.genericHello()); // "Hello"


// var globalVariable = 'něco'

console.log(window.globalVariable)

window.localStorage.setItem('SDA', 'čau skupino')
const value = window.localStorage.getItem('SDA')
console.log(value)
window.localStorage.removeItem('SDA')


// Hash - encoding - jednosměrné

// registrace uživatele
// heslo => jednosměrný hash => uloží se do databáze

// login
// heslo => jednosměrný hash => ten se porovná s db