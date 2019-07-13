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
