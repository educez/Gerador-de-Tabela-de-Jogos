let times = ['Vasco', 'Flamengo', 'Botafogo', 'Fluminense']

function gerarTabela(){

    const rodadas = times.length - 1
    const rodadasTotal = rodadas * 2
    const jogosIda = []
    const jogosVolta = []

    console.log(`O Campeonato possui ${rodadasTotal} 'rodadas'.`)

    for (let r = 1; r <= rodadas; r++){
        var a = r%2 != 0 ? a = 1 : a = 2 

        for (let i = 0, j = times.length-1; i < times.length/2; i++, j--){
            var jogoIda = a == 1 ? [times[i], times[j]] : [times[j], times[i]]
            var jogoVolta = a == 1 ? [times[j], times[i]] : [times[i], times[j]]
            jogosIda.push(jogoIda)
            jogosVolta.push(jogoVolta)
        }
        times.splice(1, 0, times[rodadas])
        times.pop()   
    }
    console.log('Jogos da Ida')
    console.log(jogosIda)
    console.log('Jogos da Volta')
    console.log(jogosVolta)
}

gerarTabela()
