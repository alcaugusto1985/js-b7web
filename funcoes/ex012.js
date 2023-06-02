function validacao(usuario, senha) {
    if (usuario ==='pedro' && senha === '123') {
        return true
    } else {
        return false
    }
}

let usu = 'pedro'
let sen = '123'
let verificacao = validacao(usu, sen)

if (verificacao) {
    console.log('ACESSO CONCEDIDO!')
} else {
    console.log('ACESSO NEGADO!')
}
