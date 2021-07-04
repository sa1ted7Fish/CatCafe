var setCosttoBill = function () {
    $(".bill-item:nth-child(1) .cost").text(initialCost + "元")
    $(".bill-item:nth-child(2) .cost").text(irregularCost + "元")
    $(".bill-item:nth-child(3) .cost").text(monthlyCost + "元")
    $(".bill-item:nth-child(4) .cost").text(initialCostRatio)
    $(".bill-item:nth-child(5) .cost").text(irregularCostRatio)
    $(".bill-item:nth-child(6) .cost").text(monthlyCostRatio)

    var btnBillOK = $(".bill .btn-OK")

    btnBillOK.mousedown(function () {
        btnBillOK.css("background", "#abc4ff");
    })
    btnBillOK.mouseup(function () {
        btnBillOK.css("background", "#ccdbfd");
    })
}