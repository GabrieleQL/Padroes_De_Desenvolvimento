# Padrões de Desenvolvimento

## Introdução
Este repositório tem como objetivo a comparação de Padrões de Desenvolvimento como um trabalho avaliativo da cadeira de Engenharia de Software II. 
Os padrões a serem comparados são: Mediator, Observer e Template Method.

Padrão de desenvolvimento Mediator:

Peguei um exemplo sobre quando é possível para uma aeronave aterrissar.
Como o mediador tem como o objetivo de reduzir o acoplamento, centralizando a comunicação entre eles em um objeto intermediário. Sem o mediador que é a torre informacional, os objetos (aviões) estão se comunicando entre si (avião depende de saber diretamente quantos aviões estão por pousar), dificultando a organização. Com o mediador, todas as possíveis aterrissagens vão ficar informadas pela torre para os aviões e com isso as informações vão estar organizadas. 
Outro exemplo seria em uma rede de comunicação. Para a comunicação não ficar espalhada pelo código, o mediador organiza e mantém o funcionamento.
No caso de não existir um mediador, ao adicionar um avião D, precisaria atualizar A, B, C para que passgem a conhecer o avião D.
Com o mediador, você registra apenas no componente, sem precisar alterar o resto.

Problemas que o mediador resolve: 

Alto acoplamento entre classes;
Código difícil de manter e testar;
Regras de comunicação espalhadas;
Dificuldade de adicionar novos componentes;
Dependências circulares;
O mediador resolve toda a lógica de coordenação em um único ponto.

O que seriam dependências circulares:

Quando componentes se conhecem diretamente, é fácil criar ciclos (A -> B -> C -> A), o que causa import loops, dificulta testes e aumenta muito a complexidade. O mediador elimina essas dependências diretas, evitando ciclos e mantendo a arquitetura limpa.