### Abrir terminal na pasta desejada e digitar os dois comandos:

- npm init -y
- code .

### Adicionar no package.json depois do main:

- "type": "module",

#### E alterar essa parte para:

- "scripts": {
    "test": "mocha"
  },

### No terminal do vscode
 - npm i -D mocha chai

#### Importante importar as bibliotecas no sample.spec.js:
- import { strict as assert } from 'assert';
- import { expect } from 'chai';

### Sites:
- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/guide/styles/


