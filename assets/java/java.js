var topics = [
    "Spider-Man",
    "Thor",
    "Hulk",
    "Capitan America",
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
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + character;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var imageURL = response.data.image_original_url;
            var characterImage = $("<img>");
            characterImage.attr("src", imageURL);
            characterImage.attr("alt", "character image");
            $("#images").prepend(characterImage);
        })
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