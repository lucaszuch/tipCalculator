//All Selectors
const tipTotal = document.querySelector("#tipTotal");
const billTotal = document.querySelector("#billTotal");
const totalPerson = document.querySelector("#totalPerson");

//Buttons
const getTipDown = document.getElementById("tipMinus");
const tipInput = document.getElementById("tipInput");
const getTipUp = document.getElementById("tipPlus");
const getPeopleDown = document.getElementById("peopleMinus");
const peopleInput = document.getElementById("peopleInput");
const getPeopleUp = document.getElementById("peoplePlus");
const calculate = document.querySelector('#tip-btn');

//All Functions
const getValues = () => {
  //Import inputs
  const bill = Number(document.getElementById("billInput").value);
  const tip = document.getElementById("tipInput").value;
  const persons = document.getElementById("peopleInput").value;
  //Tip logic
  const tipvalue = bill * (tip/100);
  const finalBill = bill + tipvalue;
  const perPerson = (bill + tipvalue)/persons;
  //Replaces the results
  tipTotal.value = tipvalue;
  billTotal.value = finalBill;
  totalPerson.value = perPerson;
}

//Handles Calculate
calculate.addEventListener('click', (event) => {
  event.preventDefault();
  getValues();
})

//Handles increasing/decreasing tips
getTipDown.addEventListener('click', (event) => {
  event.preventDefault();
  const currentValue = Number(tipInput.value) || 0;
  tipInput.value = currentValue - 1;
})

getTipUp.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(tipInput.value) || 0;
  tipInput.value = currentValue + 1;
})

//Handles increasing/decreasing people
getPeopleDown.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(peopleInput.value) || 0;
  peopleInput.value = currentValue - 1;
})

getPeopleUp.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(peopleInput.value) || 0;
  peopleInput.value = currentValue + 1;
})