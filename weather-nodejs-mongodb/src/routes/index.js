const express = require('express');
const router = express.Router();

const Sensor = require('../models/sensor');


router.get('/', async (req, res) => {
    const sensor = await Sensor.find();
    console.log(sensor);
    res.render('index', {
        sensor
    });
    res.end();
});

router.post('/add', async (req, res) => {
    const sensor = new Sensor(req.body);
    await sensor.save();
    res.redirect('/');
});

router.get('/status/:id', async (req, res) => {
    const { id } = req.params;
    const sensor = await Sensor.findById(id);
    sensor.status = !sensor.status;
    await sensor.save();
    res.redirect('/');
});

router.get('/update/:id', async (req, res) => {
    const { id } = req.params;
    const sensor = await Sensor.findById(id);
    res.render('update', {
        sensor
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    await Sensor.update({_id:id}, req.body);
    res.redirect('/');
});
    
});

router.get('/delete/:id', async (req, res) =>{
    const { id } = req.params;
    await Sensor.remove({_id: id});
    res.redirect('/');
});

module.exports = router;