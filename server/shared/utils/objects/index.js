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
exports.getMajorStatus = exports.getValuePosition = void 0;
// v.2024-03-02
__exportStar(require("./arr-from-obj-with-key"), exports);
__exportStar(require("./convert-to-dot"), exports);
__exportStar(require("./filter-ents-by-field"), exports);
__exportStar(require("./get-all-obj-value"), exports);
__exportStar(require("./get-changes"), exports);
__exportStar(require("./get-first-field-key"), exports);
__exportStar(require("./get-key-by-value"), exports);
var get_major_status_1 = require("./get-major-status"); // v.2023-07-15
Object.defineProperty(exports, "getValuePosition", { enumerable: true, get: function () { return get_major_status_1.getValuePosition; } });
Object.defineProperty(exports, "getMajorStatus", { enumerable: true, get: function () { return get_major_status_1.getMajorStatus; } });
__exportStar(require("./get-object-without-field"), exports);
__exportStar(require("./get-scheme"), exports);
__exportStar(require("./get-value-by-scheme"), exports);
__exportStar(require("./is-changes"), exports);
__exportStar(require("./is-field"), exports); // v.2024-03-02
__exportStar(require("./object-fields-to-string"), exports);
__exportStar(require("./set-value-by-scheme"), exports);
__exportStar(require("./size-of"), exports);
__exportStar(require("./update-object"), exports);
__exportStar(require("./objects"), exports);
