import { Personagem } from './Personagem';

export class Animacao {

    context: CanvasRenderingContext2D;
    sprites: Array<Personagem> = [];

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    novoSprite(sprite: Personagem) {
        this.sprites.push(sprite);
    }

}
