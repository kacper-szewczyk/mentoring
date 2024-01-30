
// Napisz funkcję, która przyjmuje tablicę generyczną i mapuje ją na tablicę
// złożoną z tych samych typów, ale w postaci obiektów z kluczami "id" i "value"
// (gdzie "id" to kolejny indeks elementu w tablicy, a "value" to wartość tego elementu).

export const mapper = <T>(array: T[]): {id: number, value: T}[] => (
  // TODO
)

const testData = [{
  foo: 'foo',
}]

// Napisz funkcję, która przyjmuje tablicę generyczną obiektów, które zawiera pole "id"
// i zwraca tablicę obiektów, które mają pole "id" i pole "value" zawierającą cały obiekt

// Napisz funkcję, która przyjmuje tablicę generyczną obiektów, które zawiera pole "id"
// i zwraca tablicę obiektów, które mają pole "id" i pole "value" zawierającą cały obiekt

type T1 = {
  id: number;
  foo: string;
}

type T2 = {
  id:number;
  bar: string;
}

type T3 = {
  id: string;
  baz: string;
}



// Napisz implementację metody, która przetwarza wejściową tablicę i zwraca id elementu i hash wartości
export const columnMapperMethod = <T>(array: T[]): {id: number, hash: number}[] => (
  []
)


