const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./database/config')

// Crear el servidor de express
const app = express()

// Base de datos
dbConnection()

// Configuración CORS
// const corsOptions = {
//     origin: 'https://calendar-app-pied.vercel.app/*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     optionsSuccessStatus: 204, // Algunas solicitudes OPTIONS no requieren un cuerpo de respuesta, esto evita que se muestre un error.
//   };
  
//   app.use(cors(corsOptions));

// Configurar cabeceras y cors

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://https://calendar-app-pied.vercel.app/');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Directorio Público
app.use( express.static('public') )

// Lectura y parseo del body
app.use( express.json() )

// Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// Escuchar las peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})