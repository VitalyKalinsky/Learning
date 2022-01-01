describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} в степени 3 будет ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});


function pow(x, n) {
  
  if(n<=0) return;

  let result = 1;
  for(let i = 0; i<n; i++){
    result*=x;
  }

  return result;
}