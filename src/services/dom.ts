export function eID(id: string) {
    const el = document.getElementById(id);
    if (!el) throw new ReferenceError(`Element with ID ${id} does not exist!`);
    return el;
}
