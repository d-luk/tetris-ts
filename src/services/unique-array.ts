export default class UniqueArray<T> {
    private _array: T[] = [];

    public get count() { return this._array.length; }
    public get values() { return this._array; }

    public add(value: T): void {
        if (!this.contains(value)) {
            this._array.push(value);
        }
    }

    public remove(value: T): void {
        const index = this._array.indexOf(value);
        if (index >= 0) {
            this._array.splice(index, 1);
        }
    }

    public contains(value: T): boolean {
        return this._array.indexOf(value) >= 0;
    }
}
