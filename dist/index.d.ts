declare module 'string-map' {
    type value = string | number | object;

    export default class StringMap<K, V> {
        public _values: object;

        constructor();

        get(key: K): V;
        set(key: K, value: V): void;
        exists(key: K): boolean;
        remove(key: K): boolean;
        keys(): K[];
        toString(formatted?: boolean, ident?: string): string;
    }
}
