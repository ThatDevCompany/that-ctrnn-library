"use strict";
exports.__esModule = true;
var CTRNNConnection = /** @class */ (function () {
    // Constructor
    function CTRNNConnection(from, to) {
        this.from = from;
        this.to = to;
        this.weight = Math.random();
    }
    return CTRNNConnection;
}());
exports.CTRNNConnection = CTRNNConnection;
