let nome = "André"
let sobrenome = "Augusto"

let nomeCompleto = nome + " " + sobrenome
console.log(nomeCompleto)
console.log("====================================================")

console.log(`${nome} ${sobrenome}`)
console.log("====================================================")

/* Template strings são mais utilizados atualmenmte para concatenar variáveis
   Também podem ser feitas operações matemáticas dentro de um template string */
let nomeC = `${nome} ${sobrenome}`
console.log(nomeC)