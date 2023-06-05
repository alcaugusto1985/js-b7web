let pessoa = {
    nome: 'André',
    sobrenome: 'Augusto',
    idade: 38,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto())
console.log(`${pessoa.nomeCompleto()} tem ${pessoa.idade} anos.`)

console.log('===================================================')

pessoa.nome = 'Luana'
console.log(pessoa.nome)
console.log(`${pessoa.nomeCompleto()} tem ${pessoa.idade} anos.`)