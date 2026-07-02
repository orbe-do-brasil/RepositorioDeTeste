// Variáveis
// var, let ou const.

var a = 0;

var nome = "Mikael";
var idade = 20;
var nota = 7.5;

const numero = 1;

const meuNome = "Mikael";

//Textos
/*
OBS: "console.log" ou "document.write" ou "document.writeln"
OBS: Pode ser usado "+" ou ",".
*/

document.write("O resultado é: " + a);

console.log("O resultado é: " + a);

document.write(`O aluno ${nome}, de ${idade} anos, tirou a nota ${nota}.`)

console.log(`O aluno ${nome}, de ${idade} anos, tirou a nota ${nota}.`); // Uso de placeholder "`${}`". 

document.writeln(`Seu nome tem ${nome.length} letras. Com letras maiúsculas fica ${nome.toUpperCase()} e com letras minúsculas fica ${nome.toLowerCase()}.`) // Utilizando ".length", ".toUpperCase()" e "toLowerCase()".

// Operadores

/*
Aritméticos:

"+" adição ou contatenação
"-" subtração
"*" multiplicação
"/" divisão (real)
"%" resto da divisão (inteiro)
"**" potência

Atribuíção:

"=" recebe
"+=" equivalente à "n = n + número"
"-=" equivalente à "n = n - número"
"*=" equivalente à "n = n * número"
"/=" equivalente à "n = n / número"
"**=" equivalente à "n = n ** número"
"%=" equivalente à "n = n % número"
"++" incremento
"--" incremento

Relacionais:

">" maior
"<" menor
">=" maior ou igual
"<=" menor ou igual
"==" igual // Não testa o tipo
"===" igual (operador de identidade) // Testa o tipo
"!=" diferente // Não testa o tipo
"!==" diferente (operador de identidade) // Testa o tipo

Lógicos:

"!" negação
"&&" conjunção (e)
"||" disjunção (ou)

Ternário:

"?"
":"

*/

// Alertas
alert("Bem vindo ao meu site!");

alert("Seu número da sorte é: " + numero);

// Confirmações
/*
let confirmação = confirm("Você já está cadastrado?");
*/

// Prompts
/*
let nome = prompt("Qual é o seu nome?");

console.log("Olá " + nome + "!")
*/

var n1 = Number(prompt("Digite um número: ")); // Maneira correta de obter um valor numérico (number)!

var n2 = Number(prompt("Digite outro número: ")); // Maneira correta de obter um valor numérico (number)!

/*
var ni1 = parseInt(prompt("Digite um número inteiro: ")); // Maneira correta de obter um valor numérico inteiro (int)!

var ni2 = parseInt(prompt("Digite outro número inteiro: ")); // Maneira correta de obter um valor numérico inteiro (int)!

var nf1 = parseFloat(prompt("Digite um número flutuante: ")); // Maneira correta de obter um valor numérico flutuante (float)!

var nf2 = parseFloat(prompt("Digite um número flutuante: ")); // Maneira correta de obter um valor numérico flutuante (float)!

var n1 = prompt("Digite um número: ") // Vai obter o valor em String

var n2 = prompt("Digite outro número: ") // Vai obter o valor em String

var s1 = String(prompt("Digite um número: ")) // Transforma um valor numérico em texto (string)!

var s2 = Sring(prompt("Digite um número: ")) // Transforma um valor numérico em texto (string)!
*/

var soma = n1 + n2

alert("A soma dos valores é: " + soma)

/*
var soma1 = ni1 + ni2

alert("A soma dos valores é: " + soma1)

var soma2 = nf1 + nf2

alert("A soma dos valores é: " + soma2)
*/

// Estruturas De Repetição (Laços De Repetição)

// Exemplo 2
for(i=0; i<10; i++){
    a = 9*9/9
}

console.log("O resultado é: " + a);

// Exemplo 2
for(i=0; i<10; i++){
    console.log("Meu nome é: " + meuNome)
}

// Condicionais

// Exemplo 3
var velocidade = 60
console.log(`A velocidade do seu carro é ${velocidade}km/h.`)

if(velocidade > 60){ // Condição simples.
    console.log("Você ultrapassou a velocidade permitida. MULTADO!")
}

// Exemplo 2
var país = "Brasil"

console.log(`Vivendo em ${país}`)

if(país == "Brasil"){
    console.log("Você é brasileiro!")
} else{ // Condição composta.
    console.log("Você é estrangeiro!")
}

// Exemplo 3
console.log('Dirija sempre usando cinto de segurança!')

if(confirm("Você está cadastrado?")){
    
} else{
    let nome = prompt("Qual seu nome?");

    alert("Seja bem vindo " + nome + "!")
}

// Exemplo 4
if(confirm("Você está cadastrado?")){
    let nome = prompt("Qual seu nome?")

    alert("Seja bem vindo " + nome + "!")
}else{

}

// Exemplo 5
var idade = 12

console.log(`Você tem ${idade} anos.`)

if(idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade > 65){
    console.log('Voto opcional')
} else{
    console.log('Voto obrigatório')
}

// Exemplo 6
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12){
    console.log("Bom dia!")
} else if(hora <= 18){
    console.log("Boa tarde!")
} else{
    console.log("Boa noite!")
}

// Exemplo 7
var agora = new Date()
var diaDaSemana = agora.getDay()

switch(diaDaSemana){
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda-feira')
        break
    case 2: 
        console.log('Terça-feira')
        break
    case 3: 
        console.log('Quarta-feira')
        break
    case 4: 
        console.log('Quinta-feira')
        break
    case 5: 
        console.log('Sexta-feira')
        break
    case 6: 
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}