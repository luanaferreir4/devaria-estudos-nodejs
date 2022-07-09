// Desafio:
/*
 Escrever um programa que recebe dois números
 e um operador matemático e com isso executa o 
 cálculo corretamente.
*/
// Calculadora
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const validaNumInformado = (numero) => {
    try {
        return Number.parseFloat(numero);    // função que diminui o código.
    }catch(erro) {
        console.log('Número informado é inválido.');
    }
}

const validaOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
            break;
        default:
            console.log('Operador informado é inválido!');
            return null;
    }
}

readLine.question('Nos informe um número: ', (numero1) => {
    const numeroValidado1 = validaNumInformado(numero1);
    if(numeroValidado1) {
        readLine.question('Nos informe outro número: ', (numero2) => {
            const numeroValidado2 = validaNumInformado(numero2);
            if(numeroValidado2) {
                readLine.question('Nos informe o operador: ', (operador) => {
                    const operadorValidado = validaOperador(operador);
                    if(operadorValidado) {
                        switch(operadorValidado) {
                            case '+': console.log(numeroValidado1 + numeroValidado2); 
                            break;
                            case '-': console.log(numeroValidado1 - numeroValidado2); 
                            break;
                            case '*': console.log(numeroValidado1 * numeroValidado2); 
                            break;
                            case '/': console.log(numeroValidado1 / numeroValidado2); 
                            break;
                            case '%': console.log(numeroValidado1 % numeroValidado22); 
                            break;
                            default: break;
                        }
                    }
                })
            }
        })
    }
})

// 0:55
