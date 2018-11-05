var mobile = false;

function checkSize() {
    if ($("#nav-bar")[0].clientHeight === 60) {
        mobile = true;
    }
    else {
        mobile = false;
    }
}


//dynamically set content width on window resize
$(window).resize(function () {
    checkSize()

    if (mobile) {
        var winWidth = $(window).width();
        $("#content").css('width', '100%');
        $("#contact-container").css('margin-left', (winWidth - 200) / 2);
    }
    else {
        var newWidth = ($(window).width() - 200);
        $("#content").css('width', newWidth);
        $("#contact-container").css('margin-left', (newWidth - 420) / 2);
    }
});


checkSize()

//dynamically set content width on page refresh
if (mobile) {
    var winWidth = $(window).width();
    $("#contact-container").css('margin-left', (winWidth - 200) / 2);
}
else {
    var newWidth = ($(window).width() - 200);
    $("#content").css('width', newWidth);
    $("#contact-container").css('margin-left', (newWidth - 420) / 2);
}
