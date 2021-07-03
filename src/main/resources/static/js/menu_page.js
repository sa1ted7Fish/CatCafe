var backtoTop = function () {
    initialCost = 0;
    irregularCost = 0;
    monthlyCost = 0;
    deposit = 0;
    monthlyPay = 0;
    cleanInput($(".initial-cost"));
    cleanInput($(".irregular-cost"));
    cleanInput($(".monthly-cost"));
    $(".menu-view-window").animate(
        {scrollTop: "750px"},
        1200,
    )
}
$(function () {
    var sectionTitleHeight = 150
    var patternHeight = 600
    var menuHeaderheight = 100
    var menuFooterHeight = 100
    var borderTop = 50
    var borderBottom = 50
    var blankAreaHeight = 200
    var defaultMenuHeight = 1200
    var menuButtonsBoxHeight = 250
    var menuHeight = patternHeight + sectionTitleHeight * 3 + menuButtonsBoxHeight;

    var btnMenuCancel = $(".menu-buttons .btn-cancel")
    var btnMenuOK = $(".menu-buttons .btn-OK")

    $(".menu-item").each(function () {
        menuHeight += $(this).height();

    })
    menuHeight += blankAreaHeight;
    menuHeight = (menuHeight > defaultMenuHeight) ? menuHeight : defaultMenuHeight;
    $(".menu-box").height(menuHeight + menuHeaderheight + menuFooterHeight + borderTop + borderBottom);
    $(".menu-container").height(menuHeight + borderTop + borderBottom);
    $(".menu").height(menuHeight);
    $(".menu-area").height(menuHeight);
    $(".rectangle-3").height(menuHeight + borderTop + borderBottom);
    $(".rectangle-4").height(menuHeight + borderTop + borderBottom);

    btnMenuCancel.mousedown(function () {
        btnMenuCancel.css("border-style", "inset");
        btnMenuCancel.css("background", "#fdfcd7");
    })
    btnMenuCancel.mouseup(function () {
        btnMenuCancel.css("border-style", "outset");
        btnMenuCancel.css("background", "#fdfcdc");
    })
    btnMenuOK.mousedown(function () {
        btnMenuOK.css("border-style", "inset");
        btnMenuOK.css("background", "#fdfcd7");
    })
    btnMenuOK.mouseup(function () {
        btnMenuOK.css("border-style", "outset");
        btnMenuOK.css("background", "#fdfcdc");
    })

})