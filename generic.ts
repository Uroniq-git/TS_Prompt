const arrayofNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayofStrings: Array<string> = ['hello', '2']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}
reverse(arrayofNumbers)
reverse(arrayofStrings)