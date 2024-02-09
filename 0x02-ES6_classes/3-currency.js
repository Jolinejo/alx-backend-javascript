export default class Currency {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    const x = `${this._name} (${this._code})`;
    return x;
  }
}
