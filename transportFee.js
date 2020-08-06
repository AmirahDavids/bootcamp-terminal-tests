module.exports= function transportFee(shift) {
    var price = "";
    switch (shift) {
        case "morning":
            price = "R20";
            break
        case "afternoon":
            price = "R10";
            break
        case "nightshift":
            price = "free";
            break
        default:
            break
    };
    return price;
}