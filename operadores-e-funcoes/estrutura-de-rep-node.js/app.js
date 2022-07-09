const listaArgs = process.argv.slice(2);
/* O que fizemos acima:
Com process.argv abaixo quando executamos o código em 'node app.js [arg1] [arg2]' inserimos quantos argumentos quiser-
mos e o slice pega os dois primeiros argumentos que são o caminho do computador até tal documento e aonde está o node e os
retira de jogada.
*/
console.log('--------------------------- Executando um FOR -------------------------------');
for(let i = 0; i < listaArgs.length; i++) {
    console.log(`${i + 1}. ${listaArgs[i]}`);
}

console.log('--------------------------- Executando um WHILE -------------------------------');
let i = 0;
while(i < listaArgs.length) {
    console.log(`${i + 1}. ${listaArgs[i]}`);
    i++;
}

console.log('--------------------------- Executando um DO WHILE -------------------------------');
let j = 0;
do {
    console.log(`${j + 1}. ${listaArgs[j]}`);
    j++;
}while(j < listaArgs.length);

console.log('--------------------------- Executando um FOR OF -------------------------------');
let k = 0;
for(const argumento of listaArgs) {
    console.log(`${k}. ${argumento}`);
    k++;
}
