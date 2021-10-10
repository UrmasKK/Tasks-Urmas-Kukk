const colors = ['"Punane', 'Roheline', 'Valge', 'Must']

const first = colors.toString(' " ') + '"'
const second = colors.join(', ') + '"'
const third = colors.join(' + ') + '"'

console.log(first)
console.log(second)
console.log(third)