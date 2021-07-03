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

    $(".get-started").click(function () {
        toPage(1);
    })

    $(".btn-cancel").click(backtoTop)

    $(".btn-OK").click(function () {
        initialCost = calcSum($(".initial-cost"));
        irregularCost = calcSum($(".irregular-cost"));
        monthlyCost = calcMean($(".monthly-cost"))
        console.log(initialCost);
        console.log(irregularCost);
        console.log(monthlyCost);
        toPage(2);
    })
    // $(".page-3").click(function () {
    //     cleanInput($(".initial-cost"));
    //     cleanInput($(".irregular-cost"));
    //     cleanInput($(".monthly-cost"));
    //     toPage(1);
    //     backtoTop();
    // })
})