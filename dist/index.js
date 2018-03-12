"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PathDrawer = /** @class */ (function () {
    function PathDrawer(message) {
        this.greeting = message;
    }
    PathDrawer.prototype.hello = function () {
        return this.greeting;
    };
    return PathDrawer;
}());
exports.default = PathDrawer;
