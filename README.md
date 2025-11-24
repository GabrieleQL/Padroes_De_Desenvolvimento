# Padrões de Desenvolvimento

## Introdução
Este repositório tem como objetivo a comparação de Padrões de Desenvolvimento como um trabalho avaliativo da cadeira de Engenharia de Software II. 
Os padrões a serem comparados são: Mediator, Observer e Template Method.

---

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