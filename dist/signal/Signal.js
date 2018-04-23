"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The amplified signal from a Transmitter
 */
var Signal = /** @class */ (function () {
    function Signal() {
    }
    Object.defineProperty(Signal.prototype, "value", {
        /**
         *	The current state / value of the transmission
         */
        get: function () {
            return this.transmitter.output * this._weight;
        },
        enumerable: true,
        configurable: true
    });
    return Signal;
}());
exports.Signal = Signal;
