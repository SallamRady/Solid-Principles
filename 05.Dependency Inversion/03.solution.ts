interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class LightBulb implements Switchable {
  turnOn() {
    // Implementation for turning on the light bulb
  }

  turnOff() {
    // Implementation for turning off the light bulb
  }
}

class Switch {
  private device: Switchable;

  constructor(device: Switchable) {
    this.device = device;
  }

  operate() {
    // Operate the switch to turn the device on or off
    this.device.turnOn();
  }
}
