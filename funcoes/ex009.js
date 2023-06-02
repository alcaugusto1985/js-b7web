function calcularImovel(metragem, quartos) {
    let valor = 0
    if (quartos === 1) {
        valor = metragem * 3000
        return `O preço do apartamento é ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    } else if (quartos === 2) {
        valor = metragem * (3000 * 1.2)
        return `O preço do apartamento é ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    } else if (quartos === 3) {
        valor = metragem * (3000 * 1.5)
        return `O preço do apartamento é ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }
}

let mQuadrado = 123
let qtdQuartos = 3
let preco = calcularImovel(mQuadrado, qtdQuartos)
console.log(preco)
