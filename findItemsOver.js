module.exports = (list, threshold)=> {
    var objOverThreshold = [];
    for(var i = 0; i < list.length; i++){
      var item = list[i];
      console.log(item)
      if(item.qty > threshold){
        objOverThreshold.push(item)
      }
    }
    return objOverThreshold;
  }