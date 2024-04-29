var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.startEngine = function () {
        return "Engine started";
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.startEngine = function () {
        return "Car engine started";
    };
    return Car;
}(Vehicle));
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectricCar.prototype.startEngine = function () {
        return "Electric Car engine started quietly";
    };
    ElectricCar.prototype.chargeBattery = function () {
        return "Battery charging";
    };
    return ElectricCar;
}(Vehicle));
function startVehicleEngine(vehicle) {
    console.log(vehicle.startEngine());
}
var myCar = new Car();
var myElectricCar = new ElectricCar();
startVehicleEngine(myCar); // 'Car engine started'
startVehicleEngine(myElectricCar); // 'Electric Car engine started quietly'
