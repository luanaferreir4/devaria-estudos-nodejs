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

// 00:36:00