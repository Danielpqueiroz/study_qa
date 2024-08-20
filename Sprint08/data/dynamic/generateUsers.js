const { faker } = require('./lib/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const fs =  require('fs');

const quantidade = process.argv[2] || 1; 

const usuarios = [];

for(let i = 0; i < quantidade; i++) {
  const usuario = {
    nome: faker.internet.userName(),
    email: faker.internet.email({ provider: 'exemplo.qa.com.br' }),
    password: faker.internet.password(), 
    administrador: 'true',
  }
  usuarios.push(usuario)
}

const data = {
  users: usuarios
}

fs.writeFileSync( 'users.json', JSON.stringify(data, null, 2), error => {
  if(error) {
    console.error(error)
  }
})



// export const fakerUserData = () => ({
 
//   nome: faker.name.firstName() + ' ' + faker.name.lastName(), // Gera nome completo
//   email: new Date().getTime() + faker.internet.email(),
//   password: faker.internet.password(), // Gera senha aleatória
//   administrador: 'true',
//   //administrador: faker.random.boolean().toString(), // Gera booleano aleatório convertido para string
// });