import { expect } from 'chai';
import Sprite from '../src/Sprite';

describe('Sprite', () => {
  describe('Getting and setting properties', () => {
    it('sets the velocity if the argument is properly formatted', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, y: 2.0 };
      expect(sprite.velocity).to.eql({ x: 1.0, y: 2.0 });
    });
    it('doesn\'t set the velocity if the argument contains invalid values', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, z: 2.0 };
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });
    });
    it('doesn\'t set the velocity if the arguments are strings', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: "hello", y: "number" };
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });      
    });
    
    it('sets the velocity if the argument is properly formatted', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, y: 2.0 };
      expect(sprite.velocity).to.eql({ x: 1.0, y: 2.0 });
    });
    it('doesn\'t set the velocity if the argument contains invalid values', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: 1.0, z: 2.0 };
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });
    });
    it('doesn\'t set the velocity if the arguments are strings', () => {
      const sprite = new Sprite();
      sprite.velocity = { x: "hello", y: "number" };
      expect(sprite.velocity).to.eql({ x: 0.0, y: 0.0 });      
    });    


    
  });
  
  
  describe('Instantiation', () => {
    
    it('has default x and y coordinates', () => {
      const sprite = new Sprite();
      expect(sprite.velocity).to.not.be.undefined;
      expect(sprite.velocity.x).to.eql(0);
      expect(sprite.velocity.y).to.eql(0);      
    });    
    it('has default velocity', () => {
      const sprite = new Sprite();
      expect(sprite.velocity).to.not.be.undefined;
      expect(sprite.velocity.x).to.eql(0);
      expect(sprite.velocity.y).to.eql(0);      
    });
    it('has default rotation', () => {
      const sprite = new Sprite();
      expect(sprite.rotation).to.eql(0);      
    });    
  });
});
