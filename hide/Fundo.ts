// export class Fundo {

//     context: CanvasRenderingContext2D
//     imagem: HTMLImageElement
//     velocidade: number = 0;
//     posicaoEmenda: number = 0;


//     constructor(context: CanvasRenderingContext2D, imagem: HTMLImageElement) {
//         this.context = context;
//         this.imagem = imagem;
//     }


//     atualiza() {
//         // Atualizar a posição de emenda
//         this.posicaoEmenda += this.velocidade;

//         // Emenda passou da posição
//         if (this.posicaoEmenda > this.imagem.height)
//             this.posicaoEmenda = 0;
//     }

//     desenha() {
//         var img = this.imagem;  // Para facilitar a escrita :D

//         // Primeira cópia
//         var posicaoY = this.posicaoEmenda - img.height;
//         this.context.drawImage(img, 0, posicaoY, img.width, img.height);

//         // Segunda cópia
//         posicaoY = this.posicaoEmenda;
//         this.context.drawImage(img, 0, posicaoY, img.width, img.height);
//     }

// }