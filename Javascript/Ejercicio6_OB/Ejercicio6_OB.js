var lista = ['patatas', 'cacahuetes', 'zanahorias', 'yogur', 'gelatina']
console.log(lista)
lista.push('Aceite de Girasol')
console.log(lista)
lista.pop()
console.log(lista)

var pelis = [peli1 = { titulo: 'pelicula1', director: 'director', fecha: new Date('Jul 3 2012')},
peli2 = { titulo: 'pelicula2', director: 'director2', fecha: new Date('Jul 3 2009')},
peli3 = { titulo: 'pelicula3', director: 'director3', fecha: new Date('Jul 3 2016')}
]
console.log(pelis)
var pelisFecha = pelis.filter(obj => obj.fecha > new Date('Jan 1 2010'))
console.log(pelisFecha)

var directores = pelis.map((val, index) => {
    return `${val.director}`
})
console.log(directores)

var titulos = pelis.map((val, index) => {
    return `${val.titulo}`
})
console.log(titulos)

var concatenado = directores.concat(titulos)
console.log(concatenado)

var concaPorpagado = [...titulos, ...directores]
console.log(concaPorpagado)