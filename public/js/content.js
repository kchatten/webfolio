//#region [Content Container]
const contentContainer = $("<div id='content-container'></div>");
contentContainer.css({
    "position": "relative",

    "max-height": "78%",

    "display": "flex",
    "flex-direction": "column",

    "justifyContent": "center",
    "alignItems": "center",
    "z-index": "1",

    "height": "100%",
    "width": "100%",
    "color": "white"

});
$("#root").append(contentContainer);
//#endregion

//#region [Content]

UpdateContent();

function UpdateContent() {
    const page = new URLSearchParams(window.location.search).get('page');
    contentContainer.empty();
    if (page === "/") {
        const newText = $("<p>Chromatic Ivory</p>");
        contentContainer.append(newText);
    } else if (page === "aboutme") {
        const titleText = $("<p style='color: yellow'>Who are you?</p>");
        contentContainer.append(titleText);

        const paraText1 = $("<p></p>");
        paraText1.text("My name is Kyal Chatten, I'm a hobby coder and web developer born in Ontario, Canada.");
        paraText1.insertAfter(titleText);

        const titleText2 = $("<p style='color: yellow'></p>");
        titleText2.text("What drives you?");
        titleText2.insertAfter(paraText1);

        const paraText2 = $("<p></p>");
        paraText2.text("I'm motivated by the learning process, the triumph of overcoming challenges and closing a thousand tabs.");
        paraText2.insertAfter(titleText2);

        const titleText3 = $("<p style='color: yellow'></p>");
        titleText3.text("What are you currently doing?");
        titleText3.insertAfter(paraText2);

        const paraText3 = $("<p></p>");
        paraText3.text("I'm currently finishing up with the Code Youth skills development program, and am actively participating in the NPower Junior IT Analyst program.");
        paraText3.insertAfter(titleText3);

        const titleText4 = $("<p style='color: yellow'></p>")
        titleText4.text("When will you be free?");
        titleText4.insertAfter(paraText3);

        const paraText4 = $("<p></p>");
        paraText4.text("Well, the NPower program ends late June 2024 -- but I am available year round via email or LinkedIn if you'd like to chat. You can find those on my contact page.");
        paraText4.insertAfter(titleText4);

        const titleText5 = $("<p style='color: yellow'></p>");
        titleText5.text("Thanks for your time.");
        titleText5.insertAfter(paraText4);

        const paraText5 = $("<p></p>");
        paraText5.text("You're welcome");
        paraText5.insertAfter(titleText5);

    } else if (page === "projects") {
        const newText = $("<p>Chromatic Ivory3</p>");
        contentContainer.append(newText);
    } else if (page === "contact") { // DONE? 
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
        const linkedin = $("<button id='contact-linkedin' class='--contact-button'>in</button>");
        linkedin.css({
            "font-size": "xx-large",
            "font-family": "Helvetica",
        });

        linkedin.on("click", () => {
            var confirmOpen = window.confirm("You are opening my LinkedIn profile.");

            if (confirmOpen) {
                window.open("https://www.linkedin.com/in/kyalchatten/", "_blank");
            }
        });

        contactContainer.append(linkedin);
        //#endregion

        //#region [GitHub Contact Button]
        const github = $("<button id='contact-github' class='--contact-button'>GitHub</button>")
        github.css({
            "font-size": "x-large",
            "font-family": "Helvetica",
        });

        github.on("click", () => {
            var confirmOpen = window.confirm("You are opening my Github profile.");

            if (confirmOpen) {
                window.open("https://github.com/kchatten", "_blank");
            }
        });

        contactContainer.append(github);
        //#endregion

        //#region [GMail Contact Button]
        const gmail = $("<button id='contact-email' class='--contact-button'>GMail</button>")
        gmail.css({
            "font-size": "x-large",
            "font-family": "Helvetica",
        });

        gmail.on("click", () => {
            var confirmOpen = window.confirm("You are about to email me.");

            if (confirmOpen) {
                window.open("mailto:kyalchatten@gmail.com?subject=Hello&body=Hi%20there!");
            }
        });

        contactContainer.append(gmail);
        //#endregion

    }
}

$(document).ready(function() {
    // Loop through each button in the header container
    $("#header-container button").each(function() {
        // Add click event listener to the current button
        $(this).on("click", function() {
           UpdateContent();
        });
    });
});
//#endregion