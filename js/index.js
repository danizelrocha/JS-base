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
/* var a =1;
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
console.log(PESSOA); */ /* ele vai buscar por pessoa ou PESSOA individualmente ele entende cada declaração como unica */ 


 

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




// Operador Sequência -> concatenar sinal de + se transforma para concatenar string com string, uma sequência.

/* var valor1, valor2, total;
valor1 = "Daniel ";
valor2 = "Rocha";

total = valor1 + valor2;
alert(total); */




// Opredores de comparação -> true  false

// Um sinal de = significa . Dois sinais de == significa

//exempo de False
/* var valor1, valor2, total;
valor1 = 8;
valor2 = 10;

total = (valor1 == valor2);
alert(total); */

// exemplo de True
/* var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 == valor2);
alert(total); */

// Com três sinais de ===  você verifica se o tipo são igual ex numero com numero ou string com string

//exempo de False
/* var valor1, valor2, total;
valor1 = 8;
valor2 = "8";

total = (valor1 === valor2);
alert(total); */

// exemplo de True

/* var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 === valor2);
alert(total); */

//Quando usamoa != quer dizer que o valor1 não é igual ao valor2

// exemplo de True

/* var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 != valor2);
alert(total);
 */
// exemplo de False

/* var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 != valor2);
alert(total); */


//Quando usamoa !== quer dizer que o valor1 não é igual ao TIPO valor2

// exemplo de False

/*  var valor1, valor2, total;
valor1 = "8";
valor2 = "8";

total = (valor1 !== "8");
alert(total); */
 
// exemplo de True

/* var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 !== "8");
alert(total); */

//Exemplos de > maior ou < menor

//True
/* var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 > 4); //MAIOR
alert(total); */

//False
/* var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 < 4); //Menor
alert(total); */
 

// Exemplo de maior ou igual e menor ou igual

/* var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 <= 7); //Menor ou igual False
alert(total);  */

/* var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 >= 8); //Maior ou igual True
alert(total); */




/* // Operador Ternario ou condicional

var idade , eleitor;
idade = 25;
eleitor = (idade<=16) ? "Não, Eleitor." : "Sim, Eleitor.";

alert('A resposta é : ' + eleitor + ' A idade dele é de : '+ idade +' anos.'); */



//Operadores Logicos

/* var idade , eleitor, resultado;
idade = 65;
eleitor = (idade<=16) ? "Não, Eleitor." : "Sim, Eleitor.";

resultado = (idade > 60 && idade < 70); //True //False

alert('A resposta é : ' + resultado + ' A idade dele é de : '+ idade +' anos.'); */


// Outro exemplo

/* var idade , eleitor, resultado;
idade = 71;
eleitor = (idade <= 16) ? "Não, Eleitor." : "Sim, Eleitor.";

resultado = (idade === 60 || idade === 72); //True //False o caractere || significa ou

alert('A resposta é : ' + resultado + ' A idade dele é de : '+ idade +' anos.'); */

//Negação

/* var idade , eleitor, resultado;
idade = 71;
eleitor = (idade <= 16) ? "Não, Eleitor." : "Sim, Eleitor.";

resultado = !(idade === 65); //True //False o caractere ! significa negação

alert('A resposta é : ' + resultado + ' A idade dele é de : '+ idade +' anos.'); */




//FUNÇÕES
/* Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica

é como uma pequena "fabricá" onde onde você faz uma entrada e ele te dá uma saida

Pode ser encarado como "mini programas" projetados para fazer uma tarefa que vai
contribuir para todo o código

Uma função JavaScript é excutada quando "algo" a inca (chama-a).
*/
// Primeiro exemplo
/* function soma(valor1, valor2) {
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,23); */


//OU
/* function soma(valor1, valor2) {
    return valor1 + valor2;
}

var total = soma(10,23);

alert(total); */

// Exemplo monetário
/* function soma(valor1, valor2) {
    return valor1 + valor2;
}

function realParaDolar ( real, cotacaoDolar){
    return real * cotacaoDolar;
}

var total = realParaDolar(10, 5.08);

alert(total); */

// Exemplo 2 monetario

/* function soma(valor1, valor2) {
    return valor1 + valor2;
}

function realParaDolar ( real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

alert("O valor em real é R$: " +valorReal+" o valor em dólar U$ é: "+total); */


//Alerta by button

/* function alertaHello() {
    alert("Hello people");
}
 */


// Alerta direto
/* alertaHello(); */


// Celsius para Fahrenheit

/* function paraCelsius(valorFahrenheit){
    return (5 / 9) * (valorFahrenheit - 32);
}
var x = paraCelsius(60);

alert("A temperatura é de " + x +" graus celcius"); */



//Variaveis em função
/* function minhafuncao(){
    var x = 2;
}
 */



/* OBJETO
Objetos são basicamente variáveis com muitos valores dentro.

EX: const carro = {marca: "Renalt", modelo "Sandeiro", ano: 2015}

Os valores dentro de um objeto são chamados de propriedades.

Objetos também podem ter métodos. Um método é uma funçaõ colocada dentro de uma propriedade.*/



//Visão geral no console Log

/* const carro = {
    marca:"ford",
    modelo: "ka",
    ano:2015,
    placa:"ABC1234",
    buzina: function() {alert ('Biiiiiiiiiiii') }
};

console.log(carro); */



//Item especifico no console

/* const carro = {
    marca:"ford",
    modelo: "ka",
    ano:2015,
    placa:"ABC1234",
    buzina: function() {alert ('Biiiiiiiiiiii') }
};

console.log(carro["marca"]); */



//Ou pode chamar o console desta forma também
/* const carro = {
    marca:"ford",
    modelo: "ka",
    ano:2015,
    placa:"ABC1234",
    buzina: function() {alert ('Biiiiiiiiiiii') }
};

console.log(carro.ano); */



//Ou um metodo a ser chamado

/* const carro = {
    marca:"ford",
    modelo: "ka",
    ano:2015,
    placa:"ABC1234",
    buzina: function() {alert ('Biiiiiiiiiiii') }
};

carro.buzina(); */


//Metodo completo para chamar no console

const carro = {
    marca:"Ford",
    modelo: "Ka",
    ano:2015,
    placa:"ABC1234",
    buzina: function() {alert ('Biiiiiiiiiiii') },
    completo: function(){
        return "A marca é: "+this.marca+
        " e o modelo é: "+this.modelo+
        " o ano de fabricação é: "+this.ano+
        " e a placa do carro é: "+this.placa;
    }
};

console.log(carro.completo());