"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Neuron_1 = require("./Neuron");
var Network = /** @class */ (function () {
    // Constructor
    function Network(size) {
        if (size === void 0) { size = 3; }
        this.size = size;
        this.randomise();
    }
    // Randomise
    Network.prototype.randomise = function () {
        this.neurons = [];
        for (var i = 0; i < this.size; i++) {
            this.neurons.push(new Neuron_1.Neuron());
        }
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                // this.neurons[j].addOutputTo(this.neurons[i]);
            }
        }
    };
    return Network;
}());
exports.Network = Network;
