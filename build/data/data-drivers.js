"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
class DriversData extends data_source_1.F1 {
    constructor() {
        super();
    }
    getDrivers(pageElements = -1, page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            if (pageElements === -1) {
                return yield this.get("drivers.json?limit=1000", {
                    cacheOptions: { ttl: 60 }
                });
            }
            const offset = (page - 1) * pageElements;
            const limit = pageElements;
            const filter = `limit=${limit}&offset=${offset}`;
            return yield this.get(`drivers.json?${filter}`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
    getDriversBySeason(year, race) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!race) {
                return yield this.get(`${year}/drivers.json`, {
                    cacheOptions: { ttl: 60 }
                });
            }
            return yield this.get(`${year}/${race}/drivers.json`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
    getDriverInformation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`drivers/${id}.json`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
    getDriversStanding(year) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`${year}/driverStandings.json`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
}
exports.DriversData = DriversData;
