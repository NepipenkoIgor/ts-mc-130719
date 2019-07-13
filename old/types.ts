let num: number = 1;
let num1: number;
num1 = 2;
let num2 = 2;
num2 = 0xf00d;
let bool: boolean = true;
let str: string = 'string';
let nill: null = null;
let und: undefined = undefined;

let bigInt: bigint = 4n;

const key1: unique symbol = Symbol('Foo');
let key2: symbol = Symbol('Bar');

let strictObj = {
    [key1]: 100,
    [key2]: 'TS',
}

let v1 = strictObj[key1];

function fn(_value: typeof key1) {

}

fn(key1);
fn(key2);

//let msg = msg1 + '!!!';

// type Digit = 1 | 2 | 3 | 4 | 5;
//
// let num: Digit = 100;

declare function animate(options: IAnimation): void;

interface IAnimation {
    delay: number;
    easing: 'ease-in' | 'easy-out';
}

animate({delay: 1000, easing: 'ease-in'});
let anyType: any = {};
anyType.a.a = 1;
anyType = 1;
anyType();

let unknownType: unknown = {};
unknownType.a.a = 1;
unknownType = 1;
unknownType();


let vd: void = undefined;

function fn(): void {

}

// type TAccount = {
//     readonly firstName: string;
//     age?: number;
// }
//
// const user: TAccount = {
//     firstName: 'Igor',
// };
//
// user.firstName = 'Vlad';
//
// let myName: TAccount['firstName'] = 'Igor';
//
// let keys: keyof TAccount = 'age'

// interface IFact {
//     factsId: number;
//     userId: number;
// }
//
// type IFactKeys = keyof IFact;
//
// const ubiqueValue = (): IFactKeys => {
//     return 'factId';
// }
//
//
// const dataList: { action: string, data: IFact } [] = [];
//
// dataList.map((item: { action: string, data: IFact }) => {
//     if (item.data[ubiqueValue()] === 2) {
//
//     }
//     return item;
// })

let arr: readonly number[] = [1, 1, 2];

arr[100] = 3;
arr.push(1);

let tupleArr: readonly [number, string] = [1, 'Igor'];
tupleArr[100] = 3;
tupleArr.push(1);


let x = 10 as const;
x = 2;

let y = [10, 20] as const;
y[100] = 3;
y.push(1);


let z = {firstName: 'Igor', age: 33, info: [1, 2, 3]} as const;
z.firstName = 2;
z.age = 2;
z.info.push(1);
