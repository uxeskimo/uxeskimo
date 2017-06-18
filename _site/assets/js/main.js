$('html').removeClass('no-js');
$(function() {
    $("#primary-trigger").on("click", function(e) {
        $(".off-canvas").toggleClass("is--open"), $(this).toggleClass("is--active"),
        $("body").toggleClass("overflow"), $(this).toggleClass(""), e.preventDefault()
    })
});
