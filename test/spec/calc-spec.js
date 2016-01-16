var assert = chai.assert,  
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

describe('calc', function(){
  
  describe('add', function(){
    it('should get result when add two number', function(){
      expect(4+5).to.equal(9);
      (4+5).should.equal(9);
    })
  })

})
