//OR (||) - nosso boneco só pode sair se tiver sem chuva OU se estiver usando guarda-chuva

let tempo = "chuva"
let item = "guarda chuva"

let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log ("nosso personagem pode sair? "    + podeSair)