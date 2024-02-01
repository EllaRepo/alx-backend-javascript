const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculate = require('./2-calcul_chai');

describe('calculate function', () => {
  describe('sUM', () => {
    it('should add two whole numbers when type is SUM', () => {
      expect(calculate('SUM', 3, 4)).to.equal(7);
    });

    it('should add two decimal numbers when type is SUM', () => {
      expect(calculate('SUM', 3.5, 2.5)).to.equal(7);
    });

    it('should handle negative whole numbers correctly', () => {
      expect(calculate('SUM', -3, 4)).to.equal(1);
    });
  });

  describe('sUBTRACT', () => {
    it('should subtract two whole numbers when type is SUBTRACT', () => {
      expect(calculate('SUBTRACT', 8, 3)).to.equal(5);
    });
    it('should handle negative whole numbers correctly', () => {
      expect(calculate('SUBTRACT', -8, -3)).to.equal(-5);
    });

    it('should subtract two decimal numbers when type is SUBTRACT', () => {
      expect(calculate('SUBTRACT', 8.7, 3.2)).to.equal(6);
    });
  });

  describe('dIVIDE', () => {
    it('should divide two whole numbers when type is DIVIDE', () => {
      expect(calculate('DIVIDE', 10, 2)).to.equal(5);
    });

    it('should return "Error" when attempting to divide by 0', () => {
      expect(calculate('DIVIDE', 7, 0)).to.equal('Error');
    });

    it('should handle negative whole numbers correctly', () => {
      expect(calculate('DIVIDE', -10, 2)).to.equal(-5);
    });

    it('should divide two decimal numbers when type is DIVIDE', () => {
      expect(calculate('DIVIDE', 11.5, 2.5)).to.equal(4);
    });
  });
});
