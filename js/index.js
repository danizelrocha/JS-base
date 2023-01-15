/* document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
console.log("Oi isso é um console log"); */


/* function minhafuncao(){
    document.write(5+5);
}  */
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
/* 
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

console.log(carro.completo()); */






/* EVENTOS
Evento são ações disparadas pela interação dos usuarios na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinãmicas.

Existem muitos eventos. Veja os mais utilizados.

onclick -> Dispara quando recebe um click.
ondblclick-> Dispara quando clicado duas vezes.
onmouseover -> Dispara quando o mouse está sobre.
onmouseout -> Dispara quando o mouse é movido para fora do elemento.
onmousemove -> Dispara quando o mouse é movido no elemento.
onmousedown -> Dispara quando o click do botão foi precionado.
onmouseup -> Dispara quando o click do botão é liberado.
onfocus -> Dispara quando o elemento recebe foco. Valido para input, 
onchange -> Dipara quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Dispara quando o elemeto perde o foco.
onkeydown -> Dispara quando uma tecla é precionada.
onkeypress -> Dispara quando uma tecla é precionada e solta.
onkeyup -> Dispara quando uma tecla é sota sobre um elemento.
onload -> Dispara quando a página terminou de ser carregada. Boddy.
onresize -> Dispara quando a um redimencionamento da janela.
*/




//-------------Evento de onclick-------------------------


/* function eventoClick() { */
 /*    alert('Acionar um evento de click'); */
 /*    document.body.style.background = "orange";
} */


//Evento ondblclick

/*  function eventoDblClick() {
    alert('Evento de click duplo');
    document.body.style.background = "orange"; 
} */
 
//---------------------EVENTOS MOUSE----------------------

// Evento onmouseover

/* function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";

} */


//Evento onmouseout

/* function viraVioleta(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blueviolet";

} */


//Evento onmousemove

/* function adicionaTexto (){
    let p = document.getElementById("texto");
    p. append('O mouse moveu. ');

} */


//----------Evento do tipo input---------------

//onfocus
/* function limpaTexto() {
    document.getElementById("campoTexto").value = "";
}
  */

//onchange
/* function mudou() {
    console.log('Mudou');
}  */

//onblur
//HTML

//onkeypress

/* function teclaPressionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}
 */

//onloading
// HTML


//onresize
//HTML








/*------------------ARRAYS-------------------------
Os arrays JavaScript são usados para armazernas vários valores
 em uma unica variável. Diferente dos objetos, que funcionam com
 propriedades ou "nomes" que você da para os itens dentro dele, os 
 arrays não possuem propriedades. O item dentro dele é encontrado pela posição.
 
 
 Imagine um arrays com uma lista de itens, com controle, por ordem de posição
 dentro dele.
 
 Ex: const lista = [arroz, feijão, macarrão, leite];
 
 A lista [0] (liata na posição 0) vai conter o valor do "arroz"
 A lista [1] (lista na posição 1) vai conter o valor do "feijão"
 A lista [2] (lista na posição 1) vai conter o valor do "macarão"
 A lista [3] (lista na posição 3) vai conter o valor do "leite"
 
 E assim por diante.
 */
/* var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite"; */

/* const lista = [
    "arroz", 
    "feijão", 
    "macarrão", 
    "leite"
];

alert(lista[0]); */



/* const lista = [];
lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "leite"; */




/* const lista = new Array("arroz","feijão","macarrão","leite"); */



/* var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite"; */

/* const lista = ["arroz","feijão","macarrão","leite"];
let x = lista[3];
alert(x); */



//Uso frequnte de array
/* const lista = ["arroz","feijão","macarrão","leite"];
lista[0] = "Café";
alert(lista[0]); 

console.log(lista); */



/* var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite"; 

const pessoa = ["Daniel", "Rocha", 45]; */ //arrays
/* const pessoa = {nome:"Daniel", sobrenome:"Rocha", idade:45}; //objeto */
/* 
pessoa.nome; //objeto
pessoa[0]; //arrays */



/* var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite"; 

const pessoa = ["Daniel", "Rocha", 45, "Dev"]; */ //arrays -> 3 itens.

