const express = require('express');
const promotionsRouter = express.Router();
const Promotion = require('../models/promotions');

promotionRouter.route('/')
.get((req, res, next) => {
    Promotion.find()
        .then(promotions => {
            res.statusCode = 200;
            res.setHeader('Content Type', 'application/json');
            req.json(promotions);
        })
        .catch(err => next(err));
})
.post((req, res, next) => {
    Promotion.create(req.body)
        .then(promotion => {
            console.log('promotion Created', promotion);
            res.statusCode = 200;
            res.setHeader('Content Type', 'application/json');
            res.json(promotion);
        })
        .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    Promotion.findById(req.params.promotionId)
        .then(promotion => {
            console.log('Promotion Created', promotion);
            res.statusCode = 200;
            res.setHeader('Content Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
});

promotionsRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

module.exports = promotionsRouter;