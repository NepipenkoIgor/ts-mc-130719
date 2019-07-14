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
