## Bibliotecas
Bibliotecas/Pacotes/Libs : todos esses são termos que se referem a mesma coisa, são ferramentas disponibilizadas por empresas ou pela comunidade a fim de servir como utilitário para seu código, sem que você tenha que escrever para todo novo projeto tarefas repetitivas como conexões com bancos de dados, validações de formulários e etc... Veremos isso de forma prática nos próximos slides. (facilita jornada)

O universo JavaScript é conhecido pela sua infinidade de bibliotecas o que para uns é um problema e para outros uma "mão na roda", dentre elas existem algumas reconhecidas como "padrão" da comunidade, pois existe um maior suporte, uso e evolução.
- Como uso? Onde encontro?

## Gestão de dependência:
Mas como vamos conhecer todas essas infinidades de bibliotecas e frameworks, além de controlá-las, também precisamos adicionar essas bibliotecas ao nosso projeto.

Para gerenciar nossas dependências, o JS com Node.js tem nativo uma plataforma de gestão conhecida como NPM, onde podemos ver todas as dependências, além de adicioná-las ao projeto.

(Gestor de dependência do Nodejs)

No NPM, geralmente, esse código é fornecido em "pacotes", juntamente com outro conteúdo necessário nos projetos que consomem esses pacotes.

Em suma, um pacote do NPM é o conjunto de arquivos de arquivos .js necessários para executar a proposta a qual a lib foi desenvolvida, além de outros arquivos relacionados a esse código e um manifesto descritivo que inclui informações como o número de versão do pacote, informações do repositório e tudo mais.

Os desenvolvedores com código para compartilhar criam pacotes e os publicam em um host publico ou privado. Os consumidores de pacotes obtêm esses pacotes de hosts adequados e os adicionam aos seus projetos e chamam a funcionalidade de um pacote no no código do projeto. E em seguida, o próprio NPM manipula todos os detalhes de intermediários.

Como o npm oferece suporte a hosts privados junto com o host público nuget.org, é possível usar pacotes NPM para compartilhar código exclusivo a uma organização ou a um grupo de trabalho.

Você também pode usar os pacotes como uma forma conveniente de levar em consideração seu próprio código para uso em nada além de seus próprios projetos.

Em resumo, um pacote é uma unidade compartilhável de código, mas não implica qualquer meio específico de compartilhamento.

Além do NPM existe também o gerenciador de pacotes yarn, porém vamos focar no uso do npm durante o curso.

Tanto o NPM quanto Yarn utilizam o arquivo package.json para definir as dependencias e versões para aquele projeto e também o package-lock.json para garantir que todos os devs utilizem a mesma versão dos pacotes.

- Como saber que é npm?
package.json

- Como abrir um projeto com o npm? 
~~~
npm init
~~~
Abrir projeto com dados genéricos:
~~~
npm init -yes
~~~

Além do NPM a gestão de dependências do Node.js fornece mais um comando para nos facilitar a criar projetos baseados em alguns protótipos entre outras funções, o NPX.

O NPX ele irá usar o pacote sem precisar baixar em sua máquina, sendo assim você você irá instalar um pacote no seu projeto ou até mesmo usar esse pacote, sem baixar os arquivos em sua máquina.

### Para que o npx é útil?
* Já instalou algum pacote global e precisou usá-lo pouquíssimas vezes?
* Já teve problemas de incompatibilidade com pacotes globais por diferenças de versões em múltiplos projetos?
* Já sentiu que sua máquina está poluída por diversos pacotes globais?
* Quando você instala react-native em sua máquina e começa um projeto usando ele ao invés de NPX, você está usando a versão do react-native do pacote instalado em seu node_modules, já quando usa npx você usa um pacote na nuvem do node, então isso te dá liberdade para usar até
(a versão do npx sempre será a última pois pegamos da núvem, diferente do npm que baixamos na máquina.)


### Qual a diferença de uma lib e de um framework?
Os dois baixam pelo npm, mas o resultado do que se espera deles é diferente, frameworks são ferramentas onde através delas podemos fazer o código, seguindo padrões. Biblioteca é um código pronto pra resolver um problema isolado no código.

#### Framework Express.js
**O framework Express.js é o principal framework Node.js para criação de APIs.** Simples e fácil de configurar, ele dá uma vasta possibilidade de execuções e operações para manipular as entradas e saídas, o que facilita muito em termos de produtividade para criações de APIs elegantes e performáticas.

- **Frameworks de clouds:**
É óbvio que não poderiam faltar nos dias de hoje ferramentas para cloud. Dois dos principais provedores atualmente são a Azure da Microsoft e a AWS da Amazon, que disponibilizam diversos serviços a fim de facilitar a operação de nossas aplicações como buckets, gateways de API, bancos de dados, servidores de e-mail, entre outros.

API: Application Program Interface(um nome bonito que se dá pra uma das arquiteturas de back-end): uma interface que definimos o contrato que precisamos "assiná-lo" para assim respeitar as regras pra passar a usar o serviço.

