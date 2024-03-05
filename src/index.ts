
let exercicio: number = 0

//1. Crie uma classe Contador, que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer métodos que devem:
//a) Zerar;
//b) Incrementar;
//c) Retornar o valor do contador.

exercicio = 1

class ContadorJoel {
    private valor: number;

    constructor() {
        this.valor = Math.ceil(Math.random() * 10);
    }

    zerar(): void {
        this.valor = 0;
    }

    incrementar(n: number): void {
        this.valor += n;
        console.log(`N = ` + n)
    }

    retornar(): number {
        return this.valor;
    }
}

const contar = new ContadorJoel()
console.log(contar.retornar());

contar.incrementar(Math.ceil(Math.random() * 10))
console.log(contar.retornar());

contar.incrementar(Math.ceil(Math.random() * 10))
console.log(contar.retornar());

contar.zerar()
console.log(contar.retornar());

console.log(`//////////////`);

// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

exercicio = 2

class bola {
    private cor: string;
    private circunferencia: number;
    private material: string;

    constructor(cor: string, circunferencia: number, material: string) {
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }

    trocarCor(novaCor: string): void {
        this.cor = novaCor
    }

    corAtual(): string {
        return this.cor
    }
}

const bolaLeo = new bola('laranja', 50, 'couro')
console.log(bolaLeo)
bolaLeo.trocarCor('vermelho')
console.log(bolaLeo)
console.log(bolaLeo.corAtual())
console.log(`//////////////`);

// 3. Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os demais atributos são obrigatórios. A conta não pode ficar com saldo negativo.

exercicio = 3

class contaCorrente {
    private nomeDoCliente: string;
    private saldo: number;
    readonly contaCorrente: number;

    constructor(nomeDoCliente: string) {
        this.contaCorrente = Math.ceil(Math.random() * 1000000000);
        this.nomeDoCliente = nomeDoCliente
        this.saldo = 0
    }

    alterarNome(novoNome: string): void {
        this.nomeDoCliente = novoNome
    }

    deposito(valor: number): void {
        this.saldo = this.saldo + valor
        return console.log(`Seu novo saldo é ${this.saldo}`)
    }

    saque(valor: number): void {

        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor
            return console.log(`Seu novo saldo é ${this.saldo}`)
        } else { return console.log(`Saldo insuficiente para o saque, saldo é ${this.saldo}`) }
    }
}

const minhaConta = new contaCorrente('Joel')
console.log(minhaConta)
minhaConta.deposito(545)
minhaConta.saque(550)
minhaConta.saque(540)
minhaConta.alterarNome('Luis')
console.log(minhaConta)

console.log(`//////////////`);

// 4. Crie uma classe para representar uma Calculadora. Esta classe deve conter um atributo que servirá para armazenar o histórico das operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar, dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

exercicio = 4

class Calculadora {
    private primeiroValor: number
    private segundoValor: number
    private operacao: string
    private resultado: number | undefined

    constructor(primeiroValor: number, segundoValor: number, operacao: string) {
        this.primeiroValor = primeiroValor
        this.segundoValor = segundoValor
        this.operacao = operacao
        this.resultado = undefined
    }

    static historico: Calculadora[] = [];

    calcular(): void {
        if (this.operacao === '+') {
            this.resultado = this.primeiroValor + this.segundoValor
        } else if (this.operacao === '-') {
            this.resultado = this.primeiroValor - this.segundoValor
        } else if (this.operacao === '*') {
            this.resultado = this.primeiroValor * this.segundoValor
        } else if (this.operacao === '/') {
            this.resultado = this.primeiroValor / this.segundoValor
        }

        Calculadora.historico.push(this);
    }

    getHistorico(): any {
        return Calculadora.historico
    }

}

