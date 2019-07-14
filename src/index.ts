// type Cb = (this: UIElement, e: Event) => void;
//
// class UIElement {
//     public addClickListener(_onclick: Cb): void {
//     }
// }
//
// class Handler {
//     private info: string;
//
//     public onClick(this: Handler, _e: Event) {
//         this.info = 'ts is awesome';
//     }
//
// }
//
// let h = new Handler();
// let uiElement = new UIElement();
// uiElement.addClickListener(h.onClick)
// interface IPointX {
//     x: number;
// }
//
// interface IPointInit {
//     onInit(): void;
// }
//
// class Point implements IPointX, IPointInit {
//
//     public readonly addition: number = 3;
//
//     public constructor(
//         public readonly x: number,
//         private y: number,
//         protected readonly z: number,
//     ) {
//     }
//
//     public onInit(): void {
//         console.log(this.y, this.z);
//         this.x = this.y = 3;
//     }
//
// }
//
// const p = new Point(1, 2, 2);
// p.x = 1
// class CustomPoint extends Point {
//     public constructor(
//         x: number,
//         y: number,
//         z: number) {
//         super(x, y, z);
//     }
//
//     public onInit(): void {
//         console.log('Do something');
//         this.z = 3;
//         super.onInit();
//     }
// }
//
// const p1 = new CustomPoint(1, 2, 2);
// p1.


// class Singleton {
//     private static instance: Singleton;
//
//     private constructor() {
//
//     }
//
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
//
// const ins1 = Singleton.getInstance();
// const ins2 = Singleton.getInstance();
// const ins3 = Singleton.getInstance();
//
// console.log(ins1 === ins3)

// tslint:disable-next-line
// type Constructable = new (...args: any[]) => {};
//
// // TODO why use generic and lost type in result when don't use it ???
// // TODO <BaseClass extends Constructable>(Base: BaseClass) more examples
// // tslint:disable-next-line
// function Timestamped<BaseClass extends Constructable>(Base: BaseClass) {
//     return class extends Base {
//         public timestamped = new Date();
//     };
// }
//
// // tslint:disable-next-line
// function Tagged<BaseClass extends Constructable>(Base: BaseClass) {
//     return class extends Base {
//         public tags = ['ts', 'js'];
//     };
// }
//
// class Point {
//     public constructor(
//         public x: number,
//         public y: number
//     ) {
//     }
// }
//
// class TaggedPoint extends Tagged(Point) {
// }
// const tpoint = new TaggedPoint(1, 2);
//
// class SpecialPoint extends Timestamped(Tagged(Point)) {
// }
//
// const point = new SpecialPoint(1, 2);
//
// function fn() {
// }


abstract class AbstractControl {
    protected abstract value: any;

    public abstract getValue(): any;

    public onFocus(): void {

    }

    public onBlur(): void {

    }
}

class DropDown extends AbstractControl {
    protected value = [{value: 1, name: ''}];

    public getValue(): any {
        return this.value;
    }
}
