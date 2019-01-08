var topics = [
    "Spider-Man",
    "Thor",
    "Hulk",
    "Captain America",
    "Iron Man",
    "Black Widow"]

function generateButtons() {
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>")
        newButton.addClass("seachButton");
        newButton.html(topics[i]);
        newButton.attr("character", topics[i])
        $("#buttons").append(newButton);

    }
}

generateButtons();


$("button").on("click", function () {
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
                    characterImage.addClass("image")
                    characterImage.attr("src", imageURL);
                    characterImage.attr("alt", "character image");
                    gifDiv.append(p);
                    gifDiv.append(characterImage)
                    $("#images").prepend(gifDiv);
                }
            }
        })
})

$("image").on("click", function() {
    console.log("hello");
})


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