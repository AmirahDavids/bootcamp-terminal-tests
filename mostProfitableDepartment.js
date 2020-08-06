module.exports = function mostProfitableDepartment(data) {

    var object = {};

    for (var i = 0; i < data.length; i++) {
        if (object[data[i].department] === undefined) {
            object[data[i].department] = 0;
        };
        object[data[i].department] = object[data[i].department] + data[i].sales;
    };

    var mostProfitableDept = "";
    var highestSales = 0;

    for (var key in object) {
        if (object[key] >= highestSales) {
            highestSales = object[key]
            mostProfitableDept = key;
        }
    }
    return mostProfitableDept;

};