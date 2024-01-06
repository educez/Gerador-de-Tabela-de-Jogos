let times = ['Vasco', 'Flamengo', 'Botafogo', 'Fluminense']

let jogos = []
const rodadas = times.length - 1

console.log(`O Campeonato possui ${rodadas} 'rodadas'.`)

for (let r = 1; r <= rodadas; r++){
    console.log(`'Rodada' ${r}`)
    for (let i = 0, j = times.length-1; i < times.length; i++, j--){
        console.log(times[i], times[j])
        jogos.push(times[i])
        jogos.push(times[j]) 
    }

    times.splice(1, 0, times[rodadas])
    times.pop()
    
}