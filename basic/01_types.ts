const isFeatching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';

const numberArray: number[] = [1, 2, 3, 5, 8];
const numberAray2: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Andrii', 12345678];

// Any
let variable: any = 42;

variable = 'new string';

// ===
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Hello TS');

// Never
function throwError(message: string): never {
    throw new Error('Error');
}

function infinite(): never {
    while (true) {

    }
}

// Type
type Login = string;

const login: Login = 'admin';
// const login2: Login = 50; // Error

type ID = string | number;
const id: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true; // Error

type SomeType = string | null | undefined;
