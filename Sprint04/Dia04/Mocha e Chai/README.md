## Projeto calculadora usando TDD 
- Este projeto consiste em criar uma calculadora capaz de fazer operações básicas como soma, subtração, multiplicação, divisão, potenciação e radiciação. E foi implementado uma funcionalidade para criptografar uma palavra desejada, outra para descriptografar e foi implementado também uma funcionalidade para verificar se um cpf foi digitado corretamente.
O método implementado sobre a criptografia consiste na Cifra de César que foi criada por  Júlio César durante o Império Romano, que serve para deslocar as posições das letras da palavra ou frase para a direita no alfabeto (Ex: OI cifrado com deslocamento de 3 ficaria RL).

### Abrir terminal na pasta desejada e digitar os dois comandos:
````bash
- npm init -y
- code .
````
### Adicionar no package.json depois do main:

- "type": "module",

#### E alterar essa parte para:

- "scripts": {
    "test": "mocha"
  },

### No terminal do vscode`
````bash
 - npm i -D mocha chai
````
#### Importante importar as bibliotecas no sample.spec.js:
- import { strict as assert } from 'assert';
- import { expect } from 'chai';

### Sites:
- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/guide/styles/