const calculo0 = new Calculadora(3, 2, '+')
const calculo1 = new Calculadora(5, 4, '-')
const calculo2 = new Calculadora(7, 6, '*')
const calculo3 = new Calculadora(9, 6, '/')
calculo0.calcular();
console.log(`...`);
console.log(calculo0.getHistorico())
calculo1.calcular();
console.log(`...`);
console.log(calculo1.getHistorico())
calculo2.calcular();
console.log(`...`);
console.log(calculo2.getHistorico())
calculo3.calcular();
console.log(`...`);
console.log(calculo3.getHistorico())

// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a quantidade de combustível restante na bomba.
//OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. Não deve ser possível abastecer se não tiver gasolina suficiente na bomba.

exercicio = 5

class BombaCombustivel {
    private tipoCombustivel: string
    private valorLitro: number
    private quantidadeCombustivel: number

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel
        this.valorLitro = valorLitro
        this.quantidadeCombustivel = quantidadeCombustivel
    }

    public abastecerPorValor(valorDinheiro: number): number {
        const litros: number = valorDinheiro / this.valorLitro
        this.quantidadeCombustivel = this.quantidadeCombustivel - litros
        return litros
    }

    public abastecerPorLitro(quantosLitros: number): number {
        const dinheiro: number = quantosLitros * this.valorLitro
        this.quantidadeCombustivel = this.quantidadeCombustivel - quantosLitros
        return dinheiro
    }

    public alterarValor(novoValor: number): void {
        this.valorLitro = novoValor
    }

    public alterarCombustivel(novoCombustivel: string): string {
        this.tipoCombustivel = novoCombustivel
        return novoCombustivel
    }


    public alterarQuantidadeCombustivel(novaQuantidade: number): number {
        this.valorLitro = novaQuantidade
        return novaQuantidade
    }

    public getValor(): any {
        return this
    }
}

const novaBomba = new BombaCombustivel(`Gasolina`, 5, 100)
console.log('...')
console.log(novaBomba.getValor())
console.log('...')
console.log(novaBomba.abastecerPorValor(250), novaBomba.getValor())
console.log('...')
console.log(novaBomba.abastecerPorLitro(47), novaBomba.getValor())
console.log('...')
console.log(novaBomba.alterarCombustivel('Etanol'), novaBomba.getValor())
console.log('...')
console.log(novaBomba.alterarQuantidadeCombustivel(100), novaBomba.getValor())

// 6. Implemente uma classe chamada Carro com as seguintes propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
// b. O consumo é especificado no construtor.
// c. Forneça um método andar() que simula o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
// d. Forneça um método obterGasolina(), que retorna o nível atual de combustível e forneça um método adicionarGasolina(), para abastecer o tanque.

exercicio = 6

class Carro {
    private mediaPorLitro: number;
    private nivelDeCombustivel: number

    constructor(mediaPorLitro: number, nivelDeCombustivel: number) {
        this.mediaPorLitro = mediaPorLitro
        this.nivelDeCombustivel = nivelDeCombustivel
    }

    contador(): number {
        const kilometragemPossivel: number = this.nivelDeCombustivel * this.mediaPorLitro
        return kilometragemPossivel
    }

    andandor(andado: number): number {
        const litosConsumidos: number = andado / this.mediaPorLitro
        this.nivelDeCombustivel = this.nivelDeCombustivel -  litosConsumidos
        return this.nivelDeCombustivel
    }

    abastecer(litros: number): number {
        this.nivelDeCombustivel = this.nivelDeCombustivel + litros
        return this.nivelDeCombustivel
    }

    obterNivelDeCombustivel(): number {
        return this.nivelDeCombustivel
    }
}

const carroJoel = new Carro (10, 50)
console.log(carroJoel.contador())
console.log(carroJoel.obterNivelDeCombustivel())
console.log('...')
console.log(carroJoel.andandor(450))
console.log(carroJoel.obterNivelDeCombustivel())
console.log('...')
console.log(carroJoel.abastecer(25))
console.log(carroJoel.obterNivelDeCombustivel())