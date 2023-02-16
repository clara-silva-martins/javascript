function contar(){
    var numero1 = document.getElementById('inicio')
    var numero2 = document.getElementById('fim')
    var passos = document.getElementById('passo')
    var contagem = document.getElementById('resultado')

    if (numero1.value.length <= 0 || numero2.value.length <= 0 || passos.value.length <= 0){
        window.alert('Operação inválida')
    } else {
        contagem.innerHTML = `Contando: `  
        var n1 = Number(numero1.value)
        var n2 = Number(numero2.value)
        var p = Number(passos.value)

        for( var c = n1; c <= n2; c += p){
              contagem.innerHTML += `${c} &#x1F44C`   
        }
        
        for( var c = n1; c >= n2; c -= p){
              contagem.innerHTML += `${c} &#x1F44C`  
        }
        contagem.innerHTML += `&#x1F6A9`
    }



}