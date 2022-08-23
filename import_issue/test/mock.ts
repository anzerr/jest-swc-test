
console.log(__filename);

export class TypeMock {

    static instance = new TypeMock();

    public callCount: number;

    constructor() {
        this.callCount = 0;
    }

    static mock(): void {
        console.log('mock created');
        jest.mock('@anzerr/type.util', () => {
            return TypeMock.instance;
        }, {virtual: true});
    }

    string(str: any): boolean {
        this.callCount += 1;
        return false;
    }

}
TypeMock.mock();

// importing this will cause it to load "Valid" before running the mock code
import {Valid} from '../src/index';
// class Valid {};

export class DummyValid extends Valid {

    isString(str: any): boolean {
        return true;
    }

}
