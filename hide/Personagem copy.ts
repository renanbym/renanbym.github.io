
// import { Teclado } from './Teclado';
// import { Spritesheet } from './Spritesheet';

// export class Personagem2 {

//     context: CanvasRenderingContext2D;
//     teclado: Teclado;
//     x: number = 0;
//     y: number = 0;
//     velocidade = 1;
//     andando: boolean = false;
//     direcao: number;
//     sheet: Spritesheet;

//     DIREITA: number = 1;
//     ESQUERDA: number = 2;
//     CIMA: number = 3;
//     BAIXO: number = 4;

//     constructor(context: CanvasRenderingContext2D, teclado: Teclado, imageSrc: string, velocidade: number, linhas: number, colunas: number, largura: number, altura: number) {
//         let sprite = new Image();
//         sprite.src = imageSrc;

//         this.context = context;
//         this.teclado = teclado;
//         this.x = 0;
//         this.y = 0;
//         this.velocidade = velocidade;

//         // Criando a spritesheet a partir da imagem recebida
//         this.sheet = new Spritesheet(context, sprite, linhas, colunas, largura, altura);
//         this.sheet.intervalo = 60;

//         // Estado inicial
//         this.andando = false;
//         this.direcao = this.DIREITA;
//     }



//     atualizar() {
//         console.log('atualizar');

//         if (this.teclado.pressionada(this.teclado.SETA_DIREITA)) {
//             // Se já não estava neste estado...
//             if (!this.andando || this.direcao != this.DIREITA) {
//                 // Seleciono o quadro da spritesheet
//                 this.sheet.linha = 2;
//                 this.sheet.coluna = 0;
//             }

//             // Configuro o estado atual
//             this.andando = true;
//             this.direcao = this.DIREITA;

//             // Neste estado, a animação da spritesheet deve rodar
//             this.sheet.proximoQuadro();

//             // Desloco o SinDragon
//             this.x += this.velocidade;
//         } else if (this.teclado.pressionada(this.teclado.SETA_ESQUERDA)) {
//             if (!this.andando || this.direcao != this.ESQUERDA) {
//                 this.sheet.linha = 4;
//                 this.sheet.coluna = 0;
//             }

//             this.andando = true;
//             this.direcao = this.ESQUERDA;
//             this.sheet.proximoQuadro();
//             this.x -= this.velocidade;  // E aqui é sinal de menos!
//         } else if (this.teclado.pressionada(this.teclado.SETA_CIMA)) {
//             if (!this.andando || this.direcao != this.CIMA) {
//                 this.sheet.linha = 1;
//                 this.sheet.coluna = 0;
//             }

//             this.andando = true;
//             this.direcao = this.CIMA;
//             this.sheet.proximoQuadro();
//             this.y -= this.velocidade;  // E aqui é sinal de menos!

//         } else if (this.teclado.pressionada(this.teclado.SETA_BAIXO)) {
//             console.log('SETA_BAIXO')
//             if (!this.andando || this.direcao != this.BAIXO) {
//                 this.sheet.linha = 3;
//                 this.sheet.coluna = 0;
//             }

//             this.andando = true;
//             this.direcao = this.BAIXO;
//             this.sheet.proximoQuadro();
//             this.y += this.velocidade;  // E aqui é sinal de menos!
//         }

//         else {
//             console.log('NENHUMA TECLA')
//             this.sheet.linha = 0;

//             if (this.direcao == this.DIREITA) {
//                 this.sheet.coluna = 1;
//             } else if (this.direcao == this.ESQUERDA) {
//                 this.sheet.coluna = 3;
//             } else if (this.direcao == this.CIMA) {
//                 this.sheet.coluna = 0;
//             } else if (this.direcao == this.BAIXO) {
//                 this.sheet.coluna = 2;
//             }

//             // Não chamo proximoQuadro!
//             this.andando = false;
//         }

//         this.desenhar();
//     }

//     desenhar() {
//         console.log('desenhar');
//         this.sheet.desenhar(this.x, this.y);
//     }

// }

