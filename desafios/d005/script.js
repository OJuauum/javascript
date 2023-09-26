function bot() {
    const metro = Number(prompt(`Digite uma distância em metros [m]`))
    const res = document.getElementById('res')
    const Km = metro / 10 ** 3
    const Hm = metro / 10 ** 2
    const Dam = metro / 10
    const dm = metro * 10
    const cm = metro * 10 ** 2
    const mm = metro * 10 ** 3

    res.innerHTML = `<h2>A distância de ${metro.toLocaleString('pt-BR')} metros, corresponde a...</h2> <p>${Km.toLocaleString('pt-BR')} quilômetros (Km)</p> <p>${Hm.toLocaleString('pt-BR')} hectômetros (Hm)</p> <p>${Dam.toLocaleString('pt-BR')} decâmetros (Dam)</p> <p>${dm.toLocaleString('pt-BR')} decimetros (dm)</p> <p>${cm.toLocaleString('pt-BR')} centímetros (cm)</p> <p>${mm.toLocaleString('pt-BR')} milímetros (mm)</p>`
}