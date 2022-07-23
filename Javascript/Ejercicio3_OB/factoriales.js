// Factorial for
var fact = 1
for (let i =10; i >= 1; i--) { 
    fact *= i
}
console.log(fact)

// Factorial while
let factor = 1
let numero = 10
while (numero > 1) {
    factor *= numero
    numero--
}
console.log(factor)

// Factorial break
let factorial = 1
let num = 10
while(true) {
    factorial *= num
    num--
    if (num === 1) break
}
console.log(factorial)