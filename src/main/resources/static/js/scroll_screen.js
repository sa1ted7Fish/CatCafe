$(function() {
    var onScroll = false;
    var curIndex = 0;
    var page = $(".page");
    var mainDiv = $(".scroll-screen-main");
    var len = page.length;
    var winHeight = window.innerHeight;

    var toPage = function(curIndex) {
        onScroll = true;
        var moveHeight = -(winHeight * curIndex);
        page.eq(curIndex).addClass("current").siblings(".page").removeClass("current");
        $(".page-nav div").eq(curIndex).addClass("current").siblings(".page-nav div").removeClass("current");

        $(".pages").animate(
            {top: moveHeight + "px"},
            350,
            function() {
                onScroll = false;
            })
    };

    mainDiv.css("height", winHeight);
    $(".pages").css("height", winHeight * len);
    page.css("height", winHeight);
    mainDiv.addClass("scroll-done");

    var pagePrev = function() {
        if (curIndex === 0) return;
        curIndex--;
        toPage(curIndex);
    };

    var pageNext = function() {
        if (curIndex === (len - 1)) return;
        curIndex++;
        toPage(curIndex);
    }

    mainDiv.on("mousewheel", function(event) {
        if (onScroll) return;

        $(".menu-container").on("mousewheel", function (e) {
            e.stopPropagation();
        })

        if (event.deltaY < 0) {
            pageNext();
        } else {
            pagePrev();
        }

    })
    $(".page-nav div").on("click", function() {
        if (onScroll) return;
        var i = $(this).index();
        toPage(i);
    })
})