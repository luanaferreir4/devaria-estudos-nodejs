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
})

const validaNumInformado = (numero) => {

}

readLine.question('Por favor informar um numero: ', (num1) => {
    try {
    const numero1 = Number.parseFloat(num1);
    readLine.question('Por favor informar outro numero: ', (num2) => {
        try {
            const numero2 = Number.parseFloat(num2);
            readLine.question('Por favor informar um operador matemático: ', (oper) => {
                switch(oper) {
                    case '+':
                        return num1 + num2;
                        break;
                    case '-':
                        return num1 - num2;
                        break;
                    case '*' || 'x':
                        return num1 * num2;
                        break;
                    case '/' || '%':
                        return num1 / num2;
                        break;
                }
            })
        }catch(erro) {
            console.log("Número informado não é válido!");
        }
        
    })
    }catch(erro) {
        console.log('Número informado não é válido!');
    }
})

// 00:41