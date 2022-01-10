var carList = document.getElementById("cars");
let cars = [
  "Nissan",
  "Toyota",
  "VW",
  "Ford",
  "Opel",
  "Dodge",
  "BMW",
  "Honda",
  "Mercedes",
  "Hyundai",
];

countCars = (data) => {
  var count = document.getElementById("counter");

  if (data) {
    count.innerHTML = "There are a total of " + data + " cars";
  } else {
    count.innerHTML = "No cars";
    document.getElementById("name").style.display = "none";
  }
};

getCars = () => {
  var data = "";
  if (cars.length > 0) {
    for (i = 0; i < cars.length; i++) {
      data += "<tr>";
      data += "<td>" + cars[i] + "</td>";
      data += '<td><button onclick="editCar(' + i + ')">Edit</button></td>';
      data += '<td><button onclick="deleteCar(' + i + ')">Delete</button></td>';
      data += "</tr>";
    }
  }

  countCars(cars.length);
  return (carList.innerHTML = data);
};

addCar = () => {
  var carAdded = document.getElementById("add-name");
  var car = carAdded.value;

  if (car) {
    cars.push(car.trim());
    carAdded.value = "";
    getCars();
  }
};

editCar = (item) => {
  var editCar = document.getElementById("edit-name");
  editCar.value = cars[item];
  document.getElementById("editForm").style.display = "block";

  document.getElementById("saveEdit").onsubmit = () => {
    var car = editCar.value;
    if (car) {
      cars.splice(item, 1, car.trim());
      getCars();
      closeInput();
    }
  };
};

deleteCar = (item) => {
  cars.splice(item, 1);
  getCars();
};

getCars();

closeInput = () => {
  document.getElementById("editForm").style.display = "none";
};
