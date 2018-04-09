"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CTRNNNeuron_1 = require("./CTRNNNeuron");
var CTRNNNetwork = /** @class */ (function () {
    // Constructor
    function CTRNNNetwork(size) {
        if (size === void 0) { size = 3; }
        this.size = size;
        this.randomise();
    }
    // Randomise
    CTRNNNetwork.prototype.randomise = function () {
        this.neurons = [];
        for (var i = 0; i < this.size; i++) {
            this.neurons.push(new CTRNNNeuron_1.CTRNNNeuron());
        }
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                this.neurons[j].addOutputTo(this.neurons[i]);
            }
        }
    };
    return CTRNNNetwork;
}());
exports.CTRNNNetwork = CTRNNNetwork;
