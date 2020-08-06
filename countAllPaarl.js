module.exports= function countAllPaarl(string) {
  
  var arrayOfReg = string.split(',');
  var foundPlates = [];

  for (var i = 0; i < arrayOfReg.length; i++) {
    var element = arrayOfReg[i].trim();
    if (element.startsWith("CJ")) {
      foundPlates.push(element);
    }
  }

  if (foundPlates.length > 0) {
    return foundPlates.length;
  } else {
    return 0;
  }
};