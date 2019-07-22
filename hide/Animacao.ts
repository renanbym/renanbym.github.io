// import { Personagem } from './Personagem';

// export class Animacao {

//     context: CanvasRenderingContext2D;
//     sprites: Array<Personagem> = [];
//     ligado: boolean = false;

//     constructor(context: CanvasRenderingContext2D) {
//         this.context = context;
//     }

//     novoSprite(sprite: Personagem) {
//         console.log('novoSprite');
//         this.sprites.push(sprite);
//     }

//     ligar() {
//         console.log('ligar');
//         this.ligado = true;
//         this.proximoFrame();
//     }

//     desligar() {
//         console.log('desligar');
//         this.ligado = false;
//     }

//     proximoFrame() {
//         console.log('proximoFrame');
//         console.log(this)
//         // Posso continuar?
//         if (!this.ligado) return;

//         // A cada ciclo, limpamos a tela ou desenhamos um fundo
//         this.limparTela();

//         // Atualizamos o estado dos sprites
//         for (let i in this.sprites)
//             this.sprites[i].atualizar();

//         // Desenhamos os sprites
//         for (let i in this.sprites)
//             this.sprites[i].desenhar();

//         // Chamamos o próximo ciclo
//         this.proximoFrame();
//     }

//     limparTela() {
//         console.log('limparTela');

//         let ctx = this.context;
//         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     }
// }
