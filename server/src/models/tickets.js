const mongoose = require("mongoose");
const {ticketTypes, ticketStatus} = require("../constants/schmas");

const tickets = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ticketTypes
    },
    Date: {
        type :Date
    },
    ServiceOrDepartment: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ticketStatus,
        default: 'NEW'
    },
    Description: {
        type: String,
        required: true,
    },

});
tickets.set('toObject', {virtuals: true});
tickets.method('toGraph', function toGraph() {
    return JSON.parse(JSON.stringify(this));
});
module.exports = mongoose.model('Ticket', tickets);
