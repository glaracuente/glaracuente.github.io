var activePage = "Home";

$(document).on("click", ".nav-item", function () {
    activePage = $(this).text()
   
    $(".nav-item").css({ "color": "#585858", "font-weight": "unset" });
    $(this).css({ "color": "#e1e1e1", "font-weight": "unset" })

});

$(".nav-item").hover(function () {
    $(this).css({ "color": "#979797", "font-weight": "bold" });
}, function () {
    $(this).css({ "color": "#585858", "font-weight": "unset" });

    if ($(this).text()=== activePage) {
        $(".nav-item").css({ "color": "#585858", "font-weight": "unset" });
        $(this).css({ "color": "#e1e1e1", "font-weight": "unset" })
    }
});