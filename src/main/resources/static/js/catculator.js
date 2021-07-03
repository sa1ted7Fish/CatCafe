var initialCost = 0;
var irregularCost = 0;
var monthlyCost = 0;
var deposit = 0;
var monthlyPay = 0;

var calcSum = function ($elem) {
    var sum = 0;

    $elem.each(function () {
        var unitPrice = parseFloat($(this).find($(".unit-price-input")).val().trim());
        var amount = parseFloat($(this).find($(".amount-input")).val().trim());
        if (!isNaN(unitPrice) && !isNaN(amount)) {
            sum += parseFloat((unitPrice * amount).toFixed(2));
        }

    });
    return sum;
}

var calcMean = function ($elem) {
    var mean = 0;

    $elem.each(function () {
        var unitPrice = parseFloat($(this).find($(".unit-price-input")).val().trim());
        var amount = parseFloat($(this).find($(".amount-input")).val().trim());
        if (!isNaN(unitPrice) && !isNaN(amount) && amount !== 0) {
            mean += parseFloat((unitPrice / amount).toFixed(2));
        }
    });
    return mean;
}
var cleanInput = function ($elem) {
    $elem.each(function () {
        $(this).find($(".unit-price-input")).val("");
        $(this).find($(".amount-input")).val("");
    });
}
var calcDepositRatio = function () {
    deposit = parseFloat($(".deposit-input").val().trim());
    var depositRatio = ((initialCost + irregularCost) / deposit).toFixed(2)
    var depositRatioStr = (parseFloat(((initialCost + irregularCost) / deposit).toFixed(4)) * 100) + "%"
    console.log(depositRatio)
    console.log(depositRatioStr)
}
