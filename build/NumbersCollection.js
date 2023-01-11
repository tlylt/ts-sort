"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersColllection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersColllection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersColllection = NumbersColllection;
