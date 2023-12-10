// Express.js palvelin
const path = require('path')
const express = require('express')

const app = express()


const herkut = require('./herkut.json')

//GET ALL etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res) => {
    res.json(herkut)
})

//Tehdään polku määritys public kansioon
const polku = path.join(__dirname, './public')

//Sanotaan että em. polussa on tiedostosisältö jota  palvelin käyttää kun se saa http requestin
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})