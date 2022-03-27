<div align="center">
    <img src="https://i.imgur.com/mwbuYqE.png" alt="gifflar banner"/>
</div>

[![pipeline status](https://gitlab.com/lif-uesc/gifflar/badges/master/pipeline.svg)](https://gitlab.com/lif-uesc/gifflar/-/commits/master)

# Gifflar.js

Um framework para gerar, compilar e implementar contratos inteligentes em tempo de execução.

## Propriedades suportadas

| Propriedade             |  Suporta   | Exemplo                                               |
| ----------------------- | :--------: | ----------------------------------------------------- |
| Declaração de Variáveis | <b>sim</b> | `string name;`<br/> `string name = "Bob";`            |
| Atribuição              | <b>sim</b> | `name = "Bob"`<br/> `name = _name`<br/> `val++`       |
| Estruturas              | <b>Não</b> | `struct Person {string name;}`                        |
| Modificadores           | <b>Não</b> | `modifier onlyOwner(){`<br/>`[...];`<br/>`_;`<br/>`}` |
| Criação de eventos      | <b>sim</b> | `event myEvent(string name);`                         |
| Chamada de eventos      | <b>sim</b> | `emit myEvent(_name);`                                |
| Criação de Funções      | <b>sim</b> | `function myFuntion() public {...}`                   |
| Criação de Construtor   | <b>sim</b> | `function constructor() public {...}`                 |
| Estrutura IF            | <b>sim</b> | `if(count == 1){...}`                                 |
| IFs aninhados           | <b>sim</b> | `if(){if(){...}}`                                     |
| Loops                   | <b>Não</b> | `for(i=0;i<count;i++){...}`                           |

## Documentation

The JSDocs is being built [here](https://lif-uesc.gitlab.io/gifflar/docs/gifflar/1.0.0/index.html)
