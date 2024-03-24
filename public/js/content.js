//#region [Content Container]
const contentContainer = $("<div id='content-container'></div>");
contentContainer.insertAfter($("#header-container"));
contentContainer.css({

    "display": "flex",
    "flex-direction": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "z-index": "1",

    "color": "white"
});
//#endregion

//#region [Content]
const path = window.location.pathname;


if (path === "/") {
    const newText = $("<p>Chromatic Ivory</p>");
    contentContainer.append(newText);
} else if (path === "/aboutme") {
    const newText = $("<p>Chromatic Ivory2</p>");
    contentContainer.append(newText);
} else if (path === "/projects") {
    const newText = $("<p>Chromatic Ivory3</p>");
    contentContainer.append(newText);
} else if (path === "/contact") {
    const newText = $("<p>Chromatic Ivory4</p>");
    contentContainer.append(newText);

    const contactContainer = $("<div id='contact-container-main'></div>")
    contentContainer.append(contactContainer);

    contactContainer.css({
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100vh",
        "width": "100vw",

        "background-color": "transparent",
    })
    //#region [LinkedIn Contact Button]
    const linkedin = $("<button id='contact-linkedin' class='--contact-button'></button>");
    linkedin.text("in");
    linkedin.css({
        "font-size": "xx-large",
        "font-family": "Helvetica",
    });
    contactContainer.append(linkedin);
    //#endregion
    //#region [Github Contact Button]
    const github = $("<button id='contact-github' class='--contact-button'></button>")
    github.text("Github");
    github.css({
        "font-size": "x-large",
        "font-family": "Helvetica",
    });
    contactContainer.append(github);
    //#endregion
    //#region [GMail Contact Button]
    const gmail = $("<button id='contact-email' class='--contact-button'></button>")
    gmail.text("GMail");
    gmail.css({
        "font-size": "x-large",
        "font-family": "Helvetica",
    });
    contactContainer.append(gmail);
    //#endregion

}
//#endregion