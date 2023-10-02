function calcular() {
    let n1 = document.querySelector(`input#num1`)
    let n2 = document.querySelector(`input#num2`)
    let passo = document.querySelector(`input#pass`)
    let res = document.querySelector(`div#res`)

    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar`
        alert(`[ERRO] Falta dados!`)
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }

        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
            }
        } else {
            // Contagem regreciva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
        }
        res.innerHTML += `🏁`
    }


}