const express = require("express");
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const sobe = express.Router();;

function getCookies(req){
    if(req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split(': ');
    const parseCookies = {};

    rawCookies.forEach( cookie => {
        const pc = cookie.split('=');
        parseCookies[pc[0]] = pc[1]
    });

    return parseCookies;
}

function authTokena(req, res, next){
    const cookies = getCookies(req);
    const token = cookies['token'];


    if(token == null) return res.redirect('/login');

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.redirect('/login');


        req.user = user;
        next();
    })
}

const request = require('request');

function izvuciTip(req) {
    return new Promise((resolve, reject) => {
        const cookies = getCookies(req);
        console.log("a");
        const token = cookies['token'];
        console.log("b");
        decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log("c");
        id = decoded.userId;
        console.log("d");
        request("http://127.0.0.1:8500/korisnici/"+id, {'auth': {"bearer": token}, "json":true}, (error, response, body) => {
            console.log(body.tip);
            if(error) resolve(-1);
            else if(response.statusCode != 200) resolve(-1);
            else resolve(body.tip);
        });
    });
}

async function autorizuj(req, res, next){
    const tip = await izvuciTip(req);


    if(tip < 0) return res.redirect('/login');
    if(tip == 2) return res.redirect('/login');

    next();


}

sobe.get('/', authTokena , autorizuj, (req, res) => {
    res.sendFile('sobe.html', {root: './static/sobe'});
})

sobe.get('/login', (req, res) => {
    res.sendFile('login.html', {root: './static'})
})

sobe.get('/prikazi', authTokena, autorizuj ,(req, res) => {
    res.sendFile('soba.html', {root: './static/sobe'});
})

sobe.get('/obrisi', authTokena, autorizuj ,(req, res) => {
    res.sendFile('brisiSobu.html', {root: './static/sobe'});
})

sobe.get('/novi', authTokena,autorizuj , (req, res) => {
    res.sendFile('noviSoba.html', {root: './static/sobe'});
})

sobe.get('/izmeni', authTokena, autorizuj ,(req, res) => {
    res.sendFile('izmeniSoba.html', {root: './static/sobe'});
})

sobe.use(express.static(path.join(__dirname, 'static')));

module.exports = sobe;