function createFilteredCards() {
    /* Clear current results */

    /* Display Loader */
    displayLoader();

    /* Listen for Enter */
    $(".search-text-area").on("keydown", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log("Enter Key Pressed");

            let searchInput = $(this).val();
            
            console.log(`This is the input from SEARCH: ${searchInput}`);
        }
    }

    /* Listen for Click */
    $(".topicDropdown").on("click", function(event1) {
        event1.preventDefault();
        console.log("Topic was clicked");

        let topicInput = $(this).data("value");

        console.log(`Selected: ${topicInput}`);
    });

    /* Set Dropdown to Click */
    $("#activeTopic").text(topicInput);

    /* Listen for Click */
    $(".mostDropdown").on("click", function(event2) {
        event2.preventDefault();
        console.log("Sort was clicked");

        let sortInput = $(this).data("value");

        console.log(`Selected: ${sortInput}`);
    });

    /* Set Dropdown to Click */
    $("#activeSort").text(sortInput);

    /* Pull Results */
    console.log(`User is searching: ${searchInput}.  Topic is: ${topicInput}.  Sorted by: ${sortInput}`);

    /* Update number of videos */
    $(".video-count").text(`${courses.length} videos`);

    /* Hide Loader */
    hideLoader();
}