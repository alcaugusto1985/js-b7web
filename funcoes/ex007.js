function maiorIdade(idade) {
    if (idade >= 0 && idade <= 10) {
        return `É uma criança de ${idade} anos.`
    } else if (idade > 10 && idade < 18) {
        return `É um adolescente de ${idade} anos.`
    } else if (idade >= 18 && idade < 60) {
        return `É um adulto de ${idade} anos.`
    } else {
       return `É um idoso de ${idade} anos.`
    }
}

let age = 60
let verificacao = maiorIdade(age)
console.log(verificacao)
