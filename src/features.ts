let a: number = 1;
let b: number = 2;

function calc(_a1: number, _b1: number): void {
    throw new Error('TS is awesome');
}

calc(a, b);
