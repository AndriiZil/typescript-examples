class TypeScript {
    version: string;

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

class TSCar { // The same as class Car
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

class Animal {
    protected voice: string = '';
    public color: string = 'black';

    private go() { // Only in this class
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
// cat.voice // Error
console.log(cat.color); // => black

// ======================================

abstract class Component {
    abstract render(): void
    abstract info(): string
}

// Abstract classes are not compiled
class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }

    info(): string {
        return 'this is info';
    }
}
