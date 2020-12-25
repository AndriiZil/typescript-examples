var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 1. How to convert an array of objects to object with key-value pairs?
var data = [
    { key1: 'val1' },
    { key2: 'val2' },
];
var obj = Object.assign.apply(Object, __spreadArrays([{}], data));
console.log(obj); // { key1: 'val1', key2: 'val2' }
var user = { name: 'Name' };
// 3. How to convert a string to a number in TypeScript?
console.log(Number('123')); // => 123
console.log(+'123'); // => 123
console.log(parseInt('123')); // => 123
console.log(parseFloat('123.45')); // => 123.45
var data = {
    'abc': 34,
    'cde': 40
};
// 5. How to remove whitespace from a string in typescript?
var str = 'test test';
console.log(str.replace(/\s/g, ''));
