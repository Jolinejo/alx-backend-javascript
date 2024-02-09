export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    const x = `${this._name} (${this._code})`;
    return x;
  }
}
