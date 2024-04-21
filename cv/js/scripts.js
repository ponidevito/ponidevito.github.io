// Custom Scripts
// Custom scripts

// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) => child.classList.remove("accordion__item-active"));
        parent.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();

fetch('/articles/api/get-coins-prices/')
.then((response) => {
return response.json();
})
.then((data) => {

for (let coin of data) {
let c = document.querySelector(`.js-${coin.symbol.toLowerCase()}-cur-price`)
if(c !== null) {
  var currentPrice = `${coin.current_price.toFixed(2)}$`
  var yearReturn = (coin.current_price - coin.year_ago_price) / coin.year_ago_price * 100
  var monthReturn = (coin.current_price - coin.month_ago_price) / coin.month_ago_price * 100
  document.querySelector(`.js-${coin.symbol.toLowerCase()}-cur-price`).innerHTML = currentPrice
  document.querySelector(`.js-${coin.symbol.toLowerCase()}-month-return`).innerHTML = monthReturn.toFixed(2) + "%"
  document.querySelector(`.js-${coin.symbol.toLowerCase()}-year-return-price`).innerHTML = yearReturn.toFixed(2) + "%"
} 
}

});

//  binance-coin
fetch('/articles/api/long-term-forecast/?instrument=binance-coin')
.then((response) => {
return response.json();
})
.then((data) => {

const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];
var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
</tr>`
}).join('');
document.querySelector('.js-current-year-bnb').innerHTML = currentYearForecastTable;



for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-bnb-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});

    // cardano
    fetch('/articles/api/long-term-forecast/?instrument=cardano')
.then((response) => {
return response.json();
})
.then((data) => {


    const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];
var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-ada').innerHTML = currentYearForecastTable;

for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-ada-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});

  // ripple
fetch('/articles/api/long-term-forecast/?instrument=xrp-usd')
.then((response) => {
return response.json();
})
.then((data) => {


    const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];

var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-xrp').innerHTML = currentYearForecastTable;

for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-xrp-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});

    // dogecoin
    fetch('/articles/api/long-term-forecast/?instrument=dogecoin')
.then((response) => {
return response.json();
})
.then((data) => {


    const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];

var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-doge').innerHTML = currentYearForecastTable;

for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-doge-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});

    // polkadot
    fetch('/articles/api/long-term-forecast/?instrument=polkadot')
.then((response) => {
return response.json();
})
.then((data) => {


const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];

var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-dot').innerHTML = currentYearForecastTable;


for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-dot-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});

    // Litecoin (LTC)
    fetch('/articles/api/long-term-forecast/?instrument=ltc-usd')
.then((response) => {
return response.json();
})
.then((data) => {


    const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];

var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-ltc').innerHTML = currentYearForecastTable;


for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-ltc-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});


    // Stellar (XLM)
    fetch('/articles/api/long-term-forecast/?instrument=stellar')
.then((response) => {
return response.json();
})
.then((data) => {


const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];

var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-xlm').innerHTML = currentYearForecastTable;

for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-xlm-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});
    
    // Uniswap (UNI)
          fetch('/articles/api/long-term-forecast/?instrument=uniswap')
.then((response) => {
return response.json();
})
.then((data) => {


const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];

var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-uni').innerHTML = currentYearForecastTable;

for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-uni-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});


    // Tron (TRX)


fetch('/articles/api/long-term-forecast/?instrument=tron')
.then((response) => {
return response.json();
})
.then((data) => {

const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];
var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-trx').innerHTML = currentYearForecastTable;


for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-trx-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});
    

    // IOTA (MIOTA)
          fetch('/articles/api/long-term-forecast/?instrument=iota')
.then((response) => {
return response.json();
})
.then((data) => {

const monthNames = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"];

var numberFormat = new Intl.NumberFormat();

const currentYearForecast = data.data.pricePredictionByMonth;
const currentYearForecastTable = currentYearForecast.map(el => {
return `<tr>
<td data-label="Ай">${monthNames[el.month - 1]}&nbsp;${el.year}</td>
<td data-label="Минималды баға">$${numberFormat.format(el.min_value)}</td>
<td data-label="Мамыр">$${numberFormat.format(el.max_value)}</td>
<td data-label="Маусым">$${numberFormat.format(el.average_value)}</td>
 </tr>`
}).join('');
document.querySelector('.js-current-year-miota').innerHTML = currentYearForecastTable;

for (let y of data.data.pricePredictionByYears) {
let pricesInText = document.querySelectorAll('.js-miota-price-end-' + y.year);

if (pricesInText.length > 0) {
    pricesInText.forEach((el) => {
        el.innerHTML = numberFormat.format(y.end_year);
    })
}
}
});
