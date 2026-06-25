// Variáveis

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
"%" resto da divisão (inteira)
"**" potência
*/
var a = 3 + 5
var b = a / 2
var c = b * a / 5
var d = 1 + a ** 2
var e = 25000 - c * d ** 2
console.log((3 - 2)*(4 + 5) / 2)

/*
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
*/

/*
Relacionais:

">" maior
"<" menor
">=" maior ou igual
"<=" menor ou igual
"==" igual
"!=" diferente
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

// Laços De Repetição
for(i=0; i<10; i++){
    a = 9*9/9
}

console.log("O resultado é: " + a);

for(i=0; i<10; i++){
    console.log("Meu nome é: " + meuNome)
}

// Condicionais
if(confirm("Você está cadastrado?")){
    
} else{
    let nome = prompt("Qual seu nome?");

    alert("Seja bem vindo " + nome + "!")
}

if(confirm("Você está cadastrado?")){
    let nome = prompt("Qual seu nome?")

    alert("Seja bem vindo " + nome + "!")
}else{

}