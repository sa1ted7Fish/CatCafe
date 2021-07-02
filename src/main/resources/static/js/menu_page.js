$(function () {
    var sectionTitleHeight = 150
    var patternHeight = 500
    var menuHeaderheight = 100
    var menuFooterHeight = 100
    var borderTop = 50
    var borderBottom = 50
    var blankAreaHeight = 200
    var defaultMenuHeight = 1200
    var menuButtonsBoxHeight = 250
    var menuHeight = patternHeight + sectionTitleHeight * 3 + menuButtonsBoxHeight;
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
})