#### Typescript
O Typescript veio da vontade de corrigir as limitações da tipagem fraca do JS, o Typescript mostra mais facilmente o erro, onde estamos errando em nosso código.

O objetivo era elevar o nível de código do JS, que era usado apenas do lado cliente e em códigos pequenos.

Hoje, o cenário é outro, pois a possibilidade de aplicar uma arquitetura mais sólida e melhores práticas de programação mudaram essa realidade.

O Javascript suporta o paradigma de Programação Orientada a Objetos graças ao Typescript, podendo usar variáveis com tipos definidos, criar classes.

O Typescript é uma linguagem de código aberto desenvolvida pela Microsoft que foi construída em cima do Javascript, que é muito difundido atualmente. Então esse "superset" foi criado para adicionar recursos de tipagem estáticas à linguagem original.

Em outras palavras, temos todas as funcionalidades do JS no TS acrescidas de várias outras funcionalidades que caracterizam o TS.

Embora TS seja um superset do JS, na hora de compilar o código, todo TS é convertido/transpilado para JS.

A pessoa desenvolvedora que estiver escrevendo códigos em TS lidará com uma sintaxe simplificada, mais clara e suportado por vários TaskRunners ou IDES, mas o seu código voltará a ser JS após transpilado.

Isso se dá pelo browser não entender a sintaxe de outra linguagem de programação que não seja JS.
(Navegador n entende TS, apenas JS puro)

Bom, já que TS nasceu de JS e veio pra suprir algumas limitações, algumas das principais diferenças básicas entre os dois:

| Características de TS | Características JS |
| ----------------------| ------------------ |
| Tipagem estática | Tipagem dinâmica |
| Orientação a objetos | Programação estruturada |
| Genéricos | Funções |
| Namespaces | Prototypes |
| Decorators | Funções construtoras |

A principal característica do TS é sua tipagem forte. Mas também há outro aspecto, a Orientação a Objetos.

O JS, na maior parte do seu projeto de linguagem, não é tipado e a referência de tipo só vai até certo ponto. Daí uma necessidade maior de utilizar o TS caso queira suprir essas deficiências.

Documentação Oficial do TS:
> https://www.typescriptlang.org/

[user.ts](Código exemplo Typescript)

#### Next.js
Assim como a Microsoft viu que poderia melhorar o desempenho das aplicações JS, as arquiteturas atuais de front-end(páginas estáticas, páginas dinâmicas e SPAs(Angular, Vue e React)) tem suas vantagens e desvantagens e nenhuma delas é perfeita.

A Vercel empresa referência de Devops e Cloud para entrega desenvolveu o Next.js, um framework baseado na sintaxe do React para entregar um fullstack com as melhores tecnologias de mercado.

Algumas funcionalidades do Next.js: renderização estática e pelo lado do servidor. Possui suporte ao TS e um serviço de tratamento de rotas muito interessante, que vamos detalhar mais durante os exercícios.

Muitas funcionalidades são mais perceptíveis com a nossa aplicação em produção, pois o Next possui dois em seu objetivo: tornar nossa aplicação React mais performática e a questão da indexação do conteúdo da página pelos motores de busca.

Deficiência em CEO: Algoritmos pra trazer pessoas a acessar, o CEO otimiza os mecanismos de busca do seu site.(O Next.js ajuda o React com essa deficiência do CEO)

Outra importante função do Next.js é que ele pode tanto fazer o frontend em react como APIs backend totalmente integrados e com middlewares poderosos.

Então o Next consegue trabalhar tanto no backend quanto no frontend, sugerimos apenas mesmo que vá utilizar as duas camadas da sua aplicação em Next.js que sejam códigos fontes separados, pois backend e frontend traçam separadamente seus caminhos pensando a longo prazo.
(sites e APIs possuem funções completamente diferentes)

E por ultimo mas muito importante o grande ganho do Next.js no frontend se dá graças ao Static Site Generation que é basicamente, páginas estáticas, são páginas que não terão atualizações constantes.

Onde seria aplicável ou em qual cenário seria possível obter algum benefício desse método?
Imagina que você possui um blog ou um ecommerce que em determinada página não precisa de atualização constante.

O Next nos fornece o código novamente  para a modificação, é o processo que chamamos de "cooking". É a cereja do bolo do Next, ele otimiza páginas estáticas.

O comportamento dela seria algo como, fazer uma chamada à API e depois exibir aquele conteúdo para todos os usuários por um determinado tempo sem atualização.

Após a página ser carregada ou ter feito alguma requisição ao banco de dados, nenhuma outra chamada ao banco ou qualquer outra requisição à API será feita até o próximo "ciclo" de atualização, que é totalmente configurável.

Dessa forma, a página será servida de forma totalmente estática. Há um ganho relevante de performance utilizando essa forma de servir páginas.