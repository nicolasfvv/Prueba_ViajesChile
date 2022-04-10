$(document).ready(function () {
    $(window).scroll(function (e) {
        const y = $("html").scrollTop()
        if (y > 300) {
            $("nav").css("background-color", "#000")
        }
        else {
            $("nav").css("background-color", "transparent")
        }
    })
    $("#card_title1").click(function () {
        $("#card_text1").toggle()
    });
    $("#card_title2").click(function () {
        $("#card_text2").toggle()
    });
    $("#card_title3").click(function () {
        $("#card_text3").toggle()
    });
    $("#card_title4").click(function () {
        $("#card_text4").toggle()
    });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
