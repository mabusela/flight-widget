const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "JOHANESSBURG",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME",
  },
  {
    time: "12:39",
    destination: "CAPE TOWN",
    flight: "CL 203",
    gate: "C 01",
    remarks: "CANCELLED",
  },
  {
    time: "15:00",
    destination: "BLOEMFONTEIN",
    flight: "OX 203",
    gate: "A 332",
    remarks: "DELAYED",
  },
  {
    time: "14:11",
    destination: "DURBAN",
    flight: "KS 208",
    gate: "C 15",
    remarks: "ON TIME",
  },
  {
    time: "14:11",
    destination: "POLOKWANE",
    flight: "US 255",
    gate: "AS 15",
    remarks: "CANCELLED",
  },
];

const destinations = ["GQEBERHA", "GEORGE", "MBOMBELA", "KIMBERLEY"];

const remarks = ["ON TIME", "DELAYED", "CANCELLED"];

let hour = 15;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");
        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }
      tableRow.appendChild(tableCell);
    }

    tableBody.append(tableRow);
  }
}

populateTable();

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789";

  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime() {
  let displayHour = hour;

  if (hour < 24) {
    hour++;
  }

  if (hour >= 24) {
    hour = 1;
  }

  if (hour < 10) {
    displayHour = "0" + hour;
  }

  return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();
}

function shuffleUP() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomNumber() +
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomNumber() +
      generateRandomNumber(),
    gate:
      generateRandomLetter() +
      " " +
      generateRandomNumber() +
      generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });
  tableBody.textContent = "";
  populateTable();
}

setInterval(shuffleUP, 8000);
