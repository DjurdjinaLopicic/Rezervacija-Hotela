const express = require("express");
const { sequelize, Gradovi, Hoteli, Korisnici, Rezervacije, Sobe, TipoviSoba } = require("./models");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: ['http://127.0.0.1:8006','http://127.0.0.1:8005','http://127.0.0.1:8004','http://127.0.0.1:8003','http://127.0.0.1:8002','http://127.0.0.1:8001','http://127.0.0.1:8000', 'http://127.0.0.1:8500'],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function authToken(req, res, next){
    headers = req.rawHeaders;
    tok = ""
    headers.forEach( header => {
        e = header.split(' ');
        if(e[0] == "Bearer" && e.length == 2){
            tok = e[1];
        }
    })

    if(tok == "") return res.json({msg: "Invalid credentials"})

    jwt.verify(tok, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.json({msg: "Invalid credentials"});

        req.user = user;

        next();
    });
}

function autorizuj(req, res, next){
    headers = req.rawHeaders;
    tok = ""
    headers.forEach( header => {
        e = header.split(' ');
        if(e[0] == "Bearer" && e.length == 2){
            tok = e[1];
        }
    })
    decoded = jwt.verify(tok, process.env.ACCESS_TOKEN_SECRET);
    Korisnici.findOne( {where: {id: decoded.userId}} )
        .then( usr => {
            if(usr.tip == 2){
                return res.status(400).json({msg: "Not Authorized"});
            }else{
                next();
            }
        })
        .catch( err => {return res.status(500).json({msg: err})});
};

function autorizujAdmina(req, res, next){
    headers = req.rawHeaders;
    tok = ""
    headers.forEach( header => {
        e = header.split(' ');
        if(e[0] == "Bearer" && e.length == 2){
            tok = e[1];
        }
    })
    decoded = jwt.verify(tok, process.env.ACCESS_TOKEN_SECRET);
    Korisnici.findOne( {where: {id: decoded.userId}} )
        .then( usr => {
            if(usr.tip != 0){
                return res.status(400).json({msg: "Not Authorized"});
            }else{
                next();
            }
        })
        .catch( err => {return res.status(500).json({msg: err})});
};

const Joi = require('joi');
const { redirect } = require("express/lib/response");


//Tipovi soba

const tipoviSobaSema = Joi.object().keys({
    tip: Joi.string().trim().max(255).required()
});

app.get('/tipoviSoba', authToken, (req, res) => {
    TipoviSoba.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );

app.get('/tipoviSoba/:id', authToken, (req, res) => {
    TipoviSoba.findOne( {where: {id: req.params.id}} )
    .then(tipSobe => {
        if(tipSobe == null){
            res.json({msg: "Tip sobe sa datim id-jom ne postoji"})
        }else{
            res.json(tipSobe)
        }
    })
    .catch( err => res.status(500).json(err));
} );

app.post('/tipoviSoba', authToken, autorizuj, (req, res) => {
    Joi.validate(req.body, tipoviSobaSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            TipoviSoba.create( {tip: req.body.tip} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/tipoviSoba/:id', authToken, autorizuj, (req, res) => {
    Joi.validate(req.body, tipoviSobaSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            TipoviSoba.update( {tip: req.body.tip}, {where: {id: req.params.id} } )
                .then( rows => {
                    res.json(rows) 
                })
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/tipoviSoba/:id', authToken, autorizuj, (req, res) => {
    TipoviSoba.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json(err));
})

//Gradovi
const gradoviSema = Joi.object().keys({
    naziv: Joi.string().trim().max(255).required()
});

app.get('/gradovi', authToken, (req, res) => {
    Gradovi.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );

app.get('/gradovi/:id', authToken, (req, res) => {
    Gradovi.findOne( {where: {id: req.params.id}} )
    .then(tipSobe => {
        if(tipSobe == null){
            res.json({msg: "Grad sa datim id-jom ne postoji"})
        }else{
            res.json(tipSobe)
        }
    })
    .catch( err => res.status(500).json(err));
} );


app.post('/gradovi', authToken, autorizuj, (req, res) => {
    Joi.validate(req.body, gradoviSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Gradovi.create( {naziv: req.body.naziv} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(5000).json(err));
        }
    })
})

app.put('/gradovi/:id', authToken, autorizuj, (req, res) => {
    Joi.validate(req.body, gradoviSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Gradovi.update( {naziv: req.body.naziv}, {where: {id: req.params.id} } )
                .then( rows => res.json(rows) )
                .catch(err => res.status(5000).json(err));
        }
    })
})

app.delete('/gradovi/:id', authToken, autorizuj, (req, res) => {
    Gradovi.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json(err));
})


