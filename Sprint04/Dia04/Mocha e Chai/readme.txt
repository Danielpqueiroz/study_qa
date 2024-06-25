Abrir terminal na pasta desejada e digitar os dois comandos.

npm init -y
code .

Adicionar no package.json depois do main

"type": "module",

e alterar essa parte para

"scripts": {
    "test": "mocha"
  },

No terminal do vscode
npm i -D mocha chai

Importante importar as bibliotecas no sample.spec.js:
import assert from 'assert'
import chai from 'chai'