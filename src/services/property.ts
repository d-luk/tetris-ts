export default class Property<T> {
    private _value: T;

    public get value() {
        return this._value;
    }

    public set value(x) {
        this._value = x;
    }

    constructor(initialValue: T) {
        this._value = initialValue;
    }
}