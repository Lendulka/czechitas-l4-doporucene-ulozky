// LETENKA

const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
        departure: 8400,
        return: 0,
        total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
        code: 'CZ',
        name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
        code: 'ES',
        name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
        1: 34.95,
        2: 69.91,
    },
    baglimit: {
        hand_width: 20,
        hand_height: 40,
        hand_length: 55,
        hand_weight: 10,
        hold_width: 81,
        hold_height: 119,
        hold_length: 119,
        hold_dimensions_sum: 319,
        hold_weight: 20,
    },
    availability: {
        seats: 2,
    },
    conversion: {
        EUR: 36,
    },
    quality: 66.66659,
}

const displayFlight = () => {
    const timetableElm = document.querySelector(".timetable")
    timetableElm.innerHTML += `
        <div class="flight-from">
            <img src="plane.png" alt="plane" width="62" height="62">
            <p>Flight from: ${flight.countryFrom.name}</p>
        </div>
        <div class="flight-to">
            <img class="plane-rotate" src="plane.png" alt="plane" width="62" height="62">
            <p>Flight to: ${flight.countryTo.name}</p>
        </div>
    `

    const keys = Object.keys(flight.baglimit)
    const values = Object.values(flight.baglimit)
    console.log(keys)
    console.log(values)

    const indicesKeys = []
    let index = []
    let indexKey

    keys.forEach(oneKey => {
        const regex = /hand\w+/g
        if (oneKey.match(regex)) {
            indicesKeys.push(oneKey)
            indexKey = keys.indexOf(oneKey)
            index.push(indexKey)
        }
    })

    let indicesValues = []
    let value

    for (let n = 0; n < index.length; n++) {
        value = values[index[n]]
        indicesValues.push(value)
    }

    console.log(indicesKeys)
    console.log(indicesValues)
    console.log(index)

    let x = 0
    let y = 0
    const tableBaggageElm = document.querySelector(".table-baggage-limits")

    while (x < indicesKeys.length) {
        while (y < indicesValues.length) {
            tableBaggageElm.innerHTML += `
                <tr>
                    <td class="col-style">${indicesKeys[x].slice(indicesKeys[x].indexOf('_') + 1)}</td>
                    <td>${indicesValues[y]} cm</td>
                </tr>
        
            `
            x++
            y++
        }
    }

    const tablePriceElm = document.querySelector(".table-bags-price")

    tablePriceElm.innerHTML += `
        <tr>
            <td class="col-style">1</td>
            <td class="col-style-width">${Math.ceil(flight.bags_price[1] * flight.conversion.EUR)} CZK</td>
        </tr>
        <tr>
            <td class="col-style">2</td>
            <td col-style-width>${Math.ceil(flight.bags_price[2] * flight.conversion.EUR)} CZK</td>
        </tr>
    `
}

displayFlight()






