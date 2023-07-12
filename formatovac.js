// FORMÁTOVAČ DATA

// všechny - prázdné, integer
// day - od 1 do 31
// month - od 1 do 12
// year - 4 místa

let dayInput = prompt("Enter a day.", "dd")

while (dayInput === "" || dayInput === " " || !(Number.isInteger(Number(dayInput)) &&
    (Number(dayInput) >= 1 && Number(dayInput) <= 31))) {
    alert("That´s not a valid day!")
    dayInput = prompt("Enter another day.")
}

let monthInput = prompt("Enter a month.", "mm")

while (monthInput === "" || monthInput === " " || !(Number.isInteger(Number(monthInput)) &&
    (Number(monthInput) >= 1 && Number(monthInput) <= 12))) {
    alert("That´s not a valid month!")
    monthInput = prompt("Enter another month.")
}

let yearInput = prompt("Enter a year.", "yyyy")

while (yearInput === "" || yearInput === " " || !(Number.isInteger(Number(yearInput)) &&
    yearInput.length === 4)) {
    alert("That´s not a valid year!")
    yearInput = prompt("Enter another year.")
}

const contDateElm = document.querySelector(".container-date")
contDateElm.innerHTML += `
    <p class="date">
        <span class="day">${dayInput.padStart(2, "0")}</span>. <span class="month">${monthInput.padStart(2, "0")}</span>.
        <span class="year">${yearInput}</span>
    </p>
`



