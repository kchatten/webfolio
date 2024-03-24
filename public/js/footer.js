// #region [Footer Container]
const footer = $(`<div>This work is licensed under the <a id="license-link" href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank" style="padding-left: 5px;">CC BY-NC 4.0 Creative Commons License</a>.</div>`);

footer.attr({
    "id": "footer-container",
})
footer.css({
    "margin": "0",
    "padding": "0",

    "position": "absolute",
    "bottom": "0",
    "z-index": "1",

    "display": "flex",    
    "justify-content": "center",
    "align-items": "center",

    "min-height": "50px",
    "width": "100%",
    "border-top": "2px solid lime", 
    "color": "lime",
    "background-color": "#000",
});
$("#root").append(footer);
// #endregion 