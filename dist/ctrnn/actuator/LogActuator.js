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
var Actuator_1 = require("./Actuator");
/**
 * The Log Actuator sends its value to the console log
 * every tock()
 */
var LogActuator = /** @class */ (function (_super) {
    __extends(LogActuator, _super);
    function LogActuator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Apply the next value
     */
    LogActuator.prototype.tock = function () {
        _super.prototype.tock.call(this);
        console.log('Value:', this._value);
    };
    return LogActuator;
}(Actuator_1.Actuator));
exports.LogActuator = LogActuator;
