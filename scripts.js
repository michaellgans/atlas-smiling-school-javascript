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

            /* Creates Active Item */
            let activeItem = `
                <div class="carousel-item active">
                    <div class="row mx-auto align-items-center">
                        <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                            <img
                            src="${data[0].pic_url}"
                            class="d-block align-self-center"
                            alt="Carousel Pic ${data[0].id}"
                            />
                        </div>
                        <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                            <div class="quote-text">
                                <p class="text-white" id="quote1">
                                    ${data[0].text}
                                </p>
                            <h4 class="text-white font-weight-bold">${data[0].name}</h4>
                            <span class="text-white">${data[0].title}</span>
                            </div>
                        </div>
                    </div>
                </div>`

            $(".quotesCarousel").append(activeItem);

            /* Creates Other Items */
            for (let x = 1; x < data.length; x++) {
                let quoteItem = `
                <div class="carousel-item">
                    <div class="row mx-auto align-items-center">
                        <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                            <img
                            src="${data[x].pic_url}"
                            class="d-block align-self-center"
                            alt="Carousel Pic ${data[x].id}"
                            />
                        </div>
                        <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                            <div class="quote-text">
                                <p class="text-white" id="quote1">
                                    ${data[x].text}
                                </p>
                            <h4 class="text-white font-weight-bold">${data[x].name}</h4>
                            <span class="text-white">${data[x].title}</span>
                            </div>
                        </div>
                    </div>
                </div>`

                $(".quotesCarousel").append(quoteItem);
            }

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
    $(".slickSlides").slick();
});