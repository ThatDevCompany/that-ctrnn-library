"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Neuron receives any number of transmissions
 * and a transmits its output accordingly
 */
var Neuron = /** @class */ (function () {
    function Neuron() {
        /**
         * The signals being listened to
         * @type {Signal[]}
         * @private
         */
        this._listeningTo = [];
    }
    Object.defineProperty(Neuron.prototype, "output", {
        /**
         * The current value being transmitted by the neuron
         */
        get: function () {
            return this.activationFunction(this._value + this._bias);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The activation function for the neuron
     */
    Neuron.prototype.activationFunction = function (x) {
        return 1 / (1 + Math.pow(Math.E, -x));
    };
    /**
     * Listen to a signal
     * @param signal		the signal to listen to
     */
    Neuron.prototype.listenTo = function (signal) {
        this._listeningTo.push(signal);
    };
    /**
     * Randomise the neuron
     */
    Neuron.prototype.randomise = function () {
        this._value = Math.random();
        this._tao = Math.random();
        this._bias = Math.random();
    };
    /**
     * Determine the next value
     * See http://users.sussex.ac.uk/~inmanh/easy/alife10/ga_exercise2.html for equation
     */
    Neuron.prototype.tick = function (timestep) {
        var inputSignal = 0;
        this._listeningTo.forEach(function (t) {
            inputSignal += t.value;
        });
        var changeInValue = (inputSignal - this._value) / this._tao;
        this._next = this._value + (timestep * changeInValue);
    };
    /**
     * Apply the next value
     */
    Neuron.prototype.tock = function () {
        this._value = this._next;
    };
    return Neuron;
}());
exports.Neuron = Neuron;
