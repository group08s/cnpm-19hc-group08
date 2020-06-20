"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantComponent = void 0;
var core_1 = require("@angular/core");
var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent() {
        this.selectedCustomer = "";
        this.Customers = [{
                id: 0,
                name: "Hotel guests"
            },
            {
                id: 1,
                name: "Visitor"
            },
        ];
        this.Rooms = [{
                id: 0,
                name: "101"
            },
            {
                id: 1,
                name: "102"
            },
            {
                id: 2,
                name: "402"
            },
            {
                id: 3,
                name: "302"
            },
            {
                id: 4,
                name: "202"
            },
        ];
        this.selectedRoom = "";
    }
    RestaurantComponent.prototype.selectChangeCus = function (event) {
        //update the ui
        this.selectedCustomer = event.target.value;
    };
    RestaurantComponent.prototype.selectChangeRoom = function (event) {
        //update the ui
        this.selectedRoom = event.target.value;
    };
    RestaurantComponent.prototype.ngOnInit = function () { };
    RestaurantComponent = __decorate([
        core_1.Component({
            selector: "app-restaurant",
            templateUrl: "./restaurant.component.html",
            styleUrls: ["./restaurant.component.css"]
        })
    ], RestaurantComponent);
    return RestaurantComponent;
}());
exports.RestaurantComponent = RestaurantComponent;
