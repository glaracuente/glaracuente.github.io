var mobile = false;

function checkSize() {
    if ($("#nav-bar")[0].clientHeight === 40) {
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
        $("#content").css('width', '100%');
    }
    else {
        var newWidth = ($(window).width() - 200);
        $("#content").css('width', newWidth);
    }
});


checkSize()

//dynamically set content width on page refresh
if (mobile) {

}
else {
    var newWidth = ($(window).width() - 200);
    $("#content").css('width', newWidth);
}
