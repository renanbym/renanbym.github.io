// // Códigos de teclas - aqui vão todos os que forem necessários



// export class Teclado {

//     elemento: Document;
//     pressionadas: Array<any>;
//     disparadas: Array<any>;
//     funcoesDisparo: Array<Function>;

//     SETA_ESQUERDA: number = 37;
//     SETA_CIMA: number = 38;
//     SETA_DIREITA: number = 39;
//     SETA_BAIXO: number = 40;
//     ESPACO: number = 32;
//     KEY_C: number = 67;

//     constructor(elemento: Document) {

//         const teclado = this;

//         this.elemento = elemento;

//         // Array de teclas pressionadas
//         this.pressionadas = [];

//         // Array de teclas disparadas
//         this.disparadas = [];

//         // Funções de disparo registradas
//         this.funcoesDisparo = [];


//         elemento.addEventListener('keydown', (evento: KeyboardEvent) => {
//             const tecla = evento.keyCode;  // Tornando mais legível ;)

//             teclado.pressionadas[tecla] = true;

//             // Disparar somente se for o primeiro keydown da tecla
//             if (teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]) {
//                 teclado.disparadas[tecla] = true;
//                 teclado.funcoesDisparo[tecla]();
//             }
//         });

//         elemento.addEventListener('keyup', (evento: KeyboardEvent) => {
//             console.log(evento.keyCode)
//             teclado.pressionadas[evento.keyCode] = false;
//             teclado.disparadas[evento.keyCode] = false;
//         });
//     }


//     pressionada(tecla: any) {
//         return this.pressionadas[tecla];
//     }

//     disparou(tecla: any, callback: Function) {
//         this.funcoesDisparo[tecla] = callback;
//     }

// }

