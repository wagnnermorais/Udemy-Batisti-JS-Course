const arr = [1, 2, 3];
const array = [4, 5, 6];

const spreadArray = [...arr, ...array];

// console.log(spreadArray);

const newSpreadArray = [0, ...arr, 4];

// console.log(newSpreadArray);

const carName = {
  name: "Gol",
};

const carBrand = {
  brand: "VW",
};

const otherInfos = {
  km: 56778,
  price: 22000,
};

const carTest = { carName, carBrand, otherInfos };
const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);
console.log(carTest);
