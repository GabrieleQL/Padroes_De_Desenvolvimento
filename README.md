# Padrões de Desenvolvimento

## Introdução
Este repositório tem como objetivo a comparação de Padrões de Desenvolvimento como um trabalho avaliativo da cadeira de Engenharia de Software II. 
Os padrões a serem comparados são: Mediator, Observer e Template Method.

---
# Padrão Mediator

# Padrão Observer

## O que é o Observer?
O Observer é um padrão de projeto comportamental do catálogo GoF que define uma relação um-para-muitos entre objetos.

Quando um objeto principal (Subject) muda de estado, todos os objetos interessados (Observers) são automaticamente notificados.

É amplamente usado em sistemas de eventos, interfaces gráficas, notificações, assinaturas e arquiteturas reativas.

## O problema que ele resolve
Sem um padrão adequado, um objeto que sofre alterações precisaria:
- Conhecer todos os objetos interessados
- Chamá-los diretamente
- Manter uma lista fixa de dependentes
- Ser modificado sempre que um novo “observador” fosse criado

Isso gera:
- Alto acoplamento
- Dificuldade de manutenção
- Violação do Princípio Aberto-Fechado (OCP)
- Baixa flexibilidade

O Observer resolve isso desacoplando quem muda de quem quer saber da mudança.

## Estrutura
#### Participantes do padrão:

**Subject**
- Mantém uma lista de observers
- Possui métodos para registrar/remover observers
- Notifica todos quando seu estado muda

**Observer**
- Interface comum usada pelos objetos que desejam receber notificações

**ConcreteObservers**
- Implementam a interface
- Reagem quando recebem atualizações

## Pontos fortes
- Desacoplamento total entre Subject e Observers
- Segue o Princípio Aberto-Fechado (OCP)
- Fácil adicionar/remover observers
- Muito usado em sistemas reais (eventos, notificações, GUIs...)
- Reutilização de código

## Pontos fracos
- Debug pode ser mais difícil (cadeias de notificações)
- Muitos observers podem gerar problemas de performance
- Ordem de notificação nem sempre é garantida
- Pode gerar dependência circular se mal implementado

## Conclusão
O padrão Observer é essencial quando diversos objetos precisam reagir automaticamente à mudança de um estado. Ele garante flexibilidade, extensibilidade e baixo acoplamento, permitindo construir sistemas mais modulares e fáceis de manter.

Por esses motivos, é um dos padrões comportamentais mais utilizados no desenvolvimento de software moderno.

# Padrão Template Method
É um padrão de projeto comportamental que define o esqueleto de um algoritmo em uma classe base, aqui para nós estaremos utilizando a classe 'Animal' como exemplo.

Esse padrão permite que as subclasses implementem apenas as partes específicas que variam.

Em nosso exemplo sem o padrão, temos as classes Cavalo, Golfinho e Morcego, ambos possuem os métodos seAlimentar, seMovimentar e dormir, e isso acaba nos trazendo repeticões de código.

Ao utilizarmos o padrão Template Method, iremos também criar uma super classe chamada Animal, nela é onde estará a definição do fluxo e o padrão (o esqueleto), e isso nos trará vantagem, teremos menos repetição de código.

Para ficar mais fácil a compreensão desse padrão, apresentarei a seguinte explicação segundo os códigos da pasta do padrão Template Method.
.
.
.
Sabemos que o Cavalo dorme em pé, que o Morcego dorme de cabeça para baixo, e que o Golfinho dorme na água. Esse é o método 'dormir', e ambos animais (apresentados como exemplo no código) possuem esse método.

Agora, qual é a diferença?

A diferença é que a forma como eles dormem é diferente. Eles utilização da mesma ação (dormir), mas a forma como cada um realiza essa ação, é diferente, e esse é o sentido do padrão de desenvolvimento Template Method.

Ter métodos que te possibilitam resultados diferentes, segundo a necessidade específica de cada classe.

Mas, além dessas vantagens, a utilização desse padrão pode limitar a flexibilidade, devido as subclasses herdarem da superclasse. Mudanças na superclasse podem impactar todas as subclasses.

Não é aconselhável utilizar esse padrão em casos simples, pois pode tornar o código mais complicado do que precisa.

Mas você pode usar quando há um fluxo fixo que deve ser seguido por diferentes classes, mas com detalhes variáveis, como o método 'dormir'. Pode utilizá-lo quando você quer evitar duplicação e manter consistência entre várias implementações.

Mas algo que não devo deixar de falar é que, não se prenda a um único padrão, pois há outros que podem se encaixar melhor naquilo a qual você procura como solução.

Não tenha medo do desconhecido e do desconforto, apenas conheça/aprenda e pratique.

# Conclusão