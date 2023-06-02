function calPct(n1, n2) {
    let pct = (n2 / n1) * 100
    return `${pct}% de ${n1} é ${n2}`
}

let x = 40
let y = 10
let calcPct = calPct(x, y)
console.log(calcPct)
