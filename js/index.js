document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
console.log("Oi isso é um console log");
function minhafuncao(){
    document.write(5+5);
}
/*
Vamos entedre as variaveis
Variáveis são recipientes onde podemos armazenar informações que 
podem "variar", ou seja , podem ter qualquer tipo de valor
No Javascript temos 3 palavras chaves para declarar qualquer tipo de variáveis:
-> var = Podem ser redeclaradas ou seja sempre vai valer a ultima declaração.
-> let = Obedece a o bloco de trabalho,usado para não ter problema de repetição. 
-> const = Constante não muda. Variável com valor especifico
*/
/* var pote = "Bombom";
alert(pote);

/* Buscar resultados no inspecionar  dentro a opção console 
var a =1;
var b = 5;
var c = a + b;
console.log(c);

//Declaração de variáveis//
var a,b,c;

var nome, sobrenome, nomeCompleto, idade, soma;

//Atribuição dos valores//
a = 1;
b = 4;
c = a + b;
console.log(c);

nome="Daniel";
sobrenome = "Alves da Rocha";
idade = 45;
nomeCompleto = nome +" "+ sobrenome;

soma= idade;
pessoa = nome + " " + sobrenome + " " + soma;

document.getElementById("texto").innerHTML = pessoa;

var PESSOA = "Daniel";
var pessoa = "Rocha";
console.log(PESSOA); /* ele vai buscar por pessoa ou PESSOA individualmente ele entende cada declaração como unica */ 

const x= 10;

{
    const x= 5;
}

document.getElementById("texto").innerHTML = x;