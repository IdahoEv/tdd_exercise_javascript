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
  });
});
