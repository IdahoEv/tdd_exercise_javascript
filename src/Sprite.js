export default class Sprite {
  constructor() {
    this._position = {x: 0, y:0};
    this.velocity = {x: 0, y:0};
    this.rotation = 0;
  }

  set position(arg){
    if(arg){
      this._position = arg;
    }
  };
  
  get position(){
    return this._position;
  };
}