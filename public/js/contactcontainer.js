$(document).ready(function () {
    const container = $("#contact-button-container");

    container.css({
        "margin-top": "10px",

        "display": "flex",
        "justify-content": "space-between",

        "height": "50px",
        "width": "200px"
    });

    // Github Contact Button
    //#region
    const github = $('<button class="contact-button"></button>');
    github.css({
        "border": "2px solid black",
        "border-radius": "25px"
    });
    github.text("GitHub")

    github.hover(
        function () {
            github.css({
                "background-color": "#000",
                "color": "#fff"
            });
        },
        function () {
            github.css({
                "background-color": "#fff",
                "color": "#000"
            });
        }
    );

    github.click(function () {
        var confirmOpen = window.confirm("You are opening my GitHub profile.");

        if (confirmOpen) {
            window.open("https://github.com/kchatten", "_blank");
        }
    }
    );

    $(container).append(github);


    //#endregion

    // LinkedIn Contact Button
    //#region
    const linkedin = $('<button class="contact-button"></button>');
    linkedin.css({
        "border": "2px solid black",
        "border-radius": "25px",
        "background-color": "#0077B5",
        "color": "#fff",
        "font-size": "larger",
        "font-family": "Helvetica",
    });
    linkedin.text("in")

    linkedin.hover(
        function () {
            linkedin.css("background-color", "#004b73");
        },
        function () {
            linkedin.css("background-color", "#0077B5");
        }
    );

    linkedin.click(function () {
        var confirmOpen = window.confirm("You are opening my LinkedIn profile.");

        if (confirmOpen) {
            window.open("https://www.linkedin.com/in/kyalchatten/", "_blank");
        }
    }
    );

    $(container).append(linkedin);
    //#endregion

    // GMail Contact Button
    //#region
    const gmail = $('<button class="contact-button"></button>');
    gmail.css({
        "border": "2px solid black",
        "border-radius": "25px",
        "background-color": "#fff",
    });

    const gmailIcon = $("<div></div>")
    gmailIcon.css({
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
    })

    $(gmail.append(gmailIcon));

    const envelopeBack = $("<div></div>");
    envelopeBack.css({
        "display": "flex",
        "justify-content": "space-between",
        "background-color": "#fff",
        "width": "30px",
        "height": "25px",
        "border": "1px solid black"
    });

    $(gmailIcon.append(envelopeBack));

    const envelopeLeftBorder = $("<div></div>");
    envelopeLeftBorder.css({
        "height": "25px",
        "width": "5px",
        "background-color": "red"
    })

    const envelopeRightBorder = $("<div></div>");
    envelopeRightBorder.css({
        "height": "25px",
        "width": "5px",
        "background-color": "red"
    })

    const envelopeFlapBorder = $("<div></div>");
    envelopeFlapBorder.css({
        "border-left": "10px solid transparent", /* Half of the width of the envelope flap */
        "border-right": "10px solid transparent", /* Half of the width of the envelope flap */
        "border-top": "15px solid red"
    })

    $(envelopeBack.append(envelopeLeftBorder));
    $(envelopeBack.append(envelopeFlapBorder));
    $(envelopeBack.append(envelopeRightBorder));

    gmail.hover(
        function () {
            gmail.css("background-color", "#dbdbdb");
        },
        function () {
            gmail.css("background-color", "#fff");
        }
    );

    gmail.click(function () {
        var confirmOpen = window.confirm("You are about to email me.");

        if (confirmOpen) {
            window.open("mailto:kyalchatten@gmail.com?subject=Hello&body=Hi%20there!");
        }
    }
    );

    $(container).append(gmail);
    //#endregion
});




