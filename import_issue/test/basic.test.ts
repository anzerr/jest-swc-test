
console.log(__filename, 'before');
import {
    TypeMock,
    DummyValid
} from './mock';
import {Valid} from '../src/index';
console.log(__filename, 'after');

describe('test', () => {

    it('is mock working', async () => {
        expect(Valid.isString('test' as any)).toBe(false);
        expect(Valid.isString(1 as any)).toBe(false);
        expect(Valid.isString(false as any)).toBe(false);
        expect(Valid.isString(true as any)).toBe(false);
        expect(Valid.isString({} as any)).toBe(false);
        expect(Valid.isString([] as any)).toBe(false);
        expect(TypeMock.instance.callCount).toBe(6);
        expect((new DummyValid()).isString(1)).toBe(true);
    });

});