var backtoTop = function () {
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

    var btnCancel = $(".btn-cancel")
    var btnOK = $(".btn-OK")

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

    btnCancel.mousedown(function () {
        btnCancel.css("border-style", "inset");
        btnCancel.css("background", "#fdfcd7");
    })
    btnCancel.mouseup(function () {
        btnCancel.css("border-style", "outset");
        btnCancel.css("background", "#fdfcdc");
    })
    btnOK.mousedown(function () {
        btnOK.css("border-style", "inset");
        btnOK.css("background", "#fdfcd7");
    })
    btnOK.mouseup(function () {
        btnOK.css("border-style", "outset");
        btnOK.css("background", "#fdfcdc");
    })

})