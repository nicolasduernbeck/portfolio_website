import View from './View';

class typeView extends View {
  _pos;
  _name;
  _interval;
  constructor() {
    super();
    8;
    this._parentEl = document.querySelector('.first__name');
    this._pos = 1;
    this._name = 'Nicolas';
  }

  type() {
    if (this._pos >= this._name.length) return clearInterval(this._interval);
    this._parentEl.innerText += this._name[this._pos];
    this._pos++;
  }

  startTypeAnimation(speed) {
    this._interval = setInterval(() => this.type(), speed);
  }
}

export default new typeView();
