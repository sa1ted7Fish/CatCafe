$(function () {
    var itemLen = $(".menu-item-1").length + $(".menu-item-2").length;
    var menuHeight = 600 + itemLen * 100 + 100;
    $(".menu-box").height(menuHeight + 200);
    $(".menu-container").height(menuHeight);
    $(".menu").height(menuHeight - 100);
    $(".menu-area").height(menuHeight);
    $(".rectangle-3").height(menuHeight);
    $(".rectangle-4").height(menuHeight);
})