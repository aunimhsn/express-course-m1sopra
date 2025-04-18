// Import des modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// Initialisation d'Express
const app = express()

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded())

// Routes
app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => {
    console.log(`Server started on ${port}`)
})
