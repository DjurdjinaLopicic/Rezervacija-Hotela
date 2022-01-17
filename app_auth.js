const express = require("express");
const { sequelize, Korisnici } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const Joi = require('joi');

const app = express();


var corsOptions = {
    origin: ['http://127.0.0.1:8000', 'http://127.0.0.1:8500'],
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

const registracijaSema = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().min(5).max(50).required(),
    ime: Joi.string().trim().required(),
    prezime: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    tip: Joi.number().min(0).max(2).required()
});

const loginSema = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().min(5).max(50).required(),
});

app.post('/register', (req, res) => {
    Joi.validate(req.body, registracijaSema, (error, result) => {
        if(error){
            res.status(400).send(error.details);
        }else{
            headers = req.rawHeaders;
            tok = ""
            headers.forEach( header => {
                e = header.split(' ');
                if(e[0] == "Bearer" && e.length == 2){
                    tok = e[1];
                }
            })
            
            if(req.body.tip != 2){
                if(tok != ""){
                    decoded = jwt.verify(tok, process.env.ACCESS_TOKEN_SECRET);
                    Korisnici.findOne( {where: {id: decoded.userId}} )
                    .then( usr => {
                        if(usr.tip != 0){
                            res.status(400).json({msg: "Invalid credentials"});
                        }else{
                            Korisnici.findOne( {where: {username: req.body.username}} )
                            .then( u => {
                                if(u != null){
                                    res.status(400).json({msg: "Username already exists"});
                                }else{
                                    Korisnici.findOne( {where: {email: req.body.email}} )
                                    .then( uu => {
                                        if(uu != null){
                                            res.status(400).json({msg: "Emaiil already exists"});
                                        }else{
                                            const obj = {
                                                username: req.body.username,
                                                password: bcrypt.hashSync(req.body.password, 10),
                                                ime: req.body.ime,
                                                prezime: req.body.prezime,
                                                email: req.body.email,
                                                tip: req.body.tip
                                            };
                                            Korisnici.create(obj).then( rows => {
                                                const usr = {
                                                    userId: rows.id,
                                                    user: rows.name
                                                };
                
                                                const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);
                
                                                res.json( {token: token} );
                
                                            }).catch( err => res.status(500).json(err) );
                                        }
                                    })
                                    .catch( err => {
                                        res.status(500).json({msg: "Internal error"});
                                    })
                                }
                            })
                            .catch( err => {
                                res.status(500).json({msg: "Internal error"});
                            })
                            
                        }
                    })
                    .catch( err => res.status(500).json(err) )
                }else{
                    res.status(400).json({msg: "Invalid credentials"});
                }
            }else{  
                Korisnici.findOne( {where: {username: req.body.username}} )
                            .then( u => {
                                if(u != null){
                                    res.status(400).json({msg: "Username already exists"});
                                }else{
                                    Korisnici.findOne( {where: {email: req.body.email}} )
                                    .then( uu => {
                                        if(uu != null){
                                            res.status(400).json({msg: "Emaiil already exists"});
                                        }else{
                                            const obj = {
                                                username: req.body.username,
                                                password: bcrypt.hashSync(req.body.password, 10),
                                                ime: req.body.ime,
                                                prezime: req.body.prezime,
                                                email: req.body.email,
                                                tip: req.body.tip
                                            };
                                            Korisnici.create(obj).then( rows => {
                                                const usr = {
                                                    userId: rows.id,
                                                    user: rows.name
                                                };
                
                                                const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);
                
                                                res.json( {token: token} );
                
                                            }).catch( err => res.status(500).json(err) );
                                        }
                                    })
                                    .catch( err => {
                                        res.status(500).json({msg: "Internal error"});
                                    })
                                }
                            })
                            .catch( err => {
                                res.status(500).json({msg: "Internal error"});
                            })
            }
        }
    })

} );

app.post('/login', (req, res) => {
    Joi.validate(req.body, loginSema, (error, result) => {
        if(error){
            res.status(400).send(error.details);
        }else{
            Korisnici.findOne( {where: {username: req.body.username}} )
                .then( usr => {
                    if(bcrypt.compareSync(req.body.password, usr.password)){
                        const obj = {
                            userId: usr.id,
                            user: usr.username
                        };

                        const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);

                        res.json({ token: token });
                    }else{
                        res.status(400).json({msg: "Invalid credentials"});
                    }
                })
                .catch( err => res.status(500).json(err) )
        }
    })
        
})

app.listen( {port:9000}, async() => {
    await sequelize.authenticate();
} );