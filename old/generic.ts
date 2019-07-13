// type/interface/function/class


// type TAccount<Info extends { name: string }, Id = number> = {
//    readonly id: Id;
//    readonly  info: Info[]
// };
//
// let admin: TAccount<{ name: string }> = {
//     id: 1,
//     info: [{name: 'Igor'}]
// };
// let user: TAccount<{ name: string, male: boolean }, string> = {
//     id: 'a1231adsr1',
//     info: [{name: 'Igor', male: true}]
// };
//
// let arr: Array<number> = [1];
// let a: number | undefined = arr.pop();
//
//
// type ReadolyPerson<T> = {
//     -readonly [P in keyof T]?: T[P]
// };
//
// let u1: ReadolyPerson<TAccount<{ name: string }>>  = {
//     id: 1,
// }
//
// u1.id = 1;
//
let a: Readonly

type TAccount = {
    firstName: string
};

type Fn = () => TAccount ;
type Fn1 = () => {name: string}[] ;

type TReturnType<T> = T extends (a: any) => infer R ? R : T;

let v: TReturnType<Fn1> = 1;

type NonOnlyNullable<T> = T extends {firstName: string}  ? never : T;
type TTAccount =  string | {firstName: string};
let a: NonOnlyNullable<TTAccount> = undefined;
