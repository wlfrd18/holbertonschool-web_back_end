export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('code must be a string');
    }
    if (typeof name !== 'string') {
      throw TypeError('name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    if (typeof newcode !== 'string') {
      throw TypeError('code must be a string');
    }
    this._code = newcode;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') {
      throw TypeError('name must be a string');
    }
    this._name = newname;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
