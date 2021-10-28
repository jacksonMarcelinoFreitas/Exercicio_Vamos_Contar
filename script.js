function contar(){
    //Pegando elementos do HTML
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    //Validando erro
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }
    //Lógica de contagem
    else{
        res.innerHTML = 'Contando: <br>'
        //Convertendo em numeros
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //Validando passo
        if(p <= 0){
            window.alert('Passo inválido! Considerando Passo = 1')
            p=1
        }
        //Contagem crescente
        if(i < f){
            for(let cont = i; cont <= f; cont += p){
                res.innerHTML += ` ${cont} \u{27A1}`
            }
        }
        //Contagem descrescente
        else{
            for(let cont = i; cont >= f; cont -= p){
            res.innerHTML += ` ${cont} \u{27A1}` //Emogi de seta
            }
        }
        res.innerHTML += `\u{1F3C1}`//Emogi de bandeira
    }
}