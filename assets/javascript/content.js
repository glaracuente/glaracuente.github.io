var mobile;
var winWidth;
var adjustedWidth


$(document).ready(function () {
    //check window size and dynamically set content margins
    function adjustMargins() {
        if ($("#nav-bar")[0].clientHeight === 60) {
            mobile = true;
        }
        else {
            mobile = false;
        }

        if (mobile) {
            winWidth = $(window).width();
            $("#content").css('width', '100%');
            $("#contact-container").css('margin-left', (winWidth - 200) / 2);
            $("#blog-container").css('margin-left', (winWidth - 200) / 2);
            $("#home-container").css('margin-left', (winWidth - 400) / 2);
            $("#about-container").css('margin-left', (winWidth - 400) / 2);
            $("#resume-container").css('margin-left', (winWidth - 400) / 2);
            $("#profile-con").css("display", "none");
        }
        else {
            adjustedWidth = ($(window).width() - 200);
            $("#content").css('width', adjustedWidth);
            $("#contact-container").css('margin-left', (adjustedWidth - 420) / 2);
            $("#blog-container").css('margin-left', (adjustedWidth - 200) / 2);
            $("#home-container").css('margin-left', (adjustedWidth - 400) / 2);
            $("#about-container").css('margin-left', (adjustedWidth - 500) / 2);
            $("#resume-container").css('margin-left', (adjustedWidth - 700) / 2);
            $("#profile-con").css("display", "inline-block");
        }
    }


    //dynamically set content width on window resize
    $(window).resize(function () {
        adjustMargins()
    });
    //dynamically set content width on page refresh
    adjustMargins()
});
