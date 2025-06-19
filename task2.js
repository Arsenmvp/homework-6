let car = {};
car.model = "Toyota";
car.speed = 120;
car.run = function() {
  console.log(`${car.model} їде зі швидкістю ${car.speed}`);
};
car.stop = function() {
  console.log(`${car.model} зупинилася`);
};

