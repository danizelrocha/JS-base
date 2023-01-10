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
-> const = Constante não muda. 
*/

/* inicio

var pote = "Bombom";
 alert(pote);

/* Buscar resultados no inspecionar  dentro a opção console */
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


 

/* Entendendo operadores:
-> Os operadores de Javascript são usados para atribuir valores,
comparar valores, executar operações aritiméticas e muito mais.
São os sinais que usamos : + * / = ++ -- += -= && || etc...
São separados por seis categorias :

1)Operadores Aritiméticos (matemáticos)
2)Operadores de Atribuição.
3)Operadores de Sequência.
4)Operadores de Comparação
5)Operador Condicional (Ternário)
6)Operador Lógico.

*/

//Primeiro exemplo matemático usandos = - * / 

/*  var valor1, valor2, total;
valor1 = 5;
valor2 = 2;


total = valor1 + valor2;
alert(total); 

// O operador ++ acrescenta o -- decrementa

//Decremento --
 var valor1, valor2, total;
valor1 = 5;
valor2 = 2;


total = -- valor1 ;
alert(total);
alert('O valor1 ficou: ' + valor1);


//Acremento ++
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;


total = ++ valor1 ;
alert(total);
alert('O valor1 ficou: ' + valor1);  */

 // Operadores de Atribuição

/* var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

//Outro exemplo
valor1 += valor2;  */

// Operador Sequência -> concatenar numeros com string

var valor1, valor2, total;
valor1 = "Daniel ";
valor2 = "Rocha";

total = valor1 + valor2;
alert(total);