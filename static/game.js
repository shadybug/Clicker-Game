
if ($.cookie('bgcolor') != undefined) {
    $("body").css('background-color', $.cookie("bgcolor"));
    $("#game").css('background-color', $.cookie('gmcolor'));
    $('#object')[0].src = $.cookie('imsrc');
    $('body').css('color', $.cookie('fncolor'));
}

var width = $("#game").width();
var height = $("#game").height();

var start = $("#object").position();

$(window).resize(function () {
    var width = $("#game").width();
    var height = $("#game").height();
});

setInterval(function () {
    var newTop = (Math.random() * height) + start.top;
    var newLeft = (Math.random() * width) + start.left / 2;

    $("#object").offset({
        top: newTop,
        left: newLeft
    })
}, 1000);

$("#object").click(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/score');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            $("#score").html("Score: " + xhr.response);
        }
    }
    xhr.send();
});