/* alert(pessoa.length);  */
/* 
alert(pessoa[pessoa.length - 1]) ; */ // mostra o ultimo item de uma lista independente da quantidade.



/* var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";  */

/* const pessoa = ["Daniel", "Rocha", 45, "Dev"]; */ //arrays 
/* pessoa.push("Brasileiro"); */
/* pessoa[pessoa.length] = "Solteiro";

console.log(pessoa);
 */

/* const pessoa = ["Daniel", "Rocha", 45, "Dev"];   //arrays 
pessoa[8] = "Solteiro";

alert (pessoa[6]); */

/* const pessoa = ["Daniel", "Rocha", 45, "Dev"];   //arrays checando se é um arrays
 alert (Array.isArray(pessoa)); */


/*  const pessoa = ["Daniel", "Rocha", 45, "Dev"];   //arrays checando se é um arrays 
 alert (Array.isArray(x)); */

/* 
var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";  */
/* 
const lista1 = [" Arroz ", " Feijão ", " Leite "," Macarrão "];//arrays
const lista2 = [" Suco "," Refrigerante "," Agua "];  
const lista3 = [" Roupa "," Chinelo "," Calça "];
const lista4 = [" Salgadinho "," Chocolate "," Amendoim. "]

const superLista = lista1.concat(lista2, lista3, lista4);


document.getElementById("teste").innerHTML = superLista; */



/* const jogadores = [
    " Biro Biro ",
    " Ribamar ",
    " Pelé ", 
    " Maradona. ", 
    " Neymar ", 
    " Cristiano Ronaldo ", 
    " Vampeta ", 
    " junior Baiano "
];//arrays

const craques = jogadores.slice(2, 6);

document.getElementById("teste").innerHTML = craques;  */


/* const jogadores = [
    " Biro Biro ",
    " Ribamar ",
    " Pelé ", 
    " Maradona. ", 
    " Neymar ", 
    " Cristiano Ronaldo ", 
    " Vampeta ", 
    " Junior Baiano "
];//arrays

const jogeOrdem = jogadores.sort();

document.getElementById("teste").innerHTML = jogeOrdem;  */




/* const jogadores = [
    " Biro Biro",
    " Ribamar",
    " Pelé", 
    " Maradona", 
    " Neymar", 
    " Cristiano Ronaldo", 
    " Vampeta", 
    " Junior Baiano"
];//arrays

 jogadores.sort();
 jogadores.reverse();

document.getElementById("teste").innerHTML = jogadores;  */

/* 
const numeros = [40, 100, 1, 5, 25, 10, 200, 153, 9, 32, 236514526];

numeros.sort(function (a, b){return a - b});

document.getElementById("teste").innerHTML = numeros; */




/* const numeros = [40, 100, 1, 5, 25, 10, 200, 153, 9, 32, 236514526];

document.getElementById("teste").innerHTML = MaiorNumero(numeros) ;

function MaiorNumero(array) {
    return Math.max.apply(null, array);
}
 */
/* 
const numeros = [40, -100, 1, 5, 25, 10, 200, 153, 9, 32, 236514526];

document.getElementById("teste").innerHTML = MenorNumero(numeros) ;

function MenorNumero(array) {
    return Math.min.apply(null, array);
} */



/* const numeros = [40, -100, 1, 5, 25, 10, 200, 153, 9, 32, 236514526];
const maior20 = numeros.filter(filtragem);

document.getElementById("teste").innerHTML = maior20;

function filtragem(value, index, array) {
    return value > 20;
} */











// IF ELSE

// A lampada está ligada

/* var interrupitor = "on";

if (interrupitor =="on") {
    alert ('A lampada está ligada');
    } else {
        alert('A lampada está desligada');
    } */

// A lampada está desligada

/* var interrupitor = "off";

if (interrupitor =="on") {
    alert ('A lampada está ligada');
    } else {
        alert('A lampada está desligada');
    } */

// Exemplo com a hora do pc 

/* var hora = new Date(). getHours();
    alert(hora);
 */


// Bom dia - Bao tarde - Boa noite

/* var hora = new Date(). getHours();

if (hora < 12) {
    alert('Bom dia');
} else if (hora < 18){
    alert ('Boa tarde');
} else{
    alert('Boa noite'); 
} */

// Verificar campo

