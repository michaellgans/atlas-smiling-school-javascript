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
            for (let x = 0; x < data.length; x++) {
                console.log(`Card number is: ${data[x].id} Rating is: ${data[x].star}`);

                let tutorialItem = `
                <div class="d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                    <div class="card">
                      <img
                        src="${data[x].thumb_url}"
                        class="card-img-top"
                        alt="Video thumbnail ${data[x].id}"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play Video ${data[x].id}"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                            ${data[x].title}
                        </h5>
                        <p class="card-text text-muted">
                            ${data[x]["sub-title"]}
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="${data[x].author_pic_url}"
                            alt="Creator of
                            Video ${data[x].id}"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">${data[x].author}</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">`

                            /* Dynamically Create Stars */
                            let starRating = data[x].star;

                            for (let y = 0; y < starRating; y++) {
                                tutorialItem += `<img
                                                    src="images/star_on.png"
                                                    alt="star on"
                                                    width="15px"
                                                />`
                            }

                            let starsOff = (5 - starRating);

                            for (let z = 0; z < starsOff; z++) {
                                tutorialItem += `<img
                                                    src="images/star_off.png"
                                                    alt="star off"
                                                    width="15px"
                                                />`
                            }

                          tutorialItem += `</div>
                          <span class="main-color">${data[x].duration}</span>
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

function getLatest() {
    displayLoader();
    console.log("Showing loader for Latest...")

    $.ajax({
        url: "https://smileschool-api.hbtn.info/latest-videos",
        method: "GET",
        dataType: "json",
        success: function(data) {
            console.log("It's working (latest)");

            /* Creates Items */
            for (let x = 0; x < data.length; x++) {
                console.log(`Card number is: ${data[x].id} Rating is: ${data[x].star}`);

                let latestItem = `
                <div class="d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                    <div class="card">
                      <img
                        src="${data[x].thumb_url}"
                        class="card-img-top"
                        alt="Video thumbnail ${data[x].id}"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play Video ${data[x].id}"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                            ${data[x].title}
                        </h5>
                        <p class="card-text text-muted">
                            ${data[x]["sub-title"]}
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="${data[x].author_pic_url}"
                            alt="Creator of
                            Video ${data[x].id}"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">${data[x].author}</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">`

                            /* Dynamically Create Stars */
                            let starRating = data[x].star;

                            for (let y = 0; y < starRating; y++) {
                                latestItem += `<img
                                                    src="images/star_on.png"
                                                    alt="star on"
                                                    width="15px"
                                                />`
                            }

                            let starsOff = (5 - starRating);

                            for (let z = 0; z < starsOff; z++) {
                                latestItem += `<img
                                                    src="images/star_off.png"
                                                    alt="star off"
                                                    width="15px"
                                                />`
                            }

                            latestItem += `</div>
                          <span class="main-color">${data[x].duration}</span>
                        </div>
                      </div>
                    </div>
                </div>`

                $(".latestSlides").slick("slickAdd", latestItem);
            }

            hideLoader();
            console.log("Hiding loader (latest)...")
        },
        error: function() {
            console.log("Ooops (latest)....");
        }
    });
}

function getQuotes2() {
    displayLoader();
    console.log("Showing loader for Quotes2...")

    $.ajax({
        url: "https://smileschool-api.hbtn.info/quotes",
        method: "GET",
        dataType: "json",
        success: function(data) {
            console.log("It's working (quotes2)");

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

            $(".priceCarousel").append(activeItem);

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

                $(".priceCarousel").append(quoteItem);
            }

            hideLoader();
            console.log("Hiding loader...")
        },
        error: function() {
            console.log("Ooops....");
        }
    });
}

function createCard() {
    displayLoader();
    console.log("Showing loader for courses...")

    $.ajax({
        url: "https://smileschool-api.hbtn.info/courses",
        method: "GET",
        dataType: "json",
        success: function(data) {
            console.log("It's working (courses)");

            let courses = data.courses;

            /* Creates Items */
            for (let x = 0; x < courses.length; x++) {
                console.log(`Card number is: ${courses[x].id} Rating is: ${courses[x].star}`);

                let cardItem = `
                <div class="d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                    <div class="card">
                      <img
                        src="${courses[x].thumb_url}"
                        class="card-img-top"
                        alt="Video thumbnail ${courses[x].id}"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play Video ${courses[x].id}"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                            ${courses[x].title}
                        </h5>
                        <p class="card-text text-muted">
                            ${courses[x]["sub-title"]}
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="${courses[x].author_pic_url}"
                            alt="Creator of
                            Video ${courses[x].id}"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">${courses[x].author}</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">`

                            /* Dynamically Create Stars */
                            let starRating = courses[x].star;

                            for (let y = 0; y < starRating; y++) {
                                cardItem += `<img
                                                    src="images/star_on.png"
                                                    alt="star on"
                                                    width="15px"
                                                />`
                            }

                            let starsOff = (5 - starRating);

                            for (let z = 0; z < starsOff; z++) {
                                cardItem += `<img
                                                    src="images/star_off.png"
                                                    alt="star off"
                                                    width="15px"
                                                />`
                            }

                          cardItem += `</div>
                          <span class="main-color">${courses[x].duration}</span>
                        </div>
                      </div>
                    </div>
                </div>`

                $(".results .container").append(cardItem);
            }

            hideLoader();
            console.log("Hiding loader (courses)...")
        },
        error: function() {
            console.log("Ooops (courses)....");
        }
    });
}

function getSearchInput() {
    $(".search-text-area").on("keydown", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log("Enter Key Pressed");

            let searchInput = $(this).val();
            
            console.log(`This is the input from SEARCH: ${searchInput}`);
        }
    });
}

function getTopicInput() {
    $(".topicDropdown").on("click", function(event1) {
        event1.preventDefault();
        console.log("Topic was clicked");

        let topicInput = $(this).data("value");

        console.log(`Selected: ${topicInput}`);
    });
}

function getSortInput() {
    $(".mostDropdown").on("click", function(event2) {
        event2.preventDefault();
        console.log("Sort was clicked");

        let sortInput = $(this).data("value");

        console.log(`Selected: ${sortInput}`);
    });
}

$(document).ready(function() {
    getQuotes();
    getTutorials();
    $(".slickSlides").slick();
    getLatest();
    getLatest();
    $(".slickSlides").slick();
    getQuotes2();
    getSearchInput();
    getTopicInput();
    getSortInput();
    createCard();
});