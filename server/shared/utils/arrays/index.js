"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArr = void 0;
// v.2024-03-02
__exportStar(require("./change-sequence"), exports); // v.2024-03-02
var create_arr_1 = require("./create-arr"); // v.2023-07-31
Object.defineProperty(exports, "createArr", { enumerable: true, get: function () { return create_arr_1.createArr; } });
__exportStar(require("./get-arr-contain-value-by-field"), exports);
__exportStar(require("./get-arr-from-arrs-by-field-and-value"), exports);
__exportStar(require("./get-arr-without-item"), exports);
__exportStar(require("./get-arr-without-item-by-id"), exports);
__exportStar(require("./get-arr-without-item-by-two-fields-obj"), exports);
__exportStar(require("./get-arr-without-items"), exports);
__exportStar(require("./get-item-by-id"), exports); // v.2023-08-08
__exportStar(require("./get-item-from-arr-by-field"), exports);
__exportStar(require("./get-item-from-arr-by-two-field"), exports);
__exportStar(require("./is-arrs-equal"), exports);
__exportStar(require("./is-item-in-arr"), exports);
__exportStar(require("./is-item-in-arr-by-field"), exports);
__exportStar(require("./update-arr-by-id"), exports);
__exportStar(require("./update-arr-by-arr-by-field"), exports);
__exportStar(require("./update-arr-by-some-changes"), exports);
__exportStar(require("./update-arr-with-item-by-field"), exports); // v.2023-09-02
__exportStar(require("./update-arr-with-item-by-two-fields"), exports);
__exportStar(require("./types"), exports); // v.2023-09-17
