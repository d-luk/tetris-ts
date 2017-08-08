export function findIndex<T>(array: T[], predicate: (item: T, index: number) => boolean): number | undefined {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (predicate(value, i)) {
            return i;
        }
    }
}

export function findAny<T>(array: T[], predicate: (item: T, index: number) => boolean): boolean {
    return typeof findIndex(array, predicate) !== 'undefined';
}
