"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const MAX_LENGTH = 5;
function generate() {
    let ans = "";
    const subset = "12345678980qwpworiurttyualsfkjdasdlghxvmbz";
    for (let i = 0; i < MAX_LENGTH; i++) {
        ans += subset[Math.floor(Math.random() * subset.length)];
    }
    return ans;
}
exports.generate = generate;
