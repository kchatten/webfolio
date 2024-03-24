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

// #region [Header Buttons]
const buttons = [
    { id: "btn-home", text: "Home", path: "/", clickHandler: function(){
        ResetActiveButtons();
        window.location.href = "/";
    }},
    { id: "btn-aboutme", text: "About Me", path: "/aboutme", clickHandler: function(){
        ResetActiveButtons();
        window.location.href = "/aboutme"; 
    }},
    { id: "btn-projects", text: "Projects", path: "/projects", clickHandler: function(){
        ResetActiveButtons();
        window.location.href = "/projects"
    }},
    { id: "btn-contact", text: "Contact", path: "/contact", clickHandler: function(){
        ResetActiveButtons();
        window.location.href = "/contact"; 
    }},
];
// #endregion

function ResetActiveButtons(){
    $(".--active").removeClass("--active");
}

$(document).ready(function() {
    var buttonContainer = $("#header-container");
    
    buttons.forEach(function(buttonProps) {
        var button = $("<button></button>");
        button.attr("id", buttonProps.id);
        button.text(buttonProps.text);
        button.click(buttonProps.clickHandler);
        button.hover(
            function() { 
                $(this).css({
                    "background-color": "green",
                    "color": "lime"
                });
            },
            function() { // 
                $(this).css({
                    "background-color": "black",
                    "color": "lime"
                }); 
            }
        );
        buttonContainer.append(button);
    });

    var path = window.location.pathname;

    buttons.forEach(function(buttonProps) {
        if (buttonProps.path === path) {
            $("#" + buttonProps.id).addClass("--active");
            return;
        }
    });
});