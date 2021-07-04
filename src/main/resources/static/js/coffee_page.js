$(function () {
    var btnCellphoneCancel = $(".cellphone-buttons .btn-cancel")
    var btnCellphoneOK = $(".cellphone-buttons .btn-OK")

    btnCellphoneCancel.mousedown(function () {
        btnCellphoneCancel.css("background", "#abc4ff");
    })
    btnCellphoneCancel.mouseup(function () {
        btnCellphoneCancel.css("background", "#ccdbfd");
    })
    btnCellphoneOK.mousedown(function () {
        btnCellphoneOK.css("background", "#abc4ff");
    })
    btnCellphoneOK.mouseup(function () {
        btnCellphoneOK.css("background", "#ccdbfd");
    })
})