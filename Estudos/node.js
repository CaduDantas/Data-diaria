var agora = new Date()
var hora = agora.getHours()

console.log(`agora sao ${hora} horas`)

if (hora < 12) {

    console.log("bom dia")

}   else {

    if (hora > 11 && hora < 18) {

        console.log("boa tarde")

    }   else {

            console.log("boa noite")
    }
}