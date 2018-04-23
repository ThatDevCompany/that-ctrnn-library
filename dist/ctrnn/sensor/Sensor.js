"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A sensor is a type of leaf-node transmitter. In transmits an output
 * based on a real-world value (such as light or proximity)
 */
var Sensor = /** @class */ (function () {
    function Sensor() {
    }
    Object.defineProperty(Sensor.prototype, "output", {
        /**
         * The output value of the sensor
         * @returns {number}
         */
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Randomise the sensor value
     */
    Sensor.prototype.randomise = function () {
        this._value = Math.random();
    };
    /**
     * Determine the next value
     * @param {number} dt		the timestep
     */
    Sensor.prototype.tick = function (dt) {
        // THIS METHOD SHOULD BE OVERRIDDEN
        this._next = this._value;
    };
    /**
     *	Apply the next value
     */
    Sensor.prototype.tock = function () {
        this._value = this._next;
    };
    return Sensor;
}());
exports.Sensor = Sensor;
