"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CTRNNConnection_1 = require("./CTRNNConnection");
var CTRNNNeuron = /** @class */ (function () {
    function CTRNNNeuron() {
        // Incoming Connections
        this.inputs = [];
        // Outgoing Connections
        this.outputs = [];
    }
    // Activation Function
    CTRNNNeuron.prototype.activate = function (x) {
        return 1 / (1 + Math.pow(Math.E, -x));
    };
    // Randomise Function
    CTRNNNeuron.prototype.randomise = function () {
        this.value = Math.random();
        this.tao = Math.random();
        this.bias = Math.random();
    };
    // Add Incoming Connection
    CTRNNNeuron.prototype.addInputConnection = function (c) {
        this.inputs.push(c);
    };
    // Add Outgoing Connection
    CTRNNNeuron.prototype.addOutputTo = function (to) {
        var c = new CTRNNConnection_1.CTRNNConnection(this, to);
        this.outputs.push(c);
    };
    return CTRNNNeuron;
}());
exports.CTRNNNeuron = CTRNNNeuron;
