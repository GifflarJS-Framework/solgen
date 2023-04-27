(Powered by [Gifflar](https://github.com/GifflarJS-Framework))

[![Node.js CI](https://github.com/GifflarJS-Framework/solgen/actions/workflows/tests.yml/badge.svg)](https://github.com/GifflarJS-Framework/solgen/actions/workflows/tests.yml)

# Solgen

A Gifflar library that allows to generate, compile and deploy smart contracts in Solidity on the fly.

`Note: THIS LIBRARY DOES NOT INCLUDE YET SMART CONTRACTS VULNERABILITIES VERIFICATION. THIS FEATURE IS STILL BEING DEVELOPED. SO, IF YOU ARE USING THIS VERSION IN PRODUCTION, USE IT AT YOUR OWN RISK.`

## Supported properties

| Property             |      Support       | Example                                               |
| -------------------- | :----------------: | ----------------------------------------------------- |
| Variable Declaration | :heavy_check_mark: | `string name;`<br/> `string name = "Bob";`            |
| Assignment           | :heavy_check_mark: | `name = "Bob"`<br/> `name = _name`<br/> `val++`       |
| Structs              | :heavy_check_mark: | `struct Person {string name;}`                        |
| Modifiers            | :heavy_check_mark: | `modifier onlyOwner(){`<br/>`[...];`<br/>`_;`<br/>`}` |
| Events declaration   | :heavy_check_mark: | `event myEvent(string name);`                         |
| Events emission      | :heavy_check_mark: | `emit myEvent(_name);`                                |
| Functions creation   | :heavy_check_mark: | `function myFuntion() public {...}`                   |
| Constructor creation | :heavy_check_mark: | `function constructor() public {...}`                 |
| IF/Else structures   | :heavy_check_mark: | `if(count == 1){...}else{...}`                        |
| Nested IFs           | :heavy_check_mark: | `if(){if(){...}}`                                     |
| For Loops            | :heavy_check_mark: | `for(i=0;i<count;i++){...}`                           |
| While Loops          | :heavy_check_mark: | `while(a != b){...}`                                  |
| Do/While Loops       | :heavy_check_mark: | `do{...}while(a != b);`                               |
| Inheritance          | :heavy_check_mark: | `contract Dog is Animal{...}`                         |
| Inline Assembly      |        :x:         | `assembly {...}`                                      |

## Documentation

Have a look at the [Solgen docs](https://github.com/GifflarJS-Framework/solgen/wiki).
