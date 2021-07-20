module.exports = (regNum, regCode) => {
    var regArray = regNum.split(',');
    var counter = 0;
    for(var i = 0; i < regArray.length; i++){
      var reg = regArray[i].trim();
        if(reg.startsWith(regCode)){
        counter++;
      }
    }
    return counter;
  }