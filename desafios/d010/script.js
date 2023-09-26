function botao() {
    const a = Number(prompt(`Qual é o valor de a?`))
    const b = Number(prompt('Qual é o valor de b? '))
    const c = Number(prompt('Qual é o valor de c?'))
    const res = document.querySelector('div#res')

    const delta = b ** 2 - 4 * a * c

    res.innerHTML = `<h2>Resolvendo Bhaskara</h2><p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong> <br> O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong> <br> O valor calculado foi <mark><strong>Δ = ${delta}</strong></p>`
}