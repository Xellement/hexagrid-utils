export class Hexa<T> {
  private readonly _q: number;
  private readonly _r: number;
  private readonly _s: number;
  private _data!: T;

  constructor(q: number, r: number, s: number, data: T) {
    if (q + r + s !== 0) throw new Error('q + r + s must be 0');
    this._q = q; // q = x
    this._r = r; // r = z
    this._s = s; // s = y
    this._data = data;
  }

  get q(): number {
    return this._q;
  }

  get r(): number {
    return this._r;
  }

  get s(): number {
    return this._s;
  }

  get data(): T {
    return this._data;
  }

  public equals = (hexa: Hexa<T>): boolean => {
    return this.q === hexa.q && this.r === hexa.r && this.s === hexa.s;
  };

  public dist = (hexa: Hexa<T>): number => {
    return Math.max(Math.abs(this.q - hexa.q), Math.abs(this.r - hexa.r), Math.abs(this.s - hexa.s));
  };

  public toString = (): string => {
    return `Hexa:{q:${this._q};r:${this._r};s:${this._s};type:${typeof this._data}}`;
  };
}
