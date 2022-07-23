function esVerdadero() {
    return true
}
console.log(esVerdadero())

async function asinc() {
    return setTimeout(() => console.log("Hola soy una promersa"), 5000)
}

function* generaId() {
    let id = 0
    while (true) {
        yield id += 2
    }
}