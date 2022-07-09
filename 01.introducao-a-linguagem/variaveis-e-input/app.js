/* Precisamos importar algumas bibliotecas para dentro do nosso projeto pra usarmos alguns códigos em node, nem tudo está 
incluso. como no caso de readLine: */
const readLine = require('readline').createInterface({
    input: process.stdin, //(pegarei do meu processo(node))
    output: process.stdout, //(pegarei do meu processo(node))
})
                                 /* para conseguir finalmente ler o meu console e dentro preciso fornecer um objeto.
                                    explicando qual seria o meu input e qual seria o meu output.*/
const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;

// nodejs read console input (leitor de input do usuário):
readLine.question('Por favor digite alguma coisa: ', input => {
     leituraDeCampo = input;
     console.log(`O usuário digitou: ${leituraDeCampo}`);
});
