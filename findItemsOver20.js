module.exports = (list) => {
    var objectsOver20 = [];
    for(var i = 0; i < list.length; i++){
      var item = list[i];
      if(item.qty > 20){
        objectsOver20.push(item)
      }
    }
    return objectsOver20;
  }