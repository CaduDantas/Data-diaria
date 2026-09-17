var txt1 = window.document.getElementById('txt1')

var res = document.querySelector("div#ah")

var analisar = document.getElementById('analisar')

analisar.onclick = function() {

    var vel = Number(txt1.value)

if (vel > 60) {

    res.innerHTML = "<p>voce ultrapassou o limite de velocidade, voce foi <strong>multado</strong><p>"

}   else {

    res.innerHTML = '<p>ta tranquilo, voce <strong>nao foi multado</strong> </p> '
}

}