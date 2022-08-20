import express from "express";
import {
    formLogin,
    formcoLogin,
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
    formeditC,
    formeditD,
    formlistP,
    formprinc,
    formregP


} from "../../controllers/security/user.controller.js";

const router = express.Router();

router.get('/', formindex);
router.get('/cartelera', formcartelera);
router.get('/preventa', formpreventa);
router.get('/complejos', formcomplejo);
router.get('/promociones', formpromociones);
router.get('/proximamente', formproximamente);
router.get('/contacto', formcontact);

router.get('/password', formpass);
router.get('/recover', formrecover);
router.get('/login/recover', formrecover);
router.get('/auth/login', formcoLogin);
router.get('/regnew', formregnew);
router.get('/login', formLogin);
router.get('/register', formreg);

router.get('/edit-cartelera', formeditC);
router.get('/edit-dia', formeditD);
router.get('/lista-peliculas', formlistP);
router.get('/principal', formprinc);
router.get('/registrar-pelicula', formregP);


export default router;