import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

export const fakerUserData = () => ({
 
  nome: faker.name.firstName() + ' ' + faker.name.lastName(), // Gera nome completo
  email: new Date().getTime() + faker.internet.email(),
  password: faker.internet.password(), // Gera senha aleatória
  administrador: 'true',
  //administrador: faker.random.boolean().toString(), // Gera booleano aleatório convertido para string
});