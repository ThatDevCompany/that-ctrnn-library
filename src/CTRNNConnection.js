"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
