const express = require('express');
const partnerRouter = express.Router();
const Partner = require('../models/partner');
const authenticate = require('../authenticate');

partnerRouter.route('/')
.get((req, res, next) => {
    Partner.find()
        .then(partners => {
            res.statusCode = 200;
            res.setHeader('Content Type', 'application/json');
            req.json(partners);
        })
        .catch(err => next(err));
})
.post(authenticate.verifyUser, (req, res, next) => {
    Partner.create(req.body)
        .then(partner => {
            console.log('partner Created', partner);
            res.statusCode = 200;
            res.setHeader('Content Type', 'application/json');
            res.json(partner);
        })
        .catch(err => next(err));
})
.put(authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete(authenticate.verifyUser, (req, res, next) => {
    Partner.findById(req.params.partnerId)
        .then(partner => {
            console.log('Partner Created', partner);
            res.statusCode = 200;
            res.setHeader('Content Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
});

partnerRouter.route('/:partnerId')
.all(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post(authenticate.verifyUser, (req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put(authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete(authenticate.verifyUser, (req, res) => {
    res.end('Deleting all partners');
});

module.exports = partnerRouter;