
			var nome=prompt("Qual o seu nome?");
			alert("Prazer em te conhecer,\u00A0"+nome);
						
			var idade=prompt("Qual a sua idade?");
			document.write(nome+"\u00A0"+idade);
						
			// Operadores matematicos +,-,*,/,%
			var soma=10+4;
			document.write("<br> A Soma dos números é:\u00A0"+ soma);
			
			var soma="5"+"5"; // O sinal de mais esta servindo como 'concatenador'
			document.write("<br> A \"soma\" dos números é:\u00A0"+ soma);
			
			// SUBTRACAO
			var sub=10-4;
			document.write("<br A Subtracao dos numeros é:\uAA0A"+ sub);
			
			// MULTIPLICACAO
			var multi=10*4;
			document.write("<br>A Multipliacacao dos numeros é:\u00A0"+ multi);
			
			// DIVISAO
			var divisao=10/4;
			document.write("<br>A Divisao dos numeros é:\u00A0"+ divisao);
			
			// RESTO DA DIVISAO
			var mod=10%2;
			document.write("<br>O Resto da Divisao é:\u00A0"+ mod);
			
			var x="<br>Oi,\u00A0" + "Quer chupar a minha rola?"
			document.write(x);
			
			// Operadores de Comparacao "==" "===" "!=" "!==" ">" ">=" "<" "<="
			// Operador Igual ==
			var a=6;
			alert(a==6);
			// Operador Igual e Identico - Comparacao entre valor e tipo
			var a="6";
			alert(a===6);
			
			// Operador Diferente !=
			var a=6;
			alert(a!=7);
			// Operador Identidade Diferente
			var a=6;
			alert(a!=="6");
			
			// Operador Maior ">"
			var a=6;
			alert(a>8);
			// Operador Maior ou Igual ">="
			var a=6;
			alert(a>=6);
			
			// Operador Menor "<"
			var a=6;
			alert(a<8);
			// Operador Menor ou Igual "<="
			var a=6;
			alert(a<=8);
			
			