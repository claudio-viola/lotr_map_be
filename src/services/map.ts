import { OutcomeReponse, Outcomes } from './interfaces';

const LOTR_MAP = [
 ['-', '-', '-', 'O', '-', '-', '-', '-', '-', 'O'],
 ['-', 'O', '-', '-', '-', 'O', '-', 'D', '-', '-'],
 ['-', '-', '-', '-', 'O', '-', '-', 'O', '-', '-'],
 ['-', 'O', '-', 'O', '-', '-', '-', '-', '-', '-'],
 ['-', '-', '-', '-', '-', 'O', '-', 'O', '-', '-'],
 ['F', '-', '-', 'O', '-', '-', '-', '-', '-', 'O'],
 ['-', '-', 'O', '-', '-', '-', '-', '-', '-', '-'],
 ['-', '-', '-', '-', '-', '-', '-', 'O', '-', '-'],
 ['-', 'O', '-', '-', 'O', 'O', '-', '-', '-', '-'],
 ['-', '-', '-', '-', '-', '-', '-', '-', 'O', '-'],
];

const INITIAL_FRODO_POSITION_Y = 5 ;
const INITIAL_FRODO_POSITION_X = 0 ;

const OUTCOMES = {
  '-': 'not_found',
  'D': 'destroyed',
  'F': 'not_found',
  'O': 'dead',
};

/**
 * [executeMovements Execute Movements on the LOTR_MAP]
 * @param  movements [comma separated list of movements (n,s,e,w)]
 * @return           [OutcomeResponse]
 */
export function executeMovements (movements: string): OutcomeReponse {
  const steps = movements.split(',');
  let y: number = INITIAL_FRODO_POSITION_Y;
  let x: number = INITIAL_FRODO_POSITION_X;

  for (let i = 0; i < steps.length; i++) {
    const newPositions = executeStep(steps[i], x, y);
    x = newPositions.newX;
    y = newPositions.newY;
    if (isOutOfMap(x, y)) {
      return {
        outcome: 'out',
      };
    }

    const currentPosition = LOTR_MAP[y][x];
    if (currentPosition === 'D' || currentPosition === 'O') {
      return {
        outcome: <Outcomes> OUTCOMES[currentPosition],
      };
    }
    if ((currentPosition === '-' || currentPosition === 'F') && i === steps.length - 1) {
      return {
        outcome: <Outcomes> OUTCOMES[currentPosition],
      };
    }
  }

  throw new Error('Error while computing outcome');
}

/**
 * [executeStep Execute a step n,s,e,w]
 * @param  step [Step to execute as string (n,s,e,w)]
 * @param  x    [x coordinate in the map]
 * @param  y    [y coordinate in the map]
 * @return      [New x,y coordinates]
 */
function executeStep (step: string, x: number, y: number): { newX: number, newY: number } {
  let newX: number = x;
  let newY: number = y;
  if (step === 'n') {
    newY = y - 1;
  } else if (step === 's') {
    newY = y + 1;
  } else if (step === 'e') {
    newX = x + 1;
  } else if (step === 'w') {
    newX = x - 1;
  }

  return { newX, newY };
}

/**
 * [isOutOfMap Checks whether coordinates are out of the LOTR map]
 * @param  x [x coordinate]
 * @param  y [y coordinate]
 * @return   [Boolean true if out of bounds , false otherwise]
 */
function isOutOfMap (x: number , y: number): boolean {
  return (y < 0 || y >= LOTR_MAP.length) || (x < 0 || x >= LOTR_MAP[y].length);
}
