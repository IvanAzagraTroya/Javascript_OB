const yo = {
    nombre: 'Iván',
    apellido: 'Azagra',
    edad: 21,
    altura: 1.70,
    esDesarrollador: true
}

var miEdad = yo.edad
console.log(miEdad)

const p1 = {...yo}

const p2 = {...yo}
p2.nombre = 'Laura'
p2.apellido = 'Durán'
p2.edad = 20
p2.altura = 1.70
p2.esDesarrollador = false
console.log(p2)

const p3 = {...yo}
p3.nombre = 'Eneko'
p3.apellido = 'Rebollo'
p3.edad = 22
p3.altura = 1.75
p3.esDesarrollador = true
console.log(p3)

var listaP = [{...p1}, {...p2}, {...p3}]
console.log(listaP)

var listaOrdenada = listaP.sort((a, b) => b.edad - a.edad)
console.log(listaOrdenada)
