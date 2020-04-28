"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
function getWikipediaUrlMobile(url) {
    return (url !== undefined) ? url.replace("wikipedia", "m.wikipedia") : "";
}
exports.getWikipediaUrlMobile = getWikipediaUrlMobile;
function checkYear(year) {
    const currentYear = new Date().getFullYear();
    if (isNaN(+year) || +year < 1950 || +year > currentYear) {
        return String(currentYear);
    }
    return year;
}
exports.checkYear = checkYear;
function roundCheck(round) {
    if (round >= 100) {
        round = 1;
    }
    return round;
}
exports.roundCheck = roundCheck;
function getAge(dateOfBirth) {
    return moment_1.default().diff(dateOfBirth, 'years');
}
exports.getAge = getAge;
