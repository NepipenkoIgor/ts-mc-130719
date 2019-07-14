import { average } from './functions';


describe('Test functions', () => {
    it('average should work', () => {
        expect(average(2, 4, 6)).toEqual(`Average is 4`);
    });
});