//Hoteli
const hoteliSema = Joi.object().keys({
    naziv: Joi.string().trim().max(255).required(),
    opis: Joi.string(),
    gradId: Joi.number().required()
});

app.get('/hoteli', authToken, (req, res) => {
    Hoteli.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );

app.get('/hoteli/:id', authToken, (req, res) => {
    Hoteli.findOne( {where: {id: req.params.id}} )
    .then(hotel => {
        if(hotel == null){
            res.json({msg: "Hotel sa datim id-jom ne postoji"})
        }else{
            res.json(hotel)
        }
    })
    .catch( err => res.status(500).json(err));
} );

app.post('/hoteli', authToken, autorizuj, (req, res) => {
    Joi.validate(req.body, hoteliSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Gradovi.findOne( {where: {id: req.body.gradId}} )
                .then(grad => {
                    if(grad == null){
                        res.json({msg: "Referencirani grad ne postoji"})
                    }else{
                        Hoteli.create( {naziv: req.body.naziv, opis: req.body.opis, gradId: req.body.gradId} )
                        .then( rows => res.json(rows) )
                        .catch(err => res.status(500).json(err));
                    }
                })
                .catch( err => res.status(500).json(err));
        }
    })
})

app.put('/hoteli/:id', authToken, autorizuj, (req, res) => {
    Joi.validate(req.body, hoteliSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Gradovi.findOne( {where: {id: req.body.gradId}} )
                .then(grad => {
                    if(grad == null){
                        res.json({msg: "Referencirani grad ne postoji"})
                    }else{
                        Hoteli.update( {naziv: req.body.naziv, opis: req.body.opis, gradId: req.body.gradId}, {where: {id: req.params.id} } )
                        .then( rows => res.json(rows) )
                        .catch(err => res.status(500).json(err));
                    }
                })
                .catch( err => res.status(500).json(err));
        }
    })
})

app.delete('/hoteli/:id', authToken, autorizuj, (req, res) => {
    Hoteli.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json(err));
})


//Sobe
const sobeSema = Joi.object().keys({
    opis: Joi.string().trim().max(4000),
    cena: Joi.number().min(0).required(),
    hotelId : Joi.number().required(),
    tipSobeId: Joi.number().required()
});

app.get('/sobe', authToken, (req, res) => {
    Sobe.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );

app.get('/sobe/:id', authToken, (req, res) => {
    Sobe.findOne( {where: {id: req.params.id}} )
    .then(soba => {
        if(soba == null){
            res.json({msg: "Tip sobe sa datim id-jom ne postoji"})
        }else{
            res.json(soba)
        }
    })
    .catch( err => res.status(500).json(err));
} );

app.post('/sobe', authToken, autorizuj, (req, res) => {
    Joi.validate(req.body, sobeSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Hoteli.findOne( {where: {id: req.body.hotelId}} )
            .then(hotel => {
                if(hotel == null){
                    res.json({msg: "Referencirani hotel ne postoji"})
                }else{
                    TipoviSoba.findOne( {where: {id: req.body.tipSobeId}} )
                    .then(tipSobe => {
                         if(tipSobe == null){
                            res.json({msg: "Referencirani tip sobe ne postoji"})
                        }else{
                            Sobe.create( {opis: req.body.opis, cena: req.body.cena, hotelId: req.body.hotelId, tipSobeId: req.body.tipSobeId} )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json(err));
                        }
                         })
                    .catch( err => res.status(500).json(err));
                }
            })
            .catch( err => res.status(500).json(err));
        }
    })
})

app.put('/sobe/:id', authToken, autorizuj, (req, res) => {
    Joi.validate(req.body, sobeSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Hoteli.findOne( {where: {id: req.body.hotelId}} )
            .then(hotel => {
                if(hotel == null){
                    res.json({msg: "Referencirani hotel ne postoji"})
                }else{
                    TipoviSoba.findOne( {where: {id: req.body.tipSobeId}} )
                    .then(tipSobe => {
                         if(tipSobe == null){
                            res.json({msg: "Referencirani tip sobe ne postoji"})
                        }else{
                            Sobe.update( {opis: req.body.opis, cena: req.body.cena, hotelId: req.body.hotelId, tipSobeId: req.body.tipSobeId}, {where: {id: req.params.id} }  )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json(err));
                        }
                         })
                    .catch( err => res.status(500).json(err));
                }
            })
            .catch( err => res.status(500).json(err));
        }
    })
})

app.delete('/sobe/:id', authToken, autorizuj, (req, res) => {
    Sobe.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json(err));
})


