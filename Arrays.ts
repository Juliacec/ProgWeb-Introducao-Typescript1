// === Array e Metodos de Manipulação ===

let notas: number [] = [6,7,5,8,5];

//ForEach
//Alterar sobre elementos de uma condição
notas.forEach(n => console.log('Nota', n))

//map
// criar um novo array com os resultados da chamada de uma função fornecida
let notasAjustadas = notas.map(n => n + 0.5);

//filter
let aprovados = notas.filter(n => 6);

//push e pop 
notas.push(10); //adiciona um elemento no final do array
notas.pop(); //remover um elemento do final do array