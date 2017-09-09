export default class Sprite {
  constructor() {
    this._position = {x: 0, y:0};
    this._velocity = {x: 0, y:0};
    this._rotation = 0;
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
      && typeof(obj.y) == "number";
  };
  
  set rotation(arg){
    if(arg && typeof(arg) == "number") {
      let rot = arg
      while(rot < 0) {
        rot = rot + 360;
      }
      this._rotation = rot % 360;
    }  
  };
  
  get rotation() {
    return this._rotation;
  }
}