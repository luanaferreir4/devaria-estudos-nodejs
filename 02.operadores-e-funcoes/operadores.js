// Operador de atribuicao
const valido = false;
let idade = 18;
const mensagem = 'Favor informar dados válidos!';

// Operador de comparacao (== ou ===)
if(1 == '1') { 
    console.log("São equivalentes!");
}
if(1 === 1) {
    console.log("São idênticos!");
}
if(1 != 2) {
    console.log("1 é diferente de 2!"); // true
}
if(1 !== '1') {
    console.log("1 numérico é diferente de 1 string!"); // true
}
/* Operador de incremento (++ - ele soma 1)
i++;
// Operador de decremento (-- - ele tira 1)
i--;
*/
// Métodos / Funções
const validar = (valido) => {
    if(valido === true) {
        return true;
    } else {
        return false;
    }
}

const teste = false;
console.log(validar(teste));