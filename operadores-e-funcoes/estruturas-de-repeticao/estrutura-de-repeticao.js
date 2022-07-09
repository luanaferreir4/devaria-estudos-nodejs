const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

function trocarPneu() {
    console.log('Trocando 1 pneu...');
}

for(let pneusTrocados = 1; pneusTrocados < 4; pneusTrocados++) {
    trocarPneu();
}

const lavarCarro = (x) => {
    x = 'Lavando carro...';
    console.log(x);
    return x;
}

const verificarTemCarroNaFila = (resposta) => {
    resposta = prompt('Tem carro na fila? (SIM/NÃO)');
    if(resposta.toUpperCase() === 'SIM') {
        temCarroNaFila = true;
        return temCarroNaFila;
        lavarCarro();
    }
    console.log('Sem gente na fila');
    return null;
}

let temCarroNaFila = true;
while(temCarroNaFila) {
    lavarCarro();
    temCarroNaFila = verificarTemCarroNaFila(temCarroNaFila);
}

// do while
let atividadesPendentes;
do {
    atividadesPendentes = consultarAgendaDeHoje();
    informarAtividades(atividadesPendentes);
    await umaHora;
}while(atividadesPendentes.length > 0);

// for of
const darBoasVindas = (aluno) => {
    console.log(`Bem-vindo, ${aluno}`);
}

const novosAlunos = ["João", "Felipe", "Alfredo"];
for(const aluno of novosAlunos) {
    darBoasVindas(aluno);
}

