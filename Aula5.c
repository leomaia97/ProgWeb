#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
5- Fa�a um Programa em C que leia dois nomes e diga:
	5.1- Se as Strings s�o iguis ou diferentes
	5.2- Qual � o nome maior e qual � o menor(Ordem Alfab�tica)
	5.3- O tamanho de cada nome
	5.4- Gere uma 3� Variavel, e concatene as 2 Strings
*/

int main(){

    int compare, i, o, tamNome1, tamNome2;
    char nome1[100], nome2[100], nome3[200], nome11[100];

    printf("\nEntre com 2 Nomes:");
    printf("\nNome 1: ");
    scanf("%s",nome1);
    printf("\nNome 2: ");
    scanf("%s",nome2);

    tamNome1 = strlen(nome1);
    tamNome2 = strlen(nome2);

    /*
    String Compare
    0 = Equal
    */


    compare=strcmpi(nome1,nome2);
    printf("\nComparacao igual a: %d",compare);
    if(compare==0)
        printf("\nSao IGUAIS !\n");
        else
            printf("\nSao DIFERENTES !\n");

    system("pause");

    printf("\nTamanho de Nome 1: %d\n",tamNome1);
    printf("\nTamanho de Nome 1: %d\n",tamNome2);

    system("pause");

    //CONCATENACAO
    nome11=nome1;
    printf("\n\n\n%s\n\n\n",nome11);

    strcat(nome11,nome2);
    printf("CONCATENCAO: %s",nome11);



}
