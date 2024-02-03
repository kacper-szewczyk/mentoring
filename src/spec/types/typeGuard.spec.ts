import { Shape, isRectangle, isSquare } from "../../utils/typeGuard";

describe('Type Guards', () => {
  
  it('Check if square', () => {
    const shape: Shape = { sideLength: 10 }
    expect(isSquare(shape)).toBeTruthy()
  })

  it('Check if rectangle', () => {
    const shape: Shape = { height: 100, width: 10}
    expect(isRectangle(shape)).toBeTruthy()
  });

})