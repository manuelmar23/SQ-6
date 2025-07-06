
// Use Chai's expect for assertions
const expect = chai.expect;

describe('Integer to Roman Conversion', function() {
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal("I");
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal("MMMCMXCIX");
  });

  it('should convert 58 to "LVIII"', function() {
    expect(integerToRoman(58)).to.equal("LVIII");
  });

  it('should convert 4 to "IV"', function() {
    expect(integerToRoman(4)).to.equal("IV");
  });

  it('should throw an error for input 0', function() {
    expect(() => integerToRoman(0)).to.throw();
  });

  it('should throw an error for input -5', function() {
    expect(() => integerToRoman(-5)).to.throw();
  });

  it('should throw an error for input 4000', function() {
    expect(() => integerToRoman(4000)).to.throw();
  });
});

describe('Roman to Integer Conversion', function() {
  it('should convert "I" to 1', function() {
    expect(romanToInteger("I")).to.equal(1);
  });

  it('should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger("MMMCMXCIX")).to.equal(3999);
  });

  it('should convert "XC" to 90', function() {
    expect(romanToInteger("XC")).to.equal(90);
  });

  it('should throw an error for empty string', function() {
    expect(() => romanToInteger("")).to.throw();
  });

  it('should throw an error for invalid characters "ABC"', function() {
    expect(() => romanToInteger("ABC")).to.throw();
  });

  it('should throw an error for non-canonical numeral "IIII"', function() {
    expect(() => romanToInteger("IIII")).to.throw();
  });
});
