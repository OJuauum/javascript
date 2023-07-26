function botao() {
    const antpreço = Number(prompt(`Qual era o preço anterior do produto?`))
    const atupreço = Number(prompt(`Qual é o preço atual do produto?`))
    const res = document.querySelector('div#res')
    const preco = atupreço - antpreço
    const vari = (((antpreço / atupreço)-1)*100)

    

    if (antpreço < atupreço) {
         
        res.innerHTML = `<h2>Analisando os valores informados</h2><p>O produto custava ${antpreço} e agora custa ${atupreço} <br> Hoje o produto está mais caro. <br> O preço subiu ${preco} em relação ao preço anterior. <br> Uma variação de ${vari}% pra cima.</p>`
    } else {

        res.innerHTML = `<h2>Analisando os valores informados</h2><p>O produto custava ${antpreço} e agora custa ${atupreço} <br> Hoje o produto está mais barato. <br> O preço caiu ${preco} em relação ao preço anterior. <br> Uma variação de ${vari}% pra baixo.</p>`
    }
}