module.exports = (callOrSms) => {
    var callSmsArray = callOrSms.split(', ');
    var callBill = 0;
    var smsBill = 0;
    for(var i = 0; i < callSmsArray.length; i++){
      var bill = callSmsArray[i];
      if(bill === 'call'){
        callBill += 2.75;
      }else{
        smsBill += 0.65
      }
    }
    var totalBill = callBill + smsBill;
    return 'R' + totalBill.toFixed(2);
  }