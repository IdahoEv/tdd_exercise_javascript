export default class Sprite {
  constructor() {
    this._position = {x: 0, y:0};
    this._velocity = {x: 0, y:0};
    this.rotation = 0;
  }

  set position(arg){
    if(arg && arg.x && arg.y && typeof(arg.x) == "number" && typeof(arg.y) == "number"){
      this._position = arg;
    }
  };
  
  get position(){
    return this._position;
  };
  set velocity(arg){
    if(arg && arg.x && arg.y){
      this._velocity = arg;
    }
  };
  
  get velocity(){
    return this._velocity;
  };
}