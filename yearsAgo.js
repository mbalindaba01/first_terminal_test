module.exports = (year) => {
    var date = new Date;
    var currentDate = date.getFullYear()
    return currentDate - year
  }