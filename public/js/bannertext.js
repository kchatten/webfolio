$(document).ready(function () {
    let kVariations = ['K', 'k', '|<'];
    let cVariations = ['C', 'c', '©'];
    let hVariations = ['H', 'h', '#'];
    let aVariations = ['A', 'a', '4'];
    let tVariations = ['T', 't', '+', '7'];
    let dVariations = ['D', 'd', 'b', 'q', 'p'];
    let eVariations = ['E', 'e', '3'];
    let vVariations = ['V', 'v'];

    // Construct the string "dev" from arrays with variations
    let websiteName = "kchat.dev";
    $("#header-container-main").append($(`<div id="banner-text">${websiteName}</div>`));

    // Function to randomly select a character from each array and construct a string
    function ConstructStringFromVariations(...variationArrays) {
        let result = '';
        variationArrays.forEach(variationArray => {
            let selectedChar = variationArray[Math.floor(Math.random() * variationArray.length)];
            result += selectedChar;
        });
        $("#banner-text").text(result);
    }

    setInterval(function() {ConstructStringFromVariations(kVariations, cVariations, hVariations, aVariations, tVariations, ".", dVariations, eVariations, vVariations)}, 150);  
});