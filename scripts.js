/* Functions for Homepage */

function displayLoader() {
    $(".loader").show();
}

function hideLoader() {
    $(".loader").hide();
}

function getQuotes() {
    displayLoader();
    console.log("Showing loader for Quotes...")

    $.ajax({
        url: "https://smileschool-api.hbtn.info/quotes",
        method: "GET",
        dataType: "json",
        success: function(data) {
            console.log("It's working (quotes)");

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

function getTutorials() {
    displayLoader();
    console.log("Showing loader for Tutorials...")

    $.ajax({
        url: "https://smileschool-api.hbtn.info/popular-tutorials",
        method: "GET",
        dataType: "json",
        success: function(data) {
            console.log("It's working (tutorials)");

            /* Creates Items */
            for (let x = 1; x < data.length; x++) {
                console.log(x);

                let tutorialItem = `
                <div class="d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                    <div class="card">
                      <img
                        src="images/thumbnail_4.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                          Diagonal Smile
                        </h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                </div>`

                // $(".tutorialSlides").append(tutorialItem);
                $(".tutorialSlides").slick("slickAdd", tutorialItem);
            }

            hideLoader();
            console.log("Hiding loader (tutorials)...")
        },
        error: function() {
            console.log("Ooops (tutorials)....");
        }
    });
}

$(document).ready(function() {
    getQuotes();
    getTutorials();
    $(".slickSlides").slick();
});