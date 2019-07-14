// let a: number = 1;
// let b: number = 2;
//
// function calc(_a1: number, _b1: number): void {
//     throw new Error('TS is awesome');
// }
//
// calc(a, b);
// let firstName: string = 'Igor';
// let account = {
//     firstName,
//     getName() {
//         return this.firstName;
//     }
// }
//
// let person = {...account};
// let dates = [...[1, 2, 3]];


// let {firstName: myName} = account;
// let [fitsDate] = dates;

// for (const date of dates) {
//     console.log(date);
// }
//
//
// let sum = (a: number, b: number) => a + b;
//
// class Point {
//     private x!: number = 1;
//
//     public getX() {
//         return this.x;
//     }
// }

// function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof person): string {
//     return `${start}${name}${end}`;
// }
//
// console.log(userMessage`Good day, ${person} !!`);

// enum Size {
//     S = 44,
//     M = 48,
//     XL = 52
// }
//
// let mySize = Size.S;

enum Actions {
    AddUser = 'ADD_USER',
    DeleteUser = 'DELETE_USER',
    RenameUser = 'RENAME_USER',

    RemoveUser = DeleteUser
}

function reducer(_state: number, action: { type: Actions }): number {
    switch (action.type) {
        case Actions.AddUser: {
            return 1;
        }
        case Actions.RemoveUser: {
            return 2;
        }
        default: {
            return 0;
        }
    }
}
