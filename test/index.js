require('dotenv').config();
const Sportlich = require('../dist');
const expect = require('expect.js');

const sportlich = new Sportlich();

describe('test Sportlich', function() {
  this.timeout(10000);

  it('Should greet', function() {
    expect(sportlich.greet('Sue', true)).to.be('Hello, Sue!');
  });
});
