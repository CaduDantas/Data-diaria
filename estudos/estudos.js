
function verificar() {


    var data = new Date()
    var ano = data.getFullYear()
    var botao = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (botao.value == 0 || botao.value > ano) {

        alert("[ERRO] Verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(botao.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                // crianca
                img.setAttribute('src', "fotos.jpg/bebe-m.png")
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', "fotos.jpg/jovem-m.avif")
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', "fotos.jpg/adulto-m.webp")
            } else {
                // idoso
                img.setAttribute('src', "fotos.jpg/idoso-m.webp")
            }
                







        } else {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                // crianca
                img.setAttribute('src', "fotos.jpg/bebe-f.webp")
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', "fotos.jpg/jovem-f.avif")
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', "fotos.jpg/adulto-f.webp")
            } else {
                // idoso
                img.setAttribute('src', "fotos.jpg/idoso-f.jpg")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }



    
    
}