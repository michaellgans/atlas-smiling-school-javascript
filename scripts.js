/* Functions for Homepage */

function displayLoader() {
    $(".loader").show();
}

function hideLoader() {
    $(".loader").hide();
}

function getQuotes() {
    displayLoader();
    console.log("showing loader...")

    $.ajax({
        url: "https://smileschool-api.hbtn.info/quotes",
        method: "GET",
        dataType: "json",
        success: function(data) {
            console.log("It's working");

            /* Changes text on first item */
            $("#activeQuote").text(data[0].text);
            console.log("Text should be changed 1");

            /* Changes text on second item */
            $("#quote1").text(data[1].text);
            console.log("Text should be changed 2");

            hideLoader();
            console.log("Hiding loader...")
        },
        error: function() {
            console.log("Ooops....");
        }
    });
}

$(document).ready(function() {
    getQuotes();
});