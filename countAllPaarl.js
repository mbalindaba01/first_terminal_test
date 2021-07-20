module.exports = (regNums)=> {
    var regArray = regNums.split(', ');
    var counter = 0;
    for(var i = 0; i < regArray.length; i++){
      var reg = regArray[i];
      if(reg.startsWith('CJ')){
        counter++;
      }
    }
    return counter;
  }