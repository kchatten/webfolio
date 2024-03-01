// This controller works directly with hhRouter to direct traffic and handle data. 

exports.homepage = (req, res) => {
    res.render(`habitheroes/index.ejs`);
}

exports.register = (req, res) => {
    res.render('habitheroes/register.ejs')
}