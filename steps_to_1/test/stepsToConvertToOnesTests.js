const stepsToConvertToOnes = require('../stepsToConvertToOnes');
const chai = require('chai');

const { expect } = chai;

describe('stepsToConvertToOne', () => {
  
  context('with a 4x4 matrix and 1\'s in each i+1', () => {
    const matrix = [
      [1,0,0,0],
      [0,1,0,0],
      [0,0,1,0],
      [0,0,0,1]
    ];
    it('returns 3', () => {
      const result = stepsToConvertToOnes(matrix);
      expect(result).to.be.equal(3);
    });
  });

  context('with a 4x5 matrix', () => {
    const matrix = [
      [0,1,1,0,1],
      [0,1,0,1,0],
      [0,0,0,0,1],
      [0,1,0,0,0]
    ];
    it('returns 2', () => {
      const result = stepsToConvertToOnes(matrix);
      expect(result).to.be.equal(2);
    });
  });

  context('with a unsolvable matrix', () => {
    const matrix = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ];
    it('returns -1', () => {
      const result = stepsToConvertToOnes(matrix);
      expect(result).to.be.equal(-1);
    });
  });
});


