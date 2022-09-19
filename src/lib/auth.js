module.exports = {

    // Si el usuario no esta logeado, esta funcion permite protejer rutas
    isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/signin');
    },

    // Si el usuario esta logeado, esta funcion permite protejer rutas
    isNotLoggedIn (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/profile');
    }
};