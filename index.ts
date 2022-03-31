//Переменные
const isDone1: boolean = true
const isDone2: boolean = false

const int1: number = 4
const int2: number = 4.3
const int3: number = 3.0e10

const str1: string = "string"
const str2: string = `string`

const numbetArray1: number[]= [1, 43, 53, 2]
const numbetArray2: Array<number> = [1, 43, 53, 2]

const tupleArray1: [number, string]= [1, '1'] //[1, "1", 1, "1"] - error

//Функции
let sayMyName = (name: string) : void => {
    console.log(name)
}
sayMyName('Лох')

let throwError = (message: string): never => {
    throw new Error(message)
} //Тип never нужен для того, что показать что функция бесконечна, либо выбрасывает ошибку


//Свой типы
type Login = string
const login: Login = "admin"
//const user: Login = 123 - ERROR

type ID = string | number
const ID1 = 123
const ID2 = "11"