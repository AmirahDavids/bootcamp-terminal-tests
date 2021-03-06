let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe("The findItemsOver20 function", function () {
    it("should find the qty of items higher than 20", function () {
        var listOfItems = [{
                "name": "Sweets",
                "qty": 10,
                "id": 1
            },
            {
                "name": "Potatoes",
                "qty": 25,
                "id": 2
            },
            {
                "name": "Carrots",
                "qty": 70,
                "id": 3
            },
            {
                "name": "Asparagus",
                "qty": 1,
                "id": 4
            }
        ];

        var expected = [{
                "name": "Potatoes",
                "qty": 25,
                "id": 2
            },
            {
                "name": "Carrots",
                "qty": 70,
                "id": 3
            }
        ];

        var actual = findItemsOver20(listOfItems);

        assert.deepEqual(expected, actual)

    });
    it("should find the qty of items higher than 20", function () {
        var listOfItems = [{
                "name": "Chips",
                "qty": 10,
                "id": 1
            },
            {
                "name": "Chocolates",
                "qty": 25,
                "id": 2
            },
            {
                "name": "Rice",
                "qty": 70,
                "id": 3
            },
            {
                "name": "Pears",
                "qty": 1,
                "id": 4
            }
        ];

        var expected = [{
                "name": "Chocolates",
                "qty": 25,
                "id": 2
            },
            {
                "name": "Rice",
                "qty": 70,
                "id": 3
            }
        ];

        var actual = findItemsOver20(listOfItems);

        assert.deepEqual(expected, actual)



    });
});