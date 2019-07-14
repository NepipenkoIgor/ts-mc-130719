// class MathLib {
//     @debounce(1000)
//     public getCount(): void {
//         console.log('hi debounce');
//     }
// }
//
// let m = new MathLib();
// m.getCount();
// m.getCount();
// m.getCount();
// m.getCount();
// m.getCount();
// m.getCount();
// setTimeout(() => {
//     m.getCount();
// }, 3000);
//
// function debounce(ms: number) {
//     return function (_target: Object, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//         let timeoutId: number | null;
//         return {
//             ...descriptor,
//             value: (...args: unknown[]) => {
//                 timeoutId ? clearTimeout(timeoutId) : null;
//                 timeoutId = setTimeout(() => {
//                     descriptor.value(...args);
//                 }, ms);
//             }
//         };
//     };
// }
function logMethod(
    target: Object,
    key: string,
    _descriptor: PropertyDescriptor
) {
    console.log('1====>', Reflect.getMetadata('design:type', target, key));
    console.log('2====>', Reflect.getMetadata('design:paramtypes', target, key));
    console.log('3====>', Reflect.getMetadata('design:returntype', target, key));
    console.log('4====>', Reflect.getMetadata('design:typeinfo', target, key));

}

import 'reflect-metadata';

class MathLib {
    @Validate
    public updatePercentage(
        @Range(20, 50) a: number,
        b: number,
        @Range() c: number,
    ): void {
        console.log(a, b, c);
    }
}

const m = new MathLib();

m.updatePercentage(30, 1, 50);
m.updatePercentage(30, 1, 150);


const RANGE_KEY = 'RANGE_KEY';
type RangeMetadata = { [index: string]: [number, number] };

function Range(
    min: number = 0,
    max: number = 100
) {
    return (
        target: Object,
        key: string,
        index: number
    ) => {
        const existingRange: RangeMetadata = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    };
}

function Validate(
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
) {
    const originalValue = descriptor.value;
    descriptor.value = (...args: unknown[]) => {
        const existingRange: RangeMetadata = Reflect.getMetadata(RANGE_KEY, target, key) || {};

        for (const index of Object.keys(existingRange)) {
            const range: [number, number] = existingRange[index];
            const value: number = args[Number(index)] as number;

            if (value < range[0] || value > range[1]) {
                throw new Error(`Parameter on position ${index} of method ${key} outside of range [${range}]. Current value ${value}`);
            }
        }
        return originalValue(...args);
    };
}
