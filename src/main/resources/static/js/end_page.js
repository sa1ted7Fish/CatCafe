$(function () {
    $(".money").click(function () {
        console.log("money clicked")
        $(".money").animate(
            {top: "-400px"},
            400
        )
    })
})