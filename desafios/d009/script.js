function botao() {
    var nome = prompt(`Qual é o nome do funcionário?`)
    var salario = Number(prompt(`Qual é o salário de ${nome}?`))
    var reajuste = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var res = document.querySelector('div#res')
    var porcentagem = reajuste/100
    var aumento = salario * porcentagem
    var nsalario = salario + aumento
    var salario = salario.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    var aumento = aumento.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    var nsalario = nsalario.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})

    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2> <p> O salário atual era ${salario}. <br> Com um aumento de ${reajuste}%, o salário vai aumentar ${aumento} no proximo mês. <br> E a partir dai, ${nome} vai passar a ganhar ${nsalario} </p>`
}