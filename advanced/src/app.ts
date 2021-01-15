console.log('App TS');

class Person {
    constructor(private name: string) {}
}

// Demo comment
const pers = new Person('Maxim');

// const btn = document.querySelector('.btn')!
//
// btn.addEventListener('click', () => {
//     console.log('Btn clicked');
// });

let anyFlag;

function logInfo(data: string) {
    anyFlag = true;
    console.log(data);
    console.log(anyFlag);
}

export {}