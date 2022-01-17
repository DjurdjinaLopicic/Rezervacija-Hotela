const express = require("express");
const { sequelize, Gradovi, Hoteli, Korisnici, Rezervacije, Sobe, TipoviSoba } = require("./models");
require('dotenv').config();
const jwt = require('jsonwebtoken');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function getCookies(req){
    if(req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    } )
    return parsedCookies;
}

function authToken(req, res, next){
    const cookies = getCookies(req);
    const token = cookies['token'];

    if(token == null) return res.json({msg: "Invalid credentials"})

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, useer) => {
        if(err) return res.json({msg: "Invalid credentials"});

        req.user = user;

        next();
    });
}

const Joi = require('joi');
const { redirect } = require("express/lib/response");

/*
const sema = Joi.object().keys({
    mail: Joi.string().trim().email().required(),
    pass: Joi.string().trim().min(4).max(20).required()
});
*/

//Tipovi soba

const tipoviSobaSema = Joi.object().keys({
    tip: Joi.string().trim().max(255).required()
});

app.get('/tipoviSoba', (req, res) => {
    TipoviSoba.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );

app.post('/tipoviSoba', (req, res) => {
    Joi.validate(req.body, tipoviSobaSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            TipoviSoba.create( {tip: req.body.tip} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(5000).json(err));
        }
    })
})


//Gradovi
const gradoviSema = Joi.object().keys({
    naziv: Joi.string().trim().max(255).required()
});

app.get('/gradovi', (req, res) => {
    Gradovi.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );

//Hoteli
const hoteliSema = Joi.object().keys({
    naziv: Joi.string().trim().max(255).required(),
    gradId: Joi.number().required()
});
app.get('/hoteli', (req, res) => {
    Hoteli.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );


//Sobe
app.get('/sobe', (req, res) => {
    Sobe.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );


//Korisnici
app.get('/korisnici', (req, res) => {
    Korisnici.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );


//Rezervacije
app.get('/rezervacije', (req, res) => {
    Rezervacije.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );





app.listen( {port:8500}, async() => {
    await sequelize.authenticate();
} );