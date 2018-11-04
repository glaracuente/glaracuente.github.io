// 585858 is faded grey font color
// 979797 highlighted color
// e1e1e1 is white font color
// 17181B is background color - can use to make text invisible 

var activePage = "home";
var pages = ["home", "about me", "resume", "portfolio", "blog", "contact"]
console.log(activePage)
$(document).on("click", ".nav-item", function () {
    console.log($(this))
    activePage = $(this).val()
     console.log(activePage)
    //Makes only clicked nav item highlighted 
    $(".nav-item").css('color', '#585858');
    $(this).css('color', '#e1e1e1');

    //Makes content area show desired nav item content
    for (var i = 0; i < pages.length; i++) {
        $("#" + pages[i]).css('display', 'none');
    }
    $("#" + activePage).css('display', 'inline-block');
});

$(".nav-item").hover(function () {
    // Sharpens color of only hovered item and makes it bold
    $(this).css({ "color": "#979797", "font-weight": "bold" });
}, function () {
    $(this).css({ "color": "#585858", "font-weight": "unset" });

    if ($(this).val() === activePage) {
        $(this).css('color', '#e1e1e1');
    }
});

/*$("#nav-bar").hover(function () {
    if ($("#nav-bar")[0].clientHeight === 200) {
        $("ul").css('display', 'inline-block');
        $("#mobile-nav-temp").css('display', 'none');
    }
}, function () {
    if ($("#nav-bar")[0].clientHeight <= 200) {
        $("ul").css('display', 'none');
        $("#mobile-nav-temp").css('display', 'inline-block');
    }
});*/


//On page refresh, set home as the active page
$("#home-nav-item").css('color', '#e1e1e1');
$("#home").css('display', 'inline-block');
