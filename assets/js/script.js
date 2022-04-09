$(document).ready(function () {
    $(window).scroll(function (e) {
        const y = $("html").scrollTop();
        if (y > 1200) {
            $("nav").css("background-color", "#000")
        }
        else {
            $("nav").css("background-color", "transparent" )
        }
    })
});
