<div align="center">
    <img src="https://i.imgur.com/mwbuYqE.png" alt="gifflar banner"/>
</div>

[![pipeline status](https://gitlab.com/lif-uesc/gifflar/badges/master/pipeline.svg)](https://gitlab.com/lif-uesc/gifflar/-/commits/master)

# Gifflar.js

Um framework para gerar, compilar e implementar contratos inteligentes em tempo de execução.

## Propriedades suportadas

| Propriedade             |      Suporta       | Exemplo                                               |
| ----------------------- | :----------------: | ----------------------------------------------------- |
| Declaração de Variáveis | :heavy_check_mark: | `string name;`<br/> `string name = "Bob";`            |
| Atribuição              | :heavy_check_mark: | `name = "Bob"`<br/> `name = _name`<br/> `val++`       |
| Estruturas              |        :x:         | `struct Person {string name;}`                        |
| Modificadores           |        :x:         | `modifier onlyOwner(){`<br/>`[...];`<br/>`_;`<br/>`}` |
| Criação de eventos      | :heavy_check_mark: | `event myEvent(string name);`                         |
| Chamada de eventos      | :heavy_check_mark: | `emit myEvent(_name);`                                |
| Criação de Funções      | :heavy_check_mark: | `function myFuntion() public {...}`                   |
| Criação de Construtor   | :heavy_check_mark: | `function constructor() public {...}`                 |
| Estrutura IF            | :heavy_check_mark: | `if(count == 1){...}`                                 |
| IFs aninhados           | :heavy_check_mark: | `if(){if(){...}}`                                     |
| Loops                   |        :x:         | `for(i=0;i<count;i++){...}`                           |
