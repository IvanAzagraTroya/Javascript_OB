const nombre = 'Iván'
const apellido = 'Azagra'
const estudiante = `${nombre} ${apellido}`
console.log(estudiante)

const estudianteMayus = `${nombre} ${apellido}`.toUpperCase()
console.log(estudianteMayus)

const estudianteMinus = `${nombre} ${apellido}`.toLowerCase()
console.log(estudianteMinus)

var letras = estudiante.length
console.log(letras)

var primeraLetra = estudiante.charAt(0)
console.log(primeraLetra)

var ultimaLetra = estudiante.charAt(10)
console.log(ultimaLetra)

var sinEspacios = estudiante.replace(/ /g, '')
console.log(sinEspacios)

var esContenido = estudiante.includes(`${nombre}`)
console.log(esContenido)