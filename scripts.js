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

            let activeItem = `
                <div class="carousel-item active">
                    <div class="row mx-auto align-items-center">
                        <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                            <img
                            src="images/profile_5.jpg"
                            class="d-block align-self-center"
                            alt="Carousel Pic 1"
                            />
                        </div>
                        <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                            <div class="quote-text">
                                <p class="text-white" id="quote1">
                                    ${data[0].text}
                                </p>
                            <h4 class="text-white font-weight-bold">Person Name</h4>
                            <span class="text-white">weather presenter</span>
                            </div>
                        </div>
                    </div>
                </div>`

            $(".carousel-inner").append(activeItem);

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