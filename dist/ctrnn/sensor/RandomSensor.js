"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sensor_1 = require("./Sensor");
/**
 * A random sensor randomises its value every X seconds
 */
var RandomSensor = /** @class */ (function (_super) {
    __extends(RandomSensor, _super);
    function RandomSensor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Determine the next value
     */
    RandomSensor.prototype.tick = function (dt) {
        this._currentInterval += dt;
        // Time to change
        if (this._currentInterval >= this.frequency) {
            this._next = Math.random();
            this._currentInterval = this._currentInterval - this.frequency;
        }
    };
    return RandomSensor;
}(Sensor_1.Sensor));
exports.RandomSensor = RandomSensor;
