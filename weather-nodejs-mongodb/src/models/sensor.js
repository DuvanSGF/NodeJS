const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SensorSchema = new Schema({
    temperatura: Number,
    humedad: Number,
    clima: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('sensor', SensorSchema);