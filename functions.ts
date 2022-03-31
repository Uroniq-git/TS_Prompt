let add = (a: number, b: number): number => {
    return a+b
}

let toUppercase = (str: string): string => {
    return str.trim().toUpperCase()
}

interface IPosition {
    x: number | undefined
    y: number | undefined
}

interface IPositionWithDefault extends IPosition {
    default: string
}

//Перегрузка функий
function position(): IPosition
function position(a: number): IPositionWithDefault
function position(a: number, b: number): IPosition

function position(a?: number, b?: number) {
    if(!a && !b) {
        return {x: undefined, y: undefined}
    }
    if(a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}
console.log('Emty: ', position())
console.log('One param', position(42))
console.log('Two params: ', position(30, 14))
//Emty:  { x: undefined, y: undefined }
//One param { x: 42, y: undefined, default: '42' }
//Two params:  { x: 30, y: 14 }