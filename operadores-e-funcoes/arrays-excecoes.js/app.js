// HORA DA PRÁTICA
/*
 Escrever um programa que recebe alguns produtos como argumento, validar se esses produtos estão na lista de produtos
disponíveis do mercado, caso esteja avisar o usuário quais produtos tem e quais não tem e por ultimo exibir a lista de
produtos disponíveis ordenados por ordem alfabética do mercado para que o usuário possa pedir na próxima vez.
*/

try {
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
        /*
        Dentro do contexto do filter, este código vai adicionar o produto na lista dos não disponíveis
         se não encontrar um produto com o mesmo nome na lista de produtos disponíveis,

        Em um dos casos, ele só vai adicionar se não tiver nenhum produto que seja igual. Você está pegando
         o resultado e vendo, se não encontrou nenhum adiciona na lista dos não disponíveis.
        No outro, você vai adicionar se existir algum produto que seja difernete. Se a pessoa está adicionando
         laranja na lista de produtos, ele vai adicionar ela na lista de produtos não disponíveis se existir algum
         produto que não seja uma laranja.

        Geralmente esse ! antes de alguma coisa qUer dizer: "se essa coisa não existir, faz isso". O find, quando não 
         acha nada, retorna undefined quando você usa o operador ! no undefined o resultado é true.
        */
    });
    
    listaDeProdutosSolicitadosNaoDisponiveis.forEach((produto) => console.log(`Este produto nós não temos: ${produto}`));
    
    listaDeProdutosDisponiveis.sort(); // vai ordenar em ordem alfabética pq o produto é uma string.
    listaDeProdutosDisponiveis.forEach((produto) => {
        console.log(produto);
    })

} catch(erro) {
    console.log('Não foi possível executar pedido de compra.')
}

