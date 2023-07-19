# Lekce 04
# Doporučené úložky na doma

<strong>Úkol č. 1: Formátovač data</strong>

Vytvořte stránku, která se zeptá uživatele na den, měsíc a rok.

Jakmile uživatel zadá patřičné údaje, vypište do stránky datum v tomto formátu.
28.04.2021

Vypisujte datum do webové stránky jako následující HTML kód.

<p class="date">
  <span class="day">28</span>. <span class="month">4</span>.
  <span class="year">2021</span>
</p>

<strong>Úkol č. 2: Fahrenheit vs. Celsius</strong>

Pokud pečete podle anglických receptů, často se po vás požaduje rozehřát troubu na uvedenou teplotu. Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.

Nastudujte si na České Wikipedii, jak se převádějí stupně Fahrenheita na stupně Celsia, a vytvořte webovou stránku, která takový převod provede. Vaše stránka se zeptá uživatele na teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia.

<strong>Úkol č. 3: Letenka</strong>

Vytvořte webovou stránku s JavaScriptem a do kódu vašeho programu vložte následující objekt představující reálná data o letu z Prahy do Barcelony.

<p>
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
</p>

Proveďte následující:

Vypište do stránky název startovní a cílové země.
Pomocí destrukturování uložte do separátní proměnné objekt udávající maximální rozměry zavazadel.
Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém do stránky.
Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.
Pokud máte chuť, malinko stránku nastylujte, aby se uživatel v informacích vyznal.

<strong>Used methods: </strong>
Object.keys(), Object.values()
Array.push(), Array.indexOf(), Array.slice()
Number.isInteger(), String.padStart(), String.match()
Regular expressions

