var activePage = "Home";
var mQ = window.matchMedia("(max-width: 768px)")

$(document).on("click", ".nav-item", function () {
    activePage = $(this).text()

    $(".nav-item").css({ "color": "#585858", "font-weight": "unset" });
    $(this).css({ "color": "#e1e1e1", "font-weight": "unset" })

});

$(".nav-item").hover(function () {
    $(this).css({ "color": "#979797", "font-weight": "bold" });
}, function () {
    $(this).css({ "color": "#585858", "font-weight": "unset" });

    if ($(this).text() === activePage) {
        $(".nav-item").css({ "color": "#585858", "font-weight": "unset" });
        $(this).css({ "color": "#e1e1e1", "font-weight": "unset" })
    }
});

$(".nav-bar").hover(function () {
    if (mQ.matches) { // If media query matches
        console.log("hey")
        $("ul").css('display', 'none')
    }
}, function () {
    $("ul").css('display', 'inline-block')
});




myFunction(x) // Call listener function at run time
x.addListener(myFunction)

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}