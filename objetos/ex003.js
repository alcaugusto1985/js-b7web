let pessoa = {
    nome: 'André',
    idade: 38,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ford', cor: 'prata'}
    ]
}

console.log(`${pessoa.nome} tem um carro da marca ${pessoa.carros[0].modelo}.`)
console.log(`Ele também tem um segundo carro da marca ${pessoa.carros[1].modelo}.`)
console.log(`Seu ${pessoa.carros[0].modelo} é ${pessoa.carros[0].cor}.`)
console.log(`Já o seu ${pessoa.carros[1].modelo}, tem a cor ${pessoa.carros[1].cor}.`)
