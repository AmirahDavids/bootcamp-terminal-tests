 module.exports=  function (registration, loc) {
    var check = registration.endsWith(loc) || registration.startsWith(loc)
    return check;
}