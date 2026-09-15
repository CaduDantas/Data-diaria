
    var usuario = ('cadu')
    var senha = ('senha')

entrar.onclick = function() {


    var login = window.document.getElementById("txt1")
    var senharr = window.document.getElementById("txt2")

    var n1 = (login.value)
    var n2 = (senharr.value)

    if (senha == n2 && usuario == n1) {

        alert("vc entrou na sua conta")

    }

    else {

        alert('voce digitou algo errado')
    }

        

    }


