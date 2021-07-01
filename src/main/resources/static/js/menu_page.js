$(function () {
    $(".menu-section-1").click(function () {
        $(".menu").animate(
            {left: "40vw"},
            350
        )
    });
    $(".menu-section-2").click(function () {
        $(".menu").animate(
            {left: "10vw"},
            350
        )
    });
    $(".menu-section-3").click(function () {
        $(".menu").animate(
            {left: "-30vw"},
            350
        )
    });
    $(".menu-section-4").click(function () {
        $(".menu").animate(
            {left: "-70vw"},
            350
        )
    })
})