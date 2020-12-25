interface Person {
    name: string;
    age: number
}

type PersonKeys = keyof Person // 'name', 'age'

let key: PersonKeys = 'name';
key = 'age';
// key = 'job' // Error

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'
type UserKeysNoMeta3 = Omit<User, '_id' | 'createdAt'>

let u1: UserKeysNoMeta1 = 'name';
// u1 = '_id'; // Error, no possibility to assign '_id'
u1 = 'email';

let u2: UserKeysNoMeta2 = {
    name: 'Josh',
    email: 'asd@gmail.com'
}

let u3: UserKeysNoMeta3 = {
    // _id: 3, // Error
    name: 'name',
    email: 'email',
    // creratedAt: '2020' // Error
}
