import View from './View';

class typeView extends View {
  _pos;
  _name;
  _interval;
  constructor() {
    super();
    8;
    this._parentEl = document.querySelector('.last__name');
    this._name = 'Dürnbeck';
    this._pos = this._name.length - 2;
  }

  type() {
    if (this._pos === -1) return clearInterval(this._interval);
    this._parentEl.textContent = this._name[this._pos] + this._parentEl.textContent;
    this._pos--;
  }

  startTypeAnimation(speed) {
    this._interval = setInterval(() => this.type(), speed);
  }
}

export default new typeView();
