# Padrões de Desenvolvimento

## Introdução
Este repositório tem como objetivo a comparação de Padrões de Desenvolvimento como um trabalho avaliativo da cadeira de Engenharia de Software II. 
Os padrões a serem comparados são: Mediator, Observer e Template Method.

Padrão de desenvolvimento Mediator:

O padrão de projeto Mediator é um padrão comportamental cujo propósito é desacoplar objetos fortemente interdependentes por meio da introdução de um componente intermediário responsável por gerenciar e orquestrar a comunicação entre eles. Em vez de os componentes se comunicarem diretamente, todas as interações passam a ser conduzidas pelo mediador, reduzindo drasticamente o grau de dependência estrutural do sistema.

Em arquiteturas nas quais múltiplos componentes interagem de forma intensa, a comunicação direta tende a gerar um elevado acoplamento e uma malha de dependências complexas, dificultando sobremaneira a manutenção, a testabilidade e a evolução do software. Esse cenário viola princípios fundamentais da engenharia de software, como o princípio da responsabilidade única (SRP) e o princípio do baixo acoplamento e alta coesão.

Um exemplo representativo é o controle de aterrissagem de aeronaves. Sem o padrão Mediator, cada avião precisaria manter conhecimento direto sobre o estado dos demais, resultando em uma rede de dependências bidirecionais. Isso compromete a escalabilidade, pois a introdução de um novo avião exigiria modificações em todos os componentes existentes, caracterizando uma arquitetura frágil e pouco extensível.

Ao introduzir um mediador, representado pela torre de controle, toda a lógica de coordenação passa a ser centralizada. Os aviões não precisam mais conhecer uns aos outros, comunicando-se exclusivamente com o mediador, que gerencia as permissões de pouso, garantindo consistência nas regras de negócio e previsibilidade no fluxo de execução.

Do ponto de vista arquitetural, essa abordagem promove:

- Redução do acoplamento entre módulos;

- Maior coesão funcional dos componentes;

- Separação clara de responsabilidades;

- Aderência ao princípio Open/Closed, permitindo a adição de novos componentes sem alterar os existentes.

- Impactos na estrutura do software

O padrão Mediator contribui diretamente para a aplicação do princípio Open/Closed ao permitir que novos componentes sejam adicionados ao sistema sem a necessidade de modificar as classes já existentes. Ao centralizar a comunicação em um mediador baseado em interfaces, o sistema torna-se extensível por meio de novas implementações, preservando o código previamente validado.

Na prática, a inclusão de um novo objeto (ex: um novo tipo de aeronave) ocorre apenas por meio da criação de uma nova classe que implementa a interface comum, sem qualquer alteração nas classes já existentes, demonstrando clara aderência ao princípio de estar aberto para extensão e fechado para modificação.

Sem o Mediator, a comunicação distribuída entre componentes gera:

- Forte interdependência entre classes;

- Dificuldade na manutenção evolutiva;

- Propagação de alterações em múltiplos pontos do sistema;

- Crescimento exponencial da complexidade;

- Fragilidade estrutural.

Com o Mediator, o sistema passa a apresentar uma topologia de comunicação mais controlada, onde cada componente depende apenas de uma interface comum (o mediador), promovendo maior modularidade e previsibilidade comportamental.

Dependências circulares e suas implicações

As dependências circulares surgem quando dois ou mais componentes realizam referências mútuas, formando ciclos como A → B → C → A. Esse problema impacta diretamente aspectos críticos da engenharia de software, tais como:

- Dificuldade de isolamento em testes unitários;

- Quebra de modularidade;

- Problemas de inicialização em sistemas orientados a módulos;

- Maior risco de falhas em tempo de execução;

- Comprometimento da reutilização de código.

O Mediator previne esse cenário ao eliminar a comunicação direta entre os componentes, garantindo que todas as interações ocorram por meio de um ponto de controle único, quebrando assim os ciclos de dependência.

Benefícios arquiteturais

A adoção do padrão Mediator contribui para:

- Arquitetura mais desacoplada

- Facilidade de manutenção e evolução

- Melhor testabilidade

- Separação de preocupações (Separation of Concerns)

- Maior controle sobre as regras de interação

- Redução da complexidade estrutural

Riscos e limitações:

Apesar de suas vantagens, o Mediator deve ser utilizado com cautela. A centralização excessiva de responsabilidades pode levar à criação de um mediador demasiadamente complexo, caracterizando o antipadrão conhecido como God Object (violando pricípio da responsabilidade única 'SRP'). Isso pode comprometer a clareza e gerar um ponto único de falha.

Portanto, sua implementação deve ser acompanhada de boas práticas de design, como:

- Interface bem definida;

- Divisão adequada de responsabilidades;

- Uso equilibrado de abstrações.

Considerações finais

Sob a ótica da Engenharia de Software, o padrão Mediator representa uma solução eficaz para o controle da complexidade em sistemas distribuídos de comunicação intensiva. Seu uso contribui para a melhoria da qualidade estrutural do software, alinhando-se a princípios modernos de design e arquitetura, e promovendo sistemas mais robustos, escaláveis e sustentáveis.