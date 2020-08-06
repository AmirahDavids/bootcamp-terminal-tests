module.exports = function fromWhere(carReg) {
    if (carReg.startsWith("CY")) {
        return "Bellville";
    } else if (carReg.startsWith("CA")) {
        return "Cape Town";
    } else if (carReg.startsWith("CJ")) {
        return "Paarl";
    }
    return "Some other place!"
};