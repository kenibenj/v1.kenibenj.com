//    Benjamin Keninger
//    April 29, 2022
//    Assignment 10
//    Purpose: This is a web page for use as practice 
//    in order to gain experience with jQuery and JSON


$(document).ready(function(){

    $("#get").click(function () {
        $.getJSON("directory.json", function (data) {

            $.each(data, function (index, item) {
                //containerDatadump
                $.each(item, function (key, value) {
                    $("#containerDatadump").append(key + ': ' + value + '<br />');
                });
                $("#containerDatadump").append('<br /><br />');

                //containerOutput
                $("#containerOutput").append(item.Name + '<br />' + item.Age + '<br />' + item.Phone + '<br />' + item.Group + '<br />');
                $("#containerOutput").append('<br /><br />');
            });
        });
    });
});