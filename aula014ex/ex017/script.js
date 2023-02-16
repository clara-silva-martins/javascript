function gerar(){
    var num = document.getElementById('numero')
    var res = document.getElementById('resultado')

    if(num.value.length > 0){
        var numero1 = Number(num.value)
        var multi = Number(res.value)

        res.innerHTML = ``

        for ( var c = 1; c <= 10; c++){
            valor = numero1 * c
        res.innerHTML += `${numero1} x ${c} = ${valor} \n`
        }
     
    }
}
