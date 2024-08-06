import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

export const userData = () => ({
  nome: faker.name.firstName(),
  email: faker.internet.email(),
  password: '1233434',
  administrador: 'true'

})