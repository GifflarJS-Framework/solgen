<div align="center">
    <img src="https://i.imgur.com/mwbuYqE.png" alt="gifflar banner"/>
</div>

[![Node.js CI](https://github.com/GifflarJS-Framework/gifflar-library/actions/workflows/tests.yml/badge.svg)](https://github.com/GifflarJS-Framework/gifflar-library/actions/workflows/tests.yml)

# Gifflar.js

Um framework para gerar, compilar e implementar contratos inteligentes em tempo de execução.

## Status de projeto

**Em desenvolvimento**

## Propriedades suportadas

| Propriedade             |      Suporta       | Exemplo                                               |
| ----------------------- | :----------------: | ----------------------------------------------------- |
| Declaração de Variáveis | :heavy_check_mark: | `string name;`<br/> `string name = "Bob";`            |
| Atribuição              | :heavy_check_mark: | `name = "Bob"`<br/> `name = _name`<br/> `val++`       |
| Estruturas              | :heavy_check_mark: | `struct Person {string name;}`                        |
| Modificadores           | :heavy_check_mark: | `modifier onlyOwner(){`<br/>`[...];`<br/>`_;`<br/>`}` |
| Criação de eventos      | :heavy_check_mark: | `event myEvent(string name);`                         |
| Chamada de eventos      | :heavy_check_mark: | `emit myEvent(_name);`                                |
| Criação de Funções      | :heavy_check_mark: | `function myFuntion() public {...}`                   |
| Criação de Construtor   | :heavy_check_mark: | `function constructor() public {...}`                 |
| Estrutura IF/Else       | :heavy_check_mark: | `if(count == 1){...}else{...}`                        |
| IFs aninhados           | :heavy_check_mark: | `if(){if(){...}}`                                     |
| Loops For               | :heavy_check_mark: | `for(i=0;i<count;i++){...}`                           |
| Loops While             | :heavy_check_mark: | `while(a != b){...}`                                  |
| Loops Do/While          | :heavy_check_mark: | `do{...}while(a != b);`                               |
| Herança                 | :heavy_check_mark: | `contract Dog is Animal{...}`                         |
