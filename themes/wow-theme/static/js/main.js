$('#js-close-info').click(function () {
    $('#js-info').hide();
});

$("#js-info-link").click(function () {
    $("#js-info").show("fast", function () {
        // Animation complete.
    });
});

$(document).keypress(function (e) {
    if (e.keyCode == 27) $('#js-info').hide();
});
