function converte(){
    var conversor1 = Number(document.getElementById("1").value)
    var conversor2 = Number(document.getElementById("2").value)
    var conversor3 = Number(document.getElementById("3").value)
    var conversor4 = Number(document.getElementById("4").value)
    var conversor5 = Number(document.getElementById("5").value)
    var conversor6 = Number(document.getElementById("6").value)
    var conversor7 = Number(document.getElementById("7").value)
    var conversor8 = Number(document.getElementById("8").value)
    var conversor9 = Number(document.getElementById("9").value)
    var conversor10 = Number(document.getElementById("10").value)

    var resultado1 = 0
    if(conversor1 > 4){
        resultado1 = (conversor1 / 5)
    }
    var resultado2 = 0
    if(conversor2 > 4){
        resultado2 = (conversor2 / 5)
    }
    var resultado3 = 0
    if(conversor3 > 4){
        resultado3 = (conversor3 / 5)
    }
    var resultado4 = 0
    if(conversor4 > 4){
        resultado4 = (conversor4 / 5)
    }
    var resultado5 = 0
    if(conversor5 > 4){
        resultado5 = (conversor5 / 5)
    }
    var resultado6 = 0
    if(conversor6 > 4){
        resultado6 = (conversor6 / 5)
    }
    var resultado7 = 0
    if(conversor7 > 4){
        resultado7 = (conversor7 / 5)
    }
    var resultado8 = 0
    if(conversor8 > 4){
        resultado8 = (conversor8 / 5)
    }
    var resultado9 = 0
    if(conversor9 > 4){
        resultado9 = (conversor9 / 5)
    }
    var resultado10 = 0
    if(conversor10 > 4){
        resultado10 = (conversor10 / 5)
    }

    document.getElementById("r1").innerHTML = "+ "+ Number.parseInt(resultado1)
    document.getElementById("r2").innerHTML = "+ "+ Number.parseInt(resultado2)
    document.getElementById("r3").innerHTML = "+ "+ Number.parseInt(resultado3)
    document.getElementById("r4").innerHTML = "+ "+ Number.parseInt(resultado4)
    document.getElementById("r5").innerHTML = "+ "+ Number.parseInt(resultado5)
    document.getElementById("r6").innerHTML = "+ "+ Number.parseInt(resultado6)
    document.getElementById("r7").innerHTML = "+ "+ Number.parseInt(resultado7)
    document.getElementById("r8").innerHTML = "+ "+ Number.parseInt(resultado8)
    document.getElementById("r9").innerHTML = "+ "+ Number.parseInt(resultado9)
    document.getElementById("r10").innerHTML = "+ "+ Number.parseInt(resultado10)
}