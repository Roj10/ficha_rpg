function converte(){
    var conversor = Number(document.getElementById("numero").value)

    var resultado = 0
    if(conversor > 4){
        resultado = (conversor / 5)
    }

    document.getElementById("r").innerHTML = "+ "+ Number.parseInt(resultado)
}