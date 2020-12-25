// Constantes
const BLACK = 'black';
const WHITE = 'white';
const SIZE = 10;
const N = 101;
const APP = $('#app');
const TOP = 'TOP';
const DOWN = 'DOWN';
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';

// States
let POS = { x: Math.trunc(N/2), y: Math.trunc(N/2) };
var V = TOP;
var i = 0;

var plan = Array(N);
for (var i=0; i<N; i++) {
  plan[i] = Array(N).fill(WHITE);
}

setInterval(() => {

  APP.append(`
    <div style="
      position: absolute;
      top: ${POS.y*SIZE}px;
      left: ${POS.x*SIZE}px;
      width: ${SIZE}px;
      height: ${SIZE}px;
      background-color: ${plan[POS.x][POS.y]};
    ">
    </div>
  `);

  i += 1;

  console.log(i);

  let Vx, Vy;

  if (plan[POS.x][POS.y] == BLACK) {
    plan[POS.x][POS.y] = WHITE;
    switch (V) {
      case TOP:   Vx = -1; Vy =  0; V = LEFT; break;
      case DOWN:  Vx =  1; Vy =  0; V = RIGHT; break;
      case LEFT:  Vx =  0; Vy =  1; V = DOWN; break;
      case RIGHT: Vx =  0; Vy = -1; V = TOP; break;
    }
  } else {
    plan[POS.x][POS.y] = BLACK;
    switch (V) {
      case TOP:   Vx =  1; Vy =  0; V = RIGHT; break;
      case DOWN:  Vx = -1; Vy =  0; V = LEFT; break;
      case LEFT:  Vx =  0; Vy = -1; V = TOP; break;
      case RIGHT: Vx =  0; Vy =  1; V = DOWN; break;
    }
  }

  APP.append(`
    <div style="
      position: absolute;
      top: ${POS.y*SIZE}px;
      left: ${POS.x*SIZE}px;
      width: ${SIZE}px;
      height: ${SIZE}px;
      background-color: ${plan[POS.x][POS.y]};
    ">
    </div>
  `);

  POS = {
    x: POS.x+Vx,
    y: POS.y+Vy,
  }

}, 500);