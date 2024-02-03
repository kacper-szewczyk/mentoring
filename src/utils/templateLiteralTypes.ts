// Basic
type Greeting = "Hello, " | "Hi, " | "Hola, ";
type Language = "English" | "French" | "Spanish";


type GreetingLanguage = 'Hello, English' | 'Hello, French' | 'Hello, Spanish' | 'Hi, English' | 'Hi, French' | 'Hi, Spanish' | 'Hola, English' | 'Hola, French' | 'Hola, Spanish';

// Napisz typ, który będzie zawierał wszystkie możliwe kombinacje powyższych typów z wykorzystaniem template literal types

export type GreetingLanguageTemplate = ''; // TODO


// Advanced

// Napisz typ generyczny, obiektu który przyjmuje klucze z prefixem "sp_" i wartości z enuma

// enum
enum ObjectKeys {
    key1 = 'key1',
    key2 = 'key2',
    key3 =  'key3',
}

// wykorzystaj template literal types i keyof

export type ObjectWithPrefix = {}; // TODO

// wykorzystaj template literal types i typ pomocniczy z TS


export type TSObjectWithPrefix = {}; // TODO

// Advanced 2

// Napisz metodę generyczna, która przyjmuje obiekt, którego klucz o nazwie "uid" jest musi zgadzać się z template literalem
// Metoda zwraca obiekt, który ma pole "uid" w niezmienionej formie oraz value - wartość klucza "uid" 

type Id = `id_${number}`;

export const idMapper = () => [] as {uid: Id, value: number}[]; // TODO
