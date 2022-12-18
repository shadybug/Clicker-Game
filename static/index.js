
if ($.cookie('username') != undefined) {
    if (cookie('password') != undefined) {
        var xhr = new XMLHttpRequest();

        $("body").css('background-color', $.cookie("bgcolor"));
        $("#game").css('background-color', $.cookie('gmcolor'));
        $('#object')[0].src = $.cookie('imsrc');
        $('body').css('color', $.cookie('fncolor'));

        data = {
            username: $.cookie('username'),
            password: $.cookie('password'),
            gmcolor: $.cookie('gmcolor'),
            bgcolor: $.cookie('bgcolor'),
            fncolor: $.cookie('fncolor'),
            imsrc: $.cookie('imsrc')
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                $("html").html(xhr.response);
            }
        }

        xhr.open("POST", "/login")
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));


    }
}
