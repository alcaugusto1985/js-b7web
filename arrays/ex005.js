let idade = [18, 15, 12, 33, 24, 38, 60, 13, 9, 5, 37, 42, 56]

console.log(idade)
console.log('==============================================')

let maior = idade.filter((item) => item >= 18)

console.log(maior)
console.log('==============================================')

let menor = idade.filter((item) => item < 18)

console.log(menor)
console.log('==============================================')