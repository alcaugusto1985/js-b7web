function maiorIdade(idade) {
    if ( idade >= 18) {
        return true
    } else {
        return false
    }
}

let age = 50
let verificacao = maiorIdade(age)

if (verificacao) {
    console.log('É maior de idade!')
} else {
    console.log('É MENOR de idade!')
}

console.log(verificacao)
