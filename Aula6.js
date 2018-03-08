
// Operadores Logicos "and &&", "or ||" e "not !""
//	Operador Logico "and &&"
var x=6;
alert("(x>=1) && (x<=10)");
alert((x>=1) && (x<=10));
var y=prompt("Entre com um numero:");
alert("(y>=1) && (y<=10)");
alert((y>=1) && (y<=10));

//	Operador Logica "or ||"
var x=6;
alert("(x>=1) || (x<=5)");
alert((x>=1) || (x<=5));
var y=prompt("Entre com um numero:");
alert("(y>=1) || (y<=5)");
alert((y>=1) || (y<=5));

//	Operador Logico "not !"
var a=6;
alert("!(a>=1)");
alert(!(a>=1));
var y=prompt("Entre com um numero:");
alert("!(y<=5)");
alert(!(y<=5));

//	Operador Ternario
// Expressao?verdadeiro:falso
var idade=prompt("Qual a sua idade?");
alert("var x=(idade>=18)?\"Maior de idade\":\"Menor de idade\";");
var x=(idade>=18)?"Maior de idade":"Menor de idade";
alert(x);

// Operador delete - para remover um atributo do objeto
Pessoa={
	nome:"Thereza"
}
alert("Pessoa.nome");
alert(Pessoa.nome);
alert("delete Pessoa.nome");
delete Pessoa.nome;
alert("Pessoa.nome");
alert(Pessoa.nome);

// Operador in - indica se existe a propriedade especificada
Pessoa={
	nome:"Paula"
}
alert("nome" in Pessoa);
alert("nome" in Pessoa);
alert("email" in Pessoa);
alert("email" in Pessoa);

// Operador this -mostra o titulo da pagina
alert(this.document.title);

//parseInt -para fazer somatorio
var num1=parseInt(prompt("Digite o primeiro numero: ");
var num2=parseInt(prompt("Digite o segundo numero: ");
var soma=num1+num2;
alert(soma);

// Metodo confirm()
confirm("Why So Seriously?");