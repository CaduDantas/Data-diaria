imagem.style.display = "none"
function verificar() {


    var data = new Date()
    var ano = data.getFullYear()
    var botao = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')

    var idadeinicial = Number(botao.value)

    var idade = ano - idadeinicial

    res.innerHTML = `a sua idade e ${idade}`
    img.innerHTML =  'src="fotos.jpg/manha.jpg'

    imagem.style.display = "block"
    
}