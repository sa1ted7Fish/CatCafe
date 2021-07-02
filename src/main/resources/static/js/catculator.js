// $(function () {
//     var calcSum = function (elem) {
//         var sum = 0;
//
//         $(elem).each(function () {
//             var unitPrice = $(this).find($(".unit-price-input")).val();
//             var amount = $(this).find($(".amount-input")).val();
//             if (unitPrice === null) {
//                 unitPrice = 0;
//             }
//             if (amount === null) {
//                 amount = 0;
//             }
//             sum += unitPrice * amount;
//
//         })
//         return sum;
//     }
//
//     $(".btn-OK").click(function () {
//         var initialCost = calcSum(".initial-cost");
//         var irregularCost = calcSum(".irregular-cost");
//         console.log(initialCost);
//         console.log(irregularCost);
//         toPage(2);
//     })
// })