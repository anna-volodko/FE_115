"use strict";

var car = {
  brand: 'Mitsubishi',
  model: 'Outlander',
  year: 2015,
  avgSpeed: 200,
  fuelCapacity: 60,
  fuelConsumption: 7.5,
  drivers: ['Anna'],
  showInfo: function showInfo() {
    for (var key in car) {
      if (typeof this[key] !== 'function') {
        console.log("Value of ".concat(key, " is ").concat(this[key]));
      }
    }
  },
  addDriver: function addDriver(driverName) {
    this.drivers.push(driverName);
  },
  checkDriver: function checkDriver(driverName) {
    console.log(this.drivers.includes(driverName));
  },
  calcTimeFuel: function calcTimeFuel(distance) {
    var time = distance / this.avgSpeed;
    var fuel = distance / 100 * this.fuelConsumption;
    console.log("For ".concat(distance, "km distance: ").concat(time, " hours to drive and ").concat(fuel, "L of fuel."));
  }
}; // car.addDriver('Oleg');
// // console.log(car.checkDriver('Oleg'));
// car.showInfo();
// car.calcTimeFuel(1000);