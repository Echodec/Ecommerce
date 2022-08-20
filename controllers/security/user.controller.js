const formLogin = (req, res) => {
    res.render('auth/login', {
        activo: true
    });
}

const formcoLogin = (req, res) => {
    res.render('auth/login', {
        activo: true
    });
}

const formreg = (req, res) => {
    res.render('auth/register', {

    });
}

const formindex = (req, res) => {
    res.render('layout/index', {

    });
}

const formcartelera = (req, res) => {
    res.render('layout/cartelera', {

    });
}

const formpreventa = (req, res) => {
    res.render('layout/preventa', {

    });
}

const formcomplejo = (req, res) => {
    res.render('layout/complejo', {

    });
}

const formpromociones = (req, res) => {
    res.render('layout/promociones', {

    });
}

const formproximamente = (req, res) => {
    res.render('layout/proximamente', {

    });
}

const formcontact = (req, res) => {
    res.render('layout/contact', {

    });
}

const formpass = (req, res) => {
    res.render('auth/password', {

    });
}

const formrecover = (req, res) => {
    res.render('auth/recovery', {

    });
}

const formregnew = (req, res) => {
    res.render('auth/regnew', {

    });
}

const formeditC = (req, res) => {
    res.render('admin/edit-cartelera', {

    });
}

const formeditD = (req, res) => {
    res.render('admin/edit-dia', {

    });
}

const formlistP = (req, res) => {
    res.render('admin/lista-peliculas', {

    });
}

const formprinc = (req, res) => {
    res.render('admin/principal', {

    });
}

const formregP = (req, res) => {
    res.render('admin/registrar-pelicula', {

    });
}

export {
    formLogin,
    formreg,
    formindex,
    formcartelera,
    formpreventa,
    formcomplejo,
    formpromociones,
    formproximamente,
    formcontact,
    formpass,
    formrecover,
    formregnew,
    formcoLogin,
    formeditC,
    formeditD,
    formlistP,
    formprinc,
    formregP
};