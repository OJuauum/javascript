function botao() {
    const ano = Number(prompt(`Qual é o ano que você quer verificar?`))
    const res = document.querySelector('div#res')

    if (ano % 4 == 0) {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2><p>O ano de ${ano}  <mark id="bis">É BISSEXTO </mark> ✅</p>`
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2><p>O ano de ${ano} <mark id="nbis">NÃO É BISSEXTO </mark> ❌</p>`
    }
}