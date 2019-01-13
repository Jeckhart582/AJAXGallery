
var topics = [
    "Spider-Man",
    "Thor",
    "Hulk",
    "Captain America",
    "Iron Man",
    "Black Widow"]

function generateButtons() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>")
        newButton.addClass("characterButton");
        newButton.html(topics[i]);
        newButton.attr("character", topics[i])
        $("#buttons").append(newButton);

    }
}

function generateGifs() {
    console.log("Hello")
    var character = $(this).attr("character");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifDiv = $("<div>")
                    var rating = results[i].rating;
                    var imageURL = results[i].images.fixed_height_still.url;
                    var p = $("<p>").text("Rating: " + rating);
                    var characterImage = $("<img>");
                    characterImage.addClass("giphy")
                    characterImage.attr("src", imageURL);
                    characterImage.attr("alt", character);
                    gifDiv.attr("id", "giphy")
                    gifDiv.append(p);
                    gifDiv.append(characterImage)
                    $("#images").prepend(gifDiv);
                }
            }
        })
}


$("#search").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var search = $("#search-input").val().trim();

    // Adding the movie from the textbox to our array
    topics.push(search);
    console.log(search);

    // Calling renderButtons which handles the processing of our movie array
    generateButtons();
});
function playGif () {
    var character = $(this).attr("alt");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            
            var results = response.data;
            console.log("hello");
            var imageURL = response.data.image_original_url;
            $(this).attr("src", $(this).attr(imageURL));


        })
}

$(document).on("click", ".characterButton", generateGifs);
$(document).on("click", ".giphy", playGif);

generateButtons();




// $("#spiderman-button").on("click", function () {
//     var spidermanURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=spiderman"

//     $.ajax({
//         url: spidermanURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             var imageURL = response.data.image_original_url;
//             var spidermanImage = $("<img>");
//             spidermanImage.attr("src", imageURL);
//             spidermanImage.attr("alt", "spiderman image");
//             $("#images").prepend(spidermanImage);
//         });
// });