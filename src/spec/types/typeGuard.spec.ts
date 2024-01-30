import { columnMapperMethod, } from "../../utils/generics";

describe('Type Guards', () => {
  
  it('Check if square', () => {
   
  })


  it('Generic function with id field', () => {
    const testData = [{
      id: 1,
      field: '100'
    },{
      id: 2,
      field: '150'
    },{
      id: 4,
      field: '100'
    },{
      id: 4,
      field: '100'
    }]
    const array = columnMapperMethod(testData)

    expect(array.length).toEqual(testData.length)
    expect(array[0].id).toEqual(testData[0].id)
  })
})