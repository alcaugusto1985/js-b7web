let pessoa = {
    nome: 'André',
    sobrenome: 'Augusto',
    idade: 38,
    pais: 'Brasil',
    caracteristicas: [
        'observador',
        'resilioente',
        'paciente',
        'detalhista'
    ],
    altura: 1.85
}

console.log(`${pessoa.nome}, tem ${pessoa.idade} anos, mora no ${pessoa.pais}, e uma de suas principais caracteristicas é ser ${pessoa.caracteristicas[2]}.`)