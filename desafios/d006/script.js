function bot() {
    var Celsius = Number(prompt(`Digite uma temperatura em °C (Celsius)`))
    var res = document.getElementById('res')
    var Kelvin = Celsius + 273
    var Fahrenheit = Celsius * 1.8 + 32

    res.innerHTML = `<h2>A temperatura de ${Celsius.toLocaleString('pt-BR')}°C, corresponde a...</h2><p>${Kelvin.toLocaleString('pt-BR')}°K (Kelvin) <br> ${Fahrenheit.toLocaleString('pt-BR')}°F (Fahrenheit)</p>`
}