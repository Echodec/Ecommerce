import express from 'express';

import userRoutes from './routes/security/user-route.js';

const app = express();

//Routing
app.use('/', userRoutes);

//Teemplate Engine
app.set('view engine', 'pug');
app.set('views', './views')

//Carpeta
app.use(express.static('public'));

//Routing
app.use('/auth', userRoutes);

//Definir puerto
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor en ejecucion en: http://localhost:${port}`);
});