//Korisnici
const korisniciSema = Joi.object().keys({
    username: Joi.string().trim().max(255).required(),
    password: Joi.string().max(50).required(),
    ime: Joi.string().trim().max(255).required(),
    prezime: Joi.string().trim().max(255).required(),
    email: Joi.string().trim().email().required(),
    tip: Joi.number().min(0).max(2).required(),
});

app.get('/korisnici', authToken, (req, res) => {
    Korisnici.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );

app.get('/korisnici/:id', authToken, (req, res) => {
    Korisnici.findOne( {where: {id: req.params.id}} )
    .then(korisnik => {
        if(korisnik == null){
            res.json({msg: "Korisnik sa datim id-jom ne postoji"})
        }else{
            res.json(korisnik)
        }
    })
    .catch( err => res.status(500).json(err));
} );

const bcrypt = require('bcrypt');
app.post('/korisnici', authToken, autorizujAdmina, (req, res) => {
    Joi.validate(req.body, korisniciSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korisnici.create( {username: req.body.username, password: bcrypt.hashSync(req.body.password), ime: req.body.ime, prezime:req.body.prezime, email: req.body.email, tip: req.body.tip} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/korisnici/:id', authToken, autorizujAdmina, (req, res) => {
    Joi.validate(req.body, korisniciSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korisnici.update( {username: req.body.username, password: bcrypt.hashSync(req.body.password, 10), ime: req.body.ime, prezime:req.body.prezime, email: req.body.email, tip: req.body.tip}, {where: {id: req.params.id} }  )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/korisnici/:id', authToken, autorizujAdmina, (req, res) => {
    Korisnici.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json(err));
})


//Rezervacije
const rezervacijeSema = Joi.object().keys({
    korisnikId: Joi.number().required(),
    sobaId: Joi.number().required(),
    datumPocetka: Joi.date().raw().required(),
    datumKraja: Joi.date().raw().required()
});

app.get('/rezervacije', authToken, (req, res) => {
    Rezervacije.findAll()
        .then( rows => res.json(rows) )
        .catch( err =>res.status(500).json(err) );
} );

app.get('/rezervacije/:id', authToken, (req, res) => {
    Rezervacije.findOne( {where: {id: req.params.id}} )
    .then(korisnik => {
        if(korisnik == null){
            res.json({msg: "Rezervacija sa datim id-jom ne postoji"})
        }else{
            res.json(korisnik)
        }
    })
    .catch( err => res.status(500).json(err));
} );

app.post('/rezervacije', authToken, (req, res) => {
    Joi.validate(req.body, rezervacijeSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korisnici.findOne( {where: {id: req.body.korisnikId}} )
            .then(korisnik => {
                if(korisnik == null){
                    res.json({msg: "Referencirani korisnik ne postoji"})
                }else{
                    Sobe.findOne( {where: {id: req.body.sobaId}} )
                    .then(tipSobe => {
                         if(tipSobe == null){
                            res.json({msg: "Referencirana soba ne postoji"})
                        }else{
                            Rezervacije.create( {datumPocetka: req.body.datumPocetka, datumKraja: req.body.datumKraja, korisnikId: req.body.korisnikId, sobaId: req.body.sobaId} )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json(err));
                        }
                         })
                    .catch( err => res.status(500).json(err));
                }
            })
            .catch( err => res.status(500).json(err));
        }
    })
})

app.put('/rezervacije/:id', authToken, (req, res) => {
    Joi.validate(req.body, rezervacijeSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korisnici.findOne( {where: {id: req.body.korisnikId}} )
            .then(korisnik => {
                if(korisnik == null){
                    res.json({msg: "Referencirani korisnik ne postoji"})
                }else{
                    Sobe.findOne( {where: {id: req.body.sobaId}} )
                    .then(tipSobe => {
                         if(tipSobe == null){
                            res.json({msg: "Referencirana soba ne postoji"})
                        }else{
                            Rezervacije.update( {datumPocetka: req.body.datumPocetka, datumKraja: req.body.datumKraja, korisnikId: req.body.korisnikId, sobaId: req.body.sobaId}, {where: {id: req.params.id} } )
                            .then( rows => res.json(rows) )
                            .catch(err => res.status(500).json(err));
                        }
                         })
                    .catch( err => res.status(500).json(err));
                }
            })
            .catch( err => res.status(500).json(err));
        }
    })
})

app.delete('/rezervacije/:id', authToken, (req, res) => {
    Rezervacije.destroy({where: {id: req.params.id}})
    .then( rows => {
        res.json(rows)
    })
    .catch( err => res.status(500).json(err));
})


app.listen( {port:8500}, async() => {
    await sequelize.authenticate();
} );