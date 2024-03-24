//#region [Image Container]
const imageContainer = $("<div id='image-container'></div>");
imageContainer.css({
    "display": "flex",
    "position": "absolute",
    "z-index": "0",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "height": "100%",
    "overflow": "hidden"

});
imageContainer.insertAfter($("#header-container"));
const faceBlue = $("<img src='/img/testblue.png'>");
faceBlue.css({
    "position": "relative",
    "left": "300px",
    "opacity": "0.35"
});
const faceRed = $("<img src='/img/testred.png'>");
faceRed.css({
    "opacity": "0.35"
})
const faceGreen = $("<img src='/img/testgreen.png'>");
faceGreen.css({
    "position": "relative",
    "right": "300px",
    "opacity": "0.35"
});
imageContainer.append(faceBlue);
imageContainer.append(faceRed);
imageContainer.append(faceGreen);
//#endregion

//#region [Cursor Tracker]

let mousePosY;
let mousePosX;

$("#root").on("mousemove", (event) => {
    mousePosY = event.clientY;
    mousePosX = event.clientX;

    const rootCenterX = $('#root').width() / 2;
    const rootCenterY = $('#root').height() / 2;
    const distanceX = mousePosX - rootCenterX;
    const distanceY = mousePosY - rootCenterY;

    const movementAmount = 5;
    faceBlue.css({
        "transform": `translate(${distanceX / movementAmount}px, ${distanceY / movementAmount}px)`,
    });
    faceRed.css({
        "transform": `translate(${distanceX / movementAmount}px, ${distanceY / movementAmount}px)`,
    });
    faceGreen.css({
        "transform": `translate(${distanceX / movementAmount}px, ${distanceY / movementAmount}px)`,
    });

    const overlapFactor = 0.5;
    faceGreen.css({
        "transform": `translate(${distanceX / (movementAmount * (overlapFactor * 2))}px, ${distanceY / (movementAmount * (overlapFactor * 2))}px)`,
    });
    faceRed.css({
        "transform": `translate(${distanceX / (movementAmount * overlapFactor)}px, ${distanceY / (movementAmount * overlapFactor)}px)`,
    });
    faceGreen.css({
        "transform": `translate(${distanceX / (movementAmount * (overlapFactor * 2))}px, ${distanceY / (movementAmount * (overlapFactor * 2))}px)`,
    });
});
//#endregion