import { expect } from 'chai';
import Sprite from '../src/Sprite';

describe('Sprite', () => {
  describe('Instantiation', () => {
    
    it('has default x and y coordinates', () => {
      const sprite = new Sprite();
      expect(sprite.position).to.not.be.undefined;
      expect(sprite.position.x).to.eql(0);
      expect(sprite.position.y).to.eql(0);      
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
