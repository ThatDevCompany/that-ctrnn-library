"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An actuator is a leaf-node receiver. It receives an input
 * and actually effects some device with it (e.g. turns a wheel)
 */
var Actuator = /** @class */ (function () {
    function Actuator() {
    }
    /**
     * Attach the actuator to a transmission
     * @param signal	the transmission the Actuator should listen to
     */
    Actuator.prototype.listenTo = function (signal) {
        this._listeningTo = signal;
    };
    /**
     * Randomise the actuator value
     */
    Actuator.prototype.randomise = function () {
        this._value = Math.random();
    };
    /**
     * Determine the next value
     */
    Actuator.prototype.tick = function (dt) {
        this._next = this._listeningTo.value;
    };
    /**
     * Apply the next value
     */
    Actuator.prototype.tock = function () {
        this._value = this._next;
    };
    return Actuator;
}());
exports.Actuator = Actuator;
