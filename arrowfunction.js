const dobrarValores = (array) => {
    return array.map(numero => numero * 2);
  };
  
//Esta função dobrarValores recebe um array de números como argumento e usa o método map() para iterar sobre cada elemento do array, dobrando seu valor e retornando um novo array com os valores dobrados.


  const ordenarPorComprimento = (array) => {
    return array.sort((a, b) => a.length - b.length);
  };
  

//Esta função ordenarPorComprimento recebe um array de palavras como argumento e usa o método sort() para ordenar o array com base no comprimento das palavras. A função de comparação dentro do sort() compara o comprimento das strings a e b, retornando um número negativo se a for mais curto que b, um número positivo se a for mais longo que b, ou zero se forem iguais. Isso garante que as palavras sejam ordenadas da mais curta para a mais longa.


  const filtrarNumerosPares = (array) => {
    return array.filter(numero => numero % 2 === 0);
  };

  
//Esta função filtrarNumerosPares recebe um array de números como argumento e usa o método filter() para criar um novo array contendo apenas os números pares. A função de filtro verifica se o resto da divisão do número por 2 é igual a zero, o que indica que o número é par.