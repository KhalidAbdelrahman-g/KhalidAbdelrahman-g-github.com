/*global $*/

$(function () {
    "use strict";
    $(".butt").click(function () {
        $(".picture").toggle(700);
    });
});
//creat acoordion
$(function () {
    "use strict";
    $(".acoordian h3").click(function () {
        $(this).next().slideToggle(700);
        $(".acoordian img").not($(this).next()).slideUp(700);
    });
});
$(function () {
    "use strict";
    $(".move").click(function () {
        $("html, body").animate({
            scrollTop: $(".ourwork").offset().top
        }, 1000);
    });
});