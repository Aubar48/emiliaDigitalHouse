module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    about: function (req, res) {
        res.render('about');
    },
    contact: function (req, res) {
        res.render('contact');
    },
    music: function (req, res) {
        res.render('music');
    }

}