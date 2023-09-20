const car = {
    brand: 'Mitsubishi',
    model: 'Outlander',
    year: 2015,
    avgSpeed: 200,
    fuelCapacity: 60,
    fuelConsumption: 7.5,
    drivers: [
        'Anna'
    ],
    showInfo() {
        for (const key in car) {
            if(typeof this[key] !== 'function') {
                console.log(`Value of ${key} is ${this[key]}`);
            }
        }
    },
    addDriver(driverName) {
        this.drivers.push(driverName)
    },
    checkDriver(driverName) {
        console.log(this.drivers.includes(driverName))
    },
    calcTimeFuel(distance) {
        const time = distance/this.avgSpeed;
        const fuel = distance/100*this.fuelConsumption;
        console.log(`For ${distance}km distance: ${time} hours to drive and ${fuel}L of fuel.`);
    },

}
// car.addDriver('Oleg');
// // console.log(car.checkDriver('Oleg'));
// car.showInfo();
// car.calcTimeFuel(1000);