function converte(){
    var conversor = Number(document.getElementById("1").value)
    var conversor2 = Number(document.getElementById("2").value)

    var resultado = 0
    if(conversor > 4){
        resultado = (conversor / 5)
    }
    var resultado2 = 0
    if(conversor2 > 4){
        resultado2 = (conversor2 / 5)
    }

    document.getElementById("r").innerHTML = "+ "+ Number.parseInt(resultado)
    document.getElementById("r2").innerHTML = "+ "+ Number.parseInt(resultado2)
}