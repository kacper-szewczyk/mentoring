import exp from "constants";
import { ObjectWithPrefix, TSObjectWithPrefix, idMapper } from "../../utils/templateLiteralTypes";

describe('Template Literal types', () => {
  
  it('ObjectWithPrefix has required properties', () => {
    const obj: ObjectWithPrefix = {}
    expect(Object.getOwnPropertyNames(obj)).toContain('sp_key1');
    expect(Object.getOwnPropertyNames(obj)).toContain('sp_key2');
    expect(Object.getOwnPropertyNames(obj)).toContain('sp_key3');
  });


  it('TSObjectWithPrefix has required properties', () => {
    const obj: TSObjectWithPrefix = {}
    expect(Object.getOwnPropertyNames(obj)).toContain('sp_key1');
    expect(Object.getOwnPropertyNames(obj)).toContain('sp_key2');
    expect(Object.getOwnPropertyNames(obj)).toContain('sp_key3');
  });

  it('idMapper returns correct object', () => {
    const obj = {
      uid: 'id_1',
      name: 'test'
    }
    const result = idMapper(obj)
    expect(result[0].uid).toEqual('id_1')
    expect(result[0].value).toEqual(1)
  })
})