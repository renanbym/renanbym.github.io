!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);for(var n,a,r=function(){function t(t,e,i,n,a,r,o){this.x=0,this.y=0,this.velocidade=1,this.andando=!1,this.linha=0,this.coluna=0,this.DIREITA=1,this.ESQUERDA=2,this.CIMA=3,this.BAIXO=4,this.intervalo=0;var s=new Image;s.src=e,this.imagem=s,this.context=t,this.x=0,this.y=0,this.velocidade=i,this.andando=!1,this.direcao=this.DIREITA,this.numLinhas=n,this.numColunas=a,this.linha=0,this.coluna=0,this.largura=r,this.altura=o,this.desenhar()}return t.prototype.proximoQuadro=function(){var t=(new Date).getTime();this.ultimoTempo||(this.ultimoTempo=t),t-this.ultimoTempo<this.intervalo||(this.coluna<this.numColunas-1?this.coluna++:this.coluna=0,this.ultimoTempo=t,this.desenhar())},t.prototype.desenhar2=function(){this.context.drawImage(this.imagem,this.largura*this.coluna,this.altura*this.linha,this.largura,this.altura,this.context.canvas.width/2-this.largura,this.context.canvas.height/2-this.altura,this.largura,this.altura)},t.prototype.desenhar=function(){this.context.drawImage(this.imagem,this.largura*this.coluna,this.altura*this.linha,this.largura,this.altura,this.x,this.y,this.largura,this.altura)},t}(),o=document.getElementById("container").getContext("2d"),s=["./public/actor.png","./public/bg.png","./public/attack.png"],u=0,h=function(){++u==s.length&&f()},l=0,c=s;l<c.length;l++){var d=c[l],g=new Image;g.onload=h,g.src=d}var m=function(t,e,i){var n=[[0,0],[200,0],[380,0],[560,0],[760,0],[0,200],[200,200]];if(t>=n.length)t=0;else{var a=new Image;a.src="./public/attack.png";var r=document.createElement("canvas");r.width=45,r.height=45;var s=r.getContext("2d");s.clearRect(0,0,45,45),s.drawImage(a,n[t][0],n[t][1],150,150,0,0,45,45),p(),o.drawImage(r,e,i),setTimeout(function(){m(++t,e,i)},100)}},f=function(){var t=new Image;t.src="./public/bg.png",(a=document.createElement("canvas")).width=45,a.height=45,a.getContext("2d").drawImage(t,0,290,46,46,0,0,45,45),(n=new r(o,"./public/actor.png",10,4,3,49,48)).x=200,n.y=200,v(0,0)},p=function(){o.clearRect(0,0,o.canvas.width,o.canvas.height);var t=o.createPattern(a,"repeat");o.fillStyle=t,o.fillRect(0,0,600,600)},v=function(t,e){p(),n.proximoQuadro(),n.desenhar()};document.addEventListener("keydown",function(t){40==t.keyCode&&(n.linha=0,n.y+=n.velocidade,v(0,n.y)),38==t.keyCode&&(n.linha=3,n.y-=n.velocidade,v(0,n.y)),39==t.keyCode&&(n.linha=2,n.x+=n.velocidade,v(n.x,0)),37==t.keyCode&&(n.linha=1,n.x-=n.velocidade,v(n.x,0)),32==t.keyCode&&m(0,n.x-10,n.y+15)})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9QZXJzb25hZ2VtLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwic2luRHJhZ29uIiwib2Zmc2NyZWVuQ2FudmFzIiwiUGVyc29uYWdlbSIsImNvbnRleHQiLCJpbWFnZVNyYyIsInZlbG9jaWRhZGUiLCJsaW5oYXMiLCJjb2x1bmFzIiwibGFyZ3VyYSIsImFsdHVyYSIsInRoaXMiLCJ4IiwieSIsImFuZGFuZG8iLCJsaW5oYSIsImNvbHVuYSIsIkRJUkVJVEEiLCJFU1FVRVJEQSIsIkNJTUEiLCJCQUlYTyIsImludGVydmFsbyIsInNwcml0ZSIsIkltYWdlIiwic3JjIiwiaW1hZ2VtIiwiZGlyZWNhbyIsIm51bUxpbmhhcyIsIm51bUNvbHVuYXMiLCJkZXNlbmhhciIsInByb3hpbW9RdWFkcm8iLCJhZ29yYSIsIkRhdGUiLCJnZXRUaW1lIiwidWx0aW1vVGVtcG8iLCJkZXNlbmhhcjIiLCJkcmF3SW1hZ2UiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwic3JjX2ltYWdlcyIsImNhcnJlZ2FkYXMiLCJjYXJyZWdhbmRvIiwibGVuZ3RoIiwiaW5pY2lhciIsIl9pIiwiaW1hZ2VzXzEiLCJpbWciLCJzcmNfaW1hZ2UiLCJvbmxvYWQiLCJhdHRhY2tGbiIsIm51bWJlciIsInh5IiwiYXR0YWNrIiwiYXR0YWNrQ2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImF0dGFja0NhbnZhc0N0eCIsImNsZWFyUmVjdCIsImJnIiwic2V0VGltZW91dCIsImltYWdlIiwiZGVzZW5oYSIsInBhdHRlcm4iLCJjcmVhdGVQYXR0ZXJuIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRvIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsRUFBQSxHQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLEdBQUEsQ0FDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxRQUFBLElBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEVBQUEsQ0FBMENLLFlBQUEsRUFBQUMsSUFBQUwsS0FLMUNaLEVBQUFrQixFQUFBLFNBQUFoQixHQUNBLG9CQUFBaUIsZUFBQUMsYUFDQU4sT0FBQUMsZUFBQWIsRUFBQWlCLE9BQUFDLFlBQUEsQ0FBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURtQixPQUFBLEtBUWpEckIsRUFBQXNCLEVBQUEsU0FBQUQsRUFBQUUsR0FFQSxHQURBLEVBQUFBLElBQUFGLEVBQUFyQixFQUFBcUIsSUFDQSxFQUFBRSxFQUFBLE9BQUFGLEVBQ0EsS0FB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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG5pbXBvcnQgeyBQZXJzb25hZ2VtIH0gZnJvbSAnLi9QZXJzb25hZ2VtJ1xuXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKSBhcyBIVE1MQ2FudmFzRWxlbWVudCk7XG5jb25zdCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY29uc3QgaW1hZ2VzID0gWycuL3B1YmxpYy9hY3Rvci5wbmcnLCAnLi9wdWJsaWMvYmcucG5nJywgJy4vcHVibGljL2F0dGFjay5wbmcnXTtcbmxldCBjYXJyZWdhZGFzID0gMDtcblxuY29uc3QgU0VUQV9FU1FVRVJEQTogbnVtYmVyID0gMzc7XG5jb25zdCBTRVRBX0NJTUE6IG51bWJlciA9IDM4O1xuY29uc3QgU0VUQV9ESVJFSVRBOiBudW1iZXIgPSAzOTtcbmNvbnN0IFNFVEFfQkFJWE86IG51bWJlciA9IDQwO1xuY29uc3QgRVNQQUNPOiBudW1iZXIgPSAzMjtcblxuY29uc3QgY2FycmVnYW5kbyA9ICgpID0+IHtcbiAgICArK2NhcnJlZ2FkYXM7XG4gICAgaWYgKGNhcnJlZ2FkYXMgPT0gaW1hZ2VzLmxlbmd0aCkgaW5pY2lhcigpXG59XG5cbmZvciAoY29uc3QgaW1nIG9mIGltYWdlcykge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gY2FycmVnYW5kb1xuICAgIGltYWdlLnNyYyA9IGltZztcbn1cblxubGV0IHNpbkRyYWdvbjogUGVyc29uYWdlbTtcbmxldCBvZmZzY3JlZW5DYW52YXM6IGFueTtcblxuY29uc3QgYXR0YWNrRm4gPSAobnVtYmVyOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XG5cbiAgICBjb25zdCB4eSA9IFtbMCwgMF0sIFsyMDAsIDBdLCBbMzgwLCAwXSwgWzU2MCwgMF0sIFs3NjAsIDBdLCBbMCwgMjAwXSwgWzIwMCwgMjAwXV07XG5cbiAgICBpZiAobnVtYmVyID49IHh5Lmxlbmd0aCkge1xuICAgICAgICBudW1iZXIgPSAwO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNrID0gbmV3IEltYWdlKCk7XG4gICAgYXR0YWNrLnNyYyA9ICcuL3B1YmxpYy9hdHRhY2sucG5nJztcblxuICAgIGNvbnN0IGF0dGFja0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGF0dGFja0NhbnZhcy53aWR0aCA9IDQ1O1xuICAgIGF0dGFja0NhbnZhcy5oZWlnaHQgPSA0NTtcblxuICAgIGNvbnN0IGF0dGFja0NhbnZhc0N0eCA9IGF0dGFja0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGF0dGFja0NhbnZhc0N0eC5jbGVhclJlY3QoMCwgMCwgNDUsIDQ1KTtcblxuICAgIC8vIGF0dGFja0NhbnZhc0N0eC50cmFuc2xhdGUoMjIsIDIyKTtcbiAgICAvLyBhdHRhY2tDYW52YXNDdHgucm90YXRlKDQ1ICogTWF0aC5QSSAvIDE4MCk7XG4gICAgLy8gYXR0YWNrQ2FudmFzQ3R4LnRyYW5zbGF0ZSgwLCAwKTtcblxuICAgIGF0dGFja0NhbnZhc0N0eC5kcmF3SW1hZ2UoYXR0YWNrLCB4eVtudW1iZXJdWzBdLCB4eVtudW1iZXJdWzFdLCAxNTAsIDE1MCwgMCwgMCwgNDUsIDQ1KVxuXG4gICAgYmcoKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShhdHRhY2tDYW52YXMsIHgsIHkpO1xuICAgIC8vIHNpbkRyYWdvbi5kZXNlbmhhcigpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgKytudW1iZXI7XG4gICAgICAgIGF0dGFja0ZuKG51bWJlciwgeCwgeSk7XG4gICAgfSwgMTAwKVxuXG59XG5cbmNvbnN0IGluaWNpYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9ICcuL3B1YmxpYy9iZy5wbmcnO1xuXG4gICAgb2Zmc2NyZWVuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgb2Zmc2NyZWVuQ2FudmFzLndpZHRoID0gNDU7XG4gICAgb2Zmc2NyZWVuQ2FudmFzLmhlaWdodCA9IDQ1O1xuXG4gICAgY29uc3Qgb2Zmc2NyZWVuQ29udGV4dCA9IG9mZnNjcmVlbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9mZnNjcmVlbkNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAyOTAsIDQ2LCA0NiwgMCwgMCwgNDUsIDQ1KVxuXG4gICAgLy8gY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUGF0dGVybihvZmZzY3JlZW5DYW52YXMsICdyZXBlYXQnKTtcbiAgICAvLyBjb250ZXh0LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgLy8gY29udGV4dC5maWxsUmVjdCgwLCAwLCAxMDAwLCAxMDAwKTtcblxuICAgIHNpbkRyYWdvbiA9IG5ldyBQZXJzb25hZ2VtKGNvbnRleHQsICcuL3B1YmxpYy9hY3Rvci5wbmcnLCAxMCwgNCwgMywgNDksIDQ4KTtcbiAgICBzaW5EcmFnb24ueCA9IDIwMDtcbiAgICBzaW5EcmFnb24ueSA9IDIwMDtcbiAgICBkZXNlbmhhKDAsIDApXG59XG5cbmNvbnN0IGJnID0gKCkgPT4ge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4ob2Zmc2NyZWVuQ2FudmFzLCAncmVwZWF0Jyk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgNjAwLCA2MDApO1xufVxuXG5cbmNvbnN0IGRlc2VuaGEgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiBcbiAgICBiZygpO1xuICAgIHNpbkRyYWdvbi5wcm94aW1vUXVhZHJvKClcbiAgICBzaW5EcmFnb24uZGVzZW5oYXIoKVxufVxuXG5cbmNvbnN0IGVsZW1lbnRvID0gZG9jdW1lbnQ7XG5lbGVtZW50by5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50bzogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXG4gICAgbGV0IHVsdGltYVBvc2ljYW86IGFueSA9IGZhbHNlO1xuXG5cbiAgICBpZiAoZXZlbnRvLmtleUNvZGUgPT0gU0VUQV9CQUlYTykge1xuICAgICAgICB1bHRpbWFQb3NpY2FvID09IFNFVEFfQkFJWE87XG4gICAgICAgIHNpbkRyYWdvbi5saW5oYSA9IDA7XG4gICAgICAgIC8vIHNpbkRyYWdvbi5jb2x1bmEgPSAwO1xuICAgICAgICBzaW5EcmFnb24ueSArPSBzaW5EcmFnb24udmVsb2NpZGFkZTsgIC8vIEUgYXF1aSDDqSBzaW5hbCBkZSBtZW5vcyFcbiAgICAgICAgZGVzZW5oYSgwLCBzaW5EcmFnb24ueSlcbiAgICB9XG5cblxuICAgIGlmIChldmVudG8ua2V5Q29kZSA9PSBTRVRBX0NJTUEpIHtcbiAgICAgICAgdWx0aW1hUG9zaWNhbyA9PSBTRVRBX0NJTUE7XG5cbiAgICAgICAgc2luRHJhZ29uLmxpbmhhID0gMztcbiAgICAgICAgLy8gc2luRHJhZ29uLmNvbHVuYSA9IDA7XG5cbiAgICAgICAgc2luRHJhZ29uLnkgLT0gc2luRHJhZ29uLnZlbG9jaWRhZGU7ICAvLyBFIGFxdWkgw6kgc2luYWwgZGUgbWVub3MhXG4gICAgICAgIGRlc2VuaGEoMCwgc2luRHJhZ29uLnkpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50by5rZXlDb2RlID09IFNFVEFfRElSRUlUQSkge1xuICAgICAgICB1bHRpbWFQb3NpY2FvID09IFNFVEFfRElSRUlUQTtcblxuICAgICAgICBzaW5EcmFnb24ubGluaGEgPSAyO1xuICAgICAgICAvLyBzaW5EcmFnb24uY29sdW5hID0gMDtcblxuICAgICAgICBzaW5EcmFnb24ueCArPSBzaW5EcmFnb24udmVsb2NpZGFkZTsgIC8vIEUgYXF1aSDDqSBzaW5hbCBkZSBtZW5vcyFcbiAgICAgICAgZGVzZW5oYShzaW5EcmFnb24ueCwgMClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnRvLmtleUNvZGUgPT0gU0VUQV9FU1FVRVJEQSkge1xuICAgICAgICB1bHRpbWFQb3NpY2FvID09IFNFVEFfRVNRVUVSREE7XG5cbiAgICAgICAgc2luRHJhZ29uLmxpbmhhID0gMTtcbiAgICAgICAgLy8gc2luRHJhZ29uLmNvbHVuYSA9IDA7XG5cbiAgICAgICAgc2luRHJhZ29uLnggLT0gc2luRHJhZ29uLnZlbG9jaWRhZGU7ICAvLyBFIGFxdWkgw6kgc2luYWwgZGUgbWVub3MhXG4gICAgICAgIGRlc2VuaGEoc2luRHJhZ29uLngsIDApXG4gICAgfVxuXG5cbiAgICBpZiAoZXZlbnRvLmtleUNvZGUgPT0gRVNQQUNPKSB7XG4gICAgICAgIGF0dGFja0ZuKDAsIHNpbkRyYWdvbi54IC0xMCwgc2luRHJhZ29uLnkgKzE1KTtcbiAgICB9XG5cblxuXG59KTtcbiIsIlxuZXhwb3J0IGNsYXNzIFBlcnNvbmFnZW0ge1xuXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHg6IG51bWJlciA9IDA7XG4gICAgeTogbnVtYmVyID0gMDtcbiAgICB2ZWxvY2lkYWRlID0gMTtcbiAgICBhbmRhbmRvOiBib29sZWFuID0gZmFsc2U7XG4gICAgZGlyZWNhbzogbnVtYmVyO1xuICAgIGltYWdlbTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBsaW5oYTogbnVtYmVyID0gMDtcbiAgICBjb2x1bmE6IG51bWJlciA9IDA7XG4gICAgdWx0aW1vVGVtcG86IG51bWJlcjtcbiAgICBsYXJndXJhOiBudW1iZXI7XG4gICAgYWx0dXJhOiBudW1iZXI7XG4gICAgbnVtTGluaGFzOiBudW1iZXI7XG4gICAgbnVtQ29sdW5hczogbnVtYmVyO1xuICAgIERJUkVJVEE6IG51bWJlciA9IDE7XG4gICAgRVNRVUVSREE6IG51bWJlciA9IDI7XG4gICAgQ0lNQTogbnVtYmVyID0gMztcbiAgICBCQUlYTzogbnVtYmVyID0gNDtcbiAgICBpbnRlcnZhbG86IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGltYWdlU3JjOiBzdHJpbmcsIHZlbG9jaWRhZGU6IG51bWJlciwgbGluaGFzOiBudW1iZXIsIGNvbHVuYXM6IG51bWJlciwgbGFyZ3VyYTogbnVtYmVyLCBhbHR1cmE6IG51bWJlcikge1xuICAgICAgICBsZXQgc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNwcml0ZS5zcmMgPSBpbWFnZVNyYztcblxuICAgICAgICB0aGlzLmltYWdlbSA9IHNwcml0ZTtcblxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnZlbG9jaWRhZGUgPSB2ZWxvY2lkYWRlO1xuXG4gICAgICAgIHRoaXMuYW5kYW5kbyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpcmVjYW8gPSB0aGlzLkRJUkVJVEE7XG5cbiAgICAgICAgdGhpcy5udW1MaW5oYXMgPSBsaW5oYXM7XG4gICAgICAgIHRoaXMubnVtQ29sdW5hcyA9IGNvbHVuYXM7XG4gICAgICAgIHRoaXMubGluaGEgPSAwO1xuICAgICAgICB0aGlzLmNvbHVuYSA9IDA7XG4gICAgICAgIHRoaXMubGFyZ3VyYSA9IGxhcmd1cmE7XG4gICAgICAgIHRoaXMuYWx0dXJhID0gYWx0dXJhO1xuXG4gICAgICAgIHRoaXMuZGVzZW5oYXIoKTtcbiAgICB9XG5cbiAgICBwcm94aW1vUXVhZHJvKCkge1xuICAgICAgICBsZXQgYWdvcmEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICAvLyBTZSBhaW5kYSBuw6NvIHRlbSDDumx0aW1vIHRlbXBvIG1lZGlkb1xuICAgICAgICBpZiAoIXRoaXMudWx0aW1vVGVtcG8pIHRoaXMudWx0aW1vVGVtcG8gPSBhZ29yYTtcblxuICAgICAgICAvLyBKw6Egw6kgaG9yYSBkZSBtdWRhciBkZSBjb2x1bmE/XG4gICAgICAgIGlmIChhZ29yYSAtIHRoaXMudWx0aW1vVGVtcG8gPCB0aGlzLmludGVydmFsbykgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbHVuYSA8IHRoaXMubnVtQ29sdW5hcyAtIDEpXG4gICAgICAgICAgICB0aGlzLmNvbHVuYSsrO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmNvbHVuYSA9IDA7XG5cblxuICAgICAgICAvLyBHdWFyZGFyIGhvcmEgZGEgw7psdGltYSBtdWRhbsOnYVxuICAgICAgICB0aGlzLnVsdGltb1RlbXBvID0gYWdvcmE7XG5cbiAgICAgICAgdGhpcy5kZXNlbmhhcigpO1xuICAgIH1cblxuXG4gICAgZGVzZW5oYXIyKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VtLCB0aGlzLmxhcmd1cmEgKiB0aGlzLmNvbHVuYSwgdGhpcy5hbHR1cmEgKiB0aGlzLmxpbmhhLCB0aGlzLmxhcmd1cmEsIHRoaXMuYWx0dXJhLCAodGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCAvIDIpIC0gIHRoaXMubGFyZ3VyYSwgKHRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0IC8gMikgLSAgdGhpcy5hbHR1cmEsIHRoaXMubGFyZ3VyYSwgdGhpcy5hbHR1cmEpO1xuICAgIH1cblxuICAgIGRlc2VuaGFyKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VtLCB0aGlzLmxhcmd1cmEgKiB0aGlzLmNvbHVuYSwgdGhpcy5hbHR1cmEgKiB0aGlzLmxpbmhhLCB0aGlzLmxhcmd1cmEsIHRoaXMuYWx0dXJhLCB0aGlzLngsIHRoaXMueSwgdGhpcy5sYXJndXJhLCB0aGlzLmFsdHVyYSk7XG4gICAgfVxuXG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==