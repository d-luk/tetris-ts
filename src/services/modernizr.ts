import '../vendor/modernizr.min.js';

export default function loadTouchDetection(): void {
    if (Modernizr.touchevents) {
        const root = document.getElementsByTagName('html')[0];
        root.classList.add('touch');

        if (isMobileSafari()) {
            root.classList.add('ios-safari');
        }
    }
}

function isMobileSafari(): boolean {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iP(ad|od|hone)/i);
    const webkit = !!ua.match(/WebKit/i);
    return iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/OPiOS/i);
}
