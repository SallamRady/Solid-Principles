class LightBulb {
  turnOn() {
    // Implementation for turning on the light bulb
  }

  turnOff() {
    // Implementation for turning off the light bulb
  }
}

class Switch {
  //high-level module
  private bulb: LightBulb;

  constructor() {
    //! Dependancy here
    //! We should convert this depedancy from (high module to low module) to abstraction
    //TODO::see ./03.solution.ts
    this.bulb = new LightBulb(); //low-level module
  }

  operate() {
    // Operate the switch to turn the light on or off
    this.bulb.turnOn();
  }
}
