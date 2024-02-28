let filePath = `views/habitheroes`

exports.homepage = (req, res) => {
    res.render(filePath + `/index.ejs`);
}