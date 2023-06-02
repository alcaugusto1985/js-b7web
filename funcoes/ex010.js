function precoImovel(metragem, quartos) {
    let m2 = 3000
    let valor = 0
    switch (quartos) {
        case 1:
            valor = metragem * m2
            console.log(`O preço do apartamento é ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
            break

        case 2:
            valor = metragem * (m2 * 1.2)
            console.log(`O preço do apartamento é ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
            break

        case 3:
            valor = metragem * (m2 * 1.5)
            console.log(`O preço do apartamento é ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
            break

        default:
            console.log('Não temos apartamentos nessas caracteristicas.')
            break
    }
}

let mQuadrado = 123
let qtdQuartos = 2
let preco = precoImovel(mQuadrado, qtdQuartos)
console.log(preco)
