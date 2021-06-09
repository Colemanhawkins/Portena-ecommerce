const PORT = 3001
const express = require('express')
const morgan = require('morgan');
const { conn } =  require('./src/models/index')
const app = express()

const routes = require('./src/routes/index')
const errorHandler = require('./utils/middlewares/errorHandlers')
const setHeaders = require('./utils/middlewares/setHeaders')

app.name = 'API';

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(setHeaders);
app.use(errorHandler); 
app.use('/api', routes)

conn.sync({truncate: true}).then(() => {
    
    app.listen(PORT, () => {
        console.log(`server escuchando el puerto ${PORT}`)
    })
})

console.log('prueba para mergeeeeee')