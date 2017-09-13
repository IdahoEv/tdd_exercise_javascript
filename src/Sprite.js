export default class Sprite {
  constructor() {
    this._position = { x: 0.0, y: 0.0 }
    this._velocity = { x: 0.0, y: 0.0 }
    this._rotation = 0;
  }

  get position() {
    return this._position;
  }
  set position(arg) {
    this._position = arg;
  }
  get velocity() {
    return this._velocity;
  }
  set velocity(arg) {
    this._velocity = arg;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(arg) {
    this._rotation = arg;
  }


}
