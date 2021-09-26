export const aboutpeopleController = async function (req,res) {
    let user;
    if (req.isAuthenticated()) {
        user = {
            id: req.user.rows[0].id,
            username: req.user.rows[0].username,
        };
    } else {
        user = null;
    }
    res.render('about', { 
        user: user, 
    });
};

export const acknowledgementspeopleController = async function (req,res) {
    let user;
    if (req.isAuthenticated()) {
        user = {
            id: req.user.rows[0].id,
            username: req.user.rows[0].username,
        };
    } else {
        user = null;
    }
    res.render('acknowledgements', { 
        user: user, 
    });
};

export const contactpeopleController = async function (req,res) {
    let user;
    if (req.isAuthenticated()) {
        user = {
            id: req.user.rows[0].id,
            username: req.user.rows[0].username,
        };
    } else {
        user = null;
    }
    res.render('contact', { 
        user: user, 
    });
};

export const privacypeopleController = async function (req,res) {
    let user;
    if (req.isAuthenticated()) {
        user = {
            id: req.user.rows[0].id,
            username: req.user.rows[0].username,
        };
    } else {
        user = null;
    }
    res.render('privacy', { 
        user: user, 
    });
};
