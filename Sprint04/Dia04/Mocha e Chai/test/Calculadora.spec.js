import { strict as assert } from 'assert';
import { expect } from 'chai';
import Calculadora from '../src/Calculadora.js';


describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
    
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve subtrair 120 e 5 resultando em 115', () => {
        let resultado = Calculadora.sub(120, 5)
        expect(resultado).to.be.eq(115)
    })
})

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 4 e 5 resultando em 20', () => {
        let resultado = Calculadora.mult(4, 5)
        expect(resultado).to.be.eq(20)
    })
    it('Deve multiplicar 23 e 11 resultando em 253', () => {
        let resultado = Calculadora.mult(23, 11)
        expect(resultado).to.be.eq(253)
    })
})

describe('Testes de divisão', () => {
    it('Deve dividir 20 e 5 resultando em 4', () => {
        let resultado = Calculadora.div(20, 5)
        expect(resultado).to.be.eq(4)
    })
    it('Deve dividir 20 e 14 resultando em 1.4286', () => {
        let resultado = Calculadora.div(20, 14)
        expect(resultado).to.be.closeTo(1.4286, 0.0001)
    })
    it('Deve dividir 20 e 0 resultando em ERRO', () => {
        let resultado = Calculadora.div(20, 0)
        expect(resultado).to.be.eq('erro')
    })
})

describe('Testes de potenciação', () => {
    it('Deve fazer a potenciação 3 elevado a 2 resultando em 9', () => {
        let resultado = Calculadora.pot(3, 2)
        expect(resultado).to.be.eq(9)
    })
    it('Deve fazer a potenciação 20 elevado a 2 resultando em 400', () => {
        let resultado = Calculadora.pot(20, 2)
        expect(resultado).to.be.eq(400)
    })
})

describe('Testes de raiz quadrada', () => {
    it('Deve fazer a raiz quadrada de 9 resultando em 3', () => {
        let resultado = Calculadora.raiz(9)
        expect(resultado).to.be.eq(3)
    })
    it('Deve fazer a raiz quadrada de -9 resultando em erro', () => {
        let resultado = Calculadora.raiz(-9)
        expect(resultado).to.be.eq('erro')
    })
    
})

describe('Testes de rverificação de cpf', () => {
    it('Deve retornar que o CPF é válido', () => {
        const cpfValido = '123.456.789-09'
        const resultado = Calculadora.CPF(cpfValido);
        expect(resultado).to.be.true
    })
    it('Deve retornar que o CPF é inválido', () => {
        const cpfInvalido = '123.456.789-00'
        const resultado = Calculadora.CPF(cpfInvalido)
        expect(resultado).to.be.false
    })
    it('Deve retornar false para um CPF com menos de 11 dígitos', () => {
        const cpfCurto = '123.456.789-0';
        const resultado = Calculadora.CPF(cpfCurto);
        expect(resultado).to.be.false;
    })
    it('Deve retornar false para um CPF com mais de 11 dígitos', () => {
        const cpfLongo = '123.456.789-001';
        const resultado = Calculadora.CPF(cpfLongo);
        expect(resultado).to.be.false;
    });

    it('Deve retornar falso para um CPF com caracteres inválidos', () => {
        const cpfInvalido = '123.abc.789-09';
        const resultado = Calculadora.CPF(cpfInvalido);
        expect(resultado).to.be.false;
    })
})

describe('Testes da Cifra de César', () => {
    it('Deve passar a mensagem COMPASSUOL e a chave 3 e deve ser retornado a mensagem criptografada FRPSDVVXRO', () => {
        let resultado = Calculadora.codficacao('COMPASSUOL', 3)
        expect(resultado).to.be.eq('FRPSDVVXRO')
    })
    it.only('Deve passar a mensagem FRPSDVVXRO e a chave 3 e deve ser retornado a mensagem decriptografada COMPASSUOL ', () => {
        let resultado = Calculadora.decodficacao('FRPSDVVXRO', 3)
        expect(resultado).to.be.eq('COMPASSUOL')
    })
    
})