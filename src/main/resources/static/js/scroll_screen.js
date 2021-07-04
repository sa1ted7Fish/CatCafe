$(function scroll_screen() {
    var curIndex = 0;
    var page = $(".page");
    var mainDiv = $(".scroll-screen-main");
    var len = page.length;
    var winHeight = window.innerHeight;

    var toPage = function(curIndex) {
        var moveHeight = -(winHeight * curIndex);
        page.eq(curIndex).addClass("current").siblings(".page").removeClass("current");
        $(".page-nav div").eq(curIndex).addClass("current").siblings(".page-nav div").removeClass("current");

        $(".pages").animate(
            {top: moveHeight + "px"},
            500,
        )
    };

    mainDiv.css("height", winHeight);
    $(".pages").css("height", winHeight * len);
    page.css("height", winHeight);
    mainDiv.addClass("scroll-done");

    $(".logo-box").click(function () {
        toPage(1);
    })

    $(".menu-buttons .btn-cancel").click(backtoTop)

    $(".menu-buttons .btn-OK").click(function () {
        initialCost = calcSum($(".initial-cost"));
        irregularCost = calcSum($(".irregular-cost"));
        monthlyCost = calcMean($(".monthly-cost"))
        toPage(2);
        $(".coffee").delay(800).animate(
            {left: "100px"},
            500,
            function () {
                $(".coffee").css("position", "fixed");
            }
        )
    });

    $(".cellphone-buttons .btn-cancel").click(function () {
        deposit = 1;
        monthlyPay = 1;
        $(".cellphone .deposit-input").val("");
        $(".cellphone .monthly-pay-input").val("");
    })
    $(".cellphone-buttons .btn-OK").click(function () {
        deposit = parseFloat($(".cellphone .deposit-input").val());
        monthlyPay = parseFloat($(".cellphone .monthly-pay-input").val());
        calcinitialCostRatio();
        calcirregularCostRatio();
        calcMonthlyCostRatio();
        setCosttoBill();
        toPage(3);
    })
    $(".bill .btn-OK").click(function () {
        $(".coffee").delay(100).animate(
            {left: "-450px"},
            500,
            function () {
                $(".bg-banquet").animate(
                    {right: "-800px"},
                    500,
                    function () {
                        $(".bg-banquet").css("display", "none");
                        toPage(4);
                    }
                );
            }
        );
    })
})