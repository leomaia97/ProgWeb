/* Estrutura Return */

/*
// Dividir

function dividir(x,y)
{
	return x/y;
}

alert("DIVIDIR");
document.write("DIVIDIR");

var x=prompt("Entre com o primeiro valor: ");
var y=prompt("Entre com o segundo valor: ");

alert(dividir(x,y));
document.write(dividir(x,y));



// Multiplicar

function multiplicar(x,y)
{
	return x*y;
}

alert("MULTIPLICAR");
document.write("MULTIPLICAR");

var x=prompt("Entre com o primeiro valor: ");
var y=prompt("Entre com o segundo valor: ");

alert(multiplicar(x,y));
document.write(multiplicar(x,y));



// Somar

function somar(x,y)
{
	return x+y;
}

alert("SOMAR");
document.write("SOMAR");

var x=parseInt(prompt("Entre com o primeiro valor: "));
var y=parseInt(prompt("Entre com o segundo valor: "));

alert(somar(x,y));
document.write(somar(x,y));



// Subtracao

function subtracao(x,y)
{
	return x-y;
}

alert("SUBTRACAO");
document.write("SUBTRACAO");

var x=prompt("Entre com o primeiro valor: ");
var y=prompt("Entre com o segundo valor: ");

alert(subtracao(x,y));
document.write(subtracao(x,y));

*/








/*
// abs - transforma o numero negativo em positivo
valor=Math.abs(-123);
alert("ABS:\n"+valor);

// max - retorna o maior valor
valor=Math.max(5,10);
alert("MAX:\n"+valor);

// min - retornar o menor valor
valor=Math.min(2,6);
alert("MIN:\n"+valor);

// pow - potencia,numero elevado
valor=Math.pow(4,2);
alert("POW:\n"+valor);

// round - para arredondar matematicamente
// ceil - para arredondar sempre para cima
// floor - para arredondar sempre para baixo
valor=Math.round(13.32);
alert("ROUND:\n"+valor);

valor=Math.ceil(13.15);
alert("CEIL:\n"+valor);

valor=Math.floor(13.87);
alert("FLOOR:\n"+valor);

// sqrt  - raiz quadrada
valor=Math.sqrt(49);
alert("SQRT:\n"+valor);
*/








/*
// Metodo GET do Objeto Date
var data=new Date();
alert(data.getDay()); //Retorna o dia atual que começa em 0(Domingo) até 6(Sábado)
alert(data.getMonth()); //Retorna o mês atual que começa em 0(Janeiro) até 11(Dezembro)
alert(data.getFullYear()); // Retorna o ano completo
*/









var hoje=new Date();
alert("O ano atual é:\u00A0"+ hoje.getFullYear());
alert("O mês atual é:\u00A0"+ hoje.getMonth());
alert("O dia atual é:\u00A0"+ hoje.getDay());