/* function Verificar(){
    let nome = document.getElementById("nome").value;

    if (nome =="" || nome == null) {
        let p = document.getElementById("teste");
        p. innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p. innerHTML = "Parabéns tudo certo";
        p.style.color = "green";

    }
} */
    








/* Switch
É usado para realizar diferentes ações com base em diferentes condições
no mesmo bloco de verificação. Caso a condição não seja compativel
não será executado e o valor padrão será acionado. */

/* switch( expressao) {
    case a:
        //o que acontece
        break;
    case b:
        //o que acontece
        break;
    case c:  
        //o que acontece
        break;
    default:    
    // o que acontece  
} */



/* function verificarCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();  //IMPORTANTICIMO PARA CONVERTE AS PALAVRAS EM FORMATO QUE SEJAM LIDAS.

    switch (cor) {
        case "azul":
            //o que acontece
            document.body.style.background = "blue";
            break;
        case "vermelho":
            //o que acontece
            document.body.style.background = "red";
            break;
        case "amarelo":  
            //o que acontece
            document.body.style.background = "yellow";
            break;
        default:    
        // o que acontece 
        document.getElementById("teste").innerHTML = "Nenhuma cor disponível para: "+cor; 
    }
}   */



/* 
function verificaCor(){
    let cor = document.getElementById("cor").value;

    let x = 0;

    switch (x) {
        case 0:
            //o que acontece
            document.getElementById("teste").innerHTML = "A variavel é zero.";
            break;
        default:    
            // o que acontece 
            document.getElementById("teste").innerHTML = "Não foi encontrado."; 
    }  
} 
 */



//Dia da semana
/* 
function diaDaSemana(){
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
        case 0:
            //o que acontece
            document.getElementById("teste").innerHTML ="Hoje é Domingo";
            break;
        case 1:
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Segunda-Feira";
            break;
        case 2:  
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Terça-Feira";
            break;
         case 3:  
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Quarta-Feira";
            break;
        case 4:  
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Quinta-Feira";
            break;
        case 5:  
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Sexta-Feira";
            break;
        case 6:  
            //o que acontece
            document.getElementById("teste").innerHTML = "Hoje é Sábado";
            break;

        default:    
        // o que acontece 
        document.getElementById("teste").innerHTML = " Não sei que dia é..."; 
    }
} 
 */













/* ------------LAÇO DE REPETIÇÃO  FOR---------------
Laços oferencem um jeito fácil e rápido de executar uma ação de 
repetidas vezes.*/

/* for (let i=0; i<10001; i++) {
    document.getElementById("teste").innerHTML += i + ", ";
} */



//ordem crescente
/* for(let i=1900; i<=2023; i++){
    document.getElementById("ano").innerHTML +="<option value'"+i+"'>"+i+"</option>";
} */




/* //ordem decrescente
for(let i = 2023; i >= 1900; i--){
    document.getElementById("ano").innerHTML +="<option value'"+i+"'>"+i+"</option>";
} */




//ordem decrescente FULL YEAR

/* var ano = new Date().getFullYear();

for(let i = ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML +="<option value'"+i+"'>"+i+"</option>";
} 
 */



//ordem crescente FULL YEAR
/* var ano = new Date().getFullYear();

 for(let i=1900; i<=ano; i++){
    document.getElementById("ano").innerHTML +="<option value'"+i+"'>"+i+"</option>";
} */

/* // Ação de repetimento com for
const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevete"];
var tamanho = carros.length;

for(let i=0; i<tamanho; i++){
    document.getElementById("teste").innerHTML +=carros[i] + " - ";
} */



/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução o ódigo em intervalos de tempo
especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar um JavaScript são:

settimeout (function, tempo de milicegundos)
-> Executa uma função, depois de esperar um numero especifico de milissegundos.


setInteval (function, millisegundo)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/

function ativarContagem(){
    document.getElementById('tempo'). innerHTML = "Começou a contagem!";

    //EXECUTA UMA VEZ APÓS O TEMPO DETERMINADO
    setTimeout(function () { 
        document.body.style.backgroundColor = "red";
        document.getElementById('tempo'). innerHTML = "Executou o setTimeout."; 
    }, 5000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo'). innerHTML = "Parou a contagem.";
}