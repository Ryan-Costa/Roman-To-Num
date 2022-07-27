const romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  function convert(){
    var typedValue = document.getElementById('typedValue').value.toUpperCase();
    var result = 0;
    
    for(let c of typedValue){
      romanToNum[c];
      result += romanToNum[c];
    }
    
    document.querySelector('#inputResult').value = result;
}

  