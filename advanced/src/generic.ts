// ============================= Generics ================================

const cars: string[] = ['ford', 'audi'];
const cars2: Array<string | number> = ['ford', 'audi', 123];

const promise: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)
});

promise.then(data => {
    console.log(data)
});

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: 'Andrii' }, { age: 35 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });

// const merged3 = mergeObjects({ a: 1 }, 'bbb');

console.log(merged.name);
console.log(merged2);
// console.log(merged3);

// ============================= Generics ================================
interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `In this object ${value.length} symbols`
    }
}

console.log(withCount('Hello Typescript'));
console.log(withCount(['I', 'am', 'array']));
console.log(withCount({length: 20}));

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
}

const person = {
    name: 'Andrii',
    age: 35,
    job: 'JS'
}

getObjectValue(person, 'name');
getObjectValue(person, 'age');
getObjectValue(person, 'job');

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item);
    }

    get items(): T[] {
        return this._items
    }
}

const string = new Collection<string>(['I', 'am', 'strings']);
string.add('!');
string.remove('am')
console.log(string.items);

const numbers = new Collection<number>([1, 2, 3]);
numbers.add(2);
numbers.remove(3)
console.log(numbers.items);

// const objects = new Collection([{ a: 1 }, { b: 2 }]);
// objects.remove({ b: 2 });
// console.log(objects);

// ============================= Generics ================================

interface ICar {
    model: string;
    year: number;
}

function createAndValidateCar(model: string, year: number): ICar {
    const car: Partial<ICar> = {};

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }

    return car as ICar;
}

const cars3: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars3.shift() Error

const ford: Readonly<ICar> = {
    model: 'Ford',
    year: 2012
}

// ford.model = 'Ferrari'; // Error because read only
























