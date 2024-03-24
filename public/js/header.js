// #region [Header Container]
const header = $("<div id='header-container'></div>");
header.css({
    "margin": "0",
    "padding": "0",

    "display": "flex",
    "z-index": "1",

    "justify-content": "flex-end",
    "align-items": "flex-end",

    "min-height": "150px",
    "width": "100%",
    "border-bottom": "2px solid lime", 

    "background-color": "#000",
})
$("#root").append(header);
// #endregion 


var queryParams = new URLSearchParams(window.location.search);
var currentPage = queryParams.get("page");

// #region [Header Buttons]
const buttons = [
    { 
        id: "btn-home", 
        text: "Home", 
        queryParam: "/", 
        clickHandler(queryParam) {
            ResetActiveButtons();
            window.history.pushState({}, "", "/?page=" + queryParam);
            console.log(window.location.search); // Debugging
        }
    },
    { 
        id: "btn-aboutme", 
        text: "About Me", 
        queryParam: "aboutme", 
        clickHandler(queryParam) {
            ResetActiveButtons();
            window.history.pushState({}, "", "/?page=" + queryParam);
            console.log(window.location.search); // Debugging
        }
    },
    { 
        id: "btn-projects", 
        text: "Projects", 
        queryParam: "projects", 
        clickHandler(queryParam) {
            ResetActiveButtons();
            window.history.pushState({}, "", "/?page=" + queryParam);
            console.log(window.location.search); // Debugging
        }
    },
    { 
        id: "btn-contact", 
        text: "Contact", 
        queryParam: "contact", 
        clickHandler(queryParam) {
            ResetActiveButtons();
            window.history.pushState({}, "", "/?page=" + queryParam);
            console.log(window.location.search); // Debugging
        }
    },
];

function ResetActiveButtons(){
    $(".--active").removeClass("--active");
}

$(document).ready(function() {
    var buttonContainer = $("#header-container");
    
    buttons.forEach(function(buttonProps) {
        var button = $("<button></button>");
        button.attr("id", buttonProps.id);
        button.text(buttonProps.text);
        button.click(function() {
            buttonProps.clickHandler(buttonProps.queryParam);
        });
        button.hover(
            function() { 
                $(this).css({
                    "background-color": "green",
                    "color": "lime"
                });
            },
            function() { 
                $(this).css({
                    "background-color": "black",
                    "color": "lime"
                }); 
            }
        );
        buttonContainer.append(button);
    });
});