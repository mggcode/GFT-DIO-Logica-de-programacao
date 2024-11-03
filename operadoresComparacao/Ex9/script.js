// guardar o valor em uma variável de resultado TRUE? FALSE
let cpfPermitido= "222.555.333-01"
let cpfUsuario = "222.555.333-02"
let ehCPFBloqueado = cpfUsuario !== cpfPermitido

console.log("É um usúario inválido? " + ehCPFBloqueado)

