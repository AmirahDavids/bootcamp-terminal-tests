module.exports= function countAllFromTown(string, locationID) {

  var arrayOfReg = string.split(',');
  var foundPlates = [];

  for (var i = 0; i < arrayOfReg.length; i++) {
    var element = arrayOfReg[i].trim();
    if (element.startsWith(locationID)) {
      foundPlates.push(element);
    }
  }
  
  if (foundPlates.length > 0) {
    return foundPlates.length;
  } else {
    return 0;
  }
}