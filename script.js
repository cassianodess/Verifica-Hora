while (!nome) {
    var nome = prompt("Digite seu nome: ")
}

function carregar() {
    var msg = window.document.getElementById("msg")

    var img = window.document.getElementById("imagem")

    var titulo = window.document.getElementById("titulo")

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `${hora}:${minuto}`

    if (hora >= 0 && hora < 12) {

        titulo.innerHTML = `Bom dia, ${nome}!`

        img.scr = "img/morning.png"

        document.body.style.background = "#cddfe6"

    } else if (hora > 12 && hora < 18) {

        titulo.innerHTML = `Boa tarde, ${nome}!`
        img.src = "img/afternoon.png"
        document.body.style.background = "#b7797e"
    } else {

        titulo.innerHTML = `Boa noite, ${nome}!`


        img.src = "img/night.png"

        document.body.style.background = "#293d44"
    }


}