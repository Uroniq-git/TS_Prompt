interface IRect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
    getWidht(): number
}

//===============
interface RectWithArea extends IRect {
    getAret(): number
}

//===============
class Rect implements IRect {
    id
    size
    constructor(id, size) {
        this.id = id
        this.size = size
    }
    getWidht(): number {
        return this.size.width
    }
}
const rect1 = new Rect(1, {width: 3, height: 4})
const wdht = rect1.getWidht()
/*console.log(wdht)*/

//=================
interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: "1px solid",
    marhinTop: '2px'
}
