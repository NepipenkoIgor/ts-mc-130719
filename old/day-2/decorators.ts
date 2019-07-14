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
