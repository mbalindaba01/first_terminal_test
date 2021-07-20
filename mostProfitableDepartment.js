module.exports = (salesData) => {
    var deptMap = {};
    for (var i = 0; i < salesData.length; i++){
      var dept = salesData[i];
      deptMap[dept.department] = 0;
    }
    for(var i = 0; i < salesData.length; i++){
      const dept = salesData[i];
      deptMap[dept.department] += dept.sales;
    }
    
    console.log(deptMap)
    var highestValue = 0;
    var currDept = '';
    for(var dept in deptMap){
    var currValue = deptMap[dept];
    if(currValue > highestValue){
      highestValue = currValue;
      currDept = dept;
    }
  }
     return currDept;
  };