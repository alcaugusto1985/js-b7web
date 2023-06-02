function validacao(usuario, senha) {    
    if (usuario === 'André' && senha === '1234') {
        return `Olá ${usuario}, acesso concedido.`
    } else {
        return `Desculpe! Usuário ou senha incorretos.`
    }
}

let usu = 'André'
let sen = '1234'
let verificacao = validacao(usu, sen)
console.log(verificacao)
