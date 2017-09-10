import '../vendor/modernizr.min.js';

export function getSessionItem(key: string): string | null {
    if (!Modernizr.sessionstorage) return null;

    let result = sessionStorage.getItem(key);
    if (result === 'false') result = '';
    return result;
}

export function setSessionItem(key: string, value: string): boolean {
    const available = Modernizr.sessionstorage;
    if (available) sessionStorage.setItem(key, value);
    return available;
}

export function getLocalItem(key: string): string | null {
    if (!Modernizr.localstorage) return null;

    let result = localStorage.getItem(key);
    if (result === 'false') result = '';
    return result;
}

export function setLocalItem(key: string, value: string): boolean {
    const available = Modernizr.localstorage;
    if (available) localStorage.setItem(key, value);
    return available;
}
