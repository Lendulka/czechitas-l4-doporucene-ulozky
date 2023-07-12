// FAHRENHEIT vs. CELSIUS

// C = (5*(F-32))/9
// C...teplota ve stupních Celsia
// F...teplota ve stupních Fahrenheita

const converseToCelsius = (e) => {
    e.preventDefault()
    const fahrenheitValue = document.querySelector("#fahrenheit").value
    let celsiusValue = Math.round((5 * (fahrenheitValue - 32)) / 9)
    const celsiusElm = document.querySelector("#celsius")
    celsiusElm.innerHTML = `
        <p>
            <span class="bold-color-1">Stupňů Celsia:</span> <span class="bold-color-2">${celsiusValue} (&#176C)</span>
        </p>
    `
}

const convertFormElm = document.querySelector("#conversion-form")
convertFormElm.addEventListener("submit", converseToCelsius)

