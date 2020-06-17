

let myVar:number = 10

let inferVar = 10

//inferVar = 'a String'

let numOrStr: number | string = 'a word'
numOrStr = 0

let bool:boolean
let myObj:object
let numArr: number[] = []
let jsVar: any = []
jsVar = 0

//primarily just function returns
let myVoid:void = undefined //or null
let myNul:null
let myUndef:undefined
enum Color {Red, Blue, Black}//we put in our own types
let myColor:Color
let myTuple: [number, object] = [2,{}]
let myNever:never//signifies code that you won't ever use

let myError:Error = new Error()