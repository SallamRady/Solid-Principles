class Vehicle {
  startEngine(): string {
    return "Engine started";
  }
}

class Car extends Vehicle {
  startEngine(): string {
    return "Car engine started";
  }
}

class ElectricCar extends Vehicle {
  startEngine(): string {
    return "Electric Car engine started quietly";
  }

  chargeBattery(): string {
    return "Battery charging";
  }
}

function startVehicleEngine(vehicle: Vehicle) {
  console.log(vehicle.startEngine());
}

const myCar = new Car();
const myElectricCar = new ElectricCar();

startVehicleEngine(myCar); // 'Car engine started'
startVehicleEngine(myElectricCar); // 'Electric Car engine started quietly'
