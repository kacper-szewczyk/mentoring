// Napisz funkcję, która sprawdza typ przekazanego argumentu i zwraca odpowiednią wartość w zależności od typu z wykorzystaniem typeof
const foo = (value: unknown): void => {
  
}


// Napisz funkcję, która sprawdza czy obiekt zawiera odpowiednie pole i zwraca zawartość 
// tego pola lub rzuca wyjątek z wykorzystaniem operatora in

//const checkProperty = (object: object): 

type Square = {
  sideLength: number;
}

type Rectangle = {
  width: number;
  height: number;
}

const calculateArea = (shape: Square | Rectangle): number | never => {
  
}
