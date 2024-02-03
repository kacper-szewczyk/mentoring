
// Basic types
type Square = {
  sideLength: number;
}

type Rectangle = {
  width: number;
  height: number;
}

export type Shape = Square | Rectangle;

export const isSquare = (shape: Shape): shape is Square => {
  // TODO: implementacja
  return false;
}

export const isRectangle = (shape: Shape): shape is Rectangle => {
  // TODO: implementacja
  return false;
}



// Advanced types
// Napisz type guard, który sprawdzi czy dany obiekt jest typu Shape

export const isShape = (shape: unknown): shape is Shape => {
  return false;
}


