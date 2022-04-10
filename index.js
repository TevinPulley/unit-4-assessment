const express = require("express");
const cors = require("cors");
// const form = document.querySelector("form");
const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// const addColor = () =>
//   axios.post(baseURL, body).then(housesCallback).catch(errCallback);

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way.",
    "A lifetime friend shall soon be made.",
    "A new perspective will come with the new year.",
    "A smooth long journey! Great expectations.",
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});
app.get("/api/encouragment", (req, res) => {
  const encouragment = [
    "You can do it!",
    "Keep moving forward! Good things take time.",
    "BIG MONEY AHEAD!",
  ];

  let randomIndex = Math.floor(Math.random() * encouragment.length);
  let randomEncouragment = encouragment[randomIndex];

  res.status(200).send(randomEncouragment);
});

app.get("/api/colorList", (req, res) => {
  const colorList = ["Thats a great color!"];

  res.status(200).send(colorList);
});

app.get("/api/color", (req, res) => {
  const color = ["Blue", "Red", "Orange", "Pink", "Green"];

  let randomIndex = Math.floor(Math.random() * color.length);
  let randomColor = color[randomIndex];

  res.status(200).send(randomColor);
});

app.get("/api/number", (req, res) => {
  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  let randomIndex = Math.floor(Math.random() * number.length);
  let randomNumber = number[randomIndex];

  res.status(200).send(randomNumber);
});

////////////////////////////////////////// Car Section ///////////////////////////////////////////////////////////////

// const baseURL = `http://localhost:4004/api/car`;

// const carCallback = ({ data: car }) => displaycar(car);
// const errCallback = (err) => console.log(err);

// const getAllCars = () =>
//   axios.get(baseURL).then(carCallback).catch(errCallback);
// const createCar = (body) =>
//   axios.post(baseURL, body).then(carCallback).catch(errCallback);
// const deleteCar = (id) =>
//   axios.delete(`${baseURL}/${id}`).then(carCallback).catch(errCallback);
// const updateCar = (id, type) =>
//   axios.put(`${baseURL}/${id}`, { type }).then(carCallback).catch(errCallback);

// function submitHandler(e) {
//   e.preventDefault();

//   let car = document.querySelector("#car");
//   let price = document.querySelector("#price");
//   let imageURL = document.querySelector("#img");

//   let bodyObj = {
//     car: car.value,
//     price: price.value,
//     imageURL: imageURL.value,
//   };

//   createCar(bodyObj);

//   car.value = "";
//   price.value = "";
//   imageURL.value = "";
// }

// function createCarCard(car) {
//   const carCard = document.createElement("div");
//   carCard.classList.add("car-card");

//   carCard.innerHTML = `<img alt='car cover image' src=${car.imageURL} class="car-cover-image"/>
//   <p class="carName">${car.name}</p>
//   <div class="btns-container">
//       <button onclick="updateCar(${car.id}, 'minus')">-</button>
//       <p class="car-price">$${car.price}</p>
//       <button onclick="updateCar(${car.id}, 'plus')">+</button>
//   </div>
//   <button onclick="deleteCar(${car.id})">delete</button>
//   `;

//   carContainer.appendChild(carCard);
// }

// function displayCars(arr) {
//   carsContainer.innerHTML = ``;
//   for (let i = 0; i < arr.length; i++) {
//     createCarCard(arr[i]);
//   }
// }

// form.addEventListener("submit", submitHandler);

// getAllCars();

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// const {
//   getCar,
//   deleteCar,
//   createCar,
//   updateCar,
// } = require("./controller");

// app.get(`/api/car`, getCar);
// app.post(`/api/car`, createCar);
// app.delete(`/api/car/:id`, deleteCar);
// app.put(`/api/car/:id`, updateCar);

// app.listen(4004, () => console.log("Server running on port 4004"));
//////////////////////////////////////////////////////////////////////////////////////////////////////

// function submitHandler(e) {
//   e.preventDefault();

//   let color = document.querySelector("#color");

//   let bodyObj = {
//     color: color.value,
//   };

//   addColor(bodyObj);

//   color.value = "";
// }

// function createNewColor(colors) {
//   const newColor = document.createElement("div");
//   newColor.classList.add("new-color");
// }

app.listen(4000, () => console.log("Server running on 4000"));
