// ---------------- TRATAMENTOS DE EXCEÇÃO -----------------------
// try, catch, finally
/*
 *  Essa abordagem abre um escopo onde, tudo que
 *  for executado dentro daquele escopo caso 
 *  gere um erro o escopo do catch será inici-
 *  ado e o escopo do try para de executar.
 * 
 *  finally
 *  Este utilizamos pouco, mas ele serve para que
 *  alguma instrução ocorra tanto quando o try não
 *  der exceção quanto quando cai no catch. (dando 
 *  sucesso ou erro, deve acontecer sempre)
 */
/*
let usuarios;
try {
    usuarios = buscarTodosOsUsuarios();
} catch(erro) {
    console.error('Ocorreu um erro ao buscar os usuários.')
}

let notificacao = "";
try {
    processarPagamentosPendentes();
    notificacao = "Pagamentos processados com sucesso!";
} catch(erro) {
    notificacao = "Erro ao processar pagamentos!";
} finally {
    notificarAdminstradorSistema(notificacao); 
}
*/
// ARRAYS
const notas = [90, 71, 82, 93, 75, 82];
const funcionarios = ['Emerson', 'Zacarias', 'Morgana'];

// MÉTODOS DE ARRAYS
/*
Entre os principais métodos estão:
.filter() = Executa linha a linha uma checagem, se as condições passadas são atendidas, retorna uma lista somente dos
itens que o resultado de toda condição for true.
.map() = Faz a transformação da linha para o formato que você desejar.
.find() = Encontra o primeiro registro da lista que atende as condições fornecidas e retorna o mesmo.
.sort() = Ordena a lista de acordo com a condição / atributo passado.
.push() = adiciona um ou mais itens na lista.
*/
// FUNÇÕES ANÔNIMAS (DE CALLBACK)

const qntdNotasAcima80 = notas.filter(notas => notas > 80).length;
console.log(qntdNotasAcima80, "notas acima de 80.");

// HORA DA PRÁTICA
/*
 Escrever um programa que recebe alguns produtos como argumento, validar se esses produtos estão na lista de produtos
disponíveis do mercado, caso esteja avisar o usuário quais produtos tem e quais não tem e por ultimo exibir a lista de
produtos disponíveis ordenados por ordem alfabética do mercado para que o usuário possa pedir na próxima vez.
*/