
export default class Calculadora {
    static soma(a, b) {
        return a + b
    }

    static sub(a, b) {
        return a - b
    }

    static mult(a, b) {
        return a * b
    }

    static div(a, b) {
        if (b === 0) {
            return 'erro';
        }
        return a / b;
    }

    static pot(a, b) {
        return Math.pow(a, b);
    }
    static raiz(a) {
        if (a < 0) {
            return 'erro';
        }
        return Math.sqrt(a);
    }

    static codficacao(a, b) {
        function cifrarLetra(letra, deslocamento) {
            const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            
            for (let j = 0; j <= alfabeto.length; j++){
                if (letra == alfabeto[j] ) {
                    return alfabeto[j + deslocamento]
                }
            }
            
        }
        let palavraCodificada = ""
        for (let i = 0; i < a.length; i++) {
            palavraCodificada += cifrarLetra(a[i], b)
        }
        return palavraCodificada
    }
    static decodficacao(a, b) {
        function cifrarLetra(letra, deslocamento) {
            const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            
            for (let j = 0; j <= alfabeto.length; j++){
                if (letra == alfabeto[j] ) {
                    return alfabeto[j - deslocamento]
                }
            }
            
        }
        let palavraCodificada = ""
        for (let i = 0; i < a.length; i++) {
            palavraCodificada += cifrarLetra(a[i], b)
        }
        return palavraCodificada
    }

    

    static CPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, '');// Remove os caracteres que não são numeros.
        if (cpf.length !== 11) { // Verifica se tem 11 números
            return false;
        }
        // Cálculo do primeiro dígito verificador 
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = soma % 11;
        let dv1 = (resto < 2) ? 0 : 11 - resto;

        // Cálculo do segundo dígito verificador 
        soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        soma += dv1 * 2;
        resto = soma % 11;
        let dv2 = (resto < 2) ? 0 : 11 - resto;

        // Verificar se os dois últimos dígitos calculados correspondem aos dígitos do CPF
        return (dv1 === parseInt(cpf.charAt(9)) && dv2 === parseInt(cpf.charAt(10)));
       
    }

}