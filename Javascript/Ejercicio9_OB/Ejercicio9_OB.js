const hoy = Date.now()
console.log(hoy)

const nacimiento = new Date('2001', '06', '07')
console.log(nacimiento)

var fechas = hoy > nacimiento.getFullYear()
console.log(fechas)

var dia = nacimiento.getDay() + 1
console.log(dia)

var mes = nacimiento.getMonth() + 1
console.log(mes)

var año = nacimiento.getFullYear()
console.log(año)