    //===TIPOS EM TYPESCRIOT===

    //tipos primitivos
    let texto: string = "Olá, mundo!";
    let numero: number = 42;
    let ativo: boolean = true;

    //Arrays
    let numeros: number[] = [1,2,3,4,5] /*Primeira forma de criar array*/
    let palavras: Array<string> = ['TypeScript', 'e', 'massa!']/*Segunda forma de criar Array*/
    
    //Tuplas
    let pessoas: [string, number] = ['João', 25]

//Enum -- enumeração
enum Cores{
    Vermelho,
    Verde, 
    Azul
}

let corFavorita: Cores = Cores.Azul;
let dadoAleatorio: any = 5;
dadoAleatorio = 'Texto';
dadoAleatorio = true;

//Unkow (Tipo mais seguro do any)
let dadoDesconhecido: unknown = 10;

//void
function mostrarAlerta(): void{
    console.log("Atenção! preste atenção na aula.")
}
//Null e undefined
let nada: null = null;
let indefinido: undefined = undefined;

//Never (usado quando a função nunca retorna)
function erroFatal(mensagem:string): never{
    throw new Error(mensagem)
}

//Type aliases
type Usuario = {
    nome: string;
    idade: number;
}
let usuario: Usuario = {nome: "Julia", idade: 17}; 