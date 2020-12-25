// 1. How to convert an array of objects to object with key-value pairs?
const data = [
    { key1: 'val1' },
    { key2: 'val2' },
];

const obj = Object.assign({}, ...data);
console.log(obj); // { key1: 'val1', key2: 'val2' }

// 2. How to Exclude property from type interface?
interface User {
    _id: string;
    name: string;
}

type UserOmit = Omit<User, '_id'>;

let user: UserOmit = { name: 'Name' };

// 3. How to convert a string to a number in TypeScript?
console.log(Number('123')); // => 123
console.log(+'123'); // => 123
console.log(parseInt('123')); // => 123
console.log(parseFloat('123.45')); // => 123.45

// 4. How to Enforce the type of the indexed members of a Typescript object?
interface dataMap {
    [name: string]: number;
}

const data1: dataMap = {
    'abc': 34,
    'cde': 40,
    // 'pid': '17' // Error Type
}

// 5. How to remove whitespace from a string in typescript?
const str = 'test test';
console.log(str.replace(/\s/g, '')); // => testtest

// 6. How to restrict type with no properties from accepting strings or arrays?
interface data {
    val1?: number;
    val2?: string;
}

interface notArray {
    forEach?: void
}

type type = data & object & notArray;
function test(arg: type) {}

// test("test"); // Throws error
// test([]); // Throws error
test({})

// 7. How to use Map in TypeScript?
interface IData {
    name: string;
}

type dataType = Record<string, IData>;

const data2: dataType = {
    'val1': { name: 'test1' },
    'val2': { name: 'test2' },
};

// 8. How to initialize Map from an array of key-value pairs?
const data3 = [['key1', 'value1'], ['key2', 'value2']] as const;
const data4: Array<[string, string]> = [['key1', 'value1'], ['key2', 'value2']];
const data5 = [['key1', 'value1'] as ['key1', 'value1'], ['key2', 'value2'] as ['key2', 'value2']];

// 9. How to create an instance from the interface?
interface IData {
    val1: number;
    val2: string;
}

const object = {} as IData;
const array = [] as Array<IData>;

// 10. How can I cast custom type to primitive type?
type Data = 0 | 1 | 2 | 3 | 4 | 5;

let myData: Data = 4
let data6: number = myData;

// 11. How to dynamically assign properties to an object in TypeScript?
interface MyType {
    typesafeProp1?: number,
    requiredProp1: string,
    [key: string]: any
}

let obj3: MyType ;
obj3 = { requiredProp1: "foo"}; // valid
// obj3 = {} // error. 'requiredProp1' is missing
// obj3.typesafeProp1 = 'bar' // error. typesafeProp1 should be a number

obj3.prop = "value";
obj3.prop2 = 88;

// -------------------------------------
let obj4: {[k: string]: any} = {};
let obj5: Record<string, any> = {};

interface MyType extends Record<string, any> {
    typesafeProp1?: number;
    requiredProp1: string;
}

