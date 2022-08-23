
import is from '@anzerr/type.util';

console.log(__filename, is);
export class Valid {

    static isString(str: string): boolean {
        return is.string(str);
    }

}
