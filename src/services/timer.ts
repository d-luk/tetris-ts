export default class Timer {
    private _handle: number|undefined;
    private readonly _handler: () => void;
    private readonly _interval: number;
    private readonly _repeat: boolean;
    private _running = false;

    public get running() { return this._running; }

    constructor(handler: () => void, interval: number, repeat = true) {
        this._handler = handler;
        this._interval = interval;
        this._repeat = repeat;
    }

    public start(executeOnInit = false): void {
        if (executeOnInit) {
            this._handler();
            if (!this._repeat) return;
        }

        this.stop();

        this._handle = (
            this._repeat
                ? setInterval
                : setTimeout
        )(() => {
            this._handler();
            this._running = false;
        }, this._interval);
        this._running = true;
    }

    public stop(): void {
        (
            this._repeat
                ? clearInterval
                : clearTimeout
        )(this._handle);
        this._running = false;
    }

}
