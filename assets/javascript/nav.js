// 585858 is faded grey font color
// 979797 highlighted color
// e1e1e1 is white font color
// 17181B is background color - can use to make text invisible 

var activePage = "home";
var pages = ["home", "about", "resume", "portfolio", "blog", "contact"]

$(document).ready(function () {
    $(".nav-item").on("click", function () {
        activePage = $(this).data("content")

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

        if ($(this).data("content") === activePage) {
            $(this).css('color', '#e1e1e1');
        }
    });

    $("#bitmoji-pic").on("click", function () {
        $("#profile-con").css({"display": "inline-block","float": "left", "height": "200px", "width": "200px"});  
    });

    $("#profile-con").on("click", function () {
        if (mobile) {
        $("#profile-con").css("display", "none");  
        }
    });



    //On page refresh, set home as the active page
    $("#home-nav-item").css('color', '#e1e1e1');

    for (var i = 0; i < pages.length; i++) {
        $("#" + pages[i]).css('display', 'none');
    }

    $("#home").css('display', 'inline-block');
});