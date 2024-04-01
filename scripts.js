$(document).ready(function() {
    $.ajax({
        url: "https://smileschool-api.hbtn.info/quotes",
        method: "GET",
        dataType: "json",
        success: function(data) {
            console.log("It's working");

            /* Empties out current text */
            $(".quote-text p").text(data[0].text);
            console.log("Text should be changed");
        },
        error: function() {
            console.log("Ooops....");
        }
    });
});