class Typescript {
    version: string

    constructor(version) {
        this.version = version
    }

    info (name: string) : string {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

/*
class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel) {
        this.model = theModel
    }
}*/

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}
//===================

class Animal {
    protected voice: string = ''
    public color: string = "black"
    private go() {
        console.log("go")
    }
}

class Cat extends Animal {
    public SetVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
// cat.go() - err

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render() {
        console.log('render')
    }
    info(): string {
        return "Info";
    }
}