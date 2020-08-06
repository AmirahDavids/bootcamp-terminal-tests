module.exports= function findItemsOver20(list) {
    var items = [];
    for (var i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.qty > 20) {
            items.push(item)
        }
    }
    return items;
}