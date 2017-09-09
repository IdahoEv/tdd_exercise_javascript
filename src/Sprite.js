export default class Sprite {
  constructor() {
    this._position = {x: 0, y:0};
    this._velocity = {x: 0, y:0};
    this.rotation = 0;
  }

  set position(arg){
    if(this.isValidObjectWithXY(arg)){
      this._position = arg;
    }
  };
  
  get position(){
    return this._position;
  };
  
  set velocity(arg){
    if(this.isValidObjectWithXY(arg)){
      this._velocity = arg;
    }
  };
  
  get velocity(){
    return this._velocity;
  };
  
  isValidObjectWithXY(obj){
    return obj 
      && obj.x 
      && obj.y 
      && typeof(obj.x) == "number" 
      && typeof(obj.y) == "number"
  };
}