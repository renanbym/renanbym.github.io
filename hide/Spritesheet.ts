// export class Spritesheet {

//     context: CanvasRenderingContext2D;
//     imagem: HTMLImageElement;
//     numLinhas: number;
//     numColunas: number;
//     intervalo: number = 0;
//     linha: number = 0;
//     coluna: number = 0;
//     ultimoTempo: number;
//     largura: number;
//     altura: number;

//     constructor(context: CanvasRenderingContext2D, imagem: HTMLImageElement, linhas: number, colunas: number, largura: number, altura: number) {
//         this.context = context;
//         this.imagem = imagem;
//         this.numLinhas = linhas;
//         this.numColunas = colunas;
//         this.intervalo = 0;
//         this.linha = 0;
//         this.coluna = 0;
//         this.largura = largura;
//         this.altura = altura;
//     }


//     proximoQuadro() {
//         console.log('proximoQuadro')

//         let agora = new Date().getTime();

//         // Se ainda não tem último tempo medido
//         if (!this.ultimoTempo) this.ultimoTempo = agora;

//         // Já é hora de mudar de coluna?
//         if (agora - this.ultimoTempo < this.intervalo) return;

//         if (this.coluna < this.numColunas - 1)
//             this.coluna++;
//         else
//             this.coluna = 0;

//         // Guardar hora da última mudança
//         this.ultimoTempo = agora;
//     }

//     desenhar(x: number, y: number) {
//         console.log('desenhar')

//         this.context.drawImage(this.imagem, this.largura * this.coluna, this.altura * this.linha, this.largura, this.altura, x, y, this.largura, this.altura);
//     }

// }

