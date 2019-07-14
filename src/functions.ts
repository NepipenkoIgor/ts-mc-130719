export function average(a: number, b: number, c: number): string {
    const avg: number = (a + b + c) / 3;
    return `Average is ${avg}`;
}
// average(1, 2);
// average(1, '2', 2);

// const fn = (a: number) => {
//
// };
// let num: string;
// if (true) {
//     num = average(1, 2, 2);
// } else {
//     num = average(1, 2, 2);
// }

// function average(a?: number, b?: number, c?: number): string {
//     let count = 1;
//     if (b === undefined) {
//         b = 0;
//         count++;
//     }
//     if (c === undefined) {
//         c = 0;
//         count++;
//     }
//     const avg: number = (a + b + c) / count;
//     return `Average is ${avg}`;
// }
//
// average();
// average(1);
// average(1, 2);
// average(1, 2, 3);
// average(1, '2', 2);
// type Msg = { id: number, msg: string };
//
// const fn =  (a: number, b: number = 0, c: number = 0): Msg => {
//     const avg: number = (a + b + c) / 3;
//     return {id: avg, msg: `Average is ${avg}`};
// }
//
// fn(1);
// fn(1, 2);
// fn(1, 2, 3);
// fn(1, '2', 2);
// type sn = number | string ;
//
// function isString(item: sn): item  is string {
//     return typeof item === 'string';
// }
//
// function average(...args: sn[]): string {
//     let total = 0;
//     for (const item of args) {
//         if (isString(item)) {
//             total += parseInt(item);
//             // continue;
//         } else {
//             item.
//         }
//         total += item;
//     }
//     const avg: number = total / args.length;
//     return `Average is ${avg}`;
// }
//
// average();
// average(1);
// average(1, 2);
// average(1, 2, 3);
// average(1, '2', 2, '2', '3');

// type sn = number | string;
// type snb = sn | boolean ;
//
// function average(a: number, b: string): string;
// function average(a: string, b: number): number;
// function average(a: string, b: string, c: string): boolean;
// function average(a: sn, b: sn, c?: string): snb {
//     console.log(a, b, c);
//     return '';
// }
//
// function average1(...args: sn[]): snb {
//     console.log(args);
//     return '';
// }
//
// let a: Array
// let aa: number = average('1', 2);
// average('1', 2);
// average('2', '2', '4');
// average(1, 2);
// average(1, 2, 3);
// average(1, '2', 2, '2', '3');
