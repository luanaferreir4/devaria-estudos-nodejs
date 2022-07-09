// HORA DA PRÁTICA
/*
 Escrever um programa que recebe alguns produtos como argumento, validar se esses produtos estão na lista de produtos
disponíveis do mercado, caso esteja avisar o usuário quais produtos tem e quais não tem e por ultimo exibir a lista de
produtos disponíveis ordenados por ordem alfabética do mercado para que o usuário possa pedir na próxima vez.
*/

const listaDeProdutosDisponiveis = [
    "Pao",
    "Leite",    
    "Cafe",
    "Laranja",
    "Macarrao",
    "Sabonete",
    "Detergente"
];

const listaArgs = process.argv.slice(2); 

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter((produto) => {
    return listaArgs.find((argumento) => argumento === produto);
})

listaDeProdutosSolicitadosDisponiveis.forEach((produto) => console.log(`Este produto nós temos: ${produto}`));

const listaDeProdutosSolicitadosNaoDisponiveis = listaArgs.filter((argumento) => {
    return !listaDeProdutosDisponiveis.find((produto) => produto === argumento);
});

listaDeProdutosSolicitadosNaoDisponiveis.forEach((produto) => console.log(`Este produto nós não temos: ${produto}`));
