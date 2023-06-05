let frutas = ['maçã', 'Banana', 'uva', 'manga', 'abacaxi']
console.log(frutas)
console.log('==============================================')

let maior = frutas.filter((item) => item.length > 3)
console.log(maior)
console.log('==============================================')

let igual = frutas.filter((item) => item.length == 4)
console.log(igual)
console.log('==============================================')

let menor = frutas.filter((item) => item.length <= 4)
console.log(menor)

